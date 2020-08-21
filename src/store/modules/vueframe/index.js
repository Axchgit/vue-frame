/*
 * @Author: xch
 * @Date: 2020-08-21 14:39:48
 * @LastEditTime: 2020-08-21 14:40:22
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\store\modules\vue-frame\index.js
 * @Description: 
 */
/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default {
    namespaced: true,
    modules
}