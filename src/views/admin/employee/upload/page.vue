<!--
 * @Author: xch
 * @Date: 2020-08-29 22:44:20
 * @LastEditTime: 2020-09-15 14:05:59
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\admin\goods\update\page.vue
 * @Description:
-->
<template>
  <d2-container type="card">
    <template slot="header">
      <!-- <el-button @click="download">
        <d2-icon name="download" />下载演示 .xlsx 表格
      </el-button>-->
      <el-upload :before-upload="handleUpload" action="default">
        <el-button type="primary" :loading="isLoad">
          <d2-icon name="file-o" />选择要导入的 .xls或.csv 表格
        </el-button>
      </el-upload>
      <!-- <el-upload :before-upload="handleUpload" action="default">
        <el-button type="success">
          <d2-icon name="file-o" />选择要导入的 .csv 表格
        </el-button>
      </el-upload>-->
    </template>
    <!-- <div class="d2-mb"> -->
    <el-row>
      <el-button @click="confirmUpload" type="success">
        确认插入数据
        <!-- <d2-icon name="file-o" />选择要导入的 .xlsx 表格 -->
      </el-button>
    </el-row>

    <!-- </div> -->
    <el-progress v-if='isUpload ==true' :format="format" :percentage="percentage" :color="customColors"/>

    <div>
      <span class="tip" style="font-weight:bold;color:rgb(103, 194, 58);font-size:20px;">示例数据:</span>
    </div>
    <br >
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
    name: 'AdminGoodsUpdateIndex',
    data() {
        return {
            isUpload: false,
            percentage: 0,
            customColors: [
                { color: '#f56c6c', percentage: 20 },
                { color: '#e6a23c', percentage: 40 },
                { color: '#5cb87a', percentage: 60 },
                { color: '#1989fa', percentage: 80 },
                { color: '#6f7ad3', percentage: 100 }
            ],
            speed: '',
            results: '',
            fileType: '',
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
            const res = await api.UPLOAD_EMPLOYEE_EXCEL(results)
            return res
        },
        format(percentage) {
            return percentage === 100 ? '完成' : (percentage === -1 ? '失败' : `${percentage}%`)
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
            // 隐藏进度条
            this.isUpload = false

            // this.isLoad = !this.isLoad
            // 限定上传的文件为.xlsx
            const isExcel = file.type === 'application/vnd.ms-excel' || file.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            // console.log(file.name.lastIndexOf('.'))
            // console.log(file.name.length)
            // console.log(file.name.slice(file.name.lastIndexOf('.') + 1))

            // substring(first + 1, namelength)
            // const isLt2M = file.size / 1024 / 1024 < 2
            // console.log(file.type)
            if (!isExcel) {
                this.$message.error(' 上传的文件只能是 .xls或.csv 格式!')
                return false
            }
            const fileNameLast = file.name.slice(file.name.lastIndexOf('.') + 1)
            if (fileNameLast === 'xls' || fileNameLast === 'xlsx') {
                this.$import.xlsx(file).then(({ header, results }) => {
                    this.table.columns = header.map((e) => {
                        return {
                            label: e,
                            prop: e
                        }
                    })
                    this.table.data = [results[0]]
                    this.results = results
                    // this.fileType = 'xls'

                    // console.log(results)
                    // console.info(JSON.stringify(this.results))
                })
                setTimeout(() => {
                    this.$notify({
                        title: '提示',
                        message: '读取完毕,正在准备展示数据,请稍后~~~',
                        type: 'success'
                    })
                }, 1000)

                return false
            } else {
                this.$import.csv(file)
                    .then(res => {
                        this.table.columns = Object.keys(res.data[0]).map(e => ({
                            label: e,
                            prop: e
                        }))
                        this.table.data = [res.data[0]]
                        this.results = res.data
                        // this.fileType = 'csv'
                        // console.info(JSON.stringify(this.table.data))
                    })
                return false
            }
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
            // 设置进度条
            this.isUpload = true
            this.percentage = 0
            this.speed = setInterval(() => {
                this.percentage += 1
                if (this.percentage > 95) {
                    this.percentage = 95
                }
            }, 500)
            this.uploadExcelData(this.results).then((res) => {
                if (res === undefined) {
                    clearInterval(this.speed)
                    this.percentage = -1
                    this.$message.error('失败')
                } else {
                    clearInterval(this.speed)
                    this.percentage = 100
                    this.$message.success('插入成功')
                    // console.info(JSON.stringify(res))
                }
            })
        }
        // download() {
        //     this.$open('https://cdn.d2.pub/files/d2-admin/demo-table.xlsx')
        // }
    }
}
</script>
