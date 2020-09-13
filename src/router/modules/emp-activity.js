/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-09-13 18:04:31
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\emp-performance.js
 * @Description:
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, roles: 5, title: '员工请假', cache: true }

export default {
    path: '/employee/activity',
    name: 'EmployeeActivity',
    meta,
    redirect: { name: 'EmployeePerformanceIndex' },
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: 'leave',
            name: `${pre}Leave`,
            component: _import('employee/activity/leave'),
            meta: {
                ...meta,
                title: '请假申请'
            }
        },
        {
            // 这里的path不需要写父路由path前缀
            path: 'quit',
            name: `${pre}Quit`,
            // 和menu的path一样
            component: _import('employee/activity/quit'),
            meta: {
                ...meta,
                title: '离职申请'
            }
        }
    ])('EmployeeActivity')
}
