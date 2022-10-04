<template>
  <div :style="cssVariable"></div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';

const props = defineProps({
  height: Number,
});
const cssVariable = computed(() => {
  return {
    height: `${props.height}px`,
  };
});
</script>

<style></style>
