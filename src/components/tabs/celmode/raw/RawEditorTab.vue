<script>
import ObjectEditor from './ObjectEditor.vue';
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "RawEditorTab",
  components: {
    ObjectEditor,PrimaryButton
  },
  methods: {
    closeAll() {
      player.rawEditor.openStates = {};
    }
  }
};
</script>

<template>
  <div>
    <PrimaryButton
      @click="closeAll()"
    >
      Close All
    </PrimaryButton>
    <br><br><br>
    <ObjectEditor :path="[]"/>
  </div>
</template>

<style scoped>

</style>
