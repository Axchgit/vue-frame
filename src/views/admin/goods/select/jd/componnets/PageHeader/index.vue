<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-09-01 02:16:16
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\admin\goods\select\jd\componnets\PageHeader\index.vue
 * @Description: 表格头部,负责查询组件
-->
<template>
  <el-form :rules="rules" :inline="true" :model="form" ref="form" size="mini" style="margin-bottom: -18px;">
    <!-- <el-form-item label="工号" prop="work_num">
    <el-input v-model="form.work_num" placeholder="员工工号" style="width: 100px;" />-->
    <!-- <el-select
        v-model="form.work_num"
        placeholder="状态选择"
        style="width: 100px;">
        <el-option label="状态 1" value="1"/>
        <el-option label="状态 2" value="2"/>
        <el-option label="状态 3" value="3"/>
        <el-option label="状态 4" value="4"/>
        <el-option label="状态 5" value="5"/>
    </el-select>-->
    <!-- </el-form-item> -->
    <!--
    <el-form-item label="姓名" prop="real_name">
      <el-input v-model="form.real_name" placeholder="员工真实姓名" style="width: 120px;" />
    </el-form-item>-->

    <el-form-item prop="select_key">
      <el-cascader
        @change="submitSelect"
        ref="cascader"
        value="form.select_key"
        :options="options"
        :show-all-levels="false"
        placeholder="选择查询对象"
        :props="{ expandTrigger: 'hover' }"
        clearable
      />
    </el-form-item>
    <el-form-item :label="cascader_label+':'" prop="select_value">
      <el-input v-model="form.select_value" placeholder="在这里输入" style="width: 120px;" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleSubmitSelect">
        <d2-icon name="searchbyinfo" />查询
      </el-button>
    </el-form-item>

    <!-- <el-form-item label="备注" prop="note">
      <el-input
        v-model="form.note"
        placeholder="备注"
        style="width: 120px;"/>
    </el-form-item>-->

    <!-- <el-form-item>
      <el-button type="primary" @click="handleFormSubmitInfo">
        <d2-icon name="searchbyinfo" />查询
      </el-button>
    </el-form-item> -->
    <!-- 知识点:el表单嵌套 -->
    <!-- <el-form-item>
      <el-form
        :model="form"
        :rules="role"
        ref="role_form"
        size="mini"
        style="margin-bottom: -18px;"
      >
        <el-form-item label="权限" prop="role">
          <el-input v-model="form.role" placeholder="权限等级" style="width: 120px;" />
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="handleFormSubmitRole">
            <d2-icon name="searchbyrule" />查询
          </el-button>
        </el-form-item>
      </el-form>
    </el-form-item> -->

    <el-form-item>
      <el-button @click="handleFormReset">
        <d2-icon name="refresh" />重置
      </el-button>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="handleFormSubmit">
        <d2-icon name="searchall" />全部数据
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      cascader_label: '',
      options: [
        {
          value: 'order_id',
          label: '订单号'
        },
        {
          value: 'goods_id',
          label: '商品ID'
        },
        {
          value: 'likeSelect',
          label: '模糊查询',
          children: [
            {
              value: 'goods_name',
              label: '商品名'
            },
            {
              value: 'shop_name',
              label: '店铺名'
            }
          ]
        }
      ],
      form: {

        select_key: '',
        select_value: ''
      },
      rules: {
        // select_key: [{ required: true, message: '请选择查询对象', trigger: 'change' }],
        select_value: [{ required: true, message: '请填入值', trigger: 'change' }]
      }
    }
  },
  methods: {
    submitSelect(val) {
      const key = this.$refs.cascader.getCheckedNodes(true)
      // const label = this.$refs.cascader.currentLabels()
      // 知识点:利用数组长度判断数组中是否有数据
      this.cascader_label = key.length !== 0 ? key[0].label : '请选择'
      // console.log(key[0].value)
      // console.log(label)
      // 知识点:获取数组最后一个元素
      this.form.select_key = val[val.length - 1]
      // console.log(val[val.length - 1])
    },
    handleSubmitSelect() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 项目逻辑:验证是否填入内容
          // 给父组件提交form内容以供查询
          // console.log([this.form.work_num, this.form.real_name])
          this.$emit('submitSelect', {
            table_page: 'select',
            key: this.form.select_key,
            value: this.form.select_value
          })
        } else {
          this.$notify.error({
            title: '错误',
            message: '表单校验失败'
          })
          return false
        }
      })
    },
    // handleFormSubmitRole() {
    //   this.$refs.role_form.validate((valid) => {
    //     if (valid) {
    //       // 项目逻辑:验证是否填入内容
    //       // 给父组件提交form内容以供查询
    //       console.log(this.form.role)
    //       this.$emit('submitRule', { role: this.form.role })
    //     } else {
    //       this.$notify.error({
    //         title: '错误',
    //         message: '表单校验失败'
    //       })
    //       return false
    //     }
    //   })
    // },
    handleFormSubmit() {
      // this.$refs.form.validate((valid) => {
      // if (valid) {
      // D2项目逻辑:验证是否填入内容
      // 给父组件提交form内容以供查询
      this.$emit('submit', { table_page: 'all' })

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
