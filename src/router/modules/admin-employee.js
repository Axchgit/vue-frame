/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-09-12 02:20:15
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\admin-employee.js
 * @Description:
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, rules: 1, title: '员工管理', cache: true }

export default {
    path: '/admin/employee',
    name: 'AdminEmployee',
    meta,
    redirect: { name: 'AdminEmployeeIndex' },
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: 'index',
            name: `${pre}Index`,
            component: _import('admin/employee/index'),
            meta: {
                ...meta,
                title: '员工信息管理首页'
            }
        },
        // TODO:删除
        {
            path: 'info/select',
            name: `${pre}InfoSelect`,
            component: _import('admin/employee/info/select'),
            meta: {
                ...meta,
                title: '员工信息查询'
            }
        },
        {
            path: 'info',
            name: `${pre}Info`,
            component: _import('admin/employee/info'),
            meta: {
                ...meta,
                title: '员工信息管理'
            }
        },
        {
            path: 'account',
            name: `${pre}account`,
            component: _import('admin/employee/account'),
            meta: {
                ...meta,
                title: '员工账户信息管理'
            }
        }
    ])('AdminEmployee')
}
