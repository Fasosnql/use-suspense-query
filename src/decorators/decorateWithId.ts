import type {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
} from '@apollo/client';
import { QueryDocument, QueryOptions } from '../types/types';

const uuidv5 = require('uuid/v5');

const uuidNamespace = uuidv5('suspense.queries.utils', uuidv5.DNS);

export function decorateWithId<TData, TVariables = OperationVariables>(
  apolloClient: ApolloClient<NormalizedCacheObject>,
  query: QueryDocument<TData, TVariables>,
  options: QueryOptions<TData, TVariables>
) {
  return {
    apolloClient,
    query,
    options,
    id: uuidv5(
      `${query?.loc?.source?.body},${JSON.stringify(options?.variables)},${
        options?.uniqueKey
      }`,
      uuidNamespace
    ),
  };
}
