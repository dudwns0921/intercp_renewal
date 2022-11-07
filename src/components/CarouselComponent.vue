<template>
  <div class="carousel__img-container">
    <img
      v-for="(item, index) in props.imgFiles"
      :key="item"
      :src="item"
      :class="[
        'carousel__img--default',
        {
          'carousel__img--active': index === currentIdx,
        },
      ]"
    />
    <div class="carousel__txt-container">
      <p>열방을 향한 끊이지 않는 기도,</p>
      <p>열방을 위한 끊이지 않는 찬양,</p>
      <p class="carousel__txt--highlighted">인터CP</p>
    </div>
    <div class="carousel__control">
      <div
        v-for="(item, index) in props.imgFiles"
        :key="item"
        :class="[
          'carousel__control-dot--default',
          {
            'carousel__control-dot--active': index === currentIdx,
          },
        ]"
        @click="currentIdx = index"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  imgFiles: Array,
});
const currentIdx = ref(0);
</script>

<style scoped lang="scss">
.carousel__img-container {
  position: relative;
  width: 100%;
  height: 650px;

  .carousel__txt-container {
    position: absolute;
    color: white;
    font-size: 36px;
    top: 292px;
    left: 438px;
    text-shadow: 6px 3px 6px #17171766;

    .carousel__txt--highlighted {
      margin-top: 65px;
      font-size: 48px;
    }
  }

  .carousel__img--default {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0;
    transition: opacity 500ms ease-in-out;
  }

  .carousel__img--active {
    opacity: 1;
  }
}

.carousel__control {
  position: absolute;
  display: grid;
  grid-row-gap: 20px;
  top: 50%;
  right: 380px;

  .carousel__control-dot--default {
    background-color: #dfdfdf;
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }

  .carousel__control-dot--active {
    height: 52px;
    background-color: #3e74ba;
    border-radius: 30px;
  }
}

@media (max-width: 800px) {
  .carousel__img-container .carousel__txt-container {
    left: 1%;
    top: 1%;
  }
}
</style>
