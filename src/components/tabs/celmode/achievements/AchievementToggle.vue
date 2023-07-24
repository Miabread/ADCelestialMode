<script>
import { Achievement, SecretAchievement } from "../../../../core/globals";
import CelmodeToggleButton from "../components/CelmodeToggleButton.vue";

export default {
  name: "AchievementsToggle",
  components: { CelmodeToggleButton },
  props: {
    id: {
      type: Number,
      required: true
    },
    secret: {
      type: Boolean,
      required: true,
    }
  },
  data() {
    return {
      isUnlocked: false,
    };
  },
  computed: {
    label() {
      if (this.secret) return this.id.toString();
      return this.id.toString().padStart(3, "0");
    },
    getter() {
      return this.secret ? SecretAchievement : Achievement;
    }
  },
  methods: {
    update() {
      this.isUnlocked = this.getter(this.id).isUnlocked;
    },
    set(unlocked) {
      if (unlocked) {
        this.getter(this.id).unlock();
      } else {
        this.getter(this.id).lock();
      }
    },
  },
};
</script>

<template>
  <CelmodeToggleButton
    class="space"
    :label="label"
    :value="isUnlocked"
    @input="set"
  />
</template>

<style scoped>
.space {
  margin: .5em;
}
</style>
