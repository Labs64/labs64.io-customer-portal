import type {
  RouteLocationNormalized,
  RouteLocationNormalizedLoaded,
  NavigationGuardNext,
} from 'vue-router';

export type Middleware = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalizedLoaded,
  next: NavigationGuardNext,
  ...args: unknown[]
) => void | Promise<void>;

export type MiddlewareConfig = {
  global: {
    before: Middleware[] | [];
    after: Middleware[];
  };

  route: {
    [key: string]: Middleware | Middleware[];
  };
};
