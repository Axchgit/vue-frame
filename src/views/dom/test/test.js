// /*
//  * @Author: xch
//  * @Date: 2020-08-20 17:40:30
//  * @LastEditTime: 2020-08-20 18:09:12
//  * @LastEditors: xch
//  * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\views\dom\test\test.js
//  * @Description:
//  */
// // store/permission.js
// import { asyncRouterMap, constantRouterMap } from 'src/router';

// function hasPermission(roles, route) {
//   if (route.meta && route.meta.role) {
//       //知识点:some()判断数组是否满足一个条件
//       //知识点:indexOf(value)匹配数组中value的位置,无则返回-1
//       //知识点:箭头函数 x=> x*x  ===  function(x) {x*x}
//     return roles.some(role => route.meta.role.indexOf(role) >= 0)
//   } else {
//     return true
//   }
// }

// const permission = {
//   state: {
//     routers: constantRouterMap,
//     addRouters: []
//   },
//   mutations: {
//     SET_ROUTERS: (state, routers) => {
//       state.addRouters = routers;
//       //知识点:concat()用于连接两个数组,不改变原数组值
//       state.routers = constantRouterMap.concat(routers);
//     }
//   },
//   actions: {
//     GenerateRoutes({ commit }, data) {
//       return new Promise(resolve => {
//         const { roles } = data;
//         //知识点:filter()参数为方法,在这里用箭头函数代替,方法传值即为数组本身,用v代替
//         const accessedRouters = asyncRouterMap.filter(v => {
//           if (roles.indexOf('admin') >= 0) return true;
//           if (hasPermission(roles, v)) {
//             if (v.children && v.children.length > 0) {
//               v.children = v.children.filter(child => {
//                 if (hasPermission(roles, child)) {
//                   return child
//                 }
//                 return false;
//               });
//               return v
//             } else {
//               return v
//             }
//           }
//           return false;
//         });
//         //知识点:修改store里的state要用commit提交mutations
//         commit('SET_ROUTERS', accessedRouters);
//         resolve();
//       })
//     }
//   }
// };

// export default permission;

