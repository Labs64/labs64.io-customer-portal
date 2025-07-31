<template>
  <div class="d-flex justify-content-center align-items-center p-5">
    <div class="spinner-border text-primary"
         role="status"
    ></div>
    <span class="ms-2">Loading Shopping Cart...</span>
  </div>
</template>

<script lang="ts"
        setup
>
defineOptions({
  name: 'ShoppingCart.LoadingComponent',
})
</script>
