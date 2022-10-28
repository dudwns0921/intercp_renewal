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
          <div class="nav-bar-menu">Home</div>
        </div>
        <div>></div>
        <div class="nav-bar-menu__container">
          <div class="nav-bar-menu__dropdown">
            <p v-for="data in MAIN_MENU_DATA" :key="data">
              <router-link :to="{ name: data.path }">{{
                data.title
              }}</router-link>
            </p>
          </div>
          <div class="nav-bar-menu">INTERCP 소개 🔽</div>
        </div>
        <div v-if="submenuNames">></div>
        <div class="nav-bar-menu__container" v-if="submenuNames">
          <div class="nav-bar-menu__dropdown">
            <p v-for="submenu in submenuNames" :key="submenu">
              {{ submenu }}
            </p>
          </div>
          <div class="nav-bar-menu">개요 🔽</div>
        </div>
      </div>
    </nav>
    <section class="sub-view__content-container">
      <RouterView></RouterView>
    </section>
  </div>
</template>

<script setup>
import PhotoBoxComponent from '../components/PhotoBoxComponent.vue';
import { MAIN_MENU_DATA } from '@/constant/constants';
import { ref } from 'vue';
import { RouterView, useRoute, RouterLink } from 'vue-router';

const route = useRoute();
const submenuNames = ref([]);

for (const data of MAIN_MENU_DATA) {
  if (data.path === route.name) {
    submenuNames.value = data.subMenuNames;
    break;
  }
}
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
      cursor: pointer;

      &:hover {
        .nav-bar-menu {
          background-color: #3e74ba;
        }

        .nav-bar-menu__dropdown {
          opacity: 1;
          transform: translateY(60px);
        }
      }

      .nav-bar-menu__dropdown {
        position: absolute;
        z-index: 94;
        background-color: white;
        border: #3e74ba 1px solid;
        border-top: none;
        width: 100%;
        opacity: 0;
        top: 0;
        transform: translateY(-100%);
        transition: all 0.3s ease-in-out;

        p {
          &:hover {
            background-color: #3e74ba;
          }
        }
      }

      .nav-bar-menu {
        position: absolute;
        display: flex;
        align-items: center;
        z-index: 95;
        width: 100%;
        height: 100%;
        background-color: white;
      }
    }
  }
}

.sub-view__content-container {
  border-top: 1px solid #d4d4d4;
}
</style>
