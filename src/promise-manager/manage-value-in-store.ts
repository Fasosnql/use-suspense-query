import { queriesStore } from './queries-store';

export function manageValueInStore(args: {
  id: string | number;
}): [boolean | Error, any, any?] {
  // @ts-ignore
  const indexQueryInStore = queriesStore.findIndex(
    (query) => query.id === args.id
  );
  const queryInStore = queriesStore[indexQueryInStore];

  if (queryInStore && queryInStore.status !== 'pending') {
    queriesStore.splice(indexQueryInStore, 1);
    if (queryInStore.status === 'error') {
      return [new Error(queryInStore.result.toString()), {}];
    } else if (queryInStore.status === 'success') {
      return [false, {}, queryInStore.result];
    }
  } else {
    queriesStore.push({
      id: args.id,
      status: 'pending',
      result: null,
    });
  }

  return [false, args];
}
