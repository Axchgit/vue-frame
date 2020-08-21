/*
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-21 19:03:55
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\store\index.js
 * @Description: 
 */
import Vue from 'vue'
import Vuex from 'vuex'

import d2admin from './modules/d2admin'
import vueframe from './modules/vueframe'


Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    d2admin,
    vueframe
  }
})
