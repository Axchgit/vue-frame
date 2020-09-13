/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-14 02:22:16
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\submit\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetList(query) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/selectEmployeeLeave',
        method: 'get',
        params: query
    })
}

export function SelectPerformanceByUuid({ key, value }) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/selectPerformanceByUuid',
        method: 'get',
        params: { key, value }
    })
}

export function AddObj(data) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/addEmployeeLeave',
        method: 'post',
        data: data
    })
}

export function UpdateObj(data) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/reviewEmployeeLeave',
        method: 'post',
        data: data
    })
}
export function DelObj(id) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/recallEmployeeLeave',
        method: 'post',
        params: { id }
    })
}
