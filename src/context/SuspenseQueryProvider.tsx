import * as React from 'react';
import ApolloClientContext from './Context';

export function SuspenseQueryProvider({ client, children }) {
  return (
    <ApolloClientContext.Provider value={client}>
      {children}
    </ApolloClientContext.Provider>
  );
}
