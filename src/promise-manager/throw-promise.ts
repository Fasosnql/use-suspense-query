import { queriesStore } from './queries-store';

export function throwPromise<TData>(
  promise: Promise<TData>,
  id: string | number
) {
  const elementIndex = queriesStore.findIndex((query) => query.id === id);
  const element = queriesStore[elementIndex];

  if (!element) {
    throw new Error(
      '[useSuspendedQuery] Invalid call. Query is missing from the store'
    );
  }

  throw promise
    .then(
      (result) => {
        element.status = 'success';
        element.result = result;
      },
      (error) => {
        element.status = 'error';
        element.result = JSON.stringify(error);
      }
    )
    .catch((e) => {
      element.status = 'error';
      element.result = JSON.stringify(e);
    });
}
