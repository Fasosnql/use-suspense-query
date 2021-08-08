import { queriesStore } from './queries-store';

export function throwPromise(promise, id) {
  // @ts-ignore
  const elementIndex = queriesStore.findIndex((query) => query.id === id);
  const element = queriesStore[elementIndex];

  if (!element) {
    return null;
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
