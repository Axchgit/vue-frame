/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2020-08-24 01:41:48
 * @LastEditors: xch
 * @Description:
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\sys.sa.js
 */
import { find, assign } from 'lodash'
const users = [
    { username: 'surperadmin', password: 'admin', uuid: 'admin-uuid', name: 'surperAdmin', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' }
]
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
     * @description 登录
     * @param {Object} data 登录携带的信息
     */
    // D2项目逻辑:登录5.最终接收用户输入并验证
    SYS_SA_LOGIN(data = {}) {
    // 模拟数据
        mock
            .onAny('/salogin')
            .reply(config => {
                const user = find(users, tools.parse(config.data))
                return user
                    ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))

                // tools.responseSuccess(assign({}, user, { token: 3123123213213 })) :
                    : tools.responseError({}, '账号或密码不正确')
            })
        // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + 'login/checkAdminLogin',
            method: 'post',
            data
        })
    },
    /**
 * @description 登录码
 * @param {Object} data 登录携带的信息
 */
    // D2项目逻辑:登录5.最终接收用户输入并验证
    SYS_SA_SENDCODE(data = {}) {
    // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/sendadminCode',
            method: 'post',
            data
        })
    },
    SYS_SA_ADMININFO() {
    // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/selectadmininfo',
            method: 'get'
        })
    }

})
