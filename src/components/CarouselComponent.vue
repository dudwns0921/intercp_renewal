<script lang="ts" setup>
import { ref, defineProps } from 'vue';

const props = defineProps({
  imgFiles: Array,
});

let imgIdx = ref(0);

function changeIndex(index: number): void {
  imgIdx.value = index;
}
</script>

<template>
  <div class="carousel__img-container">
    <img :src="props.imgFiles[imgIdx.valueOf()]" />
  </div>
  <div class="carousel__control">
    <div
      :key="item"
      v-for="(item, index) in props.imgFiles"
      @click="changeIndex(index)"
    ></div>
  </div>
</template>

<style scoped lang="scss">
.carousel__img-container {
  position: relative;
  width: 100%;
  height: 800px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.carousel__control {
  position: absolute;
  display: grid;
  grid-row-gap: 26px;
  top: 50%;
  right: 380px;
  height: 100px;
  div {
    background-color: black;
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
}
</style>
