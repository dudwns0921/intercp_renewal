<script setup lang="ts">
import CarouselComponent from '../components/CarouselComponent.vue';
import imgFiles from '../mock/imgFiles';
</script>

<template>
  <main>
    <carousel-component :img-files="imgFiles" />
  </main>
</template>
