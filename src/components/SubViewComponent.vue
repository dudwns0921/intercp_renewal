<template>
  <div>
    <section class="sub-view__photo-box-container">
      <photo-box-component
        img-file="https://source.unsplash.com/random"
        height="300px"
        title="INTERCP 소개"
      ></photo-box-component>
    </section>
    <nav>
      <div class="sub-view__nav-bar-container">
        <div class="nav-bar-menu">Home</div>
        <div class="nav-bar-menu">INTERCP 소개 🔽</div>
        <div class="nav-bar-menu">개요 🔽</div>
      </div>
    </nav>
    <section>콘텐츠 영역</section>
  </div>
</template>

<script setup>
import PhotoBoxComponent from '../components/PhotoBoxComponent.vue';
</script>

<style lang="scss" scoped>
.sub-view__photo-box-container {
  position: relative;

  p {
    position: absolute;
  }
}

nav {
  display: flex;
  justify-content: center;
  height: 60px;
  border-top: 1px solid #d4d4d4;
  border-bottom: 1px solid #d4d4d4;

  .sub-view__nav-bar-container {
    width: 1440px;
    height: 100%;
    display: flex;
    align-items: center;

    .nav-bar-menu {
      display: flex;
      width: 180px;
      height: 100%;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;

      &:hover {
        background-color: #3e74ba;
      }
    }

    .nav-bar-menu:first-child {
      width: 100px;
    }

    .nav-bar-menu:first-child,
    .nav-bar-menu:nth-child(2) {
      &::after {
        content: '→';
      }
    }
  }
}
</style>
