import { defineAsyncComponent, type DefineComponent } from 'vue';
import ErrorComponent from './ErrorComponent.vue';
import LoadingComponent from './LoadingComponent.vue';

export default defineAsyncComponent<DefineComponent<{ code?: string }>>({
  loader: () => import('ecommerce/ShoppingCartPage'),
  delay: 200,
  timeout: 3000,
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  onError(error, retry, fail, attempts) {
    if (attempts <= 3) retry();
    else fail();
  },
});
