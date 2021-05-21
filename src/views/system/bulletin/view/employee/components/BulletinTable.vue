<!--
 * @Description:
 * @Author: 罗曼
 * @Date: 2020-11-11 22:02:08
 * @FilePath: \vue-frame\src\views\system\bulletin\view\employee\components\BulletinTable.vue
 * @LastEditTime: 2021-05-18 13:12:13
 * @LastEditors: xch
-->
<template>
  <div class="table-content">
    <el-table
      :data="tableData"
      class="mt-10"
      fit
      stripe
      empty-text="暂无数据"
      :highlight-current-row="true"
    >
      <el-table-column
        v-for="(item, index) in table_title"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width ? item.width : null"
        :min-width="item.minwidth ? item.minwidth : null"
        :sortable="item.sortable ? item.sortable : false"
        :align="item.columnAlign"
        :header-align="item.titleAlign"
      >
        <template slot-scope="scope">
          <template v-if="item.tag">
            <slot name="level" :scope="scope.row" />
          </template>

          <template v-else-if="item.isRead">
            <slot name="is_read" :scope="scope.row" />
          </template>

          <span v-else>{{ scope.row[item.prop] }}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button
@click="handleClick(scope.row)"
type="primary"
size="small"
            >查看</el-button
          >

          <!-- <el-button type="text" size="small">编辑</el-button> -->
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-dialog
        title="通告"
        :visible.sync="centerDialogVisible"
        width="30%"
        center
      >
        <div>
          <h1>{{ dialogContent.title }}</h1>
        </div>
        <div>
         <span>{{ dialogContent.content }}</span>
        </div>

        <span slot="footer" class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取 消</el-button>
          <el-button
type="primary"
@click="centerDialogVisible = false"
            >确 定</el-button
          >
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
// import dayjs from 'dayjs'
// import { mapState } from 'vuex'
// import list from '@/views/_mixin/list.js'
// import localeMixin from '@/locales/mixin.js'
import api from '@/api'
// import { mapState, mapActions } from 'vuex'

export default {
    props: ['tableData', 'table_title', 'page'],

    //   mixins: [localeMixin],

    // mixins: [list],
    data() {
        return {
            centerDialogVisible: false,
            dialogContent: {
                // title: '',
                // content: ''
            }
        }
    },
    computed: {
    // 主框架显示用户name
    // ...mapState('d2admin/user', ['info'])
    },
    mounted() {
    // this.getNationCharts().then((res) => {
    //   res.length ? this.$message.error('获取数据失败') : (this.chartData = res)
    //   // console.log(this.lineChartData)
    // })
    },
    methods: {
    // 阅读通告
        async readBulletin({ bulletin_id = '' } = {}) {
            const res = await api.EMP_READ_BULLETIN({ bulletin_id })
            return res
        },
        // 阅读按钮
        handleClick(val) {
            this.centerDialogVisible = true
            this.dialogContent = val
            // console.log(this.page)
            console.log('content', val)
            // 判断是否需阅读过
            if (val.is_read === '0') {
                this.readBulletin({ bulletin_id: val.id }).then((res) => {
                    this.$emit('updateIsRead', this.page)
                })
            }
        }
    }
}
</script>

<style lang="scss" >
//知识点:更改element ui 默认样式
.el-tag--dark.el-tag--yellow {
  background-color: #ffd727;
  border-color: #ffd727;
  color: #fff;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.charts-one {
  width: 100%;
  // height: 80%;
  // float: left;
  background: rgb(237, 249, 255);
}
// .charts-two {
//   width: 100%;
//   // height: 100%;
//   // float: left;
// }
// .charts-three {
//   width: 100%;
//   // height: 100%;
//   // float: left;
// }
// .charts-four {
//   width: 100%;
//   // height: 100%;
//   // float: left;
// }
.inner {
  // position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  background: rgb(237, 249, 255);
}
// .charts-two {
//   width: 24%;
//   float: right;
// }
// .avatar {
//   size: 100px;
//   text-align: center;
//   //   box-shadow: 2px 2px 2px rgba(0,0,0,.1);
// }
// .person-name {
//   text-align: center;
//   font-size: 20px;
//   font-weight: bold;
// }
// .person-role {
//   text-align: center;
//   font-size: 10px;
//   font-weight: bold;
//   color: #777;
// }
// .font-center {
//   text-align: center;
// }
// .hr {
//   //   color: #e62121;
//   border: 0;
//   background: rgb(194, 194, 194);
//   height: 1px;
// }

// .span-introduce-title {
//   font-size: 15px;
//   color: #777;
// }
// .p-introduce-body {
//   color: #777;
//   font-size: 15px;
// }
// .divider-word {
//   // border:1px solid black;
//   border-radius: 3px;
//   font-size: 1px;
//   color: #ffffff;
//   //   background: #0bbd87;
// }
</style>
