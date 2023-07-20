<script>
import PrimaryToggleButton from "@/components/PrimaryToggleButton";

export default {
  name: "ForceTab",
  components: {
    PrimaryToggleButton
  },
  data() {
    return { force: JSON.parse(JSON.stringify(player.force)) };
  },
  methods: {
    update() {
      player.force = JSON.parse(JSON.stringify(this.force));
    }
  }
};
</script>

<template>
  <div>
    <h1><a href="https://github.com/Miabread/AntimatterDimensions" target="_blank">AD: Force Mod</a></h1>
    <h2>Created by Miabread</h2>

    <div v-for="(subtopics, topic) in force">
      <h1>{{ topic }}</h1>
      <div v-for="(value, key) in subtopics">
        <PrimaryToggleButton
            v-if="(typeof value !== 'object')"
           :label="key" 
           :value="force[topic][key]" 
           @input="force[topic][key] = $event"/>
        <template v-else>
          <h2>{{ key }}</h2>
          <div v-for="(value, subkey) in value">
            <PrimaryToggleButton
            :label="subkey" 
            :value="force[topic][key][subkey]" 
            @input="force[topic][key][subkey] = $event"/>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
