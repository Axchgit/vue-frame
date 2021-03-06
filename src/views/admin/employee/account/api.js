/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-12 02:39:43
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\goods\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetPerformanceList(query) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/selectEmployeeAccount',
        method: 'get',
        params: query
    })
}

export function selectPerformanceGoodsByUuid({ key, value }) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/selectPerformanceGoodsByUuid',
        method: 'get',
        params: { key, value }
    })
}

export function AddPerformance(goods) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/submitPerformanc',
        method: 'post',
        data: goods
    })
}

export function UpdateEmployeeAccount(room) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/updateEmployeeAccount',
        method: 'post',
        data: room
    })
}
export function DelEmployeeAccount(id) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/deleteEmployeeAccount',
        method: 'post',
        params: { id }
    })
}
