/*
 * @Author: xch
 * @Date: 2020-08-12 12:37:07
 * @LastEditTime: 2020-08-22 01:25:31
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\dom-test.js
 * @Description:
 */
export default {
  path: '/dom/test',
  title: '测试',
  roles: 5,
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例', icon: 'home' },
    {
      title: '表格',
      icon: 'table',
      children: [
        { path: `${pre}table/1`, title: '表格 1' }
      ]
    },
    {
      title: 'ISSUES',
      icon: 'github',
      children: [
        { path: `${pre}issues/142`, title: '#142' }
      ]
    }
  ])('/dom/test/')
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
