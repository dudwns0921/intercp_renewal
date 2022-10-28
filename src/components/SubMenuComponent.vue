<template>
  <div class="sub-menu-container">
    <p class="sub-menu-title">{{ subMenuData.title }}</p>
    <div class="underline" v-if="subMenuData.subMenuNames"></div>
    <p v-for="subMenuName in subMenuData.subMenuNames" :key="subMenuName">
      <router-link :to="{ name: 'home' }">{{ subMenuName }}</router-link>
    </p>
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
const props = defineProps({
  subMenuData: {
    title: {
      type: String,
      required: true,
    },
    subMenuNames: {
      type: Array,
    },
  },
});
const path = null;
</script>

<style lang="scss" scoped>
.sub-menu-container {
  .sub-menu-title {
    font-size: 24px;
  }

  .underline {
    width: 60px;
    border-bottom: 1px solid white;
    margin-bottom: 28px;
  }

  p {
    margin-bottom: 10px;
    cursor: pointer;
  }
}
</style>
