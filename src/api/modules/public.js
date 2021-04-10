/*
 * @Description:
 * @Author: xch
 * @Date: 2021-04-09 17:09:14
 * @FilePath: \vue-frame\src\api\modules\public.js
 * @LastEditTime: 2021-04-09 17:09:25
 * @LastEditors: xch
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
                 * @description:对员工个人资料的操作
                 */
    // 查询请按不员工个人资料
    // var prefix = ''
    PROFILE_GET_PERSON(params = {}) {
        // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/index/getProfile',
            method: 'get',
            params
        })
    }

})

