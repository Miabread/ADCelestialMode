<script>
import PrimaryToggleButton from "@/components/PrimaryToggleButton";
import { Achievement, SecretAchievement } from "../../../../core/globals";

export default {
  name: "AchievementsToggle",
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
  components: { PrimaryToggleButton },
  data() {
    return {
        isUnlocked: false,
    };
  },
  computed: {
    label() {
      if (this.secret) return this.id.toString()
      return this.id.toString().padStart(3, '0');
    },
    style() {
      return this.isUnlocked ? 'color: var(--color-good)' : 'color: var(--color-bad)';
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
    <PrimaryToggleButton 
    class="space"
    :style="style"
    :label="label" 
    :value="isUnlocked" 
    @input="set" 
    on="✔"
    off="✘"/>
</template>

<style scoped>
.space {
  margin: .5em;
}
</style>
