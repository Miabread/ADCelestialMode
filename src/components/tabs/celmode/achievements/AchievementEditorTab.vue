<script>
import AchievementsPanel from "./AchievementsPanel.vue";

export default {
  name: "AchievementEditorTab",
  components: { AchievementsPanel }
};
</script>

<template>
  <div class="l-celmode-editor-tab ">
    <AchievementsPanel :secret="false" />
    <AchievementsPanel :secret="true" />
  </div>
</template>

<style scoped>
</style>
