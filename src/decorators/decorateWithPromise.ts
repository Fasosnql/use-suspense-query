export function decorateWithPromise([
  error,
  { apolloClient, id, options, query },
  result,
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
      fetchPolicy: options?.variables || 'cache-first',
    }),
  ];
}
