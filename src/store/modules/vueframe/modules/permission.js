/*
 * @Author: xch
 * @Date: 2020-08-21 14:40:56
 * @LastEditTime: 2020-09-02 17:16:09
 * @LastEditors: xch
 * @FilePath: \epdemoc:\wamp64\www\vue-frame\src\store\modules\vueframe\modules\permission.js
 * @Description:
 */
// import { asyncRoutes, constantRoutes } from '@/router'
import { asyncRoutes, constantRoutes } from '@/router/routes'

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
    // return roles.some(role => route.meta.roles.includes(role))
        return roles <= route.meta.roles
    } else {
        return true
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, roles) {
    const res = []

    routes.forEach(route => {
        const tmp = { ...route }
        if (hasPermission(roles, tmp)) {
            if (tmp.children) {
                tmp.children = filterAsyncRoutes(tmp.children, roles)
            }
            res.push(tmp)
        }
    })

    return res
}

const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    generateRoutes({ commit }, roles) {
        return new Promise(resolve => {
            var accessedRoutes
            // if (roles.includes('admin')) {
            //   accessedRoutes = asyncRoutes || []
            // } else {
            accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            // }
            commit('SET_ROUTES', accessedRoutes)
            resolve(accessedRoutes)
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
