/*
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-22 12:02:24
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\main.js
 * @Description: 
 */
// Vue
import Vue from 'vue'
import i18n from './i18n'
import App from './App'
// 核心插件
import d2Admin from '@/plugin/d2admin'
// store
import store from '@/store/index'


//浏览器警告
import 'default-passive-events'

// 菜单和路由设置
import router from './router'
import { menuHeader, menuAside } from '@/menu'
import { frameInRoutes } from '@/router/routes'

// 核心插件
Vue.use(d2Admin)

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
    created() {
        // 处理路由 得到每一级的路由设置
        this.$store.commit('d2admin/page/init', frameInRoutes)
        // 设置顶栏菜单
        //删除菜单测试
        // console.log(menuHeader)
        // delete menuHeader[1].children[1]
        this.$store.commit('d2admin/menu/headerSet', menuHeader)
        // 设置侧边栏菜单
        // this.$store.commit('d2admin/menu/asideSet', menuAside)
        // 初始化菜单搜索功能
        this.$store.commit('d2admin/search/init', menuHeader)
    },
    mounted() {
        // 展示系统信息
        // this.$store.commit('d2admin/releases/versionShow')
        // 用户登录后从数据库加载一系列的设置
        this.$store.dispatch('d2admin/account/load')
        // 获取并记录用户 UA
        this.$store.commit('d2admin/ua/get')
        // 初始化全屏监听
        this.$store.dispatch('d2admin/fullscreen/listen')
    },
    watch: {
        // 检测路由变化切换侧边栏内容
        '$route.matched': {
            handler(matched) {
                if (matched.length > 0) {
                    const _side = menuAside.filter(menu => menu.path === matched[0].path)
                    this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
                }
            },
            immediate: true
        },
        '$route': {
            /**
             * TODO:优化监听对象
             * @param {*} val :当前路由
             * @param {*} oldVal 前一个路由
             * @description:监听路由变化,登录后刷新页面
             */
            handler: function (val, oldVal) {
                console.log(oldVal);
                /**
                 * 逻辑
                 * 当前一个路由为登录界面,且当前路由不为登录页面时
                 *    刷新页面
                 */
                if (oldVal.path == '/salogin' || oldVal.path == '/emplogin') {
                    if (val.path != '/salogin' && val.path != '/emplogin') {
                        this.$router.go(0)
                    }
                }
            },

        }
    }
}).$mount('#app')