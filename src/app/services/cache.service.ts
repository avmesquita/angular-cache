import { Injectable } from '@angular/core';
import { ICacheItem } from '../interfaces/icache-item.interface';
import { db } from '../models/cache-db.model';

@Injectable({ providedIn: 'root' })
export class CacheService {

  // 📝 SALVAR NO CACHE
  async set(key: string, data: any, ttlSeconds: number = 3600): Promise<void> {
    const item: ICacheItem = {
      key: key,
      value: data,
      timestamp: Date.now() + ttlSeconds * 1000 // Expira em X segundos
    };
    // O .put() do Dexie insere ou atualiza (UPSERT)
    await db.cache.put(item); 
  }

  // 🔎 OBTER DO CACHE
  async get(key: string): Promise<any | null> {
    const item = await db.cache.get(key);

    if (!item) {
      return null;
    }

    // Checagem de Expiração (TTL)
    if (Date.now() > item.timestamp) {
      // Item expirou, remova e retorne null
      await db.cache.delete(key);
      return null;
    }

    return item.value;
  }

  // 🗑️ LIMPAR CACHE
  async clear(key: string): Promise<void> {
    await db.cache.delete(key);
  }
}