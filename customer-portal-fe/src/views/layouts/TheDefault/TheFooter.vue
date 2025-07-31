<template>
  <footer class="bg-dark text-white text-center py-2">
    <small>© {{ year }} <a href="https://netlicensing.io/">Labs64 GmbH</a></small>
  </footer>
</template>

<script lang="ts">
export default {
  /**
   * A human-readable name for the component (used in devtools, warnings, etc.)
   * @see https://vuejs.org/api/options-misc.html#name
   */
  name: 'TheDefaultHeader',
  /**
   * Computed properties for derived data.
   * @see https://vuejs.org/api/options-state.html#computed
   */
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>
