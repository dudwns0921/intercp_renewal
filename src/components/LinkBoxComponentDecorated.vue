<template>
  <div
    :class="[
      'link-box__container',
      { 'link-box__container--isRecruiting': props.isRecruiting },
    ]"
  >
    <div
      :class="[
        'link-box__figure',
        { 'link-box__figure--isRecruiting': props.isRecruiting },
      ]"
    ></div>
    {{ computedTitle }}
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  isRecruiting: {
    type: Boolean,
    default: false,
  },
});
// Fixme : computed 속성 이름 변경 필요
const computedTitle = computed(() => {
  if (props.isRecruiting) {
    return `[모집중!]${props.title}`;
  } else {
    return props.title;
  }
});
</script>

<style lang="scss" scoped>
.link-box__container {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  border: 1px solid #e1e1e1;
  box-shadow: 0 3px 6px #00000026;
  cursor: pointer;

  &:hover {
    background: #3f74ba;
    color: #fff;
  }
  .link-box__figure {
    position: absolute;
    top: 0;
    left: 0;
    border-left: 30px solid #3e74ba;
  }

  .link-box__figure--isRecruiting {
    border-bottom: 30px solid transparent;
    border-left: 30px solid tomato;
  }
}

.link-box__container--isRecruiting {
  border: 1px solid tomato;
  color: tomato;

  &:hover {
    background: tomato;
    color: #fff;
  }
}
</style>
