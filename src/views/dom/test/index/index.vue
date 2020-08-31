<template>
  <d2-container type="ghost"/>
</template>

<script>
import menu from '@/menu/modules/dom-test'
import { menuHeader, menuAside } from '@/menu'
import util from '@/libs/util.js'

// import { delete } from 'vue/types/umd'

export default {
  data() {
    return {

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
    // 测试testApi接口
    // console.log('test success');
    // this.getUserInfo();
  },
  methods: {

    async getUserInfo() {
      try {
        const username = '星辰哈'
        const password = '43rewr343'
        const res = await this.$api.DEMO_FETCH({ username, password })
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }

}
</script>

<style lang="scss" scoped>

.div-1{
  background: white;

}
</style>
