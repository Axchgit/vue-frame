<!--
 * @Description:
 * @Author: xch
 * @Date: 2021-04-13 01:28:29
 * @FilePath: \vue-frame\src\views\system\bulletin\view\employee\page.vue
 * @LastEditTime: 2021-04-13 01:37:55
 * @LastEditors: xch
-->

<template>
  <d2-container>
    <template slot="header">
      <span>消息通知</span>
      <!-- <el-button
        v-if="isHighAdmin"
        style="float: right; padding: 6px 100px"
        @click="bulletinDialogVisible = true"
        type="primary"
        icon="el-icon-chat-line-square"
        >发布通告</el-button
      > -->
    </template>

    <bulletin-table
      @updateIsRead="refreshData"
      :tableData="bulletinList"
      :table_title="table_title"
      :page="page"
    >
      <template v-slot:level="scope">
        <el-tag
          v-if="scope.scope.level == 1"
          effect="dark"
          size="small"
          type=""
          >蓝色
        </el-tag>
        <el-tag
          v-else-if="scope.scope.level == 2"
          effect="dark"
          size="small"
          type="yellow"
          >黄色
        </el-tag>
        <el-tag
          v-else-if="scope.scope.level == 3"
          effect="dark"
          size="small"
          type="warning"
          >橙色
        </el-tag>
        <el-tag
          v-else-if="scope.scope.level == 4"
          effect="dark"
          size="small"
          type="danger"
          >红色
        </el-tag>
      </template>

      <template v-slot:is_read="scope">
        <el-tag
          v-if="scope.scope.is_read == 0"
          effect="dark"
          size="small"
          type="danger"
          >未读
        </el-tag>
        <el-tag
          v-else-if="scope.scope.is_read != 0"
          effect="plain"
          size="small"
          type="success"
          >{{ scope.scope.is_read }}
        </el-tag>
      </template>
    </bulletin-table>
    <div class="pagination">
      <!-- <span class="demonstration">大于 7 页时的效果</span> -->
      <el-pagination
        @current-change="handleCurrentChange"
        :current-page="page.current_page"
        layout="prev, pager, next"
        :total="page.total"
        :page-size="newPage.pageSize"
      />
    </div>

    <!-- <div>
      <el-dialog
        title="发布通告"
        :visible.sync="bulletinDialogVisible"
        width="70%"
        :before-close="handleDialogClose"
      >
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="150px"
          class="demo-ruleForm"
        >
          <el-row>
            <el-col :span="12">
              <el-form-item label="通告标题" prop="title">
                <el-input
                  type="text"
                  placeholder="请输入标题"
                  v-model="ruleForm.title"
                  maxlength="10"
                  show-word-limit /></el-form-item
            ></el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <el-form-item label="通告内容" prop="content">
                <el-input
                  :autosize="textareaRowSize"
                  type="textarea"
                  placeholder="请输入通告内容"
                  v-model="ruleForm.content"
                  maxlength="144"
                  show-word-limit /></el-form-item
            ></el-col>
          </el-row>

          <el-form-item label="通告接收人类型" prop="targe_type">
            <el-tooltip placement="top">
              <div slot="content">
                1->当选择全部时,不需要输入接收人,选择单个时输入其学工号<br >2->选择单个时输入其学工号<br >2->多个时,学工号用减号'-'隔开<br >4->职务时,输入要发送群体的职务
              </div>
              <el-select
                v-model="ruleForm.targe_type"
                clearable
                placeholder="请选择"
              >
                <el-option
                  v-for="item in targe_typeOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </el-tooltip>
          </el-form-item>
          <el-row>
            <el-col :span="12">
              <el-form-item
                v-if="ruleForm.targe_type !== 4"
                label="接收人"
                prop="target_person"
              >
                <el-input
                  placeholder="请输入内容"
                  v-model="ruleForm.target_person"
                  clearable
                /> </el-form-item
            ></el-col>
          </el-row>

          <el-form-item label="通告等级" aria-checked="1" prop="level">
            <el-radio v-model="ruleForm.level" label="1">
              <el-tag
effect="dark"
size="small"
type=""
                >蓝色
              </el-tag></el-radio
            >
            <el-radio v-model="ruleForm.level" label="2">
              <el-tag
effect="dark"
size="small"
type="yellow"
                >黄色
              </el-tag></el-radio
            >

            <el-radio v-model="ruleForm.level" label="3">
              <el-tag
effect="dark"
size="small"
type="warning"
                >橙色
              </el-tag></el-radio
            >

            <el-radio v-model="ruleForm.level" label="4">
              <el-tag
effect="dark"
size="small"
type="danger"
                >红色
              </el-tag></el-radio
            >
          </el-form-item>

          <el-form-item>
            <el-button
