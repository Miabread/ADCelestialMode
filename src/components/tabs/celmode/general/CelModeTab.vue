<script>
import DevToolsPanel from "./DevToolsPanel.vue";

export default {
  name: "CelModeTab",
  components: { DevToolsPanel },
  created() {
    this.dev = dev;
  }
};
</script>

<template>
  <div class="l-celmode-editor-tab">
    <h1 class="celmode-header">
      Antimatter Dimensions: Celestial Mode
    </h1>
    <h2 class="celmode-header">Created by Miabread</h2>
    <h2>
      <a
        href="https://github.com/Miabread/ADCelestialMode"
        target="_blank">GitHub</a>
    </h2>

    <DevToolsPanel/>
  </div>
</template>

<style scoped>
.celmode-header {
  color: var(--color-celmode)
}
</style>
