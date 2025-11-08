import { config } from 'dotenv';

// .envファイルを読み込み
config();

/**
 * 環境変数を取得する（必須）
 */
export function getRequiredEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Environment variable ${key} is required but not set`);
  }
  return value;
}

/**
 * 環境変数を取得する（オプショナル）
 */
export function getOptionalEnv(key: string, defaultValue = ''): string {
  return process.env[key] || defaultValue;
}

/**
 * Anthropic API キーを取得
 */
export function getAnthropicApiKey(): string {
  return getRequiredEnv('ANTHROPIC_API_KEY');
}
