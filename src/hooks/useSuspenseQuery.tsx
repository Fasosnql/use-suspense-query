import { useContext } from 'react';
import ApolloClientContext from '../context/Context';
import { decorateWithPromise } from '../decorators/decorateWithPromise';
import { manageValueInStore } from '../promise-manager/manage-value-in-store';
import { decorateWithId } from '../decorators/decorateWithId';
import { throwPromise } from '../promise-manager/throw-promise';
import type { OperationVariables } from '@apollo/client';
import { QueryDocument, QueryOptions, UseSuspendedQuery } from '../types/types';

const compose = require('ramda/src/compose');

export function useSuspenseQuery<
  TData,
  TVariables = OperationVariables
>(
  query: QueryDocument<TData, TVariables>,
  options?: QueryOptions<TData, TVariables>
): UseSuspendedQuery<TData, TVariables> {
  const apolloClient = useContext(ApolloClientContext);

  if (!apolloClient) {
    throw new Error('[useSuspendedQuery] Invalid call. You forgot to pass the client to the SuspendedQueryProvider')
  }

  const [id, promise, result] = compose(
    decorateWithPromise,
    manageValueInStore,
    decorateWithId
  )(apolloClient, query, options);

  if (!result) {
    throwPromise(promise, id);
  }

  return result
}
