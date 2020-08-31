/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-08-28 11:36:07
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\emp-msg-feedback.js
 * @Description:
 */
export default {
  path: '/employee/msg_feedback',
  title: '信息反馈',
  roles: 5,
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '示例', icon: 'home' },
    {
      title: '系统问题反馈',
      icon: 'table',
      children: [
        // D2项目逻辑:menupath是项目所在目录,自动路由到index
        { path: `${pre}sys/submit`, title: '提交反馈' },
        { path: `${pre}sys/history`, title: '反馈历史' }
      ]
    },
    {
      title: '业务问题反馈',
      icon: 'github',
      children: [
        { path: `${pre}business/submit`, title: '提交反馈' },
        { path: `${pre}business/history`, title: '反馈历史' }
      ]
    },
    {
      title: '其他问题反馈',
      icon: 'github',
      children: [
        { path: `${pre}other/submit`, title: '提交反馈' },
        { path: `${pre}other/history`, title: '反馈历史' }
      ]
    }
  ])('/admin/msg_feedback/')
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

