<!--
 * @Author: xch
 * @Date: 2020-08-10 23:45:05
 * @LastEditTime: 2020-08-19 18:32:04
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\dom\table\index.vue
 * @Description: 
-->
<template>
  <d2-container>
    <!-- D2项目逻辑:ref为验证表单用值 -->
    <demo-page-header
      slot="header"
      @submitInfo="handleSubmitInfo"
      @submitRule="handleSubmitRule"
      @submit="handleSubmit"
      ref="header"
    />
    <demo-page-main :table-data="table" :loading="loading" />
    <demo-page-footer
      slot="footer"
      :current="page.pageCurrent"
      :size="page.pageSize"
      :total="page.pageTotal"
      @change="handlePaginationChange"
    />
  </d2-container>
</template>

<script>
export default {
  // name 值和本页的 $route.name 一致才可以缓存页面
  name: "tables",
  components: {
    DemoPageHeader: () => import("./componnets/PageHeader"),
    DemoPageMain: () => import("./componnets/PageMain"),
    DemoPageFooter: () => import("./componnets/PageFooter"),
  },
  data() {
    return {
      table: [],
      loading: false,
      page: {
        pageCurrent: 1,
        pageSize: 10,
        pageTotal: 0,
      },
      paginate: {
        page: 1,
        list_rows: 10,
        total: 0,
      },
    };
  },
  methods: {
    async handlePaginationChange(val) {
      this.$notify({
        title: "分页变化",
        message: `当前第${val.current}页 共${val.total}条 每页${val.size}条`,
      });
      this.page = {
        pageCurrent: val.current,
        pageSize: val.size,
        pageTotal: val.total,
      };
      // nextTick 只是为了优化示例中 notify 的显示
      await this.$nextTick();
      this.$refs.header.handleFormSubmit();
    },
    //form为查询按钮提交的值
    handleSubmit() {
      this.table = [];

      //D2项目逻辑:设置按钮样式
      this.loading = true;
      this.$notify({
        title: "开始请求表格数据",
      });
      //知识点:改变请求参数属性名
      this.paginate = {
        page: this.page.pageCurrent,
        list_rows: this.page.pageSize,
        total: this.page.pageTotal,
      };

      // console.log(form, rule);
      this.$api
        .EMPLOYEE_SELECT_ALL({
          // ...form,
          ...this.paginate,
        })
        .then((res) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求完毕",
          });
          this.table = res.data;
          this.page.pageTotal = res.total;
        })
        .catch((err) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求异常",
          });
          console.log("err", err);
        });
      // this.$api
      //   .DEMO_BUSINESS_TABLE_1_LIST({
      //     //根据page内变量值请求数据
      //     ...form,
      //     ...this.paginate,
      //   })
      //   .then((res) => {
      //     this.loading = false;
      //     this.$notify({
      //       title: "表格数据请求完毕",
      //     });
      //     //D2项目逻辑:渲染请求过来的表格数据
      //     this.table = res.data;
      //     //D2项目逻辑:数据总条数
      //     this.page.pageTotal = res.total;
      //     // console.log(res.page)
      //   })
      //   .catch((err) => {
      //     this.loading = false;
      //     this.$notify({
      //       title: "表格数据请求异常",
      //     });
      //     console.log("err", err);
      //   });
    },
    handleSubmitRule(form) {
      this.table = [];

      //D2项目逻辑:设置按钮样式
      this.loading = true;
      this.$notify({
        title: "开始请求表格数据",
      });
      //知识点:改变请求参数属性名
      this.paginate = {
        page: this.page.pageCurrent,
        list_rows: this.page.pageSize,
        total: this.page.pageTotal,
      };

      this.$api
        .EMPLOYEE_SELECT_RULE({
          ...form,
          ...this.paginate,
        })
        .then((res) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求完毕",
          });
          this.table = res.data;
          this.page.pageTotal = res.total;
        })
        .catch((err) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求异常",
          });
          console.log("err", err);
        });
    },
    handleSubmitInfo(form) {
      this.table = [];
      //D2项目逻辑:设置按钮样式
      this.loading = true;
      this.$notify({
        title: "开始请求表格数据",
      });
      //知识点:改变请求参数属性名
      this.paginate = {
        page: this.page.pageCurrent,
        list_rows: this.page.pageSize,
        total: this.page.pageTotal,
      };

      this.$api
        .EMPLOYEE_SELECT_INFO({
          ...this.paginate,

          ...form,
        })
        .then((res) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求完毕",
          });
          console.log(res.data);
          this.table = res.data;
          this.page.pageTotal = res.total;
        })
        .catch((err) => {
          this.loading = false;
          this.$notify({
            title: "表格数据请求异常",
          });
          console.log("err", err);
        });
    },
  },
};
</script>
