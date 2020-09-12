/*
 * @Author: xch
 * @Date: 2020-08-21 23:09:57
 * @LastEditTime: 2020-09-04 13:09:47
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\menu\modules\emp-performance.js
 * @Description:
 */
export default {
    path: '/employee/performance',
    title: ' 业绩提交',
    roles: 5,
    icon: 'area-chart',
    children: (pre => [
        { path: `${pre}submit/index`, title: '提交业绩', icon: 'home' },
        { path: `${pre}goods/index`, title: '已推商品', icon: 'home' }

    // {
    //   title: '提交',
    //   icon: 'table',
    //   children: [
    //     { path: `${pre}submit/tb`, title: '淘宝' },
    //     { path: `${pre}submit/jd`, title: '京东' },
    //     { path: `${pre}submit/pdd`, title: '拼多多' }
    //     // { path: `${pre}info/update`, title: '修改' }
    //   ]
    // }
    // {
    //   title: '提交记录',
    //   icon: 'github',
    //   children: [
    //     { path: `${pre}history/tb`, title: '淘宝' },
    //     { path: `${pre}history/jd`, title: '京东' },
    //     { path: `${pre}history/pdd`, title: '拼多多' }
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
    ])('/employee/performance/')
}

