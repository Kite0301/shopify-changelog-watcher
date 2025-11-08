import fs from 'fs/promises';
import path from 'path';
import { DataStore, DataStoreSchema } from '../types/index.js';

const DATA_DIR = path.join(process.cwd(), 'data');
const ENTRIES_FILE = path.join(DATA_DIR, 'entries.json');

/**
 * データストアを読み込む
 */
export async function loadDataStore(): Promise<DataStore> {
  try {
    const content = await fs.readFile(ENTRIES_FILE, 'utf-8');
    const data = JSON.parse(content);
    return DataStoreSchema.parse(data);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      // ファイルが存在しない場合は空のデータストアを返す
      return {
        lastUpdated: null,
        entries: [],
      };
    }
    throw error;
  }
}

/**
 * データストアを保存する
 */
export async function saveDataStore(dataStore: DataStore): Promise<void> {
  // データディレクトリが存在しない場合は作成
  await fs.mkdir(DATA_DIR, { recursive: true });

  // 保存前にバリデーション
  const validated = DataStoreSchema.parse(dataStore);

  // 整形して保存
  await fs.writeFile(ENTRIES_FILE, JSON.stringify(validated, null, 2), 'utf-8');
}

/**
 * エントリーIDを生成する
 */
export function generateEntryId(source: string, link: string): string {
  // URLからユニークな部分を抽出してIDを生成
  const url = new URL(link);
  const pathPart = url.pathname.split('/').filter(Boolean).join('-');
  return `${source}-${pathPart}`.toLowerCase();
}
