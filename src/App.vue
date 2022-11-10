<template>
  <header-component />
  <blank-component :height="80" />
  <RouterView :key="$route.fullPath" />
  <footer>
    <footer-component />
  </footer>
</template>

<script setup>
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlankComponent from './components/BlankComponent.vue';
</script>

<style scoped></style>
