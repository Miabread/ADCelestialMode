<script>
import CelmodeToggleButton from "../components/CelmodeToggleButton";

const mb = p => o => p.map(c => o = (o || {})[c]) && o;

export default {
  name: "BooleanEditor",
  components: {
    CelmodeToggleButton
  },
  props: ["path", "name"],
  data() {
    return {
      value: mb(this.path)(player)[this.name],
    };
  },
  watch: {
    value() {
      mb(this.path)(player)[this.name] = Boolean(this.value);
    }
  },
  methods: {
    update() {
      this.value = mb(this.path)(player)[this.name];
    }
  }
};
</script>

<template>
  <CelmodeToggleButton
    :label="name"
    :value="value"
    @input="value = $event"
  />
</template>

<style scoped>

</style>
