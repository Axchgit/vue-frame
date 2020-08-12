<template>
  <d2-container type="ghost">
  </d2-container>
</template>

<script>
import menu from '@/menu/modules/dom-test'
import { menuHeader, menuAside,adminMenuTest } from '@/menu'
import util from '@/libs/util.js'

// import { delete } from 'vue/types/umd'

export default {
  data () {
    return {
      adminMenuTest,
      menuHeader,
      menu,
      banner: {
        title: 'DEMOS',
        subTitle: '提供借鉴和参考的页面'
      }
    }
  },
  created() {
    // alert(util.cookies.get('token'));
    // menuHeader
    // delete menuHeader[0];
    // alert(typeof(menuHeader));

        console.log('test success');
        this.getTableData();
  },
  methods: {
      
      
    async getTableData() {
      try {
        const res = await this.$api.DEMO_FETCH(123);
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
  },

}
</script>

<style lang="scss" scoped>

.div-1{
  background: white;
  
}
</style>
