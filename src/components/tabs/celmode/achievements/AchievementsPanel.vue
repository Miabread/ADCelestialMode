<script>

import AchievementToggle from './AchievementToggle.vue';
import CelmodeButton from "../components/CelmodeButton.vue";
import { Achievement, Achievements, SecretAchievements } from '../../../../core/globals';


export default {
    name: "AchievementsPanel",
    components: { AchievementToggle, CelmodeButton },
    props: {
        secret: {
            type: Boolean,
            required: true,
        }
    },
    data() {
        return {
            isCollapsed: false,
        };
    },
    computed: {
        title() {
            return this.secret ? 'Secret Achievements' : 'Achievements';
        },
        collapseIcon() {
            return this.isCollapsed
                ? "fas fa-expand-arrows-alt"
                : "fas fa-compress-arrows-alt";
        },
        collapsedPath() {
            return this.secret ? 'secretAchievements' : 'achievements';
        }
    },
    methods: {
        update() {
            this.isCollapsed = player.celmode.collapsed[this.collapsedPath];
        },
        toggleCollapse() {
            player.celmode.collapsed[this.collapsedPath] = !this.isCollapsed;
        },
        allRows() {
            if (this.secret) return SecretAchievements.allRows;
            return Achievements.allRows;
        },
        unlockAll() {
            if (this.secret) {
                for (const item of SecretAchievements.all) item.unlock();
            } else {
                for (const item of Achievements.all) {
                    if (item.id === 188) continue;
                    item.unlock();
                }
            }
        },
        lockAll() {
            if (this.secret) {
                for (const item of SecretAchievements.all) item.lock();
            } else {
                for (const item of Achievements.all) item.lock();
            }
        }
    },
};
</script>

<template>
    <div class="l-celmode-panel-container">
        <div class="c-celmode-panel-title">
          <i
            :class="collapseIcon"
            class="c-celmode-collapse-icon-clickable"
            @click="toggleCollapse"
          />
          {{ title }}
        </div>
        <div
          v-if="!isCollapsed"
          class="l-celmode-content-container"
        >
            <div style="margin: 1em">
                <CelmodeButton @click="unlockAll">Unlock All</CelmodeButton>
                <span style="margin: 1em"/>
                <CelmodeButton @click="lockAll">Lock All</CelmodeButton>
            </div>
            <div v-for="row in allRows()">
                <span v-for="item in row">
                    <AchievementToggle :id="item.id" :secret="secret"/>
                </span>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
</style>
