<template>
  <div class="page-login">
    <div class="page-login--layer page-login--layer-area">
      <ul class="circles">
        <li v-for="n in 10" :key="n"/>
      </ul>
    </div>
    <div class="page-login--layer page-login--layer-time" flex="main:center cross:center">{{time}}</div>
    <div class="page-login--layer">
      <div class="page-login--content" flex="dir:top main:justify cross:stretch box:justify">
        <div class="page-login--content-header">
          <p class="page-login--content-header-motto">时间是一切财富中最宝贵的财富</p>
        </div>
        <div class="page-login--content-main" flex="dir:top main:center cross:center">
          <!-- logo -->
          <!-- <img class="page-login--logo" src="./image/logo-lac.png" /> -->
          <!-- form -->
          <div class="page-login--form">
            <el-card shadow="always">
              <el-form
                ref="recoverForm"
                label-position="top"
                :rules="rules"
                :model="formRecover"
                size="default"
              >
                <el-form-item prop="work_num">
                  <el-input type="text" v-model="formRecover.work_num" placeholder="工号">
                    <!-- <i slot="prepend" class="fa fa-user-circle-o"></i> -->
                  </el-input>
                </el-form-item>
                <el-form-item prop="email">
                  <el-input type="text" v-model="formRecover.email" placeholder="邮箱">
                    <!-- <i slot="prepend" class="fa fa-keyboard-o"></i> -->
                  </el-input>
                </el-form-item>
                <el-form-item prop="code">
                  <el-input id="sendcode" type="text" v-model="formRecover.code" placeholder="验证码">
                    <!-- <i slot="prepend" class="fa fa-envelope-square"></i> -->
                    <template slot="append">
                      <div @click="sendCode">
                        <span>{{timer ? timer : '发送' }}</span>
                      </div>
                    </template>
                  </el-input>
                </el-form-item>
                <el-button size="default" @click="submit" type="primary" class="button-login">提交</el-button>
              </el-form>
            </el-card>
          </div>
        </div>
        <div class="page-login--content-footer"/>
      </div>
    </div>
    <el-dialog
      :title="re_title"
      :visible.sync="dialogRecoverVisible"
      @close="closeDialogRecoverVisible"
    >
      <el-form :model="recover" :rules="re_rules" ref="password">
        <el-form-item prop='password1' label="新密码">
          <el-input type="password" v-model="recover.password1" autocomplete="off"/>
        </el-form-item>
        <el-form-item prop='password2' label="确认密码">
          <el-input type="password" v-model="recover.password2"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogRecoverVisible = false">取 消</el-button>
        <el-button type="primary" @click="savePWForm('recover')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import dayjs from 'dayjs'
import { mapActions } from 'vuex'
import localeMixin from '@/locales/mixin.js'
import api from '@/api'
export default {
    mixins: [localeMixin],
    data() {
        return {
            uuid: '',
            //   isAble: false,
            timeRan: null,
            timeInterval: null,
            time: dayjs().format('HH:mm:ss'),
            dialogRecoverVisible: false,
            timer: 0,
            // 表单
            formRecover: {
                work_num: '',
                email: '',
                code: ''
            },
            // 模态框
            re_title: '',
            recover: {
                password1: '',
                password2: ''
            },
            // 表单校验
            rules: {
                work_num: [
                    {
                        required: true,
                        message: '请输入工号',
                        trigger: 'blur'
                    }
                ],
                email: [
                    {
                        required: true,
                        message: '请输入邮箱',
                        trigger: 'blur'
                    }
                ],
                code: [
                    {
                        required: true,
                        message: '请输入验证码',
                        trigger: 'blur'
                    }
                ]
            },
            re_rules: {
                password1: [
                    {
                        required: true,
                        message: '请输入密码',
                        trigger: 'blur'
                    }
                ],
                password2: [
                    {
                        required: true,
                        message: '请输入确认密码',
                        trigger: 'blur'
                    }
                ]
            }
        }
    },
    mounted() {
        this.timeInterval = setInterval(() => {
            this.refreshTime()
        }, 1000)
    },
    beforeDestroy() {
        clearInterval(this.timeInterval)
    },
    methods: {
    // 验证提交信息
        ...mapActions('d2admin/account', ['empRecover']),
        // 发送验证码
        async sendRecoverCode({ work_num = '', email = '' } = {}) {
            const res = await api.SYS_EMP_SENDRCODE({ work_num, email })
            return res
        },
        // 验证信息,返回用户标识
        async empRecover({ work_num = '', email = '', code = '' } = {}) {
            const res = await api.SYS_EMP_RECOVER({ work_num, email, code })
            return res
        },
        // 更新密码
        async updatePassword({ uuid = '', password = '' } = {}) {
            const res = await api.EMPACCOUNT_UPDATE_PASSWORD({ uuid, password })
            return res
        },
        // 背景时间显示
        refreshTime() {
            this.time = dayjs().format('HH:mm:ss')
        },
        /**
     * @description 提交表单
     */
        submit() {
            this.$refs.recoverForm.validate((valid) => {
                if (valid) {
                    // 登录
                    this.empRecover({
                        work_num: this.formRecover.work_num,
                        email: this.formRecover.email,
                        code: this.formRecover.code
                        // uuid:this.uuid
                    }).then((res) => {
                        console.log(res.uuid)
                        this.uuid = res.uuid

                        this.dialogRecoverVisible = true
                        this.re_title = '修改密码'
                        // 重定向对象不存在则返回顶层路径
                        // this.$router.replace(this.$route.query.redirect || "/");
                    })
                } else {
                    // 登录表单校验失败
                    this.$message.error('表单校验失败，请检查')
                }
            })
        },
        // 提交修改后的密码
        savePWForm(password) {
            this.$refs.password.validate((valid) => {
                if (valid) {
                    if (this.recover.password1 === this.recover.password2) {
                        this.updatePassword({
                            uuid: this.uuid,
                            password: this.recover.password1
                        }).then((res) => {
                            if (res === undefined) {
                                this.$message.error('失败')
                            } else {
                                this.$message.success('成功')
                                // 重定向对象不存在则返回顶层路径
                                this.$router.replace(this.$route.query.redirect || '/')
                            }
                        })
                    }
                }
            })
        },
        // 取消模态框,清空数据
        closeDialogRecoverVisible() {
            this.$refs.password.resetFields() // element封装的方法,清空模态框的值
            this.title = '' // 初始化title的值
            this.recover = {
                // 初始化addForm中的值
                password1: '',
                password2: ''
            }
        },

        // 验证码
        sendCode() {
            if (!this.formRecover.work_num || !this.formRecover.email) {
                this.$message.error('请输入验证信息')
                return false
            }
            if (this.timer > 0) {
                // 知识点:上方弹出提示行
                this.$message.error(this.timer + 's后再发送')
                // 知识点:阻止函数继续向下执行
                return false
            }
            this.timer = 60
            //   this.isAble = true;
            // 知识点:计时器
            this.timeRan = setInterval(() => {
                this.timer--
            }, 1000)
            setTimeout(() => {
                clearInterval(this.timeRan)
                this.timer = null
            }, 5000)
            this.sendRecoverCode({
                work_num: this.formRecover.work_num,
                email: this.formRecover.email
            }).then((res) => {
                if (res === undefined) {
                    this.$message.error('失败')
                } else {
                    this.$message.success('发送成功')
                }
            })
        }
    }
}
</script>

