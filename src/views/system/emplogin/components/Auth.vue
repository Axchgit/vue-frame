<template>
  <!-- 扫码登录 -->
  <div class="login_box">
    <!-- <router-link to="/input"> -->
      <div  @click="changeToInput('InputLogin')" class="login_close"/>
    <!-- </router-link> -->

    <div class="qrcode">
      <!-- <img
        class="img"
        :src="imgURL"
        alt="登录码"
        v-show="state === 1 || state === 3"
      /> -->

      <div id="qrCode" v-show="state === 1 || state === 3" ref="qrCodeDiv" class="img" />

      <div class="empty" v-show="state === 0"/>
      <div class="refresh" v-show="state === 3">
        <i class="refresh_mask"/>
        <i class="refresh_icon" @click="refQrcode"/>
      </div>
      <div class="result" v-show="state === 2">
        <img class="u_avatar" :src="userAvatar" alt="用户头像" >
        <p class="u_name">{{ userName }}</p>
      </div>
      <div>
        <p class="sub_title">{{ tip }}</p>
        <p class="sub_desc">扫码登录，更易、更快、更安全</p>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/api'
import { mapActions } from 'vuex'

import QRCode from 'qrcodejs2' // 在指定页面引入，也可以在main.js里面全局引用
// let qrcode = ''
export default {
    name: 'Auth',
    data() {
        return {
            // qrcode: '',
            state: 0, // 场景：0无登录码，1有登陆码，2正在登录，3登录码过期
            count: 30, // 登录码有效倒计时（S）
            tip: '正在获取登录码，请稍等', // 提示
            imgURL: '', // 登录码路径
            authToken: '', // 验证口令
            workNum: '', // 扫码登录的用户ID
            userAvatar: '', // 扫码登录的用户头像
            userName: '', // 扫码登录的用户名
            timeCount: '',
            tokenApi: 'http://localhost/auth/token', // 获取口令
            tokenImgApi: 'http://localhost/auth/img/', // 获取口令对应的登录码
            tokenInfoApi: 'http://localhost/auth/info/', // 获取口令信息
            userInfoApi: 'http://localhost/login/getUser', // 获取用户信息
            qrUid: '',
            qrUrl: ''
        }
    },
    mounted() {

    },
    created() {
        this.getToken()
        const api = process.env.VUE_APP_API
        this.tokenApi = api + '/auth/token'
        this.tokenImgApi = api + '/auth/img'
        this.tokenInfoApi = api + '/auth/info'
        this.userInfoApi = api + '/auth/getUser'
    },
    methods: {

        /** ****异步函数 */
        ...mapActions('d2admin/account', ['qrLogin']),

        async getJsonDataByFileName({ json_file_name = '' } = {}) {
            const res = await api.INDEX_GET_JSONDATA({ json_file_name })
            return res
        },
        async getUserInfoByWorkNum({ workNum = '' } = {}) {
            const res = await api.SYS_EMP_GETUSERINFO({ workNum })
            return res
        },
        async getQruid() {
            const res = await api.SYS_EMP_GETQRUID()
            return res
        },
        async getQruidInfo({ url = '/login/getAuthInfo/' + this.qrUid } = {}) {
            const res = await api.SYS_EMP_GETQRUIDINFO(url)
            return res
        },

        /** ******** */
        // refreshQruid() {
        //     this.getQruid().then((res) => {
        //         if (res.status === 0) {
        //             this.qrUid = res.qruid
        //             this.tip = '请使用手机口令扫码登录'
        //             this.timeCount = setInterval(this.getTokenInfo, 1000) // 开启每隔1S的轮询，向服务器请求口令信息
        //         } else {
        //             this.state = 0
        //         }
        //         // console.log(this.person_info['装出人姓名'])
        //     })
        // },

        changeToInput(name) {
            clearInterval(this.timeCount)

            this.$parent.changeComponents(name)
        },
        bindQRCode() {
            // eslint-disable-next-line no-new
            new QRCode(this.$refs.qrCodeDiv, {
                text: this.qrUid,
                width: 240,
                height: 240,
                colorDark: '#333333', // 二维码颜色
                colorLight: '#ffffff', // 二维码背景色
                correctLevel: QRCode.CorrectLevel.L // 容错率，L/M/H
            })
        },
        refQrcode() {
            clearInterval(this.timeCount)
            this.$refs.qrCodeDiv.innerHTML = ''
            this.getToken()
        },

        getToken() {
            console.log('开始获取')
            // 所有参数重置
            this.state = 0 // 场景为无二维码
            this.qrUrl = ''
            // new QRCode().clear()
            // this.qrcode.clean()
            this.tip = '正在获取登录码，请稍等'
            this.count = 30
            // clearInterval(this.timeCount)
            this.getQruid().then((res) => {
                if (res.status === 0) {
                    this.qrUid = res.qruid
                    this.state = 1 // 场景为有登录码
                    this.qrUrl = process.env.VUE_APP_API + 'login/' + res.qruid
                    // console.log(this.qrUrl)
                    this.$nextTick(function() {
                        this.bindQRCode()
                    })
                    this.tip = '请使用手机客户端扫码登录'
                    this.timeCount = setInterval(this.getTokenInfo, 1000) // 开启每隔1S的轮询，向服务器请求口令信息
                } else {
                    this.getToken()
                }
                // console.log(this.person_info['装出人姓名'])
            })
            // 开始获取新的token
            // this.$ajax({
            //     method: 'post',
            //     url: this.tokenApi // 获取口令的API
            // })
            //     .then((response) => {
            //         // 保存token，改变场景，显示登录码，开始轮询
            //         this.authToken = response.data.data
            //         this.state = 1 // 场景为有登录码
            //         this.tip = '请使用手机口令扫码登录'
            //         this.imgURL = this.tokenImgApi + response.data.data // 拼装获得登录码链接
            //         this.timeCount = setInterval(this.getTokenInfo, 1000) // 开启每隔1S的轮询，向服务器请求口令信息
            //     })
            //     .catch((error) => {
            //         console.log(error)
            //         this.getToken()
            //     })
        },
        getTokenInfo() {
            // 登录码有效时间减少
            this.count--
            // 登录码到期，改变场景
            if (this.count === 0) {
                this.state = 3 // 场景为登录码过期
                this.tip = '二维码已过期，请刷新'
            }
            // 防止计数溢出
            if (this.count < -1000) {
                this.count = -1
            }
            // 轮询查询token状态
            // this.$ajax({
            //     method: 'post',
            //     url: this.tokenInfoApi + this.authToken // 拼装获得口令信息API
            // })
            this.getQruidInfo(this.qrUid).then((res) => {
                // const auth = res
                // token状态为登录成功
                if (res.auth_state === 1) {
                    this.$message({
                        message: '登录成功！',
                        type: 'success'
                    })
                    clearInterval(this.timeCount) // 关闭轮询，溜了
                    // 登录成功,根据token和uuid获取用户信息
                    this.qrLogin({
                        token: res.token,
                        role: res.role,
                        uuid: res.uuid
                    }).then(() => {
                        // 重定向对象不存在则返回顶层路径
                        this.$router.replace(this.$route.query.redirect || '/')
                    })
                    // token状态为正在登陆，改变场景，请求扫码用户信息
                } else if (res.auth_state === 2) {
                    // console.log(auth.user_uuid)
                    this.workNum = res.work_num
                    this.getUserInfo()
                    this.state = 2
                    this.tip = '扫码成功，请在手机上确认'
                    // token状态为过期（服务器），改变场景
                } else if (res.auth_state === 3) {
                    this.state = 3
                    this.tip = '二维码已过期，请刷新'
                }
            })
            // .catch((error) => {
            //     console.log(error)
            // })
        },
        getUserInfo() {
            // this.$ajax({
            //     method: 'post',
            //     url: this.userInfoApi,
            //     data: this.qs.stringify({
            //         userId: this.userId
            //     })
            // })
            console.log(this.workNum)

            this.getUserInfoByWorkNum({ workNum: this.workNum })
                .then((res) => {
                    // 获取用户信息，并进行显示
                    this.userName = res.nick_name
                    this.userAvatar = res.avatar
                    // console.log(response.data.data)
                })
                // .catch((error) => {
                //     console.log(error)
                // })
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
  background: url(../img/pcinput.png) no-repeat right top;
  background-size: 100% 100%;
  border-top-right-radius: 5px;
  cursor: pointer;
  z-index: 99;
}
/*二维码*/
.qrcode {
  position: relative;
  text-align: center;
}

/* 二维码获取 */
.qrcode .img {
  display: block;
  width: 240px;
  height: 240px;
  margin: 70px auto 25px;
}

.qrcode .sub_title {
  text-align: center;
  font-size: 19px;
  color: #353535;
  margin-bottom: 23px;
}

.qrcode .sub_desc {
  text-align: center;
  color: #a3a3a3;
  font-size: 14px;
  padding: 0 40px;
  line-height: 1.8;
}

/* 二维码为空 */
.qrcode .empty {
  display: block;
  width: 240px;
  height: 240px;
  margin: 70px auto 25px;
  background: #d7e8fc;
}

/* 二维码刷新 */
.qrcode .refresh {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 240px;
}

.qrcode .refresh .refresh_mask {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -120px;
  margin-top: -120px;
  width: 240px;
  height: 240px;
  background: #ffffffe0;
}

.qrcode .refresh .refresh_icon {
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -48px;
  margin-top: -48px;
  height: 96px;
  width: 96px;
  cursor: pointer;
  background: url(../img/refresh.png) no-repeat;
}

.qrcode .refresh .refresh_icon:hover {
  animation: refresh 1s linear infinite;
}

@keyframes refresh {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/* 二维码结果 */
.qrcode .result {
  display: block;
  width: 240px;
  height: 240px;
  margin: 70px auto 25px;
}

.qrcode .result .u_avatar {
  height: 150px;
  width: 150px;
  margin-top: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 10px #999;
  -moz-box-shadow: #999 0 2px 10px;
  -webkit-box-shadow: #999 0 2px 10px;
}

.qrcode .result .u_name {
  text-align: center;
  font-size: 19px;
  color: #353535;
  margin-top: 20px;
}
</style>
