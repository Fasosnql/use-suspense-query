import type { OperationVariables } from '@apollo/client';
import { Client, QueryDocument, QueryOptions } from '../types/types';

export function decorateWithPromise<TData, TVariables = OperationVariables>([
  error,
  { apolloClient, id, options, query },
  result,
]: [
  Error,
  {
    apolloClient: Client;
    id: string | number;
    options: QueryOptions<TData, TVariables>;
    query: QueryDocument<TData, TVariables>;
  },
  TData
]) {
  if (error) {
    console.error(error);
    return [null, null, null];
  }

  if (result) {
    return [null, null, result];
  }

  return [
    id,
    apolloClient.query({
      query,
      variables: options?.variables || {},
      fetchPolicy: options?.fetchPolicy || 'cache-first',
    }),
  ];
}
