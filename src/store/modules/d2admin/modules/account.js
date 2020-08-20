import { Message, MessageBox } from 'element-ui'
import util from '@/libs/util.js'
import router from '@/router'
import api from '@/api'

export default {
    namespaced: true,
    actions: {
        /**
         * @description 登录
         * @param {Object} context
         * @param {Object} payload username {String} 用户账号
         * @param {Object} payload password {String} 密码
         * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
         */
        //D2项目逻辑:登录3.接收传值
        //知识点:解构赋值默认值,当username...值没有传进来时,使用默认值username = ''
        async loginXch({ dispatch }, {
            username = '',
            password = ''
        } = {}) {
            //D2项目逻辑:登录4.接收传值-->传值给Api
            const resToken = await api.SYS_USER_LOGIN({ username, password })
            // 设置 cookie 一定要存 uuid 和 token 两个 cookie
            // 整个系统依赖这两个数据进行校验和存储
            // uuid 是用户身份唯一标识 用户注册的时候确定 并且不可改变 不可重复
            // token 代表用户当前登录状态 建议在网络请求中携带 token
            // 如有必要 token 需要定时更新，默认保存一天
            // util.cookies.set('uuid', res.uuid)
            util.cookies.set('token', resToken.token)
            // const resInfo = await api.SYS_USER_INFO(resToken.token)
            util.cookies.set('uuid', resToken.uuid)
            // 设置 vuex 用户信息
            await dispatch('d2admin/user/set', { name: resToken.username, avatar: resToken.avatar }, { root: true })
            // await dispatch('d2admin/user/set', { name: resToken.username }, { root: true })
            // 用户登录后从持久化数据加载一系列的设置
            await dispatch('load')
        },
        /**
         * @description 发送登录码
         * @param {Object} context
         * @param {Object} payload username {String} 用户账号
         * @param {Object} payload password {String} 密码
         * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
         */
        async sendLogcode({
            username = '呵粑粑牛',
        } = {}) {
            const res = await api.SYS_SA_SENDCODE({ username })
            return res
        },
        /**
         * @description 管理员登录
         * @param {Object} context
         * @param {Object} payload username {String} 用户账号
         * @param {Object} payload password {String} 密码
         * @param {Object} payload logcode {String} 登录码
         * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
         */
        async surperAdminLogin({ dispatch }, {
            username = '',
            password = '',
            logcode = ''
        } = {}) {
            const resToken = await api.SYS_SA_LOGIN({ username, password, logcode })
            util.cookies.set('uuid', resToken.uuid)
            util.cookies.set('token', resToken.token)
            const resInfo = await api.SYS_SA_ADMININFO()
            // 设置 vuex 用户信息
            await dispatch('d2admin/user/set', { name: resInfo.admin_name, avatar: resInfo.avatar }, { root: true })
            // await dispatch('d2admin/user/set', { avatar: resToken.avatar }, { root: true })
            // 用户登录后从持久化数据加载一系列的设置
            await dispatch('load')
        },
        /**
        * @description 员工登录
        * @param {Object} context
        * @param {Object} payload username {String} 用户账号
        * @param {Object} payload password {String} 密码
        * @param {Object} payload route {Object} 登录成功后定向的路由对象 任何 vue-router 支持的格式
        */
        async empLogin({ dispatch }, {
            username = '',
            password = ''
        } = {}) {
            const resToken = await api.SYS_EMP_LOGIN({ username, password })
            util.cookies.set('uuid', resToken.uuid)
            util.cookies.set('token', resToken.token)
            const resInfo = await api.SYS_EMP_EMPINFO()
            // 设置 vuex 用户信息
            await dispatch('d2admin/user/set', { name: resInfo.nick_name, avatar: resInfo.avatar }, { root: true })
            // await dispatch('d2admin/user/set', { avatar: resToken.avatar }, { root: true })
            // 用户登录后从持久化数据加载一系列的设置
            await dispatch('load')
        },
        /**
         * @description 注销用户并返回登录页面
         * @param {Object} context
         * @param {Object} payload confirm {Boolean} 是否需要确认
         */
        logout({ commit, dispatch }, { confirm = false } = {}) {
            /**
             * @description 注销
             */
            async function logout() {
                // 删除cookie
                util.cookies.remove('token')
                util.cookies.remove('uuid')
                // 清空 vuex 用户信息
                await dispatch('d2admin/user/set', {}, { root: true })
                // 跳转路由
                router.push({ name: 'login' })
            }
            // 判断是否需要确认
            if (confirm) {
                commit('d2admin/gray/set', true, { root: true })
                MessageBox.confirm('确定要注销当前用户吗', '注销用户', { type: 'warning' })
                    .then(() => {
                        commit('d2admin/gray/set', false, { root: true })
                        logout()
                    })
                    .catch(() => {
                        commit('d2admin/gray/set', false, { root: true })
                        Message({ message: '取消注销操作' })
                    })
            } else {
                logout()
            }
        },
        /**
         * @description 用户登录后从持久化数据加载一系列的设置
         * @param {Object} context
         */
        async load({ dispatch }) {
            // 加载用户名
            await dispatch('d2admin/user/load', null, { root: true })
            // 加载主题
            await dispatch('d2admin/theme/load', null, { root: true })
            // 加载页面过渡效果设置
            await dispatch('d2admin/transition/load', null, { root: true })
            // 持久化数据加载上次退出时的多页列表
            await dispatch('d2admin/page/openedLoad', null, { root: true })
            // 持久化数据加载侧边栏配置
            await dispatch('d2admin/menu/asideLoad', null, { root: true })
            // 持久化数据加载全局尺寸
            await dispatch('d2admin/size/load', null, { root: true })
            // 持久化数据加载颜色设置
            await dispatch('d2admin/color/load', null, { root: true })
        }
    }
}