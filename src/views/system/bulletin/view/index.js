/*
 * @Description:
 * @Author: 罗曼
 * @Date: 2020-09-12 02:32:30
 * @FilePath: \vue-frame\src\views\system\bulletin\view\index.js
 * @LastEditTime: 2021-04-13 01:29:17
 * @LastEditors: xch
 */
// import page from './page'

// export default page
import adminPage from './admin/page'
import empPage from './employee/page'
import util from '@/libs/util.js'

const role = util.cookies.get('roles')
let page = empPage
if (role < 2) {
    page = adminPage
}
export default page
