<!--
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-20 12:41:29
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\demo\page1\index.vue
 * @Description:
-->
<template>
  <d2-container>
    <template slot="header">Page 1 header</template>
    Hello World!!!
    <el-input style="width:100px" v-model="input" size="medium" placeholder="请输入内容"/>
  <el-button @click="verifyCode" type="primary">提交验证码</el-button>
    <!-- <div @click="refreshCode"> -->
      <template >
        <div @click="refreshCode" style="width:100px">
      <Sidentify  :identifyCode="identifyCode"/>
        </div>
      </template>

    <!-- </div> -->
    <div class="title-group">
      <p class="title">一般用法</p>
      <p class="sub-title">
        <template v-if="icon">
          选择的图标 {{icon}}
          <i :class="'fa fa-' + icon"/>
        </template>
        <template v-else>未选择</template>
      </p>
    </div>
    <d2-icon-select v-model="icon" />
    <div class="title-group">
      <p class="title">用户可以输入</p>
      <p class="sub-title">
        <template v-if="icon2">
          选择的图标 {{icon2}}
          <i :class="'fa fa-' + icon2"/>
        </template>
        <template v-else>未选择</template>
      </p>
    </div>
    <d2-icon-select v-model="icon2" :user-input="true" />
  </d2-container>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      icon: '',
      icon2: '',
      identifyCode: ' ',
      identifyCodeKey: 'qwertyuiopasdfghjklzxcvbnm1234567890'
    }
  },
  name: 'Page1',
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    refreshCode() {
      // 刷新验证码前清空之前的
      this.identifyCode = ''
      this.makeCode(4)
      console.log('当前验证码==' + this.identifyCode)
    },
    makeCode(l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodeKey[
          this.randomNum(0, this.identifyCodeKey.length)
        ]
      }
    },
    verifyCode() {
      if (this.input == this.identifyCode) {
        console.log('验证码输入正确')
      } else {
        console.log('错误')
      }
      this.refreshCode()
    }

  },
  created() {
    this.refreshCode()
  }
}
</script>

<style lang="scss" scoped>
.title-group {
  margin-top: 20px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0px;
  }
  .title {
    margin: 0px;
  }
  .sub-title {
    margin: 0px;
    color: $color-text-sub;
    font-size: 10px;
  }
}
</style>

