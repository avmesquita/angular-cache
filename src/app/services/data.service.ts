// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CacheService } from './cache.service';

@Injectable({ providedIn: 'root' })
export class DataService {
  constructor(private http: HttpClient, private cacheService: CacheService) {}

  async getProducts(forceRefresh: boolean = false): Promise<any> {
    const cacheKey = 'products_list';

    // 1. Checar o Cache
    if (!forceRefresh) {
      const cachedData = await this.cacheService.get(cacheKey);
      if (cachedData) {
        console.log('Dados recuperados do IndexedDB!');
        return cachedData;
      }
    }

    // 2. Se não estiver no Cache ou expirou, chamar a API
    const apiData = await this.http.get('/api/products').toPromise();
    
    // 3. Salvar os dados frescos no Cache com um TTL de 1 hora (3600 segundos)
    await this.cacheService.set(cacheKey, apiData, 3600);
    
    return apiData;
  }
}
