/*
 * @Author: xch
 * @Date: 2020-08-12 13:29:07
 * @LastEditTime: 2020-09-13 15:30:35
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\router\modules\emp-performance.js
 * @Description:
 */
import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true, rules: 5, title: '信息反馈', cache: true }

export default {
    path: '/employee/feedback',
    name: 'EmployeeFeedback',
    meta,
    redirect: { name: 'EmployeeFeedbackIndex' },
    component: layoutHeaderAside,
    children: (pre => [
        {
            path: 'index',
            name: `${pre}Index`,
            component: _import('employee/feedback/index/index'),
            meta: {
                ...meta,
                title: '信息反馈'
            }
        }
    ])('EmployeeFeedback')
}
