/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-14 15:26:42
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\goods\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetList(query) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/selectEmployeeInfo',
        method: 'get',
        params: query
    })
}
// export function selectPerformanceGoodsByUuid({ key, value }) {
//     return request({
//         url: process.env.VUE_APP_AJAX_URL + '/employee/selectPerformanceGoodsByUuid',
//         method: 'get',
//         params: { key, value }
//     })
// }
// export function AddObj(goods) {
//     return request({
//         url: process.env.VUE_APP_AJAX_URL + '/employee/submitPerformanc',
//         method: 'post',
//         data: goods
//     })
// }

export function UpdateObj(data) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/updateEmployeeInfo',
        method: 'post',
        data: data
    })
}
export function DelObj(id) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/deleteEmployeeInfo',
        method: 'post',
        params: { id }
    })
}

