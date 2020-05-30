import uuidv5 from 'uuid/dist/v5';

const uuidNamespace = uuidv5('suspense.queries.utils', uuidv5.DNS);
export function decorateWithId(apolloClient, query, options) {
  return {apolloClient, query, options, id: uuidv5(`${query?.loc?.source?.body},${JSON.stringify(options?.variables)},${options?.uniqueKey}`, uuidNamespace)};
}