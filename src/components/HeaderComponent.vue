<template>
  <nav>
    <section class="header__navigation-logo">
      <router-link to="/">INTERCP 로고</router-link>
    </section>
    <section class="header__navigation-text">
      <router-link to="/introduction">INTERCP 소개</router-link>
      <router-link to="/internal">국내훈련프로그램</router-link>
      <router-link to="/ministryPart">전문사역분야</router-link>
      <router-link to="/overseas">해외프로그램</router-link>
      <router-link to="/regionalStudy">지역연구</router-link>
      <router-link to="/board">게시판</router-link>
    </section>
    <section class="header__navigation-etc">
      <div>메뉴 아이콘</div>
      <router-link to="/donation">후원문의</router-link>
    </section>
  </nav>
</template>
<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped lang="scss">
nav {
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 27px 217px 27px 83px;
}
.header__navigation-text,
.header__navigation-etc {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}
.header__navigation-text {
  grid-column-gap: 81px;
}
.header__navigation-etc {
  grid-column-gap: 56px;
}
</style>
