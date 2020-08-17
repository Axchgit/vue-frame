<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-08-17 20:11:10
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\dom\table\componnets\PageFooter\index.vue
 * @Description: 
-->
<template>
  <el-pagination
    :current-page="current"
    background
    :page-size="size"
    :total="total"
    :page-sizes="[10, 20, 30, 40]"
    layout="total, sizes, prev, pager, next, jumper"
    style="margin: -10px;"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</template>

<script>
export default {
  props: {
    current: {
      default: 0
    },
    size: {
      default: 0
    },
    total: {
      default: 0
    }
  },
  methods: {
    handleSizeChange (val) {
      //TODO:$emit作用:子组件可以使用 $emit 触发父组件的自定义事件
      this.$emit('change', {
        current: this.current,
        size: val,
        total: this.total
      })
    },
    handleCurrentChange (val) {
      this.$emit('change', {
        current: val,
        size: this.size,
        total: this.total
      })
    }
  }
}
</script>
