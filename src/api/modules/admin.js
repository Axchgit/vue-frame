
/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2021-04-11 23:54:54
 * @LastEditors: xch
 * @Description:
 * @FilePath: \vue-frame\src\api\modules\admin.js
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
    },

    /** ****数据库备份 */
    ADMIN_GET_BACKUPFILELIST(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/viewBackupFile',
            method: 'get',
            params
        })
    },
    ADMIN_GET_DELETEBACKUPFILE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/deleteBackupFile',
            method: 'get',
            params
        })
    },
    ADMIN_GET_RESTORESQL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/restoreSqlByBackupFile',
            method: 'post',
            params
        })
    },
    ADMIN_GET_BACKUPSQL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/backupSqlApi',
            method: 'get',
            params
        })
    }

})
