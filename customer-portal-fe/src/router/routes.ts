import type { Routes } from '@/types/router/routes';

const routes: Routes = [
  // Home
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/pages/HomePage.vue'),
    props: true,
  },
];

export default routes;
