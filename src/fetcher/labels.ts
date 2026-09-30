/**
 * 開発者向けchangelogの記事ページから、Shopify公式の「Action required」ラベルの有無を取得する
 * RSSにはこのラベルが含まれないため、記事ページのHTMLを見る
 * （ラベルは `?action_required=true` へのリンクとして表示されている）
 *
 * @returns ラベルがあれば true、なければ false、ページを取得できなければ undefined
 */
export async function fetchOfficialActionRequired(link: string): Promise<boolean | undefined> {
  try {
    const response = await fetch(link, { signal: AbortSignal.timeout(20_000) });
    if (!response.ok) return undefined;
    const html = await response.text();
    return html.includes('action_required=true');
  } catch {
    return undefined;
  }
}
