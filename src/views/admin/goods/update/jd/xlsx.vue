<!--
 * @Author: xch
 * @Date: 2020-08-29 22:44:20
 * @LastEditTime: 2020-08-31 01:32:55
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\admin\goods\update\jd\xlsx.vue
 * @Description:
-->
<template>
  <d2-container type="card">
    <template slot="header">
      <!-- <el-button @click="download">
        <d2-icon name="download" />下载演示 .xlsx 表格
      </el-button>-->
      <el-upload :before-upload="handleUpload" action="default">
          <el-button  type="primary"  :loading="isLoad">
            <d2-icon name="file-o" />选择要导入的 .xlsx 表格
          </el-button>
      </el-upload>
    </template>
    <!-- <div class="d2-mb"> -->
    <el-row>
      <el-button @click="confirmUpload" type="success">
        确认插入数据
        <!-- <d2-icon name="file-o" />选择要导入的 .xlsx 表格 -->
      </el-button>
    </el-row>
    <!-- </div> -->
    <el-table v-bind="table">
      <el-table-column
        v-for="(item, index) in table.columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
      />
    </el-table>
  </d2-container>
</template>

<script>
import Vue from 'vue'
import api from '@/api'

import pluginImport from '@d2-projects/vue-table-import'
Vue.use(pluginImport)

export default {
  name: 'AdminGoodsUpdateJd',
  data() {
    return {
      results: '',
      isLoad: false,
      table: {
        columns: [],
        data: [],
        size: 'mini',
        stripe: true,
        border: true
      }
    }
  },
  methods: {
    async uploadExcelData(results) {
      const res = await api.GOODS_UPLOAD_EXCEL(results)
      return res
    },
    // loading() {
    //   this.isLoad = !this.isLoad
    //   // setTimeout(() => {
    //   //   // clearInterval(this.timeRan)
    //   //   this.isLoad = !this.isLoad

    //   //   // this.isAble = false;
    //   // }, 5000)
    // },
    handleUpload(file) {
      this.$notify({
        title: '提示',
        message: '正在读取数据,请稍后~~~'
      })

      // this.isLoad = !this.isLoad
      // 限定上传的文件为.xlsx
      const isExcel = file.type === 'application/vnd.ms-excel'
      // const isLt2M = file.size / 1024 / 1024 < 2
      // console.log(file.type)
      if (!isExcel) {
        this.$message.error(' 上传的文件只能是 .xlsx 格式!')
        return false
      }
      this.$import.xlsx(file).then(({ header, results }) => {
        this.table.columns = header.map((e) => {
          return {
            label: e,
            prop: e
          }
        })
        this.table.data = results
        this.results = results
        // console.log(results)
        // console.info(JSON.stringify(this.table.data))
      })
      setTimeout(() => {
        this.$notify({
          title: '提示',
          message: '读取完毕,正在准备展示数据,请稍后~~~',
          type: 'success'
        })
      }, 1000)

      return false
    },
    confirmUpload() {
      // const isEmpty = !!this.table.data
      if (!this.results) {
        this.$message.error('数据为空')
        // console.log(this.results)
        // console.log(!this.results)
        // console.log(isEmpty)
        return false
      }
      this.uploadExcelData(this.table.data).then((res) => {
        if (res === undefined) {
          this.$message.error('失败')
        } else {
          this.$message.success('插入成功')
          // console.info(JSON.stringify(res))
        }
      })
    },
    download() {
      this.$open('https://cdn.d2.pub/files/d2-admin/demo-table.xlsx')
    }
  }
}
</script>
