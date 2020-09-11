<!--
 * @Author: xch
 * @Date: 2020-09-02 23:54:37
 * @LastEditTime: 2020-09-10 19:35:22
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\admin\employee\info\index.vue
 * @Description:
-->
<template>
  <d2-container :class="{'page-compact':crud.pageOptions.compact}">
    <!--    <template slot="header">房间管理</template>-->
    <!-- <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" /> -->
    <d2-crud-x ref="d2Crud"  v-bind="_crudProps" v-on="_crudListeners">
      <div slot="header">
        <!-- <crud-search ref="search" :options="crud.searchOptions" @submit="handleSearch" /> -->
        <el-button size="small" type="success" @click="addRow">
          <i class="el-icon-plus" /> 添加
        </el-button>
        <crud-toolbar
          :search.sync="crud.searchOptions.show"
          :compact.sync="crud.pageOptions.compact"
          :columns="crud.columns"
          @refresh="doRefresh()"
          @columns-filter-changed="handleColumnsFilterChanged"
        />
      </div>

      <!-- <el-button slot="header" class="d2-mb-5" size="small" type="primary" @click="addRow">新增</el-button> -->
    </d2-crud-x>
  </d2-container>
</template>

<script>
import { crudOptions } from './crud'
import { d2CrudPlus } from 'd2-crud-plus'
import {
  AddPerformance,
  GetPerformanceList,
  UpdatePerformance,
  DelPerformance
  // selectPerformanceGoodsByUuid
} from './api'
export default {
  name: 'EmployeePerformanceSubmitIndex',
  mixins: [d2CrudPlus.crud],
  data() {
    return {
      // data: ''
    }
  },
  created() {},
  methods: {
    getCrudOptions() {
      return crudOptions
    },
    pageRequest(query) {
      console.log(GetPerformanceList(query))

      return GetPerformanceList(query)
    },
    addRequest(row) {
      return AddPerformance(row)
    },
    updateRequest(row) {
      return UpdatePerformance(row)
    },
    delRequest(row) {
      return DelPerformance(row.id)
    }

    // handleSearch(val) {
    //   var key = ''
    //   var value = ''
    //   console.log(val)
    //   // console.log(value)
    //   if (!val.goods_id) {
    //     if (!val.audit_status && val.audit_status !== 0) {
    //       this.$message.info('表单校验失败，请检查')
    //     } else {
    //       key = 'audit_status'
    //       value = val.audit_status
    //     }
    //   } else {
    //     if (!val.audit_status && val.audit_status !== 0) {
    //       key = 'goods_id'
    //       value = val.goods_id
    //     } else {
    //       this.$message.error('不可同时查询')
    //     }
    //   }
    //   console.log(selectPerformanceGoodsByUuid({ key, value }))
    //   return selectPerformanceGoodsByUuid({ key, value })
    //   // val.goods_id === undefined
    //   //   ? (val.audit_status === undefined
    //   //     ? ([key = false])
    //   //     : [key => 'audit_status', value => val.audit_status])
    //   //   : (val.audit_status === undefined
    //   //     ? ([key => 'goods_id', value => val.goods_id])
    //   //     : ([key = false]))
    //   // console.log(val)
    // }
  }
}
</script>
<style lang="scss" scoped>
div.d2-crud .d2-crud-body {
  padding-top: 0 !important;
}
</style>
