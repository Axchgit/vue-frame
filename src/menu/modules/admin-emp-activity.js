/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-14 02:19:22
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-emp-activity.js
 * @Description:
 */
export default {
    path: '/admin/emp-activity',
    title: ' 人员动态管理',
    roles: 1,
    icon: 'check-square',
    children: (pre => [
        { path: `${pre}index`, title: '示例', icon: 'home' },
        {
            title: '请假审核',
            icon: 'table',
            children: [
                { path: `${pre}leave`, title: '请假审核' }
                // { path: `${pre}leave/adopt`, title: '已通过' }
            ]
        },
        {
            title: '离职审核',
            icon: 'github',
            children: [
                { path: `${pre}quit`, title: '离职审核' }
                // { path: `${pre}quit/adopt`, title: '已通过' }
            ]
        }
    ])('/admin/emp_activity/')
}

// {
//     title: '页面',
//     icon: 'folder-o',
//     children: [
//         { path: '/page1', title: '页面 1' },
//         { path: '/page2', title: '页面 2' },
//         { path: '/page3', title: '页面 3' },
//         { path: '/dom', title: '新建示例' },
//         { path: '/test', title: 'test' }

//     ]
// },
