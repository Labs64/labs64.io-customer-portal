<template>
  <aside class="sidebar">
    <h5 class="mb-3">Menu</h5>
    <ul class="nav flex-column">
      <li class="nav-item">
        <RouterLink :to="{name: 'ShoppingCart'}">
          Shop
        </RouterLink>
      </li>
      <li class="nav-item">
        <a class="nav-link"
           href="#"
        >Invoicing</a>
      </li>
    </ul>
  </aside>
</template>

<script lang="ts">
export default {
  /**
   * A human-readable name for the component (used in devtools, warnings, etc.)
   * @see https://vuejs.org/api/options-misc.html#name
   */
  name: 'TheDefaultSidebarLeft',
};
</script>

<style scoped>
.sidebar {
    width: 250px;
    background-color: #f8f9fa;
    border-right: 1px solid #dee2e6;
    padding: 1rem;
}

</style>
