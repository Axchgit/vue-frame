/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-14 02:54:58
 * @LastEditors: Chenhao Xing
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\submit\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetList(query) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/selectFeedback',
        method: 'get',
        params: query
    })
}
export function AddObj(data) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/addFeedback',
        method: 'post',
        data: data
    })
}

export function UpdateObj(data) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/admin/reviewFeedback',
        method: 'post',
        data: data
    })
}
export function DelObj(id) {
    return request({
        url: process.env.VUE_APP_AJAX_URL + '/employee/recallFeedback',
        method: 'post',
        params: { id }
    })
}
