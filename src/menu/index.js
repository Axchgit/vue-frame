/*
 * @Author: xch
 * @Date: 2020-08-10 17:43:37
 * @LastEditTime: 2021-04-13 01:42:58
 * @LastEditors: xch
 * @FilePath: \vue-frame\src\menu\index.js
 * @Description:
 */
import { uniqueId } from 'lodash'
import util from '@/libs/util.js'
// import store from '@/store/index'
// import { mapState, mapActions } from 'vuex'

// import pagsDomTest from './modules/dom-test'
// import domPages from './modules/dom-pages'

import adminEmpData from './modules/admin-employee'
import adminEmpActivity from './modules/admin-emp-activity'
import adminFeedback from './modules/admin-feedback'
import adminBackupsql from './modules/admin-backupsql'
import adminBulletin from './modules/admin-bulletin'

import adminGoods from './modules/admin-goods'
import adminPerformance from './modules/admin-performance'

import empActivity from './modules/emp-activity'
import empMsgFeedback from './modules/emp-msg-feedback'

import empPerformance from './modules/emp-performance'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */
function supplementPath(menu) {
    return menu.map(e => ({
        ...e,
        path: e.path || uniqueId('d2-menu-empty-'),
        ...e.children ? {
            children: supplementPath(e.children)
        } : {}
    }))
}

// const computed = {
//     //D2项目逻辑:主框架显示用户name
//     ...mapState('d2admin/user', [
//         'info'
//     ])
// }

//     console.log(computed.avatar)

/**
 * 逻辑,比较菜单项的roles与用户的roles,
 * 如果符合则放到菜单数组中
 */
// const res = []

// routes.forEach(route => {
//   const tmp = { ...route }
//   if (hasPermission(roles, tmp)) {
//     if (tmp.children) {
//       tmp.children = filterAsyncRoutes(tmp.children, roles)
//     }
//     res.push(tmp)
//   }
// })

// console.log(adminEmpData.roles)

// 所有的需要判断权限的菜单项
const allMenu = [adminEmpData, adminGoods, adminPerformance, adminEmpActivity, adminFeedback, adminBulletin, adminBackupsql,
    empPerformance, empActivity, empMsgFeedback]
// 加入到顶部菜单数组中的菜单项
const addMenu = []

// var fontUrl = ''
// console.log(process.env.VUE_APP_AJAX_URL+'api')
// console.log(fontUrl+'api')

/**
 * 项目逻辑:
 * 如果用户权限符合菜单项权限,则添加到菜单数组中
 *      如果菜单项的权限要求在(1,6)之间(员工独有),且当前用户为管理员权限
 *      则不添加到菜单数组中
 */
const roles = util.cookies.get('roles')
// console.log(roles)
allMenu.forEach((menu) => {
    // console.log(index)
    if (menu.roles >= roles) {
        addMenu.push(menu)
    }
    if ((menu.roles > 1 && menu.roles < 6) && roles <= 1) {
        addMenu.pop()
    }
})

export const menuAside = supplementPath([
    // pagsDomTest,
    // adminEmpData
    ...addMenu

])

export const menuHeader = supplementPath([
    { path: '/index', title: '首页', icon: 'home' }, // pagsDomTest,

    ...addMenu

    // {
    //   title: '页面',
    //   icon: 'folder-o',
    //   children: [
    //     { path: '/page1', title: '页面 1' },
    //     { path: '/page2', title: '页面 2' },
    //     { path: '/page3', title: '页面 3' },
    //     { path: '/index/index', title: '新建示例' },
    //     { path: '/table', title: '表格' }
    //     // { path: '/test', title: 'test' }
    //   ]
    // }
])
