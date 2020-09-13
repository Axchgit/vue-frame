/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-13 15:38:51
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\emp-activity.js
 * @Description:
 */
export default {
    path: '/employee/activity',
    title: '人员动态申请',
    roles: 5,
    icon: 'plane',
    children: (pre => [
        // { path: `${pre}index`, title: '示例', icon: 'home' },
        {
            title: '请假',
            icon: 'table',
            children: [
                // D2项目逻辑:menupath是项目所在目录,自动路由到index
                { path: `${pre}leave`, title: '请假申请' }
                // { path: `${pre}leave`, title: '申请历史' }
            ]
        },
        {
            title: '离职申请',
            icon: 'github',
            children: [
                { path: `${pre}quit`, title: '离职申请' }
                // { path: `${pre}quit/history`, title: '申请结果' }
            ]
        }
    ])('/employee/activity/')
}

