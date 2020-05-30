export interface QueryStore {
  id: string;
  status: string;
  result: any;
}

export const queriesStore: QueryStore[] = [];