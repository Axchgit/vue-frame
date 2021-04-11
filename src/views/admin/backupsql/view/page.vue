<!--
 * @Author: 罗曼
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2021-04-12 00:08:28
 * @LastEditors: xch
 * @FilePath: \vue-frame\src\views\admin\backupsql\view\page.vue
 * @Description:
-->
<template>
  <d2-container class="page">
    <template slot="header">
      <span>数据库备份与恢复</span>
      <el-button
        style="float: right; padding: 6px 100px"
        @click="backupSql(DbName)"
        type="primary"
        icon="el-icon-chat-line-square"
        >备份数据库</el-button
      >
    </template>
    <el-row :gutter="40" v-for="(page, index) of pages" :key="index">
      <div>
        <el-col v-for="items in page" :offset="1" :key="items.index" :span="6">
          <el-badge
            :max="10"
            :value="isFirstFile(items.index, items.create_time)"
            class="item"
          >
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>数据库:{{ items.dbname }}</span>
                <el-button
style="float: right; padding: 3px 0"
type="text"
                  ><span
style="color: red"
@click="deleteSqlFile(items.file)"
                    >删除此备份</span
                  ></el-button
                >
              </div>
              <d2-icon-svg name="sql-file" class="sql-file" />
              <div style="padding: 14px">
                <span>数据库备份文件</span>
                <div class="bottom clearfix">
                  <time class="time">{{ items.create_date }}</time>

                  <el-button
                    type="text"
                    class="button"
                    @click="restoreSql(items.file, DbName)"
                    ><span style="color: green">恢复数据库</span></el-button
                  >
                </div>
              </div></el-card
            >
          </el-badge>
        </el-col>

        <!-- <div v-for="item in items">
         {{'列表内容 ' + item }}
      </div> -->
      </div>
    </el-row>
  </d2-container>
</template>

<script>
// import D2Badge from './components/d2-badge'
// import D2Help from './components/d2-help'
// import D2PageCover from './components/d2-page-cover'
// import TransferHistoryTable from './components/TransferHistoryTable'

import api from '@/api'

