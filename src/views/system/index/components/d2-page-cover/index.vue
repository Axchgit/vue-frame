<!--
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-23 16:54:32
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\system\index\components\d2-page-cover\index.vue
 * @Description:
-->
<template>
  <div class="d2-page-cover">
    <div class="d2-page-cover__logo">
      <slot/>
    </div>
    <p class="d2-page-cover__title">vue-frame {{$version}}</p>
    <p class="d2-page-cover__sub-title">学创网络科技有限公司后台管理系统-测试项目</p>
    <p class="d2-page-cover__build-time">最后编辑时间 {{$buildTime}}</p>
    <slot name="footer"/>
    <a target="blank" href="https://github.com/Axchgit/vue-frame">
      <img
        style="position: absolute; top: 0; right: 0; border: 0; width: 150px;"
        src="./image/darkblue@2x.png"
        alt="Fork me on GitHub">
    </a>
  </div>
</template>

<style lang="scss" scoped>
.d2-page-cover {
  @extend %full;
  @extend %unable-select;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  .d2-page-cover__logo {
    img {
      width: 200px;
    }
  }
  .d2-page-cover__title {
    margin: 0px;
    margin-bottom: 20px;
    font-weight: bold;
    color: $color-text-main;
  }
  .d2-page-cover__sub-title {
    margin: 0px;
    margin-bottom: 5px;
    color: $color-text-normal;
  }
  .d2-page-cover__build-time {
    margin: 0px;
    margin-bottom: 10px;
    font-size: 12px;
    color: $color-text-placehoder;
  }
}
</style>
