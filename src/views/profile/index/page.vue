<!--
 * @Description:
 * @Author: xch

 * @Date: 2020-11-11 22:02:08
 * @FilePath: \vue-frame\src\views\profile\index\page.vue
 * @LastEditTime: 2021-04-11 00:42:33
 * @LastEditors: xch
-->

<template>
  <d2-container>
    <el-card class="box-card-profile">
      <div slot="header" class="clearfix">
        <span>账户资料</span>
        <el-button
          style="float: right; padding: 3px 0"
          type="text"
          @click="activeName = 'third'"
          >修改</el-button
        >
      </div>
      <my-upload
        field="img"
        @crop-success="cropSuccess"
        @crop-upload-success="cropUploadSuccess"
        @crop-upload-fail="cropUploadFail"
        v-model="uploadAvatarShow"
        :width="300"
        :height="300"
        :url="uploadUrl"
        :params="params"
        :headers="uploadHeaders"
      />
      <div class="avatar">
        <!-- <el-avatar shape="circle" :size="120" :src="http://localhost:8088/images/avatar/avatar1.png" /> -->
        <el-avatar shape="circle" :size="120" :src="newavatar" />
      </div>
      <p class="font-center">
        <span class="person-name">{{ info.name }}</span>
      </p>
      <p class="font-center">
        <span class="person-role">{{ info.roles | personRole }}</span>
      </p>

      <br >
      <div>
        <i class="fa fa-id-card-o" />
        <span class="span-introduce-title"> 个人简介</span>
        <hr class="hr" >
        <p class="p-introduce-body">{{ profile }}</p>
        <!-- <el-divider/> -->
      </div>
      <br ><br ><br ><br ><br ><br ><br ><br ><br ><br ><br ><br ><br >
    </el-card>

    <el-card class="box-card-timeline">
      <div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="登录记录" name="first">
            <el-divider content-position="left">
              <div class="divider-word">登录时间线</div>
            </el-divider>
            <el-timeline>
              <el-timeline-item
                v-for="(loginRecord, index) in loginRecords"
                :key="index"
                :timestamp="loginRecord.create_time"
                color="#0bbd87"
              >
                登录IP地址:{{ loginRecord.login_ip }}
              </el-timeline-item>
            </el-timeline>
            <el-divider content-position="left" />
          </el-tab-pane>

          <!-- <el-tab-pane label="配置管理" name="second">
            <div class="block">
              <el-timeline>
                <el-timeline-item timestamp="2018/4/12" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/12 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/3" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/3 20:46</p>
                  </el-card>
                </el-timeline-item>
                <el-timeline-item timestamp="2018/4/2" placement="top">
                  <el-card>
                    <h4>更新 Github 模板</h4>
                    <p>王小虎 提交于 2018/4/2 20:46</p>
                  </el-card>
                </el-timeline-item>
              </el-timeline>
            </div>
          </el-tab-pane> -->
          <el-tab-pane label="账户信息" name="third">
            <span class="tab-title">账户信息</span>
            <!-- <hr> -->
            <el-divider />
            <div>
              <p><span class="high-weight-font">头像</span></p>
              <span class="low-weight-font">已设置</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                size="medium"
                @click="toggleShow"
                >修改</el-button
              >
            </div>
            <el-divider><i class="el-icon-picture-outline-round" /></el-divider>

            <div>
              <p><span class="high-weight-font">密码</span></p>
              <span class="low-weight-font">已设置</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                size="medium"
                @click="dialogUpdatePasswordFormVisible = true"
                >修改</el-button
              >
            </div>
            <el-divider><i class="el-icon-lock" /></el-divider>
            <div>
              <p><span class="high-weight-font">个人简介</span></p>
              <span class="low-weight-font">已设置</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                size="medium"
                @click="dialogUpdateProfileFormVisible = true"
                >修改</el-button
              >
            </div>
            <el-divider><i class="el-icon-user" /></el-divider>
            <div>
              <p><span class="high-weight-font">个人邮箱</span></p>
              <span class="low-weight-font">默认</span>
              <el-button
                style="float: right; padding: 3px 0"
                type="text"
                size="medium"
                @click="
                  () => {
                    this.$alert('请联系管理员', '提示', {
                      confirmButtonText: '确定',
                    });
                  }
                "
                >修改</el-button
              >
            </div>
            <el-divider><i class="el-icon-message" /></el-divider>
          </el-tab-pane>
          <!-- <el-tab-pane label="定时任务" name="fourth">定时任务补偿</el-tab-pane> -->
        </el-tabs>
      </div>
    </el-card>
    <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->

    <el-dialog
      title="修改密码"
      :visible.sync="dialogUpdatePasswordFormVisible"
      :before-close="handleClose"
      center
    >
      <el-dialog
        title="邮箱验证"
        :visible.sync="dialogCheckEmailFormVisible"
        width="30%"
        center
        append-to-body
        @close="resetDialogForms"
      >
        <span />
        <el-alert
          title="您正在进行敏感操作,需要邮箱验证"
          type="warning"
          show-icon
        />
        <br >
        <el-alert
          title="提示"
          type="info"
          description="请点击发送按钮,接收邮箱验证码"
          close-text="知道了"
          show-icon
        />
        <br >
        <el-input placeholder="请输入验证码" v-model="emailCode">
          <template slot="append">
            <div @click="sendCode">
              <span>{{ timer ? timer : "发送" }}</span>
            </div></template
          >
        </el-input>
        <span slot="footer" class="dialog-footer">
          <el-button
