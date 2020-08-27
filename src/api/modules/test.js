/*
 * @Author: xch
 * @Date: 2020-08-11 02:12:16
 * @LastEditTime: 2020-08-23 23:33:40
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\api\modules\test.js
 * @Description: 
 */
export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
    /**
     * @description 方法名称
     * @param {Object} data 请求携带的信息
     */
    DEMO_FETCH(data = {}) {
        //模拟数据
        mock
            .onAny('/api/v1/testApi')
            .reply(config => {
                // 您可以这样在拦截请求时获取携带的数据
                const data = tools.parse(config.data)
                    // 模拟正确的返回 并使用 faker 生成假数据
                    // return tools.responseSuccess({ id: faker.random.uuid() })
                return tools.responseSuccess({ id: tools.parse(config.data) + 123 })

                // 模拟失败的返回
                return tools.responseError({}, '错误信息')
            })
            // 接口请求
            //如果这个接口不需要模拟了， 请使用 request 代替 requestForMock
        return request({
            url: process.env.VUE_APP_AJAX_URL+'/testApi',
            method: 'post',
            data
        })
    }
})