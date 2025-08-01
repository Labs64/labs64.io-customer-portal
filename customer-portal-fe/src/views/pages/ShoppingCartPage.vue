<template>
  <TheDefaultLayout>
    <button class="btn btn-secondary"
            @click="changeCode"
    >Toggle code
    </button>
    <ShoppingCart :code="code"/>
  </TheDefaultLayout>
</template>

<script lang="ts"
        setup
>
// components
import TheDefaultLayout from '@/views/layouts/TheDefault/index.vue';
import ShoppingCart from '@/views/components/remote/ShoppingCart';

import { useHead } from '@unhead/vue';
import { ref } from 'vue';

defineOptions({
  name: 'ShoppingCartPage',
});

// use head
useHead({
  bodyAttrs: { class: 'd-flex flex-column vh-100' }
});

const code = ref('codeA');

const changeCode = () => {
  if (code.value === 'codeA') {
    code.value = 'codeB';
  } else {
    code.value = 'codeA';
  }
};

</script>