@click="dialogCheckEmailFormVisible = false"
            >取 消</el-button
          >
          <el-button type="primary" @click="checkEmailCode">确 定</el-button>
        </span>
      </el-dialog>

      <div class="dialog-form">
        <el-form
          ref="activateForm"
          label-position="top"
          :rules="rules"
          :model="formPassword"
          size="default"
        >
          <!-- <el-row :gutter="20">
            <el-col :span="12"> -->
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="formPassword.pass"
              autocomplete="off"
            />
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="formPassword.checkPass"
              autocomplete="off"
            />
          </el-form-item>
          <!-- </el-col>
          </el-row> -->
        </el-form>
      </div>

      <div slot="footer" class="dialog-footer">
        <el-button
@click="dialogUpdatePasswordFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitPasswordForm">确 定</el-button>
      </div>
    </el-dialog>

    <el-dialog
      title="修改个人简介"
      :visible.sync="dialogUpdateProfileFormVisible"
      :before-close="handleClose"
      center
    >
      <!-- <div class="dialog-form"> -->
      <el-form label-position="top" :model="formProfile" size="default">
        <!-- <el-row :gutter="20">
            <el-col :span="12"> -->
        <el-form-item label="个人简介" prop="profile">
          <el-input
            type="textarea"
            placeholder="请输入简介"
            v-model="formProfile.profile"
            maxlength="144"
            show-word-limit
          />
        </el-form-item>
        <!--
                        <el-form-item label="通告内容" prop="content">
                <el-input
                  :autosize="textareaRowSize"
                  type="textarea"
                  placeholder="请输入通告内容"
                  v-model="ruleForm.content"
                  maxlength="144"
                  show-word-limit /></el-form-item
            > -->
        <!-- <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="formPassword.checkPass"
              autocomplete="off"
            />
          </el-form-item> -->
        <!-- </el-col>
          </el-row> -->
      </el-form>
      <!-- </div> -->

      <div slot="footer" class="dialog-footer">
        <el-button
@click="dialogUpdateProfileFormVisible = false"
          >取 消</el-button
        >
        <el-button type="primary" @click="submitProfileForm">确 定</el-button>
      </div>
    </el-dialog>
  </d2-container>
</template>
<script>
// import dayjs from 'dayjs'
// import { mapState } from "vuex";
// import localeMixin from '@/locales/mixin.js'
import api from '@/api'
import { mapState, mapActions } from 'vuex'
import util from '@/libs/util.js'
// import 'babel-polyfill' // es6 shim
// import Vue from 'vue'
// import store from '@/store/index'

