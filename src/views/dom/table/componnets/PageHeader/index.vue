<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-08-23 16:11:02
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\dom\table\componnets\PageHeader\index.vue
 * @Description: 表格头部,负责查询组件
-->
<template>
  <el-form
    :inline="true"
    :model="form"
    ref="form"
    size="mini"
    style="margin-bottom: -18px;">

    <el-form-item label="工号" prop="work_num">
      <el-input
        v-model="form.work_num"
        placeholder="员工工号"
        style="width: 100px;"/>
      <!-- <el-select
        v-model="form.work_num"
        placeholder="状态选择"
        style="width: 100px;">
        <el-option label="状态 1" value="1"/>
        <el-option label="状态 2" value="2"/>
        <el-option label="状态 3" value="3"/>
        <el-option label="状态 4" value="4"/>
        <el-option label="状态 5" value="5"/>
      </el-select> -->
    </el-form-item>

    <el-form-item label="姓名" prop="real_name">
      <el-input
        v-model="form.real_name"
        placeholder="员工真实姓名"
        style="width: 120px;"/>
    </el-form-item>

    <!-- <el-form-item label="备注" prop="note">
      <el-input
        v-model="form.note"
        placeholder="备注"
        style="width: 120px;"/>
    </el-form-item> -->

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmitInfo">
        <d2-icon name="searchbyinfo"/>
        查询
      </el-button>
    </el-form-item>
    <!-- 知识点:el表单嵌套 -->
<el-form-item>
  <el-form
    :model="form"
    :roles="role_roles"
    ref="rule_form"
    size="mini"
    style="margin-bottom: -18px;">

    <el-form-item  label="权限" prop="role">
      <el-input
        v-model="form.role"
        placeholder="权限等级"
        style="width: 120px;"/>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmitRole">
        <d2-icon name="searchbyrule"/>
        查询
      </el-button>
    </el-form-item>

  </el-form>
</el-form-item>

    <el-form-item>
      <el-button
        @click="handleFormReset">
        <d2-icon name="refresh"/>
        重置
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button
        type="primary"
        @click="handleFormSubmit">
        <d2-icon name="searchall"/>
        全部数据
      </el-button>
    </el-form-item>

  </el-form>
</template>

<script>
export default {
    data() {
        return {
            form: {
                work_num: '',
                real_name: '',
                role: ''
                // note: ''
            },
            // rules: {
            //   work_num: [{ required: true, message: '请选择一个状态', trigger: 'change' }],
            //   real_name: [{ required: true, message: '请输入用户', trigger: 'change' }]
            // },
            role_roles: {
                role: [{ required: true, message: '请填入权限', trigger: 'change' }]
                // real_name: [{ required: true, message: '请输入用户', trigger: 'change' }]
            }
        }
    },
    methods: {
        handleFormSubmitInfo() {
            // this.$refs.form.validate((valid) => {
            // if (valid) {
            // D2项目逻辑:验证是否填入内容
            // 给父组件提交form内容以供查询
            // console.log([this.form.work_num,this.form.real_name])
            this.$emit('submitInfo', {
                work_num: this.form.work_num,
                real_name: this.form.real_name
            })
            // } else {
            //   this.$notify.error({
            //     title: '错误',
            //     message: '表单校验失败'
            //   })
            //   return false
            // }
            // })
        },
        handleFormSubmitRole() {
            this.$refs.rule_form.validate((valid) => {
                if (valid) {
                    // D2项目逻辑:验证是否填入内容
                    // 给父组件提交form内容以供查询
                    console.log(this.form.role)
                    this.$emit('submitRule', { role: this.form.role })
                } else {
                    this.$notify.error({
                        title: '错误',
                        message: '表单校验失败'
                    })
                    return false
                }
            })
        },
        handleFormSubmit() {
            // this.$refs.form.validate((valid) => {
            // if (valid) {
            // D2项目逻辑:验证是否填入内容
            // 给父组件提交form内容以供查询
            this.$emit('submit', '')
            // } else {
            //   this.$notify.error({
            //     title: '错误',
            //     message: '表单校验失败'
            //   })
            //   return false
            // }
            // })
        },
        handleFormReset() {
            this.$refs.form.resetFields()
        }
    }
}
</script>
