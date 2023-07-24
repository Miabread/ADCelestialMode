<script>
import OptionsButton from "@/components/OptionsButton";

export default {
  name: "ChangelogPanel",
  components: { OptionsButton },
  data() {
    return {
      isCollapsed: false,
    };
  },
  computed: {
    collapseIcon() {
      return this.isCollapsed
        ? "fas fa-expand-arrows-alt"
        : "fas fa-compress-arrows-alt";
    }
  },
  methods: {
    update() {
      this.isCollapsed = player.celmode.collapsed.changelog;
    },
    toggleCollapse() {
      player.celmode.collapsed.changelog = !this.isCollapsed;
    },
  },
};
</script>

<template>
  <div class="l-celmode-panel-container">
    <div class="c-celmode-panel-title">
      <i
        :class="collapseIcon"
        class="c-celmode-collapse-icon-clickable"
        @click="toggleCollapse"
      />
      Changelog
    </div>
    <div
      v-if="!isCollapsed"
      class="l-celmode-content-container container"
    >
      <h1>2023-7-24</h1>
      <h2><li>Added Celmode styled buttons and toggles</li></h2>
      <h2><li>Improved tree layout in Raw Editor</li></h2>
      <h2><li>Converted Celmode subtab to use panels</li></h2>
      <h2><li>Added Changelog</li></h2>

      <h1>2023-7-22</h1>
      <h2><li>Added Achievement Editor</li></h2>
      <h2><li>Added Celmode styled panels</li></h2>

      <h1>2023-7-21</h1>
      <h2><li>Rebrand as "AD: Celestial Mode"</li></h2>
      <h2><li>Added Celmode and Raw Editor tabs</li></h2>
      <h2><li>Added Developer Methods to Celmode tab</li></h2>
      <h2><li>Removed Force tab</li></h2>

      <h1>2023-7-20</h1>
      <h2><li>Begin mod as "AD: Force Mod"</li></h2>
      <h2><li>Add multiple force flags</li></h2>
      <h2><li>Add the Force tab</li></h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: block;
  text-align: start;
  width: 40%;
  margin: auto;
}

h1 {
  margin-top: 1em;
  color: var(--color-celmode);
}
</style>
