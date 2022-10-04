<template>
  <header>
    <header-component />
  </header>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
</script>

<style scoped></style>
