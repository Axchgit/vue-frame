/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2020-08-24 00:45:55
 * @LastEditors: xch
 * @Description: 
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\employee.js
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
     * @description:对员工个人资料的操作
     */
    //查询请按不员工个人资料
    // var prefix = ''
    EMPLOYEE_SELECT_ALL(params = {}) {
        // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAll',
            method: 'get',
            params
        })
    },
    //根据信息查询员工个人资料
    EMPLOYEE_SELECT_INFO(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectByInfo',
            method: 'get',
            params
        })
    },
    //根据权限查询
    EMPLOYEE_SELECT_ROLE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectByRole',
            method: 'get',
            params
        })
    },
    //修改员工个人资料
    EMPLOYEE_UPDATE_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateInfoAll',
            method: 'post',
            params
        })
    },
    //删除员工个人资料
    EMPACCOUNT_DELETE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/deleteInfo',
            method: 'post',
            params
        })
    },




    /**
     * @description:对员工账户信息的操作
     */
    //查询员工账户信息
    EMPACCOUNT_SELECT_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcAll',
            method: 'get',
            params
        })
    },
    //根据信息查询员工账户资料
    EMPACCOUNT_SELECT_INFO(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcByName',
            method: 'get',
            params
        })
    },
    //根据信息查询员工账户资料
    EMPACCOUNT_SELECT_ROLE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcByRole',
            method: 'get',
            params
        })
    },
    //修改员工账户信息
    EMPACCOUNT_UPDATE_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateAcAll',
            method: 'post',
            params
        })
    },
    //删除员工账户信息
    EMPACCOUNT_DELETE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/deleteAc',
            method: 'post',
            params
        })
    },
    //修改员工账户信息
    EMPACCOUNT_UPDATE_PASSWORD(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateAcPW',
            method: 'post',
            params
        })
    },





})