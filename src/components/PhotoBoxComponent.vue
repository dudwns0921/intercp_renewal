<template>
  <div class="photo-box__conatiner" :style="cssVariable">
    <div v-if="title" class="photo-box__title">{{ title }}</div>
    <img :src="props.imgFile" />
  </div>
</template>

<script setup>
const props = defineProps({
  imgFile: { type: String, required: true },
  height: { type: String, required: true },
  title: String,
  shadow: { type: Boolean, default: false },
});
const cssVariable = {
  height: props.height,
  boxShadow: props.shadow ? '0px 3px 6px #00000033' : '',
};
</script>

<style lang="scss" scoped>
.photo-box__conatiner {
  position: relative;
  cursor: pointer;

  .photo-box__title {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 44px;
    font-weight: bold;
    color: #111e4b;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
