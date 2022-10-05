<template>
  <section><carousel-component :img-files="imgFiles" /></section>
  <blank-component :height="80" />
  <section>
    <div class="introduction-content">
      <div class="introduction-content__txt-container">
        <div class="introduction-content__figure left-bracket"></div>
        <div class="introduction-content__txt">
          <p>InterCP international은</p>
          <p>미전도종족 전방개척선교를 수행하는</p>
          <p class="introduction-content__txt--hightlighted">
            평신도 전문인 선교단체<span>입니다</span>
          </p>
        </div>
        <div class="introduction-content__figure right-bracket"></div>
      </div>
    </div>
  </section>
  <blank-component :height="80" />
  <section>
    <div class="introduction-content">
      <div class="introduction-content__video-container">
        <p>InterCP 소개 동영상</p>
        <iframe
          width="988"
          height="557"
          src="https://www.youtube.com/embed/W2_Cj1SuBLI"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </section>
  <blank-component :height="100" />
  <section>
    <div class="introduction-content">
      <div class="introduction-content__link-box-container">
        <link-box-component title="BACK TO BIBLE" to="introduction" />
        <link-box-component title="BACK TO JEJUS" to="internalPrograms" />
        <link-box-component title="JEJUS MOVEMENT" to="overseasPrograms" />
      </div>
    </div>
  </section>
  <blank-component :height="40" />
  <section>
    <div class="introduction-content">
      <link-box-component-large
        title="TARGET2030"
        subTitle="한국교회 세계선교비전"
        message="2030년까지 10만명의 선교사를 파송하여 세계복음화를 완성하자는 한국교회 선교비전이다."
        width="100%"
        height="265px"
        backgroundColor="#3E74BA"
      />
    </div>
  </section>
  <blank-component :height="132" />
  <section>
    <div class="introduction-content">
      <tab-component :tabs="TABS" />
    </div>
  </section>
  <blank-component :height="70" />
  <section class="introduction-content__programs">
    <div class="introduction-content introduction-content__programs-container">
      <p>참여 프로그램</p>
      <blank-component :height="24" />
      <div class="introduction-content__participate-programs-container">
        <photo-box-component
          v-for="imgFile in imgFiles.slice(0, 2)"
          :key="imgFile"
          :img-file="imgFile"
        />
      </div>
      <blank-component :height="40" />
      <p>국내외 프로그램</p>
      <blank-component :height="24" />
      <div class="introduction-content__in-out-programs-container">
        <link-box-component-decorated
          v-for="program in PROGRAMS"
          :key="program.title"
          :title="program.title"
          :is-recruiting="program.isRecruiting"
        />
      </div>
      <blank-component :height="24" />
      <div class="introduction-content__in-out-programs-more-btn">더보기</div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CarouselComponent from '../components/CarouselComponent.vue';
import BlankComponent from '../components/BlankComponent.vue';
import LinkBoxComponent from '../components/LinkBoxComponent.vue';
import LinkBoxComponentLarge from '../components/LinkBoxComponentLarge.vue';
import LinkBoxComponentDecorated from '../components/LinkBoxComponentDecorated.vue';
import TabComponent from '../components/TabComponent.vue';
import PhotoBoxComponent from '../components/PhotoBoxComponent.vue';

import { TABS, PROGRAMS } from '../constant/constants';
import { imgFiles } from '../mock/mockData';
</script>

<style lang="scss" scoped>
section,
.introduction-content {
  width: 100%;
  display: flex;
  justify-content: center;
}
.introduction-content {
  width: 1440px;
}

.introduction-content__txt-container {
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  width: 645px;
  height: 250px;
  .introduction-content__figure {
    position: absolute;
    width: 80px;
    height: 80px;
    border: 5px solid #111e4b;
  }
  .left-bracket {
    border-right: none;
    border-bottom: none;
    top: 0;
    left: 0;
  }
  .right-bracket {
    border-left: none;
    border-top: none;
    bottom: 0;
    right: 0;
  }
  .introduction-content__txt {
    font-size: 26px;
  }
  .introduction-content__txt--hightlighted {
    font-weight: bold;
    font-size: 30px;
    color: #111e4b;
    span {
      color: black;
    }
  }
}

.introduction-content__video-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 700px;
  background: linear-gradient(180deg, #3e74ba 0%, #111e4b 100%);
  p {
    display: block;
    font-size: 25px;
    font-weight: bold;
    color: white;
  }
}

.introduction-content__link-box-container {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
}

.introduction-content__programs {
  background-color: #fbfbfc;
}

.introduction-content__programs-container {
  padding: 50px 0;
  height: 822px;
  flex-direction: column;
  align-items: center;
  position: relative;
  p {
    font-size: 32px;
    font-weight: bold;
  }

  .introduction-content__participate-programs-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
  }

  .introduction-content__in-out-programs-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px 30px;
  }
  .introduction-content__in-out-programs-more-btn {
    width: 108px;
    height: 42px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 50px;
    color: white;
    background-color: #3e74ba;
    cursor: pointer;
  }
}
</style>
