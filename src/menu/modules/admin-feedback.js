/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-14 02:45:35
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-feedback.js
 * @Description:
 */
export default {
    path: '/admin/feedback',
    title: ' 反馈处理',
    roles: 1,
    icon: 'comments',
    children: (pre => [
        { path: `${pre}index`, title: '反馈处理', icon: 'home' }
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
    ])('/admin/feedback/')
}
