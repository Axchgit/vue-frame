<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-08-17 20:08:16
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\dom\table\componnets\BooleanControl\index.vue
 * @Description: 改变用户状态的模态按钮
-->
<template>
  <el-popover
    :placement="popoverPlacement"
    :title="popoverTitle"
    :width="popoverWidth"
    trigger="hover">
    <el-switch
      v-model="currentValue"
      :active-color="activeColor"
      :inactive-color="inactiveColor"
      :active-text="activeText"
      :inactive-text="inactiveText"
      :disabled="disabled"
      @change="handleChange"/>
    <span slot="reference">
      <slot v-if="value" name="active"/>
      <slot v-else name="inactive"/>
    </span>
  </el-popover>
</template>

<script>
export default {
    props: {
        value: {
            default: false
        },
        popoverPlacement: {
            default: 'left'
        },
        popoverTitle: {
            default: '修改'
        },
        popoverWidth: {
            default: '150'
        },
        activeColor: {
            default: '#67C23A'
        },
        inactiveColor: {
            default: '#F56C6C'
        },
        activeText: {
            default: '正常'
        },
        inactiveText: {
            default: '禁用'
        }
    },
    data() {
        return {
            currentValue: false,
            disabled: false
        }
    },
    watch: {
        value: {
            // D2项目逻辑:val为事件接收值
            handler(val) {
                this.currentValue = val
            },
            immediate: true
        }
    },
    methods: {
        handleChange(val) {
            // 控制元素disabled属性
            this.disabled = true
            this.$message({
                message: '正在发送请求',
                type: 'info'
            })
            // TODO:
            // 请将 setTimeout 修改为您的异步请求
            setTimeout(() => {
                this.disabled = false
                this.$message({
                    message: '修改成功',
                    type: 'success'
                })
                this.$emit('change', val)
                // 如果修改失败的话需要在这里手动将 currentValue 复原
            }, 1000)
        }
    }
}
</script>
