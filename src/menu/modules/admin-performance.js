/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-02 23:26:39
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-performance.js
 * @Description:
 */
export default {
  path: '/admin/performance',
  title: ' 业绩审核',
  roles: 1,
  icon: 'flask',
  children: (pre => [
    { path: `${pre}index`, title: '业绩审核', icon: 'home' },
    {
      title: '审核业绩',
      icon: 'table',
      children: [
        { path: `${pre}review/tb`, title: '淘宝' },
        { path: `${pre}review/jd`, title: '京东' },
        { path: `${pre}review/pdd`, title: '拼多多' }
        // { path: `${pre}info/update`, title: '修改' }
      ]
    },
    {
      title: '业绩查询',
      icon: 'github',
      children: [
        { path: `${pre}select/tb`, title: '淘宝' },
        { path: `${pre}select/jd`, title: '京东' },
        { path: `${pre}select/pdd`, title: '拼多多' }
        // { path: `${pre}account/update`, title: '修改' }
      ]
    }
    // {
    //   title: '数据统计',
    //   icon: 'github',
    //   children: [
    //     { path: `${pre}other`, title: '处理' }
    //     // { path: `${pre}account/update`, title: '修改' }
    //   ]
    // }
  ])('/admin/performance/')
}

