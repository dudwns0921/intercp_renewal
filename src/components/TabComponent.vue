<template>
  <div class="tab__tab-container">
    <div class="tab__button-container">
      <div
        :class="['tab__button', { 'tab__button--active': activeTab === tab }]"
        v-for="tab in props.tabs"
        :key="tab"
        @click="activeTab = tab"
      >
        {{ tab }}
      </div>
    </div>
    <div class="tab__content">
      <div class="tab__content-more-btn" @click="routeTo">+</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const props = defineProps({
  tabs: { type: Array, required: true },
});
const activeTab = ref(props.tabs[0]);
function routeTo() {
  console.log(`${activeTab.value}으로 이동`);
}
</script>

<style lang="scss" scoped>
.tab__button-container {
  display: flex;
}
.tab__button {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 360px;
  height: 84px;
  border: 1px solid #111e4b;
  border-left: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #111e4b;
    color: white;
  }
}
.tab__button:first-child {
  border-left: 1px solid #111e4b;
}
.tab__content {
  position: relative;
  width: 100%;
  height: 332px;
  border-bottom: 1px solid #111e4b;
}
.tab__content-more-btn {
  font-size: 60px;
  position: absolute;
  right: 50px;
  bottom: 36px;
  cursor: pointer;
}
.tab__button--active {
  background-color: #111e4b;
  color: white;
}
</style>
