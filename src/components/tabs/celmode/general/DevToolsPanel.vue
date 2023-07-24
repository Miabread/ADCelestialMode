<script>
import OptionsButton from "@/components/OptionsButton";

export default {
    name: "DevToolsPanel",
    components: { OptionsButton },
    data() {
        return {
            isCollapsed: false,
        };
    },
    computed: {
        collapseIcon() {
            return this.isCollapsed
                ? "fas fa-expand-arrows-alt"
                : "fas fa-compress-arrows-alt";
        }
    },
    methods: {
        update() {
            this.isCollapsed = player.celmode.collapsed.devTools;
        },
        toggleCollapse() {
            player.celmode.collapsed.devTools = !this.isCollapsed;
        },
    },
};
</script>

<template>
    <div class="l-celmode-panel-container pelle">
        <div class="c-celmode-panel-title pelle">
          <i
            :class="collapseIcon"
            class="c-celmode-collapse-icon-clickable"
            @click="toggleCollapse"
          />
          Developer Methods
        </div>
        <div
          v-if="!isCollapsed"
          class="l-celmode-content-container"
        >

        <h2 style="margin: 1em" class="pelle">These methods were created by the official AD developers.</h2>
        
        <div class="l-options-grid">
            <div class="l-options-grid__row">
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
       
        <h1 style="margin: 1em" class="pelle">Animation Playback</h1>

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
        </div>
</template>

<style scoped>
.pelle {
    border-color: var(--color-pelle--base);
    color: var(--color-pelle--base);
}
</style>
