<template>
  <div>
    <el-form :inline="true" size="mini">
      <!-- <el-form-item :label="`已选数据下载 [ ${currentTableData.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadXlsx(currentTableData)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="currentTableData.length === 0"
            @click="handleDownloadCsv(currentTableData)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>-->
      <el-form-item :label="`已选数据下载 [ ${multipleSelection.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadXlsx(multipleSelection)"
          >xlsx</el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadCsv(multipleSelection)"
          >csv</el-button>
        </el-button-group>
      </el-form-item>
    </el-form>

    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      height="540"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="序号" type="index" width="50" />

      <el-table-column label="订单号" align="center">
        <!-- slot-scope可以接收props中的数据(该属性现已废弃,v-slot代替) -->
        <template slot-scope="scope">{{scope.row.order_id}}</template>
      </el-table-column>

      <el-table-column label="商品ID" align="center">
        <template slot-scope="scope">{{scope.row.goods_id}}</template>
      </el-table-column>
      <el-table-column label="商品名称" align="center" show-overflow-tooltip>
        <template slot-scope="scope">{{scope.row.goods_name}}</template>
      </el-table-column>
      <el-table-column label="店铺名称|ID" align="center">
        <template slot-scope="scope">{{scope.row.shop_name}}</template>
      </el-table-column>
      <!-- <el-table-column label="同跨店" align="center">
        <template slot-scope="scope">{{scope.row.is_same_shop}}</template>
      </el-table-column>-->
      <el-table-column label="佣金比例" align="center">
        <template slot-scope="scope">
          <el-tag size="mini" type="">{{scope.row.commission_rate/10+'%'}}</el-tag>
        </template>
      </el-table-column>
      <!-- <el-table-column label="分成比例" align="center">
        <template slot-scope="scope">{{scope.row.division_proportion+'%'}}</template>
      </el-table-column>-->
      <!-- <el-table-column label="预估金额" align="center">
        <template slot-scope="scope">{{scope.row.expec_amount/100}}</template>
      </el-table-column>-->
      <el-table-column label="佣金(元)" align="center">
        <template slot-scope="scope">
          <el-tag size="mini" type="success">{{scope.row.expec_commission/100}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="支付时间" width="150" align="center">
        <template slot-scope="scope">{{scope.row.payment_time | formatDate}}</template>
      </el-table-column>
      <!-- <el-table-column label="创建时间" width="150" :show-overflow-tooltip="true">
        <template slot-scope="scope">{{scope.row.create_time }}</template>
      </el-table-column>-->
      <!--
      <el-table-column label="管理权限" align="center">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.role<3 ? 'success' : 'danger'"
            disable-transitions
            effect="dark"
          >{{scope.row.role}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="性别" width="50" align="center">
        <template slot-scope="scope">{{scope.row.sex ? '男' : '女'}}</template>
      </el-table-column>

      <el-table-column label="账户状态" align="center">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.review_status ? 'success' : 'info'"
            disable-transitions
            effect="dark"
          >{{scope.row.review_status?'已激活':'未激活'}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="创建时间" width="150" :show-overflow-tooltip="true">
        <template slot-scope="scope">{{scope.row.create_time}}</template>
      </el-table-column>-->
      <!--
      <el-table-column label="使用状态" width="100" align="center">
        <template slot-scope="scope">
          <el-tag
            size="mini"
            :type="scope.row.sex ? 'info' : ''">
            {{scope.row.sex ? '已使用' : '未使用'}}
          </el-tag>
        </template>
      </el-table-column>

      <el-table-column label="使用时间" width="150" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.update_time}}
        </template>
      </el-table-column>-->
    </el-table>
  </div>
</template>

<script>
// import BooleanControl from '../BooleanControl'
// import BooleanControlMini from '../BooleanControlMini'
// D2项目逻辑:下载插件引用
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'

Vue.use(pluginExport)

export default {
    filters: {
        formatDate(time) {
            // 知识点:处理excel时间格式及时间戳转换
            const moment = require('moment')
            // 处理从excel中获取的数值,使之变为unix时间戳
            let createTime = (time - 25569) * 24 * 3600
            /**
       * 使用moment插件处理时间戳:
       *  unix:根据秒数处理时间戳(没有此函数则按照毫秒读取)
       *  utc:根据当地时间显示时间(处理时差问题)
       */
            createTime = moment.unix(createTime).utc().format('YYYY-MM-DD HH:mm:ss')
            return createTime
        }
    },
    components: {
    // BooleanControl,
    // BooleanControlMini
    },
    props: {
        tableData: {
            // 默认为空
            default: () => []
        },
        loading: {
            default: false
        }
    },
    data() {
        return {
            currentTableData: [],
            multipleSelection: [],
            downloadColumns: [
                { label: '订单号', prop: 'order_id' },
                { label: '商品ID', prop: 'goods_id' },
                { label: '商品名', prop: 'goods_name' },
                { label: '店铺名', prop: 'shop_name' },
                { label: '账户状态', prop: 'user_review_status}' },
                { label: '创建时间', prop: 'create_time' }
                // { label: '使用状态', prop: 'used' },
                // { label: '使用时间', prop: 'dateTimeUse' }
            ]
        }
    },
    watch: {
        tableData: {
            handler(val) {
                this.currentTableData = val
            },
            immediate: true
        }
    },
    methods: {
        handleSwitchChange(val, index) {
            const oldValue = this.currentTableData[index]
            this.$set(this.currentTableData, index, {
                ...oldValue,
                type: val
            })
            // TODO:
            // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
        },
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        // D2项目逻辑:翻译数据为可读并返回
        downloadDataTranslate(data) {
            return data.map((row) => ({
                ...row,
                type: row.sex ? '男' : '女',
                used: row.rule ? '员工' : '超管'
            }))
        },
        // $export-导出插件;
        handleDownloadXlsx(data) {
            this.$export
                .excel({
                    title: 'vue-frame表格示例',
                    // D2项目逻辑:下载表格的列
                    columns: this.downloadColumns,
                    data: this.downloadDataTranslate(data)
                })
                .then(() => {
                    this.$message.success('导出表格成功')
                })
        },
        handleDownloadCsv(data) {
            this.$export
                .csv({
                    title: 'vue-frame表格示例',
                    columns: this.downloadColumns,
                    data: this.downloadDataTranslate(data)
                })
                .then(() => {
                    this.$message('导出CSV成功')
                })
        }
    }
}
</script>
