// lodash
import { castArray, forEach, isObject, isString } from 'lodash-es';

// vue
import { createRouter, createWebHistory, createWebHashHistory, type NavigationGuardNext } from 'vue-router';

// plugins
import NProgress from '@/plugins/nprogress';

// types
import Middlewares from '@/router/middleware';
import type { Middleware } from '@/types/router/middleware';

import type { RouteMiddleware } from '@/types/router/routes';

// routes
import routes from './routes';

let history = createWebHistory(import.meta.env.BASE_URL);

if (import.meta.env.VITE_ROUTER_HASH_MODE === 'true') {
  history = createWebHashHistory(import.meta.env.BASE_URL);
}

const router = createRouter({ history, routes });

router.beforeEach((to, from, next) => {
  // start progressbar
  NProgress.start();

  const middlewares: [Middleware, unknown[]][] = to.matched.flatMap((matched) => {
    const meta = matched.meta;
    let metaMiddleware = meta?.middleware as RouteMiddleware | undefined;

    if (!metaMiddleware) {
      return [];
    }

    const result: [Middleware, unknown[]][] = [];

    if (isString(metaMiddleware)) {
      metaMiddleware = [metaMiddleware];
    }

    forEach(metaMiddleware, (v, k) => {
      let name = '';
      let args: unknown[] = [];

      if (isObject(v)) {
        name = k;
        args = v as unknown[];
      }

      if (isString(v)) {
        const [first, second] = v.split(':');
        name = first;
        args = second ? second.split(',') : [];
      }

      let middleware = Middlewares.route[name];

      if (!middleware) {
        console.error(`Middleware "${name}" not found.`);
        return;
      }

      middleware = castArray(middleware) as Middleware[];

      result.push(...middleware.map((func): [Middleware, unknown[]] => [func, args]));
    });

    return result;
  });

  const allMiddlewares = [
    ...Middlewares.global.before.map((fn) => [fn, []]),
    ...middlewares,
    ...Middlewares.global.after.map((fn) => [fn, []]),
  ] as [Middleware, unknown[]][];

  const nextMiddleware = (index = 0) => {
    if (!allMiddlewares[index]) {
      return next;
    }

    return (...args: Parameters<NavigationGuardNext> | []) => {
      if (args.length) {
        return next(...args);
      }

      const [mFunc, ...mArgs] = allMiddlewares[index];
      const nextGuard = nextMiddleware(index + 1) as NavigationGuardNext;

      return mFunc.apply({}, [to, from, nextGuard, ...mArgs]);
    };
  };

  nextMiddleware()();
});

router.afterEach(() => {
  // end progressbar
  NProgress.done();
});

export default router;
