export interface QueryStore<TData = any> {
  id: string | number;
  status: string;
  result: TData;
}

export const queriesStore: QueryStore[] = [];
