/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-13 16:52:41
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\submit\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetPerformanceList(query) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/selectPerformanceByUuid',
        method: 'get',
        params: query
    })
}

export function SelectPerformanceByUuid({ key, value }) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/selectPerformanceByUuid',
        method: 'get',
        params: { key, value }
    })
}

export function AddPerformance(goods) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/submitPerformancByUuid',
        method: 'post',
        data: goods
    })
}

export function UpdatePerformance(room) {
    return request({
        url: '/hotel/room/update',
        method: 'post',
        data: room
    })
}
export function DelPerformance(id) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/deletePerformanceByUuuid',
        method: 'post',
        params: { id }
    })
}
