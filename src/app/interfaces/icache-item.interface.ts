export interface ICacheItem {
    key: string; // Chave para identificar o item de cache
    value: any; // O dado a ser armazenado (pode ser qualquer objeto/JSON)
    timestamp: number; // Para TTL/expiração   
}
