<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-09-01 11:30:38
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\admin\goods\select\jd\componnets\PageHeader\index.vue
 * @Description: 表格头部,负责查询组件
-->
<template>
  <el-form :rules="rules" :inline="true" :model="form" ref="form" size="mini" style="margin-bottom: -18px;">
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
            cascader_label: '请输入',
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
            // 知识点:利用数组长度判断数组中是否有数据
            this.cascader_label = key.length !== 0 ? key[0].label : '请选择'
            // 知识点:获取数组最后一个元素
            this.form.select_key = val[val.length - 1]
        },
        handleSubmitSelect() {
            this.$refs.form.validate((valid) => {
                if (valid) {
                    // 验证是否填入内容
                    // 给父组件提交form内容以供查询
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
        handleFormSubmit() {
            this.$emit('submit', { table_page: 'all' })
        },
        // 重置输入框
        handleFormReset() {
            this.$refs.form.resetFields()
        }
    }
}
</script>