export default {
    name: 'AdminBackupSqlView',
    components: {
    // TransferHistoryTable
    // D2Badge,
    // D2Help,
    // D2PageCover
    },
    data() {
        return {
            DbName: 'ep_api',
            backupFileList: []
        }
    },
    computed: {
        pages() {
            // console.log(this.backupFileList)
            const pages = []
            this.backupFileList.forEach((item, index) => {
                const page = Math.floor(index / 3) // 4代表4条为一行，随意更改
                if (!pages[page]) {
                    pages[page] = []
                }
                pages[page].push(item)
            })
            return pages
        }
    },
    mounted() {
        this.updateBackupFileList()

    // this.viewTransferHistory().then((res) => {
    //   this.transferHistoryData = res
    //   // console.log(this.person_info['装出人姓名'])
    // })
    // this.getProfile().then((res) => {
    //   res.length
    //     ? this.$message.error('获取数据失败')
    //     : (this.person_info = res)
    //   // console.log(this.person_info['装出人姓名'])
    // })
    // // this.getTransferApplyStep().then((res) => {
    // //   this.reviewSteps = res.review_steps
    // //   this.processStatus = res.review_status === 1 ? 'finish' : (res.review_status === 2 ? 'success' : 'error')
    // // })
    // this.refreshApplyStep()
    // this.getJsonDataByFileName({ json_file_name: this.jsonFileName }).then(
    //   (res) => {
    //     res.length
    //       ? (this.cascaderOptions = res)
    //       : this.$message.error('获取数据失败')
    //   }
    // )
    },
    methods: {
        async getBackupFileList() {
            const res = await api.ADMIN_GET_BACKUPFILELIST()
            return res
        },
        async deleteBackupFile({ file = '' } = {}) {
            const res = await api.ADMIN_GET_DELETEBACKUPFILE({ file })
            return res
        },
        async restoreSqlByfile({ file = '', dbname = '' } = {}) {
            const res = await api.ADMIN_GET_RESTORESQL({ file, dbname })
            return res
        },
        async backupSqlByName({ dbname = '' } = {}) {
            const res = await api.ADMIN_GET_BACKUPSQL({ dbname })
            return res
        },

        updateBackupFileList() {
            this.getBackupFileList().then((res) => {
                this.backupFileList = res
                // console.log(this.backupFileList)
                // console.log(this.person_info['出人姓名'])
            })
        },
        deleteSqlFile(file) {
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.deleteBackupFile({
                    file: file
                }).then((res) => {
                    this.$message.success('删除成功')
                    this.updateBackupFileList()
                })
            })
        },
        restoreSql(file, dbname) {
            this.$confirm(
                '此操作将从此文件恢复数据库,此操作不可逆,将会清空现有数据, 是否继续?',
                '提示',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }
            ).then(() => {
                this.restoreSqlByfile({
                    file: file,
                    dbname: dbname
                }).then((res) => {
                    this.$message.success('恢复成功')
                    this.updateBackupFileList()
                })
            })
        },
        backupSql(dbname) {
            this.backupSqlByName({
                dbname: dbname
            }).then((res) => {
                this.$message.success('备份成功')
                this.updateBackupFileList()
            })
        },
        isFirstFile(index, time) {
            // console.log(val)
            const value =
        index === 0
            ? 'latest'
            : time + 100 > parseInt(new Date().getTime() / 1000)
                ? 'new'
                : ''
            return value
        }

        // async getJsonDataByFileName({ json_file_name = '' } = {}) {
        //   const res = await api.INDEX_GET_JSONDATA({ json_file_name })
        //   return res
        // },
        // // 获取审核进度
        // async getTransferApplyStep({ json_file_name = '' } = {}) {
        //   const res = await api.PERSON_GET_TRANSFERAPPLYSTEP({ json_file_name })
        //   return res
        // },
        // async submitTransferApply({
        //   contacts_phone = '',
        //   receive_organization = '',
        //   reason = '',
        //   remarks = ''
        // } = {}) {
        //   const res = await api.PERSON_SUBMIT_TRANSFER({
        //     contacts_phone,
        //     receive_organization,
        //     reason,
        //     remarks
        //   })
        //   return res
        // },
        // async viewTransferHistory() {
        //   const res = await api.PERSON_VIEW_TRANSFERHISTORY()
        //   return res
        // },

        // handleClose(done) {
        //   this.$confirm('确认关闭？')
        //     .then((_) => {
        //       done()
        //     })
        //     .catch((_) => {})
        // },

    // // 表单按钮
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       // console.log(this.ruleForm.party_branch[1])
    //       // return false
    //       // console.log(this.ruleForm.party_branch[1])
    //       this.dialogVisible = false
    //       this.submitTransferApply({
    //         contacts_phone: this.ruleForm.contacts_phone,
    //         receive_organization: this.ruleForm.party_branch[1],
    //         reason: this.ruleForm.reason,
    //         remarks: this.ruleForm.remark
    //       }).then((res) => {
    //         if (res.code) {
    //           this.$message.success('提交成功')
    //           this.refreshApplyStep()
    //         } else {
    //           this.$message.error('提交失败')
    //         }
    //       })
    //     } else {
    //       this.$message.error('请填写完整')
    //       return false
    //     }
    //   })
    // },
    // // 刷新进度
    // refreshApplyStep() {
    //   this.getTransferApplyStep().then((res) => {
    //     this.reviewSteps = res.review_steps
    //     this.processStatus =
    //       res.review_status === 1
    //         ? 'finish'
    //         : res.review_status === 2
    //           ? 'success'
    //           : 'error'
    //   })
    // },
    // // 撤回申请
    // withdrawApply() {
    //   this.$alert('请联系转出人党支部管理员进行撤回操作!', '提示', {
    //     confirmButtonText: '确定',
    //     type: 'warning'
    //   })
    // },
    // resetForm(formName) {
    //   this.$refs[formName].resetFields()
    // }
    }
}
</script>

<style lang="scss" scoped>
.page {
  .sql-file {
    width: 150px;
    height: 140px;
    // text-align: center;
    margin: 0 auto;
    display: block;
    // margin: 0 auto;
    fill: rgb(58, 177, 224);
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
  .box-card {
    // margin: 0 auto;
    width: 300px;
    // padding:1rem;
    // width: 70%;
    // height: 50px;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .button {
    padding: 0;
    float: right;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both;
  }
}
</style>
