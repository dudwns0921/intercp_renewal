<template>
  <div @click="routeTo" class="link-box__container">
    <p class="link-box__title">{{ props.title }}</p>
    <div class="link-box__link">자세히 보기</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue-demi';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const props = defineProps({
  title: { type: String, required: true },
  to: { type: String, required: true },
});

function routeTo() {
  router.push({ name: props.to });
}
</script>

<style lang="scss" scoped>
.link-box__container {
  display: flex;
  height: 160px;
  position: relative;
  justify-content: center;
  box-shadow: 0px 3px 6px #0000004d;
  font-size: 32px;
  cursor: pointer;
  transition: background-color 200ms ease-in-out;
  &:hover {
    background-color: #f5f5f5;
    .link-box__title {
      transform: scale(1.1);
    }
  }
}
.link-box__title {
  position: absolute;
  color: #111e4b;
  font-weight: bold;
  top: 40px;
  transition: transform 500ms ease-in-out;
}
.link-box__link {
  font-size: 16px;
  position: absolute;
  right: 36px;
  bottom: 30px;
}
</style>
