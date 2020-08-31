/*
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2020-08-23 21:48:35
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\index.js
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

// 进度条
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import store from '@/store/index'
import util from '@/libs/util.js'

// 路由数据
import routes from './routes'

// import { constantRoutes , errorPage } from './routes'

// import getters from '@/store/getters'

import { errorLog, errorCreate } from './tools'

// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

const whiteList = ['/login', '/salogin', '/emplogin', '/auth-redirect', '/emprecover', '/empactivate'] // no redirect whitelist

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach(async(to, from, next) => {
  // 确认已经加载多标签页数据 https://github.com/d2-projects/d2-admin/issues/201
  await store.dispatch('d2admin/page/isLoaded')
  // 确认已经加载组件尺寸设置 https://github.com/d2-projects/d2-admin/issues/198
  await store.dispatch('d2admin/size/isLoaded')
  // 进度条
  NProgress.start()
  // 关闭搜索面板
  store.commit('d2admin/search/set', false)
  // 这里暂时将cookie里是否存有token作为验证是否登录的条件
  // 请根据自身业务需要修改
  /**
   * 业务逻辑:
   * 首先判断token是否存在,
   * 存在则判断是否在登录页面,
   *    在则跳转到主页面
   *    不在则直接跳转(后续要判断权限)
   * 不存在则判断是否在白名单whiteList中,
   *    在,则直接跳转
   *    不在,则重定向到登录界面
   */
  const token = util.cookies.get('token')

  // 验证当前路由所有的匹配中是否需要有登录验证的
  // if (to.matched.some(r => r.meta.auth)) {
  if (token && token !== 'undefined') {
    if (to.path === '/salogin' || to.path === '/emplogin') {
      next({ path: 'index' })
      NProgress.done()
    } else {
      // try {
      //   // get user info
      //   // note: roles must be a object array! such as: ['admin'] or ,['developer','editor']
      //   // const { roles } = await store.dispatch('user/getInfo')
      //   // const roles = getters.roles
      //   const roles = util.cookies.get('roles')
      //   console.log(roles)

      //   // generae accessible routes map based on roles
      //   const accessRoutes = await store.dispatch('vueframe/permission/generateRoutes', roles)

      //   // dynamically add accessible routes
      //   router.addRoutes(accessRoutes)

      //   // hack method to ensure that addRoutes is complete
      //   // set the replace: true, so the navigation will not leave a history record
      //   next({ ...to, replace: true })
      // } catch (error) {
      //   // remove token and go to login page to re-login
      //   // await store.dispatch('user/resetToken')
      //   util.cookies.remove('token')
      //   errorCreate(error || 'Has Error')

      //   // Message.error(error || 'Has Error')
      //   next(`/salogin?redirect=${to.path}`)
      //   NProgress.done()
      // }
      // 权限判断
      next()
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // 不需要身份校验 直接通过
      next()
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'emplogin',
        query: {
          redirect: to.fullPath
        }
      })
      NProgress.done()
    }
  }
})
router.afterEach(to => {
  // 进度条
  NProgress.done()
  // 多页控制 打开新的页面
  store.dispatch('d2admin/page/open', to)
  // 更改标题
  util.title(to.meta.title)
})

export default router
