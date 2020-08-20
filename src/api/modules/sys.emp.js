/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2020-08-20 14:38:23
 * @LastEditors: xch
 * @Description: 员工登录api
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\sys.emp.js
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
     * @description 登录
     * @param {Object} data 登录携带的信息
     */
    SYS_EMP_LOGIN(data = {}) {
        // 接口请求
        return request({
            url: '/api/login/checkEmpLogin',
            method: 'post',
            data
        })
    },

    SYS_EMP_EMPINFO() {
        // 接口请求
        return request({
            url: '/api/login/selectempinfo',
            method: 'get'
        })
    }

})