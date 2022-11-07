<template>
  <div class="link-box__container">
    <div class="link-box__txt-container">
      <p class="link-box__sub-title">{{ props.subTitle }}</p>
      <p class="link-box__title">{{ props.title }}</p>
      <p class="link-box__message">{{ props.message }}</p>
    </div>
    <div class="link-box__link" :style="linkTxtCss" @click="routeTo">
      자세히 보기
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();

const props = defineProps({
  title: { type: String, required: true },
  subTitle: String,
  message: String,
  to: { type: String, required: true },
  width: { type: String, required: true },
  height: { type: String, required: true },
  backgroundColor: { type: String, required: true },
});

// const containerCss = computed(() => {
//   return {
//     width: props.width,
//     height: props.height,
//     backgroundColor: props.backgroundColor,
//   };
// });

const linkTxtCss = computed(() => {
  return {
    color: props.backgroundColor,
  };
});

function routeTo() {
  router.push({ name: props.to });
}
</script>

<style lang="scss" scoped>
.link-box__container {
  position: relative;
  color: white;
  box-shadow: 0 3px 6px #0000004d;
  font-size: 32px;
  width: 100%;
  height: 265px;
  background-color: rgb(62, 116, 186);
}

.link-box__txt-container {
  position: absolute;
  top: 40px;
  left: 60px;
  height: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.link-box__title {
  font-weight: bold;
}

.link-box__sub-title {
  font-size: 22px;
}

.link-box__message {
  font-size: 20px;
}

.link-box__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 134px;
  height: 53px;
  background-color: white;
  font-size: 16px;
  position: absolute;
  right: 36px;
  bottom: 40px;
  cursor: pointer;
}

@media (max-width: 800px) {
  .link-box__container {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 0 20px 20px;

    .link-box__txt-container {
      height: auto;
      align-items: center;
      padding: 20px;
      p {
        width: 90%;
        line-height: 1.7;
      }
    }
    .link-box__txt-container,
    .link-box__link {
      left: 0;
      position: unset;
      font-size: 12px;
    }
  }
  .link-box__title {
    font-size: 26px;
  }
  .link-box__sub-title,
  .link-box__message {
    font-size: 14px;
  }
}
</style>
