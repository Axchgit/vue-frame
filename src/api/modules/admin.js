
/*
 * @Author: xch
 * @Date: 2020-08-13 14:29:47
 * @LastEditTime: 2021-04-13 01:23:05
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
    // 发送通告
    ADMIN_SEND_BULLETIN(data = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/sendBulletin',
            method: 'post',
            data
        })
    },
    // 获取通告信息
    ADMIN_VIEW_BULLETIN(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/viewAllBulletin',
            method: 'get',
            params
        })
    },
    // 阅读通告
    // PERSON_READ_BULLETIN(params = {}) {
    //     return request({
    //         url: process.env.VUE_APP_AJAX_URL + '/person/readBulletin',
    //         method: 'get',
    //         params
    //     })
    // },

    /** ****数据库备份 */
    ADMIN_GET_BACKUPFILELIST(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/viewBackupFile',
            method: 'get',
            params
        })
    },
    // 删除数据库备份文件
    ADMIN_GET_DELETEBACKUPFILE(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/deleteBackupFile',
            method: 'get',
            params
        })
    },
    // 恢复数据库
    ADMIN_GET_RESTORESQL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/restoreSqlByBackupFile',
            method: 'post',
            params
        })
    },
    // 备份数据库
    ADMIN_GET_BACKUPSQL(params = {}) {
        return request({
            url: process.env.VUE_APP_AJAX_URL + '/admin/backupSqlApi',
            method: 'get',
            params
        })
    }
    /** ****** */

})
