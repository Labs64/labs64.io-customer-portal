<template>
  <TheDefaultLayout>
    Content
  </TheDefaultLayout>
</template>

<script lang="ts">
import TheDefaultLayout from '@/views/layouts/TheDefault/index.vue';

export default {
  /**
   * A human-readable name for the component (used in devtools, warnings, etc.)
   * @see https://vuejs.org/api/options-misc.html#name
   */
  name: 'HomePage',

  /**
   * Components registered locally for use in templates.
   * @see https://vuejs.org/guide/components/registration.html#local-registration
   */
  components: { TheDefaultLayout },

  /**
   * The meta data(title, tags, e.t.c).
   * @see https://unhead.unjs.io/
   */
  head() {
    return {
      bodyAttrs: { class: 'd-flex flex-column vh-100' },
    };
  },
};
</script>
