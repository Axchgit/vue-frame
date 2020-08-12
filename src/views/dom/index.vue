<template>
  <d2-container>
  <el-row>
  <el-button>默认按钮</el-button>

</el-row>
      <button>
          测试
      </button>
      
    <!-- <template slot="header">图标选择器</template>
    <div class="title-group">
      <p class="title">一般用法</p>
      <p class="sub-title">
        <template v-if="icon">
          选择的图标 {{icon}}
          <i :class="'fa fa-' + icon"></i>
        </template>
        <template v-else>未选择</template>
      </p>
    </div>
    <d2-icon-select v-model="icon" />
    <div class="title-group">
      <p class="title">用户可以输入</p>
      <p class="sub-title">
        <template v-if="icon2">
          选择的图标 {{icon2}}
          <i :class="'fa fa-' + icon2"></i>
        </template>
        <template v-else>未选择</template>
      </p>
    </div>
    <d2-icon-select v-model="icon2" :user-input="true" /> -->
    <p class="d2-mt-0">
      <el-radio-group v-model="$i18n.locale">
        <el-radio-button
          v-for="language in $languages"
          :key="language.value"
          :label="language.value">
          {{ language.label }}
        </el-radio-button>
      </el-radio-group>
    </p>
    <el-alert
      :title="$t('page.demo.playground.locales.text')"
      type="success">
    </el-alert>
  </d2-container>
</template>




<script>

import Vue from 'vue'
import Vuex from 'vuex'
import menu from '@/menu/modules/dom-test'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

store.commit('increment')

console.log(store.state.count) // -> 1

export default {

  data() {
    
    return {
      menu,      
      icon: "",
      icon2: "",
    };
  },
  
  created() {
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
};
</script>

<style lang="scss" scoped>
.title-group {
  margin-top: 20px;
  margin-bottom: 10px;
  &:first-child {
    margin-top: 0px;
  }
  .title {
    margin: 0px;
  }
  .sub-title {
    margin: 0px;
    color: $color-text-sub;
    font-size: 10px;
  }
}
</style>
