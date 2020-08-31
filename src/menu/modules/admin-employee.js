/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-08-22 00:54:04
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-employee.js
 * @Description:
 */
export default {
  path: '/admin/employee',
  title: '员工管理',
  roles: 1,
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例', icon: 'home' },
    {
      title: '个人资料',
      icon: 'table',
      children: [
        // D2项目逻辑:menupath是项目所在目录,自动路由到index
        { path: `${pre}info/select`, title: '查询' },
        { path: `${pre}info/update`, title: '修改' }
      ]
    },
    {
      title: '账户信息',
      icon: 'github',
      children: [
        { path: `${pre}account/select`, title: '查询' },
        { path: `${pre}account/update`, title: '修改' }
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
