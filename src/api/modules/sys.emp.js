/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2021-01-04 03:22:58
 * @LastEditors: xch
 * @Description: 员工登录api
 * @FilePath: \testd:\wamp64\www\vue-frame\src\api\modules\sys.emp.js
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
     * @description 登录
     * @param {Object} data 登录携带的信息
     */
    SYS_EMP_LOGIN(data = {}) {
        // console.log(process.env.VUE_APP_AJAX_URL)
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/checkEmpLogin',
            method: 'post',
            data
        })
    },
    /**
     * @description 登录后获取员工账户信息
     */
    SYS_EMP_EMPINFO() {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/selectempinfo',
            method: 'get'
        })
    },
    /**
     * @description 忘记密码-发送验证码
     * @param {*} data
     */
    SYS_EMP_SENDRECOVERCODE(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/sendRecoverCode',
            method: 'post',
            data
        })
    },
    /**
     * @description 忘记密码-修改密码
     * @param {*} data
     */
    SYS_EMP_RECOVER(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/checkRecover',
            method: 'post',
            data
        })
    },
    /**
     * @description 员工激活账户-发送验证码
     * @param {*} data
     */
    SYS_EMP_SENDACTIVATECODE(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/sendActivateCode',
            method: 'post',
            data
        })
    },
    /**
     * @description 员工激活账户-创建账户信息
     * @param {*} data
     */
    SYS_EMP_CREATE(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/createEmpAc',
            method: 'post',
            data
        })
    },
    // /**
    //  * @description 员工登录-获取二维码uid
    //  * @param {*} data
    //  */
    // SYS_EMP_GETQRUID() {
    //     return request({
    //         url: process.env.VUE_APP_AJAX_URL + '/login/getQruid',
    //         method: 'post'
    //     })
    // },
    SYS_EMP_GETQRUID(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/getQruid',
            method: 'post',
            data
        })
    },
    SYS_EMP_GETQRUIDINFO(url = '') {
        return request({
            baseURL: process.env.VUE_APP_API,
            url,
            method: 'get'
        })
    },
    SYS_EMP_GETUSERINFO(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/login/getUserInfo',
            method: 'post',
            data
        })
    }

})
