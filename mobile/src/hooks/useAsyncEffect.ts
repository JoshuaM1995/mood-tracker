import { useEffect } from 'react';

export const useAsyncEffect = (effect: Function, destroy?: any, inputs?: any) => {
  const hasDestroy = typeof destroy === 'function';

  useEffect(
    () => {
      let result: any;
      let mounted = true;

      const maybePromise = effect(() => mounted);

      Promise.resolve(maybePromise).then((value) => {
        result = value;
      });

      return () => {
        mounted = false;

        if (hasDestroy) {
          destroy(result);
        }
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    hasDestroy ? inputs : destroy,
  );
};
