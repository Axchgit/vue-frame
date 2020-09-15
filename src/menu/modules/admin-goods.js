/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-15 15:02:45
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\admin-goods.js
 * @Description:
 */
export default {
    path: '/admin/goods',
    title: ' 推广商品',
    roles: 1,
    icon: 'bar-chart',
    children: (pre => [
        { path: `${pre}update`, title: '更新数据', icon: 'upload' },
        { path: `${pre}select`, title: '数据查询', icon: 'search' }

    // {
    //   title: '更新数据',
    //   icon: 'table',
    //   children: [
    //     { path: `${pre}update/tb`, title: '淘宝' },
    //     { path: `${pre}update/jd`, title: '京东' },
    //     { path: `${pre}update/pdd`, title: '拼多多' }
    //     // { path: `${pre}info/update`, title: '修改' }
    //   ]
    // },
    // {
    //   title: '数据查询',
    //   icon: 'github',
    //   children: [
    //     { path: `${pre}select/tb`, title: '淘宝' },
    //     { path: `${pre}select/jd`, title: '京东' },
    //     { path: `${pre}select/pdd`, title: '拼多多' }
    //     // { path: `${pre}account/update`, title: '修改' }
    //   ]
    // }
    // {
    //   title: '数据统计',
    //   icon: 'github',
    //   children: [
    //     { path: `${pre}other`, title: '处理' }
    //     // { path: `${pre}account/update`, title: '修改' }
    //   ]
    // }
    ])('/admin/goods/')
}

