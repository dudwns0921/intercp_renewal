<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
  >
    <SwiperSlide v-for="item in imgFiles" :key="item">
      <div class="carousel__img-container">
        <img :src="item" /></div
    ></SwiperSlide>
  </swiper>
  <div class="carousel__txt-container">
    <p>열방을 향한 끊이지 않는 기도,</p>
    <p>열방을 위한 끊이지 않는 찬양,</p>
    <p class="carousel__txt--highlighted">인터CP</p>
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      currentIdx: 0,
    };
  },
  props: {
    imgFiles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y],
    };
  },
};
</script>

<style scoped lang="scss">
.carousel__img-container {
  height: 650px;
  // carousel 높이 조정하기
  img {
    width: 100%;
    height: 100%;
  }
}
.carousel__txt-container {
  position: absolute;
  color: white;
  font-size: 36px;
  top: 292px;
  left: 438px;
  text-shadow: 6px 3px 6px #17171766;
  z-index: 2;

  .carousel__txt--highlighted {
    margin-top: 65px;
    font-size: 48px;
  }
}

@media (max-width: 800px) {
  .carousel__txt-container {
    left: 1%;
    top: 1%;
  }
}
</style>
