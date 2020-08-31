/*
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-20 00:41:51
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\components\index.js
 * @Description:
 */
import Vue from 'vue'

import d2Container from './d2-container'

// 注意 有些组件使用异步加载会有影响
Vue.component('d2-container', d2Container)
Vue.component('d2-icon', () =>
  import('./d2-icon'))
Vue.component('d2-icon-svg', () =>
  import('./d2-icon-svg/index.vue'))
Vue.component('d2-icon-select', () =>
  import('./d2-icon-select/index.vue'))
Vue.component('Sidentify', () =>
  import('./identify/index.vue'))
