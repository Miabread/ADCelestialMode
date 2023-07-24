<script>
import CelmodeButton from "../components/CelmodeButton";

import ObjectEditor from "./ObjectEditor.vue";

export default {
  name: "RawEditorTab",
  components: {
    ObjectEditor, CelmodeButton
  },
  methods: {
    closeAll() {
      player.rawEditor.openStates = {};
    }
  }
};
</script>

<template>
  <div class="container">
    <br>
    <CelmodeButton
      @click="closeAll()"
    >
      Close All
    </CelmodeButton>
    <ObjectEditor :path="[]" />
  </div>
</template>

<style scoped>
.container {
  text-align: start;
  margin-left: 20vw;
}
</style>
