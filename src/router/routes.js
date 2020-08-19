import layoutHeaderAside from '@/layout/header-aside'
import test from './modules/dom-test'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [{
        path: '/',
        redirect: { name: 'index' },
        component: layoutHeaderAside,
        children: [
            // 首页
            {
                path: 'index',
                name: 'index',
                meta: {
                    auth: true
                },
                component: _import('system/index')
            },
            //测试
            // {
            //     path: 'test',
            //     name: 'test',
            //     component: _import('dom/test/index'),

            //     meta: {
            //         auth: true,
            //         title: 'test'
            //     }
            // },
            //新建示例
            {
                path: 'index/index',
                name: 'indexs',
                component: _import('dom/index/index'),

                meta: {
                    auth: true,
                    title: '新建示例'
                }
            },
            {
                path: 'table',
                name: 'tables',
                component: _import('dom/table'),

                meta: {
                    cache:true,
                    auth: true,
                    title: '表格示例'
                }
            },
            // 演示页面
            {
                path: 'page1',
                name: 'page1',
                meta: {
                    title: '页面 1',
                    auth: true
                },
                component: _import('demo/page1')
            },
            {
                path: 'page2',
                name: 'page2',
                meta: {
                    title: '页面 2',
                    auth: true
                },
                component: _import('demo/page2')
            },
            {
                path: 'page3',
                name: 'page3',
                meta: {
                    title: '页面 3',
                    auth: true
                },
                component: _import('demo/page3')
            },
            // 系统 前端日志
            {
                path: 'log',
                name: 'log',
                meta: {
                    title: '前端日志',
                    auth: true
                },
                component: _import('system/log')
            },
            // 刷新页面 必须保留
            {
                path: 'refresh',
                name: 'refresh',
                hidden: true,
                component: _import('system/function/refresh')
            },
            // 页面重定向 必须保留
            {
                path: 'redirect/:route*',
                name: 'redirect',
                hidden: true,
                component: _import('system/function/redirect')
            }

        ]
    },
    test
]

/**
 * 在主框架之外显示
 */
const frameOut = [
    // 登录
    {
        path: '/login',
        name: 'login',
        component: _import('system/login')
    },
    {
        path: '/salogin',
        name: 'salogin',
        component: _import('system/salogin/index')
    }
]

/**
 * 错误页面
 */
const errorPage = [{
    path: '*',
    name: '404',
    component: _import('system/error/404')
}]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
    ...frameIn,
    ...frameOut,
    ...errorPage
]