/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2021-04-13 00:52:05
 * @LastEditors: xch
 * @Description:
 * @FilePath: \vue-frame\src\api\modules\employee.js
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
             * @description:对员工个人资料的操作
             */
    // 查询请员工个人资料
    // var prefix = ''
    EMPLOYEE_SELECT_ALL(params = {}) {
    // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAll',
            method: 'get',
            params
        })
    },
    // 根据信息查询员工个人资料
    EMPLOYEE_SELECT_INFO(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectByInfo',
            method: 'get',
            params
        })
    },
    // 根据权限查询
    EMPLOYEE_SELECT_ROLE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectByRole',
            method: 'get',
            params
        })
    },
    // 修改员工个人资料
    // EMPLOYEE_UPDATE_ALL(params = {}) {
    //     return request({
    //         url: process.env.VUE_APP_AJAX_URL + '/employee/updateInfoAll',
    //         method: 'post',
    //         params
    //     })
    // },

    EMPLOYEE_UPDATE_INFO(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateEmployeeAccountInfo',
            method: 'post',
            params
        })
    },
    EMPLOYEE_UPDATE_PASSWORD(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateEmployeeAccountPassword',
            method: 'post',
            params
        })
    },
    // 删除员工个人资料
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
    // 查询员工账户信息
    EMPACCOUNT_SELECT_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcAll',
            method: 'get',
            params
        })
    },
    // 根据信息查询员工账户资料
    EMPACCOUNT_SELECT_INFO(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcByName',
            method: 'get',
            params
        })
    },
    // 根据信息查询员工账户资料
    EMPACCOUNT_SELECT_ROLE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/selectAcByRole',
            method: 'get',
            params
        })
    },
    // 修改员工账户信息
    EMPACCOUNT_UPDATE_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateAcAll',
            method: 'post',
            params
        })
    },
    // 删除员工账户信息
    EMPACCOUNT_DELETE_ALL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/deleteAc',
            method: 'post',
            params
        })
    },
    // 修改员工账户信息
    EMPACCOUNT_UPDATE_PASSWORD(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/updateAcPW',
            method: 'post',
            params
        })
    },
    /** ***通告 */
    // 获取通告信息
    EMP_VIEW_BULLETIN(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/viewBulletin',
            method: 'get',
            params
        })
    },
    // 阅读通告
    EMP_READ_BULLETIN(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/readBulletin',
            method: 'get',
            params
        })
    },
    EMP_GET_COUNTBULLETINUNREAD() {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/employee/getCountUnreadBulletin',
            method: 'get'
        })
    }

})
