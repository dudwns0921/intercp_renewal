<template>
  <div class="footer__container">
    <div class="footer__logo-container">
      <img src="https://source.unsplash.com/random" />
    </div>
    <div class="footer__txt-container">
      <p>COPYRIGHT© INTERCP. ALL RIGHT RESERVED.</p>
      <p>서울 용산우체국 사서함 120호 (우) 140-600</p>
      <p>
        TEL : 070-8787-8800 / FAX : 070-7614-3976 / E-MAIL : intercp@intercp.org
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.footer__container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  border-top: 1px solid black;
  height: 146px;
}
.footer__logo-container {
  width: 107px;
  height: 86px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
.footer__txt-container {
  display: flex;
  font-size: 14px;
  flex-direction: column;
  justify-content: flex-end;
  height: 86px;
}
</style>
