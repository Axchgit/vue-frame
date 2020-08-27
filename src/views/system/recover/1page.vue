<template>
  <div>
    <el-button type="success" @click="addgsForm" icon="el-icon-edit">新增</el-button>

    <el-dialog :title="title" :visible.sync="dialogAddgsVisible" @close="closeDialogAddgsVisible">
      <el-form :model="addForm" :rules="rules" ref="addForm">
        <el-form-item label="类别名称" :label-width="formLabelWidth">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="排序" :label-width="formLabelWidth">
          <el-input v-model="addForm.sort"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogAddgsVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveAddForm('addForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:'',
        rules:'',
        dialogAddgsVisible:false,
        addForm:{
            
        }

    };
  },
  methods: {
    /**
     *点击新增按钮，弹出新增模态框
     * @param
     */
    addgsForm() {
      this.dialogAddgsVisible = true;
      this.title = "新增分类";
    },
    /**
     *关闭或取消模态框，清空值
     * @param
     */
    closeDialogAddgsVisible() {
      this.$refs.addForm.resetFields(); //element封装的方法,清空模态框的值
      this.title = ""; //初始化title的值
      this.addForm = {
        //初始化addForm中的值
        name: "",
        sort: "",
      };
    },

    /**
     *确定新增数据
     * @param
     */
    saveAddForm(aaa) {
      this.$refs[aaa].validate((valid) => {
        console.log(this.$refs[aaa]);
        if (valid) {
          let params = {
            name: this.addForm.name,
            sort: this.addForm.sort,
          };
          this.axios.post(`接口地址`, params).then((res) => {
            alert("新增成功");
            this.dialogAddgsVisible = false;
            // this.$router.push({name:'categories'})
            this.init();
          });
        }
      });
    },
  },
};
</script>