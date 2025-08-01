import type { Routes } from '@/types/router/routes';

const routes: Routes = [
  // Home
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/pages/HomePage.vue'),
    props: true,
  },

  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: () => import('@/views/pages/ShoppingCartPage.vue'),
    props: true,
  },
];

export default routes;
