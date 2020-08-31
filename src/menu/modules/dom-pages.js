/*
 * @Author: xch
 * @Date: 2020-08-12 12:37:07
 * @LastEditTime: 2020-08-28 11:48:15
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\dom-pages.js
 * @Description:
 */

export default {
//   path: '/dom/test',
  title: '页面',
  roles: 5,
  icon: 'folder-o',
  children: (pre => [
    { path: '/page1', title: '页面 1' },
    { path: '/page2', title: '页面 2' },
    { path: '/page3', title: '页面 3' },
    { path: '/index/index', title: '新建示例' },
    { path: '/table', title: '表格' }
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

