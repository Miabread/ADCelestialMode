<script>
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "CelmodeToggleButton",
  components: {
    PrimaryButton
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
  },
  computed: {
    classNames() {
        return 'button ' + (this.value ? 'on' : 'off');
    },
    displayText() {
      return `${this.label} ${this.value ? this.on : this.off}`;
    }
  }
};
</script>

<template>
    <PrimaryButton
        v-bind="$attrs"
        @click="emitInput(!value)"
        :class="classNames"
    >
        <span class="label">{{ displayText }}</span>
  </PrimaryButton>
</template>

<style scoped>
.button {
    background-color: var(--color-prestige--accent);
}

.button:hover.on {
    background-color: var(--color-good);
    color: var(--color-prestige--accent);
}

.button:hover.off {
    background-color: var(--color-bad);
    color: var(--color-prestige--accent);
}

.on {
    color: var(--color-good);
    border-color: var(--color-good);
}

.off {
    color: var(--color-bad);
    border-color: var(--color-bad);
}
</style>