type="primary"
@click="submitForm('ruleForm')"
              >立即提交</el-button
            >
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="bulletinDialogVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </div> -->
  </d2-container>
</template>
<script>
// import dayjs from 'dayjs'
// import { mapState } from 'vuex'
// import list from '@/views/_mixin/list.js'
// import localeMixin from '@/locales/mixin.js'
import BulletinTable from './components/BulletinTable'
import util from '@/libs/util.js'
import api from '@/api'
// 权限控制
// const roleControl = !(util.cookies.get('roles') < 4)
// import { mapState, mapActions } from 'vuex'

export default {
    // props: ['tableData'],

    //   mixins: [localeMixin],

    // mixins: [list],
    components: {
        BulletinTable
    // D2Badge,
    // D2Help,
    // D2PageCover
    },
    data() {
        return {
            bulletinDialogVisible: false,
            isHighAdmin: false,
            newPage: {
                pageSize: 10
            },
            page: [],
            // targe_typeOptions: [
            //     {
            //         value: 1,
            //         label: '单个人'
            //     },
            //     {
            //         value: 2,
            //         label: '多个人'
            //     },
            //     {
            //         value: 3,
            //         label: '职务'
            //     },
            //     {
            //         value: 4,
            //         label: '全部'
            //     }
            // ],
            // ruleForm: {
            //     title: '',
            //     content: '',
            //     level: '1',
            //     target_person: '',
            //     targe_type: 4
            // },
            // rules: {
            //     title: [{ required: true, message: '请输入标题', trigger: 'change' }],
            //     content: [{ required: true, message: '请输入内容', trigger: 'change' }],
            //     level: [
            //         { required: true, message: '请选择通告等级', trigger: 'change' }
            //     ],
            //     targe_type: [
            //         { required: true, message: '请选择接收人类型', trigger: 'change' }
            //     ],
            //     target_person: [
            //         { required: true, message: '请输入接收人', trigger: 'change' }
            //     ]
            // },
            bulletinList: [],
            table_title: [
                {
                    prop: 'id',
                    label: '编号',
                    width: '80',
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                },

                {
                    prop: 'title',
                    label: '标题',
                    width: '100',
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                },
                // {
                //   prop: 'content',
                //   label: '内容',
                //   minwidth: '300',
                //   titleAlign: 'center',
                //   columnAlign: 'center',
                //   sortable: true,
                //   isEdit: true
                // },
                {
                    prop: 'create_time',
                    label: '发送时间',
                    minwidth: '120',
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                },
                {
                    prop: 'is_read',
                    label: '阅读时间',
                    minwidth: '150',
                    isRead: true,
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                },
                {
                    prop: 'creater',
                    label: '发送人',
                    minwidth: '80px',
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                },
                {
                    prop: 'level',
                    label: '提醒级别',
                    width: '150',
                    tag: true,
                    titleAlign: 'center',
                    columnAlign: 'center',
                    sortable: true
                }
            ],
            textareaRowSize: {
                minRows: 4,
                maxRows: 12
            }
        }
    },
    computed: {
    // 主框架显示用户name
    // ...mapState('d2admin/user', ['info'])
    },
    mounted() {
        this.isHighAdmin = util.cookies.get('roles') < 2

        this.updateData()
    },
    methods: {
        async getBulletin({ page = '', list_rows = '' } = {}) {
            const res = await api.EMP_VIEW_BULLETIN({ page, list_rows })
            return res
        },
        // 发送公告
        // async sendBulletin({
        //     title = '',
        //     content = '',
        //     level = '',
        //     target_person = '',
        //     target_type = ''
        // } = {}) {
        //     const res = await api.ADMIN_SEND_BULLETIN({
        //         title,
        //         content,
        //         level,
        //         target_person,
        //         target_type
        //     })
        //     return res
        // },

        // 页数选择
        handleCurrentChange(currentPage) {
            this.updateData(currentPage)
        },
        // sendBulletin() {},
        // 获取数据
        updateData(currentPage) {
            this.getBulletin({
                page: currentPage,
                list_rows: this.newPage.pageSize
            }).then((res) => {
                this.page = res
                this.bulletinList = res.data
            })
        },
        // 阅读后更新状态
        refreshData(childData) {
            this.getBulletin({
                page: childData.current_page,
                list_rows: childData.per_page
            }).then((res) => {
                this.page = res
                this.bulletinList = res.data
            })
        },

        resetForm(formName) {
            this.$refs[formName].resetFields()
        },
        handleDialogClose(done) {
            this.$confirm('确认关闭？')
                .then((_) => {
                    done()
                })
                .catch((_) => {})
        }
    }
}
</script>

<style lang="scss">
.pagination {
  // position: absolute;
  // bottom: 10px;
  margin-top: 20px;
}
.class-description {
  color: #c7c0c0;
}
</style>
