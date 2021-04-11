/*
 * @Description:
 * @Author: xch
 * @Date: 2021-04-11 23:15:36
 * @FilePath: \vue-frame\src\menu\modules\admin-backupsql.js
 * @LastEditTime: 2021-04-11 23:16:33
 * @LastEditors: xch
 */
export default {
    path: '/admin/backupsql',
    title: ' 数据库备份',
    roles: 1,
    icon: 'comments',
    children: (pre => [
        { path: `${pre}view`, title: '数据库备份', icon: 'list' }
        // {
        //     title: '系统功能问题',
        //     icon: 'table',
        //     children: [
        //         { path: `${pre}sys`, title: '处理' }
        //         // { path: `${pre}info/update`, title: '修改' }
        //     ]
        // },
        // {
        //     title: '业务问题',
        //     icon: 'github',
        //     children: [
        //         { path: `${pre}business`, title: '处理' }
        //         // { path: `${pre}account/update`, title: '修改' }
        //     ]
        // },
        // {
        //     title: '其他问题',
        //     icon: 'github',
        //     children: [
        //         { path: `${pre}other`, title: '处理' }
        //         // { path: `${pre}account/update`, title: '修改' }
        //     ]
        // }
    ])('/admin/backupsql/')
}
