/*
 * @Author: xch
 * @Date: 2020-09-01 13:12:37
 * @LastEditTime: 2020-09-01 16:39:13
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\assets\js\commonFunction.js
 * @Description:
 */
// export default {
//   login: function() {
//     console.log('1111')
//   },

//   formatDate: function(date, fmt) {

//   }

//   // function padLeftZero(str) {
//   //   return ('00' + str).substr(str.length)
//   // }

// }

// 自定义一个common.js
export default {
    install(Vue) {
        Vue.prototype.formatDate = function(date, fmt) {
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
            }
            const o = {
                'M+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'm+': date.getMinutes(),
                's+': date.getSeconds()
            }
            for (const k in o) {
                if (new RegExp(`(${k})`).test(fmt)) {
                    const str = o[k] + ''
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
                }
            }
            return fmt
        }
    }
}

// MyPlugin.install = function(Vue, options) {
//   // 1. 添加全局方法或 property
//   Vue.formatDate = function(date, fmt) {
//        if (/(y+)/.test(fmt)) {
//         fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
//       }
//       const o = {
//         'M+': date.getMonth() + 1,
//         'd+': date.getDate(),
//         'h+': date.getHours(),
//         'm+': date.getMinutes(),
//         's+': date.getSeconds()
//       }
//       for (const k in o) {
//         if (new RegExp(`(${k})`).test(fmt)) {
//           const str = o[k] + ''
//           fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : ('00' + str).substr(str.length))
//         }
//       }
//       return fmt

//     // 逻辑...
//   }

//   // // 2. 添加全局资源
//   // Vue.directive('my-directive', {
//   //   bind (el, binding, vnode, oldVnode) {
//   //     // 逻辑...
//   //   }
//   //   ...
//   // })

//   // // 3. 注入组件选项
//   // Vue.mixin({
//   //   created: function () {
//   //     // 逻辑...
//   //   }
//   //   ...
//   // })

//   // // 4. 添加实例方法
//   // Vue.prototype.$myMethod = function (methodOptions) {
//   //   // 逻辑...
//   // }
// }
