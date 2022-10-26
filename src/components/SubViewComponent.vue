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
        <div class="nav-bar-menu__container">
          <div class="nav-bar-menu__dropdown"></div>
          <div class="nav-bar-menu">Home</div>
        </div>
        <div class="nav-bar-menu__container">
          <div class="nav-bar-menu__dropdown"></div>
          <div class="nav-bar-menu">INTERCP 소개 🔽</div>
        </div>
        <div class="nav-bar-menu__container">
          <div class="nav-bar-menu__dropdown"></div>
          <div class="nav-bar-menu">개요 🔽</div>
        </div>
      </div>
    </nav>
    <section class="sub-view__content-container">콘텐츠 영역</section>
  </div>
</template>

<script setup>
import PhotoBoxComponent from '../components/PhotoBoxComponent.vue';
</script>

<style lang="scss" scoped>
.sub-view__photo-box-container {
  position: relative;
  z-index: 96;

  p {
    position: absolute;
  }
}

nav {
  display: flex;
  justify-content: center;
  height: 60px;

  .sub-view__nav-bar-container {
    width: 1440px;
    height: 100%;
    display: flex;
    align-items: center;
    background-color: white;

    .nav-bar-menu__container {
      position: relative;
      width: 180px;
      height: 100%;
      display: flex;
      align-items: center;
      cursor: pointer;

      &:hover {
        .nav-bar-menu__dropdown {
          transform: translateY(60px);
        }
      }

      .nav-bar-menu__dropdown {
        position: absolute;
        z-index: 94;
        background-color: red;
        width: 100%;
        height: 200px;
        top: 0;
        transform: translateY(-201px);

        /* border 길이까지 포함한 길이를 올려야 함 */
        transition: transform 0.5s ease-in-out;
      }

      .nav-bar-menu {
        position: absolute;
        z-index: 95;
        width: 100%;
        height: 100%;
        background-color: white;

        &:hover {
          background-color: #3e74ba;
        }
      }
    }
  }
}

.sub-view__content-container {
  border-top: 1px solid #d4d4d4;
}
</style>
