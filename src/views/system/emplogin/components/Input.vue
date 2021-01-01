<template>
  <div>
    <!--  账号输入登录-->
    <div class="login_box">
      <!-- <router-link to="/auth"> -->
      <div @click="changeToAuth('AuthLogin')" class="login_close" />
      <!-- </router-link> -->
      <div class="login_panel">
        <div class="login_title">
          <!-- <img src="../img/logo.png" alt=""> -->
          <img class="page-login--logo" src="../image/logo-login-03.png" >

          <p>输入账号进行安全登录</p>
        </div>
        <label style="margin-top: 50px">账号：</label>
        <input
          v-model="formLogin.username"
          type="tel"
          pattern="^\d{11}$"
          title="请输入账号"
        >
        <label>密码：</label>
        <input
          v-model="formLogin.password"
          type="password"
          title="请输入密码"
        >

        <input class="bt" @click="submit" type="submit" value="登录" >
                    <p class="page-login--options" flex="main:justify cross:center">

                <router-link to='emprecover'> <span><d2-icon name="question-circle" />忘记密码</span></router-link>
                <!-- <a href="emprecover">
                  <d2-icon name="question-circle" />忘记密码
                </a> -->
                <router-link to='empactivate'> <span><d2-icon name="" />激活账户</span></router-link>

              <!-- <span>注册用户</span> -->
            </p>
      </div>
    </div>
    <el-dialog
      width="350px"
      title="验证"
      :visible.sync="dialogVisibleSlideVerify"
    >
      <slide-verify
        :l="42"
        :r="10"
        :w="310"
        :h="155"
        slider-text="向右滑动"
        @success="onSuccess"
        @fail="onFail"
        ref="slideblock"
      />
      <!-- <div>{{msg}}</div> -->
    </el-dialog>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    name: 'Input',
    components: {
    // SlideVerify: () => import('vue-monoplasty-slide-verify')
    // InputLogin: () => import('./components/Input')
    // DemoPageFooter: () => import('./componnets/PageFooter')
    },
    data() {
        return {
            formLogin: {
                username: '',
                password: '',
                code: ''
            },
            dialogVisibleSlideVerify: false,
            userId: '',
            userPassword: '',
            userInfoApi: 'http://localhost/login' // 通过用户ID登录接口
        }
    },
    methods: {
    /** ***图片滑动验证 */
    // 图片验证成功
        async onSuccess() {
            this.$refs.slideblock.reset()
            // 成功后的逻辑代码
            this.dialogVisibleSlideVerify = false
            this.$message.success('表单验证成功,正在登录')

            // 登录
            this.empLogin({
                username: this.formLogin.username,
                password: this.formLogin.password
            }).then(() => {
                // 重定向对象不存在则返回顶层路径
                this.$router.replace(this.$route.query.redirect || '/')
            })
        },
        // 验证失败
        onFail() {
            this.alertMsg('验证失败', 'error')
            // 失败后的逻辑代码
        },

        changeToAuth(name) {
            this.$parent.changeComponents(name)
        },
        ...mapActions('d2admin/account', ['empLogin']),

        /**
     * @description 提交表单
     */
        // 提交登录信息
        submit() {
            if (this.formLogin.username === '' || this.formLogin.password === '') {
                this.$message.error('请填写完整登录信息')
                return false
            }
            this.dialogVisibleSlideVerify = true
        }
    }
}
</script>

<style scoped>
/*登录框*/
.login_box {
  z-index: 99;
  position: absolute;
  width: 380px;
  height: 540px;
  top: 50%;
  left: 50%;
  margin-left: -190px;
  margin-top: -270px;
  border-radius: 6px;
  background-color: #fff;
  box-shadow: 0 2px 10px #999;
}

.login_close {
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 64px;
  background: url(../img/qrcode.png) no-repeat right top;
  background-size: 100% 100%;
  border-top-right-radius: 5px;
  cursor: pointer;
  z-index: 99;
}

/*登录*/
.login_panel {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 270px;
  height: 540px;
  padding: 0 55px;
  transform: translate(-50%, -50%);
  /* background: #fff; */
  border-radius: 6px;
  overflow: hidden;
}

.login_panel .login_title {
  text-align: center;
}

.login_panel .login_title img {
  margin-top: 60px;
  /* height: 70px;
    width: 70px; */
  /* border-radius: 50%; */
  padding: 10px;
  /* border: 3px solid #d7e8fc; */
}

.login_panel .login_title p {
  margin-top: 15px;
  color: #999999;
  font-size: 15px;
}

.login_panel label {
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: #a9a8a5;
  margin-top: 10px;
}

.login_panel input {
  display: inline;
  height: 42px;
  padding: 0 5%;
  line-height: 42px;
  font-size: 14px;
  color: #333333;
  border-radius: 4px;
  outline: 0;
  border: 0;
  width: 90%;
  background: #d7e8fc;
}

/* 按钮 */
.login_panel .bt {
  margin-top: 35px;
  width: 100%;
  color: #ffffff;
  background: #379df6;
  cursor: pointer;
}

.login_panel .bt:hover {
  background-color: #2f86f6;
}
</style>
