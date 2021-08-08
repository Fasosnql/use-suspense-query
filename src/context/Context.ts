import * as React from 'react';
import type { ApolloClient, NormalizedCacheObject } from '@apollo/client';

export default React.createContext(
  null as never as ApolloClient<NormalizedCacheObject>
);
