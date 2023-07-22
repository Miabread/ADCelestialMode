<script>
import OptionsButton from "@/components/OptionsButton";

export default {
  name: "CelModeTab",
  components: {
    OptionsButton
  },
  created() {
    this.dev = dev;
  },
  methods: {
    unlockAchievements() {
      dev.giveAllAchievements();
      Achievement(188).lock();
    }
  }
};
</script>

<template>
  <div>
    <h1 class="celmode-header">
      Antimatter Dimensions: Celestial Mode
    </h1>
    <h2 class="celmode-header">Created by Miabread</h2>
    <h2>
      <a
        href="https://github.com/Miabread/ADCelestialMode"
        target="_blank">GitHub</a>
    </h2>

    <br/>
    <h1>Dev Methods</h1>
    <h2>These methods were created by the AD developers.</h2>
    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option"
          @click="unlockAchievements()"
        >
          Give All Achievements
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.respecPerks()"
        >
          Respec Perks
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.buyAllPerks()"
        >
          Autobuy Perks
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.unlockAllCosmeticSets()"
        >
          Unlock All Cosmetics
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.refundDilStudies()"
        >
          Respec Dilation Studies
        </OptionsButton>
      </div>
    </div>

    <br/>
    <h1>Animation Playback</h1>

    <div class="l-options-grid">
      <div class="l-options-grid__row">
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.implode()"
        >
          Infinity
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.eternify()"
        >
          Eternity
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.dilate()"
        >
          Dilation
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.undilate()"
        >
          Exit Dilation
        </OptionsButton>
        <OptionsButton
          class="o-primary-btn--option"
          onclick="dev.realize()"
        >
          Reality
        </OptionsButton>
      </div>

      <div class="l-options-grid__row">
        <OptionsButton
            class="o-primary-btn--option"
            onclick="dev.barrelRoll()"
          >
            Barrel Roll
        </OptionsButton>
        <OptionsButton
            class="o-primary-btn--option"
            onclick="dev.spin3d()"
          >
            Toggle Spin 3D
        </OptionsButton>
        <OptionsButton
            class="o-primary-btn--option"
            onclick="dev.spin4d()"
          > 
            Toggle Spin 4D
        </OptionsButton>
      </div>
    </div>
  </div>
</template>

<style scoped>
.celmode-header {
  color: var(--color-celmode)
}
</style>
