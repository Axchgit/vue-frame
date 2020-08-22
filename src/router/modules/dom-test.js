/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-08-21 17:11:45
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\dom-test.js
 * @Description: 
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true ,rules: 0 ,title:'测试'}

export default {
    path: '/dom/test',
    name: 'test',
    meta,
    redirect: { name: 'dom-test-index' },
    component: layoutHeaderAside,
    children: (pre => [{
        path: 'index',
        name: `${pre}index`,
        component: _import('dom/test/index/index'),
        meta: {
            ...meta,
            title: '测试首页'
        }
    }, ])('dom-test-')
}