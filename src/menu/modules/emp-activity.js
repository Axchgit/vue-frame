/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-08-22 12:56:11
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\emp-activity.js
 * @Description:
 */
export default {
  path: '/employee/activity',
  title: '人员动态申请',
  roles: 5,
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例', icon: 'home' },
    {
      title: '请假',
      icon: 'table',
      children: [
        // D2项目逻辑:menupath是项目所在目录,自动路由到index
        { path: `${pre}leave/submit`, title: '提交申请' },
        { path: `${pre}leave/history`, title: '申请历史' }
      ]
    },
    {
      title: '离职申请',
      icon: 'github',
      children: [
        { path: `${pre}quit/submit`, title: '提交申请' },
        { path: `${pre}quit/history`, title: '申请结果' }
      ]
    }
  ])('/admin/employee/')
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
