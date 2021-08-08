import type {
  ApolloClient,
  NormalizedCacheObject,
  OperationVariables,
  TypedDocumentNode,
  QueryOptions as ApolloQueryOptions,
} from '@apollo/client';
import type { DocumentNode } from 'graphql';

export type QueryOptions<
  TData = any,
  TVariables = OperationVariables
> = ApolloQueryOptions<TData, TVariables> & { uniqueKey?: string };

export type Client = ApolloClient<NormalizedCacheObject>;
export type QueryDocument<TData = any, TVariables = OperationVariables> =
  | DocumentNode
  | TypedDocumentNode<TData, TVariables>;

export type UseSuspendedQuery<
  TData = any,
  TVariables = OperationVariables
> = TData;
