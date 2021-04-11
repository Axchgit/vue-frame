/*
 * @Description:
 * @Author: xch
 * @Date: 2021-04-11 23:09:38
 * @FilePath: \vue-frame\src\router\modules\admin-backupsql.js
 * @LastEditTime: 2021-04-11 23:15:00
 * @LastEditors: xch
 */

import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, roles: 1, title: '数据库备份', cache: true }

export default {
    path: '/admin/backupsql',
    name: 'AdminBackupsql',
    meta,
    redirect: { name: 'AdminFeedbackIndex' },
    component: layoutHeaderAside,
    children: (pre => [
        // {
        //     path: 'index',
        //     name: `${pre}Index`,
        //     component: _import('admin/feedback'),
        //     meta: {
        //         ...meta,
        //         title: '请假审核'
        //     }
        // },
        // {
        //     path: 'manage',
        //     name: `${pre}Upload`,
        //     component: _import('admin/backupsql/manage'),
        //     meta: {
        //         ...meta,
        //         title: '备份文件管理'
        //     }
        // },
        {
            path: 'view',
            name: `${pre}View`,
            component: _import('admin/backupsql/view'),
            meta: {
                ...meta,
                title: '数据库备份'
            }
        }
    ])('AdminBackupsql')
}
