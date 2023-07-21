<script>
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

const mb=p=>o=>p.map(c=>o=(o||{})[c])&&o;

export default {
  name: "BooleanEditor",
  components: {
    PrimaryToggleButton
  },
  props: ['path', 'name'],
  data() {
    return { 
        value: mb(this.path)(player)[this.name],
    };
  },
  computed: {
    label() {
        return [...this.path, this.name].join('.');
    }
  },
  watch: {
    value() {
      mb(this.path)(player)[this.name] = !!this.value;
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
  <PrimaryToggleButton 
    :label="label" 
    :value="value" 
    @input="value = $event" />
</template>

<style scoped>

</style>
