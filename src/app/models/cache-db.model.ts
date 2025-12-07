// cache.db.ts
import Dexie from 'dexie';
import { ICacheItem } from '../interfaces/icache-item.interface';
import { IAuth } from '../interfaces/iauth.interface';

export class CacheDB extends Dexie {
  // Cria uma tabela genérica para o cache
  cache!: Dexie.Table<ICacheItem, string>; 
  auth!: Dexie.Table<IAuth, string>; 

  constructor() {
    super('ApplicationCacheDB');
    this.version(1).stores({
      // 'key' é a chave primária; & para garantir que seja única
      cache: '&key, timestamp',
      auth: '&username'
    });
  }
}

export const db = new CacheDB();
