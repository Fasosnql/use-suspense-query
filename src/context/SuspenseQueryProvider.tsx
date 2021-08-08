import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import * as React from 'react';
import ApolloClientContext from './Context';

export interface SuspenseQueryProviderProps {
  client: ApolloClient<NormalizedCacheObject>
  children: React.ReactNode
}

export function SuspenseQueryProvider({ client, children }: SuspenseQueryProviderProps) {
  return (
    <ApolloClientContext.Provider value={client}>
      {children}
    </ApolloClientContext.Provider>
  );
}
