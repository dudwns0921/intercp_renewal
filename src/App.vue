<template>
  <header>
    <header-component />
  </header>
  <blank-component :height="80" />
  <RouterView />
  <footer>
    <footer-component />
  </footer>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
import BlankComponent from './components/BlankComponent.vue';
</script>

<style scoped></style>