import myUpload from 'vue-image-crop-upload'
export default {
    components: {
        myUpload
    // d2HeaderColor
    },
    //   mixins: [localeMixin],
    data() {
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'))
            } else {
                if (this.formPassword.checkPass !== '') {
                    this.$refs.activateForm.validateField('checkPass')
                }
                callback()
            }
        }
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'))
            } else if (value !== this.formPassword.pass) {
                callback(new Error('两次输入密码不一致!'))
            } else {
                callback()
            }
        }
        return {
            profile: '',
            timeRan: null,
            emailCode: '',
            timer: 0,
            activeName: 'first',
            loginRecords: [],
            dialogUpdatePasswordFormVisible: false,
            dialogUpdateProfileFormVisible: false,

            dialogCheckEmailFormVisible: false,
            formProfile: {
                profile: ''
            },
            formPassword: {
                pass: '',
                checkPass: ''
            },
            // 表单校验
            rules: {
                pass: [{ validator: validatePass, trigger: 'blur' }],
                checkPass: [{ validator: validatePass2, trigger: 'blur' }]
            },
            formLabelWidth: '120px',
            avatar: '',
            // 头像上传
            uploadAvatarShow: false,
            params: {
                // token: '123456798',
                // name: 'avatar'
            },
            uploadHeaders: {
                // smail: '*_~'
            },
            uploadUrl: ''
        }
    },
    computed: {
        ...mapState('d2admin/user', ['info']),
        newavatar: function() {
            return process.env.VUE_APP_API + '/images/' + this.info.avatar
        }
    },

    mounted() {
        this.updateProfile()
    },
    methods: {
    /** 异步函数*/
        async getProfile() {
            const res = await api.PROFILE_GET_PERSON()
            return res
        },

        async sendEmployeeEmailCode({ msg = '' } = {}) {
            const res = await api.PUBLIC_EMPLOYEE_SEND_EMAILCODE({ msg })
            return res
        },
        async updatePasswordByEmailCode({ password = '', email_code = '' } = {}) {
            const res = await api.EMPLOYEE_UPDATE_PASSWORD({
                password,
                email_code
            })
            return res
        },
        async changeProfileByToken({ profile = '' } = {}) {
            const res = await api.EMPLOYEE_UPDATE_INFO({ profile })
            return res
        },

        /**
     * @description 提交表单
     */
        submitPasswordForm() {
            this.$refs.activateForm.validate((valid) => {
                if (valid) {
                    this.dialogCheckEmailFormVisible = true
                    // this.dialog_title = '身份认证'
                } else {
                    this.$message.error('表单校验失败，请检查')
                }
            })
        },
        /**
     * @description 提交表单
     */
        submitProfileForm() {
            this.changeProfileByToken({
                // number: util.cookies.get('uuid'),
                profile: this.formProfile.profile
            }).then((res) => {
                this.dialogUpdateProfileFormVisible = false
                this.updateProfile()
                this.$notify({
                    title: '成功',
                    message: '修改成功',
                    type: 'success'
                })
                // 重定向对象不存在则返回顶层路径
                // this.$router.replace(this.$route.query.redirect || '/')
            })
            // this.$refs.activateForm.validate((valid) => {
            //   if (valid) {
            // this.dialogCheckEmailFormVisible = true
            // this.dialog_title = '身份认证'
            // } else {
            //   this.$message.error('表单校验失败，请检查')
            // }
        },

        checkEmailCode() {
            if (this.emailCode === '') {
                this.$message.error('请输入验证码')
                return false
            }
            this.dialogCheckEmailFormVisible = false
            this.updatePasswordByEmailCode({
                // number: util.cookies.get('uuid'),
                password: this.formPassword.pass,
                email_code: this.emailCode
            }).then((res) => {
                this.dialogUpdatePasswordFormVisible = false
                this.$notify({
                    title: '成功',
                    message: '修改成功',
                    type: 'success'
                })
                // 重定向对象不存在则返回顶层路径
                // this.$router.replace(this.$route.query.redirect || '/')
            })
        },
        // 验证码
        sendCode() {
            if (this.timer > 0) {
                // 上方弹出提示行
                this.$message.error(this.timer + 's后再发送')
                // 阻止函数继续向下执行
                return false
            }
            this.timer = 5
            //   this.isAble = true;
            // 计时器
            this.timeRan = setInterval(() => {
                this.timer--
            }, 1000)
            setTimeout(() => {
                clearInterval(this.timeRan)
                this.timer = null
            }, this.timer * 1000)
            // 发送验证码
            this.sendEmployeeEmailCode({
                msg: '修改密码'
                // number: util.cookies.get('uuid')
                // email: this.formRecover.email
            }).then((res) => {
                console.log(res)
                if (res.code === 204) {
                    this.$message.error('失败')
                } else {
                    this.$message.success('发送成功')
                }
            })
        },
        updateProfile() {
            this.getProfile().then((res) => {
                if (res === undefined) {
                    this.$message.error('获取失败')
                } else {
                    // console.log(res.pa_info.profile)
                    this.profile = res.el_info.profile
                    // this.$message.success('激活成功')
                    // console.log(res.login_record)
                    this.loginRecords = res.login_record
                }
            })
        },
        /** **头像上传 */
        toggleShow() {
            this.uploadAvatarShow = !this.uploadAvatarShow
            const token = util.cookies.get('token')
            console.log(token)
            this.uploadHeaders = {
                Authorization: token,
                Accept: 'application/json, text/javascript, */*;'
                // 'Content-Type': 'multipart/form-data'
            }
            // this.uploadHeaders.push({ Authorization: token })
            // this.uploadHeaders.Authorization = token
            // console.log(this.uploadHeaders)
            this.uploadUrl = process.env.VUE_APP_API + 'index/uploadAvatar'
            // this.uploadUrl = 'http://127.0.0.1:8088/index/uploadAvatar'
        },
        /**
     * crop success
     *
     * [param] imgDataUrl
     * [param] field
     */
        cropSuccess(imgDataUrl, field) {
            console.log('-------- crop success --------')
            // this.imgDataUrl = imgDataUrl
        },
        ...mapActions('d2admin/account', ['refPersonInfo']),

        /**
     * upload success
     *
     * [param] jsonData   服务器返回数据，已进行json转码
     * [param] field
     */
        cropUploadSuccess(jsonData, field) {
            console.log('-------- upload success --------')
            console.log(jsonData)
            console.log('field: ' + field)
            this.refPersonInfo()
            this.uploadAvatarShow = !this.uploadAvatarShow
            this.$notify({
                title: '成功',
                message: '修改成功',
                type: 'success'
            })
            // async function refAvatar() {
            //   //   // 删除cookie
            //   //   util.cookies.remove('token')
            //   //   util.cookies.remove('uuid')
            //   //   util.cookies.remove('roles')
            //   const resInfo = await api.SYS_PERSON_GETINFO()

            //   // 清空 vuex 用户信息
            //   await store.dispatch(
            //     'd2admin/user/set',
            //     { avatar: resInfo.id_photo },
            //     { root: true }
            //   )
            //   // 跳转路由
            //   // errorCreate(`${dataAxios.msg}: ${response.config.url}`)
            // }
            // refAvatar()
        },
        /**
     * upload fail
     *
     * [param] status    server api return error status, like 500
     * [param] field
     */
        cropUploadFail(status, field) {
            console.log('-------- upload fail --------')
            console.log(status)
            console.log('field: ' + field)
        },
        /** *** */
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then((_) => {
                    done()
                })
                .catch((_) => {})
        },
        resetDialogForms() {
            this.$refs.activateForm.resetFields() // form是绑定数据,一定记得加prop参数，不加的话无法重置弹框表单数据
        }
    },
    filters: {
        personRole: function(value) {
            const roleDict = [
                0,
                '超级管理员',
                1,
                '管理员',
                2,
                '管理员',
                3,
                '校级管理员',
                4,
                '院级管理员',
                5,
                '行政人员',
                6,
                '教师',
                7,
                '普通职工',
                8,
                '学生',
                9,
                '校外临时人员'
            ]
            const roleIndex = roleDict.indexOf(parseInt(value))
            return roleDict[roleIndex + 1]
        }
    }
}
</script>

<style lang="scss">
.dialog-form {
  width: 50%;
  margin: 0 auto;
}
.high-weight-font {
  font-weight: 1000;
}
.low-weight-font {
  font-weight: 50;
}
.tab-title {
  font-size: 24px;
  // border: #777;
  font-weight: 1000;
}
.box-card-profile {
  width: 20%;
  float: left;
}
.box-card-timeline {
  width: 78%;
  float: right;
}
.avatar {
  size: 100px;
  text-align: center;
  //   box-shadow: 2px 2px 2px rgba(0,0,0,.1);
}
.person-name {
  text-align: center;
  font-size: 20px;
  font-weight: bold;
}
.person-role {
  text-align: center;
  font-size: 10px;
  font-weight: bold;
  color: #777;
}
.font-center {
  text-align: center;
}
.hr {
  //   color: #e62121;
  border: 0;
  background: rgb(194, 194, 194);
  height: 1px;
}

.span-introduce-title {
  font-size: 15px;
  color: #777;
}
.p-introduce-body {
  color: #777;
  font-size: 15px;
}
.divider-word {
  // border:1px solid black;
  border-radius: 3px;
  font-size: 1px;
  color: #ffffff;
  background: #0bbd87;
}
</style>

