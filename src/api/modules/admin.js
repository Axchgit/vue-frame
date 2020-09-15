
/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2020-09-14 18:52:23
 * @LastEditors: Chenhao Xing
 * @Description:
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\employee.js
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
             * @description:对员工个人资料的操作
             */
    UPLOAD_EMPLOYEE_EXCEL(data = {}) {
        // 接口请求
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/uploadExcel',
            method: 'post',
            data
        })
    }

})
