type FetchPolicy = 'cache-first' | 'network-only' | 'cache-only' | 'no-cache' | 'standby';

export interface Options {
  variables?: any;
  fetchPolicy?: FetchPolicy;
  uniqueKey?: string;
}