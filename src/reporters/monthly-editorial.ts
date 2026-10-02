import Anthropic from '@anthropic-ai/sdk';
import { betaZodOutputFormat } from '@anthropic-ai/sdk/helpers/beta/zod';
import { z } from 'zod';
import { DEFAULT_MODEL } from '../analyzer/claude.js';
import { getAnthropicApiKey, getOptionalEnv } from '../utils/env.js';
import { getPrimaryAnalysis } from '../utils/analysis.js';
import type { ChangelogEntry } from '../types/index.js';

export const MonthlyEditorialSchema = z.object({
  headline: z.string().describe('今月を一言で表す見出し（30字以内）'),
  overview: z.string().describe('今月の全体像（3-4文）'),
  topics: z
    .array(
      z.object({
        title: z.string().describe('トピックの見出し'),
        body: z.string().describe('トピックの解説（2-4文）。なぜ重要か、誰に関係するかを含める'),
        entryIds: z.array(z.string()).describe('このトピックに関係する記事のID'),
      })
    )
    .describe('今月の主なトピック（3-5個）'),
  merchantPoints: z.array(z.string()).describe('マーチャント向けのポイント（3つ程度、各1文）'),
  developerPoints: z
    .array(z.string())
    .describe('開発者・パートナー向けのポイント（3つ程度、各1文）'),
});

export type MonthlyEditorial = z.infer<typeof MonthlyEditorialSchema> & {
  model: string;
  generatedAt: string;
};

const SYSTEM_PROMPT = `あなたは日本のShopifyコミュニティ向けに、月刊のニュースレター「月間 Shopify Changelogs」を編集するエディターです。
読者は、Shopifyでストアを運営するマーチャントと、アプリ・テーマを開発する開発者・パートナーです。特定の企業やアプリに偏らず、中立的に書いてください。

ユーザーが渡すその月のShopify changelogの一覧（日本語タイトル・要約・優先度）をもとに、次を書いてください。
- 見出し: 今月を一言で表す
- 全体像: 今月の変更の傾向
- 主なトピック: 関連する記事をまとめ、背景と影響を解説する。🚨 要対応 の記事は必ずいずれかのトピックで触れる
- 立場別のポイント: マーチャント向け、開発者・パートナー向けにそれぞれ

事実は渡された記事の内容だけに基づき、推測で日付や数値を補わないでください。です・ます調で書いてください。`;

const LEVEL_LABELS: Record<string, string> = { now: '🚨要対応', check: '👀注目' };

/**
 * 月の記事一覧から、編集記事（見出し・全体像・トピック）を Claude に書かせる
 */
export async function generateMonthlyEditorial(
  entries: ChangelogEntry[],
  monthLabel: string
): Promise<MonthlyEditorial> {
  const client = new Anthropic({ apiKey: getAnthropicApiKey() });
  const model = getOptionalEnv('ANALYSIS_MODEL', DEFAULT_MODEL);

  const list = entries
    .map((entry) => {
      const a = getPrimaryAnalysis(entry);
      const levels = Object.entries(entry.priority ?? {})
        .filter(([, p]) => p.level !== 'info')
        .map(([key, p]) => `${key}:${LEVEL_LABELS[p.level]}`)
        .join(' ');
      return [
        `- id: ${entry.id}`,
        `  タイトル: ${a?.titleJa ?? entry.title}`,
        `  ソース: ${entry.source}`,
        levels && `  優先度: ${levels}`,
        `  要約: ${a?.summarizedJa ?? ''}`,
        a?.actionJa && `  対応: ${a.actionJa}`,
      ]
        .filter(Boolean)
        .join('\n');
    })
    .join('\n');

  const message = await client.beta.messages.parse({
    model,
    max_tokens: 16000,
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    output_config: { effort: 'medium', format: betaZodOutputFormat(MonthlyEditorialSchema) },
    system: SYSTEM_PROMPT,
    messages: [
      { role: 'user', content: `${monthLabel}の記事一覧（${entries.length}件）\n\n${list}` },
    ],
  });

  if (message.stop_reason === 'refusal' || !message.parsed_output) {
    throw new Error(`Failed to generate editorial (stop_reason: ${message.stop_reason})`);
  }

  const knownIds = new Set(entries.map((e) => e.id));
  const editorial = message.parsed_output;
  return {
    ...editorial,
    // 存在しない記事IDは除く
    topics: editorial.topics.map((t) => ({
      ...t,
      entryIds: t.entryIds.filter((id) => knownIds.has(id)),
    })),
    model: message.model,
    generatedAt: new Date().toISOString(),
  };
}
