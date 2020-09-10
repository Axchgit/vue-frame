/*
 * @Author: xch
 * @Date: 2020-09-02 23:54:36
 * @LastEditTime: 2020-09-10 09:49:44
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\employee\performance\goods\api.js
 * @Description:
 */
// import request from '@/business/api/request.mock'
import { request } from '@/api/service'
export function GetPerformanceList(query) {
  return request({
    url: process.env.VUE_APP_AJAX_URL + '/employee/selectPerformanceGoodsByUuid',
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
