<template>
  <div class="header__navigation-container">
    <div
      :class="[
        'header__top-navigation-bar-container',
        { 'header__top-navigation-bar-container--shown': showTopNavBar },
      ]"
    >
      <nav class="header__top-navigation-bar">
        <div class="menu-container">
          <div class="logo">
            <div>INTERCP 로고</div>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">INTERCP 소개</p>
            <div class="underline"></div>
            <p>개요</p>
            <p>사역정신</p>
            <p>신앙고백</p>
            <p>신학 매뉴얼</p>
            <p>선교정책</p>
            <p>사명선언문</p>
            <p>훈련원, 산하단체, 연구실</p>
            <p>선교운동</p>
            <p>선교사 파송절차</p>
            <p>사역개념도</p>
            <p>선교훈련과정</p>
            <p>국내외 지부현황</p>
            <p>인터콥 캠퍼스</p>
            <p>정기집회안내</p>
            <p>사역에 동역하려면</p>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">국내훈련프로그램</p>
            <div class="underline"></div>
            <p>비전스쿨</p>
            <p>해외비전스쿨</p>
            <p>영어비전스쿨</p>
            <p>여성비전스쿨</p>
            <p>직장여성비전스쿨</p>
            <p>시니어비전스쿨</p>
            <p>청소년비전스쿨</p>
            <p>청사에듀스쿨</p>
            <p>부모비전스쿨</p>
            <p>어린이비전스쿨</p>
            <p>키즈비전스쿨</p>
            <p>BTJ스쿨</p>
            <p>MnB스쿨</p>
            <p>MnM스쿨</p>
            <p>MK샘스쿨</p>
            <p>목회자비전스쿨</p>
            <p>ADS(예배기도사역자훈련)</p>
            <p>비전스쿨 강의내용</p>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">전문사역분야</p>
            <div class="underline"></div>
            <p>개요</p>
            <p>사역정신</p>
            <p>신앙고백</p>
            <p>신학 매뉴얼</p>
            <p>선교정책</p>
            <p>사명선언문</p>
            <p>훈련원, 산하단체, 연구실</p>
            <p>선교운동</p>
            <p>선교사 파송절차</p>
            <p>사역개념도</p>
            <p>선교훈련과정</p>
            <p>국내외 지부현황</p>
            <p>인터콥 캠퍼스</p>
            <p>정기집회안내</p>
            <p>사역에 동역하려면</p>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">해외프로그램</p>
            <div class="underline"></div>
            <p>개요</p>
            <p>의료분야</p>
            <p>IT분야</p>
            <p>스포츠분야</p>
            <p>과학기술분야</p>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">지역연구</p>
          </div>
          <div class="sub-menu-container">
            <p class="sub-menu-title">게시판</p>
          </div>
        </div>
        <div class="close-btn" @click="clickCloseBtn">X</div>
      </nav>
    </div>
    <nav
      class="header__navigation-bar"
      @mouseover="hoverNavBar"
      @click="clickNavBar"
    >
      <div class="logo">
        <div>INTERCP 로고</div>
      </div>
      <div class="menu-container">
        <span>INTERCP 소개</span>
        <span>국내훈련프로그램</span>
        <span>전문사역분야</span>
        <span>해외프로그램</span>
        <span>지역연구</span>
        <span>게시판</span>
      </div>
      <div class="etc">
        <div>메뉴 아이콘</div>
        <span>후원문의</span>
      </div>
    </nav>
    <nav
      :class="[
        'header__bottom-navigation-bar',
        { 'header__bottom-navigation-bar--shown': showBottomNavBar },
      ]"
      @mouseleave="leaveBottomNavBar"
    >
      <div class="menu-container">
        <p class="menu-title">INTERCP 소개</p>
        <div class="sub-menu-container">
          <p>개요</p>
          <p>사역정신</p>
          <p>신앙고백</p>
          <p>신학 매뉴얼</p>
          <p>선교정책</p>
          <p>사명선언문</p>
        </div>
        <div class="sub-menu-container">
          <p>훈련원, 산하단체, 연구실</p>
          <p>선교운동</p>
          <p>선교사</p>
          <p>파송절차</p>
          <p>사역개념도</p>
          <p>선교훈련과정</p>
          <p>국내외 지부현황</p>
        </div>
        <div class="sub-menu-container">
          <p>인터콥 캠퍼스</p>
          <p>정기집회안내</p>
          <p>사역에 동역하려면</p>
        </div>
      </div>
    </nav>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const showBottomNavBar = ref(false);
const showTopNavBar = ref(false);

function hoverNavBar() {
  showBottomNavBar.value = true;
}
function clickNavBar() {
  showTopNavBar.value = true;
}
function clickCloseBtn() {
  showTopNavBar.value = false;
}
function leaveBottomNavBar() {
  showBottomNavBar.value = false;
}
</script>

<style scoped lang="scss">
.header__navigation-container {
  position: fixed;
  z-index: 98;
  width: 1920px;
  height: 80px;
  background-color: white;
}
// 드롭다운 메뉴 애니메이션 설정
.header__top-navigation-bar-container,
.header__top-navigation-bar-container--shown,
.header__bottom-navigation-bar,
.header__bottom-navigation-bar--shown {
  transition: transform 0.5s ease-in-out;
}
.header__top-navigation-bar-container {
  position: absolute;
  z-index: 99;
  width: 100%;
  height: 778px;
  transform: translateY(-778px);
  background-color: #3e74ba;
  color: white;
  .header__top-navigation-bar {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 97px 360px 0 71px;
    .menu-container {
      display: grid;
      grid-auto-columns: max-content;
      grid-auto-flow: column;
      grid-column-gap: 85px;
      .logo {
        width: 178px;
        height: 64px;
        border: 1px solid white;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
      }
      .sub-menu-container {
        .sub-menu-title {
          font-size: 24px;
        }
        .underline {
          width: 60px;
          border-bottom: 1px solid white;
          margin-bottom: 28px;
        }
        p {
          margin-bottom: 10px;
        }
      }
    }
    .close-btn {
      position: absolute;
      top: 95px;
      right: 160px;
      font-size: 60px;
      font-weight: bold;
      line-height: 1;
      cursor: pointer;
    }
  }
}

.header__top-navigation-bar-container--shown {
  transform: translateY(0px);
}
.header__navigation-bar {
  position: absolute;
  z-index: 97;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 27px 217px 27px 83px;
  background-color: white;
  cursor: pointer;
  font-size: 18px;
  .menu-container,
  .etc {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
  }
  .menu-container {
    grid-column-gap: 81px;
  }
  .etc {
    grid-column-gap: 56px;
  }
}
.header__bottom-navigation-bar {
  position: absolute;
  width: 100%;
  height: 324px;
  transform: translateY(-244px);
  background-color: white;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  .menu-container {
    display: grid;
    grid-auto-flow: column;
    grid-column-gap: 166px;
    margin-left: 83px;
    font-size: 18px;
  }
  .menu-title {
    font-size: 28px;
    font-weight: bold;
  }
  .sub-menu-container {
    display: flex;
    flex-direction: column;
    p {
      margin-bottom: 15px;
    }
  }
}
.header__bottom-navigation-bar--shown {
  transform: translateY(80px);
}
</style>
