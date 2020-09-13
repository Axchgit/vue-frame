/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-09-14 02:22:49
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\emp-performance.js
 * @Description:
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, roles: 1, title: '业绩审核', cache: true }

export default {
    path: '/admin/emp_activity',
    name: 'AdminEmpActivity',
    meta,
    redirect: { name: 'AdminEmpActivityIndex' },
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: 'leave',
            name: `${pre}Leave`,
            component: _import('admin/emp_activity/leave'),
            meta: {
                ...meta,
                title: '请假审核'
            }
        },
        {
            path: 'quit',
            name: `${pre}Quit`,
            component: _import('admin/emp_activity/quit'),
            meta: {
                ...meta,
                title: '离职审核'
            }
        }
    ])('AdminEmpActivity')
}
