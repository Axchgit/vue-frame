<!--
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2021-05-18 11:55:39
 * @LastEditors: xch
 * @FilePath: \vue-frame\src\views\system\index\page.vue
 * @Description:
-->
<template>
  <d2-container class="page">
    <d2-page-cover>
      <!-- <img src="./image/icon.png" style="width: 500px;" /> -->

      <d2-icon-svg class="logo" name="logo" style />

      <template slot="footer">
        <div class="btn-group">
          <!-- <span class="btn-group__btn" @click="$open('https://github.com/d2-projects')">开源组织</span> |
          <span class="btn-group__btn" @click="$open('https://d2.pub/zh/doc/d2-admin')">文档</span> |
          <span
            class="btn-group__btn"
            @click="$open('https://github.com/d2-projects/d2-admin-start-kit')"
          >简化版</span> |
          <span
            class="btn-group__btn"
            @click="$open('https://juejin.im/user/57a48b632e958a006691b946/posts')"
          >掘金</span> |-->
          <!-- <el-popover :width="172" trigger="hover">
            <p class="d2-mt-0 d2-mb-10">今日前端</p>
            <img src="./image/weixin_light.png" style="width: 172px;" >
            <span slot="reference" class="btn-group__btn btn-group__btn--link">
              <d2-icon name="weixin" />开发者微信
            </span>
            <p
              style="font-size: 12px; margin-top: 0px; margin-bottom: 0px;"
            >官方公众号，主要推送前端技术类文章、框架资源、学习教程，以及 D2 系列项目更新信息</p>
          </el-popover> -->
        </div>
        <!-- <d2-badge/> -->
        <!-- <d2-help /> -->
      </template>
    </d2-page-cover>
  </d2-container>
</template>

<script>
// import D2Badge from './components/d2-badge'
// import D2Help from './components/d2-help'
import D2PageCover from './components/d2-page-cover'
export default {
    components: {
        // D2Badge,
        // D2Help,
        D2PageCover
    }
}
</script>

<style lang="scss" scoped>
.page {
  .logo {
    top: 30%;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 625px;
    height: 167px;
    // width: 120px;
  }

  .btn-group {
    color: $color-text-placehoder;
    font-size: 12px;
    line-height: 12px;
    margin-top: 0px;
    margin-bottom: 20px;

    .btn-group__btn {
      color: $color-text-sub;
      &:hover {
        color: $color-text-main;
      }
      &.btn-group__btn--link {
        color: $color-primary;
      }
    }
  }
}
</style>
