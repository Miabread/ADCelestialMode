<script>
import CelmodeToggleButton from "../components/CelmodeToggleButton";
import BooleanEditor from "./BooleanEditor.vue";

const mb=p=>o=>p.map(c=>o=(o||{})[c])&&o;

export default {
  name: "ObjectEditor",
  components: {
    CelmodeToggleButton,BooleanEditor
  },
  props: ['path'],
  data() {
    // Treat top level specially 
    if (this.path.length === 0) {
      return {
        open: true,
        keys: Object.keys(player).filter(it => it !== 'rawEditor'),
      }
    }
    
    return { 
        open: player.rawEditor.openStates[this.path.join('.')] ?? false, 
        keys: Object.keys(mb(this.path)(player)) 
    };
  },
  computed: {
    label() {
        return this.path[this.path.length - 1];
    }
  },
  watch: {
    open() {
      player.rawEditor.openStates[this.label] = this.open;
    }
  },
  methods: {
    update() {
      if (this.path.length === 0) return;
      this.open = player.rawEditor.openStates[this.label] ?? false;
    },
    is(key, type) {
        const value =  mb([...this.path, key])(player);
        if (value instanceof Decimal) return type === 'decimal';
        if (value instanceof Array) return type === 'array';
        return type === typeof value;
    },
    getValue(key) {
        const value =  mb([...this.path, key])(player);
        if (value instanceof Decimal) return 'decimal';
        if (value instanceof Array) return 'array';
        return typeof value;
    }
  }
};
</script>

<template>
  <div>
    <CelmodeToggleButton
      v-if="path.length > 0"
      :label="label" 
      :value="open" @input="open = $event"  
      off="▶" on="▼" 
      :colors="false"/>
    <div v-if="open" v-for="key in keys" class="nest">
        <br/>
        <ObjectEditor 
            v-if="is(key, 'object')"
            :path="[...path, key]"
            />
        <BooleanEditor
            v-else-if="is(key, 'boolean')"
            :name="key"
            :path="path"
            />
        <span v-else>{{ key }}: {{ getValue(key) }}</span>
    </div>
  </div>
</template>

<style scoped>
.nest {
  margin-left: 5em;
}
</style>
