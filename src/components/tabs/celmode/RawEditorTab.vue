<script>
import ObjectEditor from './ObjectEditor.vue';

export default {
  name: "RawEditorTab",
  components: {
    ObjectEditor
  },
};
</script>

<template>
  <div>
    <ObjectEditor :path="[]"/>
  </div>
</template>

<style scoped>

</style>
