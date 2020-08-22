<template>
  <div>
    <el-form
      :inline="true"
      size="mini">
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
      </el-form-item> -->
      <el-form-item :label="`已选数据下载 [ ${multipleSelection.length} ]`">
        <el-button-group>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadXlsx(multipleSelection)">
            xlsx
          </el-button>
          <el-button
            type="primary"
            size="mini"
            :disabled="multipleSelection.length === 0"
            @click="handleDownloadCsv(multipleSelection)">
            csv
          </el-button>
        </el-button-group>
      </el-form-item>
    </el-form>

    <el-table
      :data="currentTableData"
      v-loading="loading"
      size="mini"
      stripe
      style="width: 100%;"
      @selection-change="handleSelectionChange">

      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
      label="序号"
        type="index"
        width="50">
      </el-table-column>

      <el-table-column label="工号"  align="center">
        <!-- D2项目逻辑:slot-scope可以接收props中的数据(该属性现已废弃,v-slot代替) -->
        <template slot-scope="scope">
          {{scope.row.work_num}}
        </template>
      </el-table-column>

      <el-table-column label="姓名" align="center">
        <template slot-scope="scope">
          <!-- D2项目逻辑:在表格内显示按钮形状 -->
          <!-- <el-tag
            size="mini"
            type="success"> -->
            {{scope.row.real_name}}
          <!-- </el-tag> -->
        </template>
      </el-table-column>
<!-- 
      <el-table-column label="权限" width="50" align="center">
        <template slot-scope="scope">
          <boolean-control
            :value="scope.row.rule"
            @change="(val) => {
              handleSwitchChange(val, scope.$index)
            }">
            <d2-icon
              name="check-circle"
              style="font-size: 20px; line-height: 32px; color: #67C23A;"
              slot="active"/>
            <d2-icon
              name="times-circle"
              style="font-size: 20px; line-height: 32px; color: #F56C6C;"
              slot="inactive"/>
          </boolean-control>
        </template>
      </el-table-column> -->

      <el-table-column label="管理权限"  align="center">
        <template slot-scope="scope">
          <boolean-control-mini
            :value="scope.row.rule"
            @change="(val) => {
              handleSwitchChange(val, scope.$index)
            }">
            <d2-icon
              name="check-circle"
              style="font-size: 20px; line-height: 32px; color: #67C23A;"
              slot="inactive"/>active
            <d2-icon
              name="times-circle"
              style="font-size: 20px; line-height: 32px; color: #F56C6C;"
              slot="active"/>
          </boolean-control-mini>
        </template>
      </el-table-column>

      <el-table-column label="性别"  width="50" align="center">
        <template slot-scope="scope">
        {{scope.row.sex ? '男' : '女'}}
        </template>
      </el-table-column>
            <el-table-column label="权限" align="center" >
        <template slot-scope="scope">
          {{scope.row.rule}}
        </template>
      </el-table-column>

      <el-table-column label="账户状态" align="center" >
        <template slot-scope="scope">
          {{scope.row.user_review_status}}
        </template>
      </el-table-column>

      <el-table-column label="创建时间" width="150" :show-overflow-tooltip="true">
        <template slot-scope="scope">
          {{scope.row.create_time}}
        </template>
      </el-table-column>
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
      </el-table-column> -->

    </el-table>
  </div>
</template>

<script>
import BooleanControl from '../BooleanControl'
import BooleanControlMini from '../BooleanControlMini'
// D2项目逻辑:下载插件引用
import Vue from 'vue'
import pluginExport from '@d2-projects/vue-table-export'
Vue.use(pluginExport)

export default {
  components: {
    BooleanControl,
    BooleanControlMini
  },
  props: {
    tableData: {
      //默认为空
      default: () => []
    },
    loading: {
      default: false
    }
  },
  data () {
    return {
      currentTableData: [],
      multipleSelection: [],
      downloadColumns: [
        { label: '工号', prop: 'work_num' },
        { label: '姓名', prop: 'real_name' },
        { label: '权限', prop: 'rule' },
        { label: '性别', prop: 'sex' },
        { label: '账户状态', prop: 'user_review_status}' },
        { label: '创建时间', prop: 'create_time' },
        // { label: '使用状态', prop: 'used' },
        // { label: '使用时间', prop: 'dateTimeUse' }
      ]
    }
  },
  watch: {
    tableData: {
      handler (val) {
        this.currentTableData = val
      },
      immediate: true
    }
  },
  methods: {
    handleSwitchChange (val, index) {
      const oldValue = this.currentTableData[index]
      this.$set(this.currentTableData, index, {
        ...oldValue,
        type: val
      })
      //TODO:
      // 注意 这里并没有把修改后的数据传递出去 如果需要的话请自行修改
    },
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    //D2项目逻辑:翻译数据为可读并返回
    downloadDataTranslate (data) {
      return data.map(row => ({
        ...row,
        type: row.sex ? '男' : '女',
        used: row.rule ? '员工' : '超管'
      }))
    },
    //$export-导出插件;
    handleDownloadXlsx (data) {
      this.$export.excel({
        title: 'D2Admin 表格示例',
        //D2项目逻辑:下载表格的列
        columns: this.downloadColumns,
        data: this.downloadDataTranslate(data)
      })
        .then(() => {
          this.$message.success('导出表格成功')
        })
    },
    handleDownloadCsv (data) {
      this.$export.csv({
        title: 'D2Admin 表格示例',
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
