<template>
  <div @click="routeTo" class="link-box__container">
    <p class="link-box__title">{{ props.title }}</p>
    <div class="link-box__link">자세히 보기</div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
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
  box-shadow: 0 3px 6px #0000004d;
  font-size: 22px;
  border: 1px solid #e1e1e1;
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
@media (max-width: 800px) {
  .introduction-content__link-box-container {
    .link-box__container {
      margin-bottom: 20px;
      height: 80px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .link-box__title {
        font-size: 16px;
        position: unset;
      }
      .link-box__link {
        position: unset;
        font-size: 12px;
      }
    }
  }
}
</style>
