/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-09-04 22:32:36
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\admin-goods.js
 * @Description:
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, rules: 1, cache: true }

export default {
  path: '/admin/goods',
  name: 'AdminGoods',
  meta,
  redirect: { name: 'AdminGoodsIndex' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'index',
      name: `${pre}Index`,
      component: _import('admin/goods/index'),
      meta: {
        ...meta,
        title: '推广商品信息'
      }
    },
    { path: 'update', name: `${pre}UpdateIndex`, component: _import('admin/goods/update/index'), meta: { ...meta, title: '数据更新' }},
    // { path: 'update/tb', name: `${pre}UpdateTb`, component: _import('admin/goods/update/tb'), meta: { ...meta, title: '推广订单更新-淘宝' }},
    // { path: 'update/pdd', name: `${pre}UpdatePdd`, component: _import('admin/goods/update/pdd'), meta: { ...meta, title: '推广订单更新-拼多多' }},
    { path: 'select', name: `${pre}SelectIndex`, component: _import('admin/goods/select/index'), meta: { ...meta, title: '数据查询' }}
    // { path: 'select/tb', name: `${pre}SelectTb`, component: _import('admin/goods/select/tb'), meta: { ...meta, title: '推广订单查询-淘宝' }},
    // { path: 'select/pdd', name: `${pre}SelectPdd`, component: _import('admin/goods/select/pdd'), meta: { ...meta, title: '推广订单查询-拼多多' }}

  ])('AdminGoods')
}
