<script>
import CelmodeButton from "./CelmodeButton";

export default {
  name: "CelmodeToggleButton",
  components: {
    CelmodeButton
  },
  props: {
    label: {
      type: String,
      required: false,
      default: ""
    },
    on: {
      type: String,
      required: false,
      default: "✔"
    },
    off: {
      type: String,
      required: false,
      default: "✘"
    },
    value: {
      type: Boolean,
      required: true
    },
    colors: {
      type: Boolean,
      required: false,
      default: true,
    }
  },
  computed: {
    classNames() {
      let classNames = 'button ';
      if(this.colors) classNames += this.value ? 'on' : 'off';
      return classNames;
    },
    displayText() {
      return `${this.label} ${this.value ? this.on : this.off}`;
    }
  }
};
</script>

<template>
    <CelmodeButton
        v-bind="$attrs"
        @click="emitInput(!value)"
        :class="classNames"
    >
        <span class="label">{{ displayText }}</span>
  </CelmodeButton>
</template>

<style scoped>
.on {
    color: var(--color-good);
    border-color: var(--color-good);
}

.off {
    color: var(--color-bad);
    border-color: var(--color-bad);
}

.button:hover.on {
    background-color: var(--color-good);
    color: var(--color-prestige--accent);
}

.button:hover.off {
    background-color: var(--color-bad);
    color: var(--color-prestige--accent);
}
</style>
