<template>
  <header>
    <header-component />
  </header>
  <RouterView />
  <footer>
    <footer-component />
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style scoped></style>
