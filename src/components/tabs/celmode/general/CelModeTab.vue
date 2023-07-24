<script>
import DevToolsPanel from "./DevToolsPanel.vue";
import ChangelogPanel from "./ChangelogPanel.vue";

export default {
  name: "CelModeTab",
  components: { DevToolsPanel, ChangelogPanel },
  created() {
    this.dev = dev;
  }
};
</script>

<template>
  <div class="l-celmode-editor-tab">
    <div class="l-celmode-panel-container">
      <h1 class="celmode-header">
        Antimatter Dimensions: Celestial Mode
      </h1>
      <h2 class="celmode-header">
        Created by Miabread
      </h2>
      <h2>
        <a
          href="https://github.com/Miabread/ADCelestialMode"
          target="_blank"
        >GitHub</a>
      </h2>
    </div>

    <DevToolsPanel />
    <ChangelogPanel />
  </div>
</template>

<style scoped>
.celmode-header {
  color: var(--color-celmode)
}
</style>
