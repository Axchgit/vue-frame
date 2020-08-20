/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2020-08-20 16:38:02
 * @LastEditors: xch
 * @Description: 
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\employee.js
 */
import { find, assign } from 'lodash'
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    EMPLOYEE_SELECT_ALL(params = {}) {
        // 接口请求
        return request({
            url: '/api/employee/selectAll/',
            method: 'get',
            params
        })
    },
    EMPLOYEE_SELECT_INFO(params = {}) {
        // 接口请求
        return request({
            url: '/api/employee/selectByInfo/',
            method: 'get',
            params
        })
    },
    EMPLOYEE_SELECT_RULE(params = {}) {
        // 接口请求
        return request({
            url: '/api/employee/selectByRule/',
            method: 'post',
            params
        })
    }

})