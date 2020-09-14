/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-14 12:36:49
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-employee.js
 * @Description:
 */
export default {
    path: '/admin/employee',
    title: ' 员工管理',
    roles: 1,
    icon: 'users',
    children: (pre => [
        // { path: `${pre}index`, title: '示例', icon: 'home' },
        {
            title: '个人资料',
            icon: 'table',
            children: [
                // D2项目逻辑:menupath是项目所在目录,自动路由到index
                { path: `${pre}info`, title: '管理' }
            ]
        },
        {
            title: '账户信息',
            icon: 'github',
            children: [
                { path: `${pre}account`, title: '管理' }
            ]
        }
    ])('/admin/employee/')
}