<style lang="scss">
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
  position: absolute;
  height: 40px;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.page-login {
  @extend %unable-select;
  $backgroundColor: #f0f2f5;
  // ---
  background-color: $backgroundColor;
  height: 100%;
  position: relative;
  // 层
  .page-login--layer {
    @extend %full;
    overflow: auto;
  }
  .page-login--layer-area {
    overflow: hidden;
  }
  // 时间
  .page-login--layer-time {
    font-size: 22em;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.03);
    overflow: hidden;
  }
  // 登陆页面控件的容器
  .page-login--content {
    height: 100%;
    min-height: 500px;
  }
  // header
  .page-login--content-header {
    padding: 1em 0;
    .page-login--content-header-motto {
      margin: 0px;
      padding: 0px;
      color: $color-text-normal;
      text-align: center;
      font-size: 12px;
    }
  }
  // main
  .page-login--logo {
    width: 240px;
    margin-bottom: 2em;
    margin-top: -2em;
  }
  // 登录表单
  .page-login--form {
    width: 280px;
    // 卡片
    .el-card {
      margin-bottom: 15px;
    }
    // 登录按钮
    .button-login {
      width: 100%;
      // width: 100%;
      background: #4d3d3e;
      border: #4d3d3e;
    }
    // 输入框左边的图表区域缩窄
    .el-input-group__prepend {
      padding: 0px 14px;
    }
    .login-code {
      height: 40px - 2px;
      display: block;
      margin: 0px -20px;
      border-top-right-radius: 2px;
      border-bottom-right-radius: 2px;
    }
    // 登陆选项
    .page-login--options {
      margin: 0px;
      padding: 0px;
      font-size: 14px;
      color: $color-primary;
      margin-bottom: 15px;
      font-weight: bold;
    }
    .page-login--quick {
      width: 100%;
    }
  }
  // 快速选择用户面板
  .page-login--quick-user {
    @extend %flex-center-col;
    padding: 10px 0px;
    border-radius: 4px;
    &:hover {
      background-color: $color-bg;
      i {
        color: $color-text-normal;
      }
      span {
        color: $color-text-normal;
      }
    }
    i {
      font-size: 36px;
      color: $color-text-sub;
    }
    span {
      font-size: 12px;
      margin-top: 10px;
      color: $color-text-sub;
    }
  }
  // footer
  .page-login--content-footer {
    padding: 1em 0;
    .page-login--content-footer-locales {
      padding: 0px;
      margin: 0px;
      margin-bottom: 15px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
        margin: 0 0.5em;
        &:hover {
          color: $color-text-main;
        }
      }
    }
    .page-login--content-footer-copyright {
      padding: 0px;
      margin: 0px;
      margin-bottom: 10px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      color: $color-text-normal;
      a {
        color: $color-text-normal;
      }
    }
    .page-login--content-footer-options {
      padding: 0px;
      margin: 0px;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
      a {
        color: $color-text-normal;
        margin: 0 1em;
      }
    }
  }
  // 背景
  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0px;
    padding: 0px;
    li {
      position: absolute;
      display: block;
      list-style: none;
      width: 20px;
      height: 20px;
      background: #fff;
      animation: animate 25s linear infinite;
      bottom: -200px;
      @keyframes animate {
        0% {
          transform: translateY(0) rotate(0deg);
          opacity: 1;
          border-radius: 0;
        }
        100% {
          transform: translateY(-1000px) rotate(720deg);
          opacity: 0;
          border-radius: 50%;
        }
      }
      &:nth-child(1) {
        left: 15%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        left: 5%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
      }
      &:nth-child(3) {
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
      }
      &:nth-child(4) {
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
      }
      &:nth-child(5) {
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
      }
      &:nth-child(6) {
        left: 75%;
        width: 150px;
        height: 150px;
        animation-delay: 3s;
      }
      &:nth-child(7) {
        left: 35%;
        width: 200px;
        height: 200px;
        animation-delay: 7s;
      }
      &:nth-child(8) {
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
      }
      &:nth-child(9) {
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
      }
      &:nth-child(10) {
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
      }
    }
  }
}
</style>
