<script>
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import BooleanEditor from "./BooleanEditor.vue";

const mb=p=>o=>p.map(c=>o=(o||{})[c])&&o;

export default {
  name: "ObjectEditor",
  components: {
    PrimaryToggleButton,BooleanEditor
  },
  props: ['path'],
  data() {
    return { 
        open: this.path.length === 0, 
        keys: Object.keys(this.path.length > 0 ? mb(this.path)(player) : player) 
    };
  },
  computed: {
    label() {
        return this.path.join('.');
    }
  },
  methods: {
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
    <PrimaryToggleButton :label="label" :value="open" @input="open = $event" v-if="path.length > 0" off="▶" on="▼" />
    <div v-if="open" v-for="key in keys">
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

</style>
