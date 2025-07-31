import '@/assets/css/main.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import { VueHeadMixin, createHead } from '@unhead/vue/client';

import App from './views/App.vue'
import router from './router'

const app = createApp(App)
const head = createHead();

app.use(createPinia())
app.use(router)
app.use(head)

app.mixin(VueHeadMixin);

app.mount('#app')
