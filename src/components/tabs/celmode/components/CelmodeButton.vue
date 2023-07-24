<script>
export default {
  name: "CelmodeButton",
  props: {
    enabled: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  computed: {
    classObject() {
      return {
        "disabled": !this.enabled,
      };
    }
  }
};
</script>

<template>
  <button
    class="o-primary-btn"
    :class="classObject"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<style scoped>
button {
    color: var(--color-celmode);
    border-color: var(--color-celmode);
    background-color: var(--color-prestige--accent);
}

button:hover {
    color: var(--color-prestige--accent);
    background-color:  var(--color-celmode);
}
</style>