<template>
  <div :style="cssVariable"></div>
</template>

<script setup>
import { computed } from 'vue';

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
