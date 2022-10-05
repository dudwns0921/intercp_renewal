<template>
  <div class="photo-box__conatiner">
    <img :src="props.imgFile" />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imgFile: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.photo-box__conatiner {
  height: 256px;
  box-shadow: 0px 3px 6px #00000033;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
