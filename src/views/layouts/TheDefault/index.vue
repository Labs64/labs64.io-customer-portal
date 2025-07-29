<template>
  <TheHeader/>

  <!-- Content -->
  <div class="page-content">
    <TheLeftSidebar/>

    <!-- Main Content -->
    <main class="main-content">
      <slot/>
    </main>
  </div>

  <!-- Footer -->
  <TheFooter/>
</template>

<script lang="ts">
// components
import TheFooter from './TheFooter.vue';
import TheHeader from './TheHeader.vue';
import TheLeftSidebar from './TheSidebarLeft.vue';

export default {
  /**
   * A human-readable name for the component (used in devtools, warnings, etc.)
   * @see https://vuejs.org/api/options-misc.html#name
   */
  name: 'TheDefaultLayout',

  /**
   * Components registered locally for use in templates.
   * @see https://vuejs.org/guide/components/registration.html#local-registration
   */
  components: {
    TheHeader,
    TheFooter,
    TheLeftSidebar,
  },

  /**
   * The meta data(title, tags, e.t.c).
   * @see https://unhead.unjs.io/
   */
  head() {
    return {
      bodyAttrs: { class: ['d-flex', 'flex-column', 'vh-100'] },
      link: [{ rel: 'canonical', href: window.location.href }],
    };
  },

  /**
   * Component methods.
   * @see https://vuejs.org/api/options-state.html#methods
   */
  methods: {},
};
</script>

<style>
.page-content {
    flex: 1;
    display: flex;
    overflow: hidden;
    min-height: 90vh;
}
.main-content {
    flex: 1;
    padding: 1.5rem;
    overflow-y: auto;
}
</style>
