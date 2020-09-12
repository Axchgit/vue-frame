/*
 * @Author: xch
 * @Date: 2020-09-02 16:49:39
 * @LastEditTime: 2020-09-02 17:14:40
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\store\modules\d2admin\modules\releases.js
 * @Description:
 */
// import util from '@/libs/util.js'

export default {
    namespaced: true,
    mutations: {
    /**
         * @description 显示版本信息
         * @param {Object} state state
         */
        // D2项目逻辑:在控制台打印项目信息
        versionShow() {
            // util.log.capsule('D2Admin', `v${process.env.VUE_APP_VERSION}`)
            // console.log('D2 Admin  https://github.com/d2-projects/d2-admin')
            // console.log('D2 Crud   https://github.com/d2-projects/d2-crud')
            // console.log('Document  https://d2.pub/zh/doc/d2-admin')
            // console.log('请不要吝啬您的 star，谢谢 ~')
        }
    }
}
