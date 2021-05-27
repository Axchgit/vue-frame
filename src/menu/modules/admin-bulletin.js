/*
 * @Description:
 * @Author: xch
 * @Date: 2021-04-13 01:40:50
 * @FilePath: \vue-frame\src\menu\modules\admin-bulletin.js
 * @LastEditTime: 2021-05-27 16:48:49
 * @LastEditors: xch
 */
export default {
    path: '/bulletin',
    title: ' 通知公告',
    roles: 1,
    icon: 'window-restore',
    children: (pre => [
        { path: `${pre}`, title: '通告', icon: 'hand-paper-o' }
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
    ])('/bulletin')
}
