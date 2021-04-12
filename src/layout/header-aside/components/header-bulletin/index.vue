<!--
 * @Description:
 * @Author: 罗曼
 * @Date: 2020-11-13 01:42:58
 * @FilePath: \vue-frame\src\layout\header-aside\components\header-bulletin\index.vue
 * @LastEditTime: 2021-04-13 00:44:58
 * @LastEditors: xch
-->
<template>
  <el-tooltip effect="dark" :content="bulletinContent" placement="bottom">
    <el-button
      class="d2-ml-0 d2-mr btn-text can-hover"
      type="text"
      @click="handleClick"
    >
      <!-- <el-badge v-if="logLength > 0" :max="99" :value="logLengthError" :is-dot="logLengthError === 0">
        <d2-icon :name="logLengthError === 0 ? 'dot-circle-o' : 'bug'" style="font-size: 20px"/>
      </el-badge> -->
      <el-badge v-if="bulletinUnreadConut > 0" :max="10"  :value="bulletinUnreadConut" class="item">
        <!-- <el-button size="small">评论</el-button> -->
        <!-- <i class="fa fa-envelope-o fa-6" aria-hidden="true"/> -->
        <d2-icon name="envelope-o" style="font-size: 20px;"/>

      </el-badge>
      <!-- <d2-icon v-else name="dot-circle-o" style="font-size: 20px"/> -->
        <d2-icon v-else name="envelope-open-o" style="font-size: 20px;"/>
    </el-button>
  </el-tooltip>
</template>

<script>
import api from '@/api'

// import { mapGetters, mapMutations } from 'vuex'
export default {
    data() {
        return {
            messageConut: 0,
            bulletinUnreadConut: 0
        }
    },
    watch: {
    // 检测路由变化切换侧边栏内容
    // '$route.matched': {
    //   handler(matched) {
    //     if (matched.length > 0) {
    //       const _side = menuAside.filter(menu => menu.path === matched[0].path)
    //       this.$store.commit('d2admin/menu/asideSet', _side.length > 0 ? _side[0].children : [])
    //     }
    //   },
    //   immediate: true
    // },
        $route: {
            /**
             * 优化监听对象
             * @param {*} val :当前路由
             * @param {*} oldVal 前一个路由
             * @description:监听路由变化,登录后刷新页面
             */
            handler: function(val, oldVal) {
                /**
                 * 逻辑
                 * 前一个路由为通告界面,且当前路由不为登录页面时
                 *    重新获取数据
                 */
                if (oldVal.path === '/bulletin') {
                    if (val.path !== '/salogin' && val.path !== '/emplogin') {
                        this.getCountBulletinUnread().then((res) => {
                            this.bulletinUnreadConut = res.unread
                            // console.log('路由监听测试')
                        })
                    }
                }
            }

        }
    },
    mounted() {
        this.getCountBulletinUnread().then((res) => {
            // this.transferHistoryData = res
            this.bulletinUnreadConut = res.unread
            // return res + '条未读消息'
            // return this.bulletinUnreadConut
            // console.log(this.person_info['装出人姓名'])
        })
    },
    computed: {

        // ...mapGetters('d2admin', {
        //   logLength: 'log/length',
        //   logLengthError: 'log/lengthError'
        // }),
        bulletinContent() {
            // return this.bulletinUnreadConut + '条未读消息'
            // return this.messageConut + '条消息'
            return this.bulletinUnreadConut === 0
                ? '没有新消息'
                : this.bulletinUnreadConut + '条新消息'
        }
    },
    methods: {
        async getCountBulletinUnread() {
            const res = await api.EMP_GET_COUNTBULLETINUNREAD()
            return res
        },
        // ...mapMutations('d2admin/log', ['clean']),
        handleClick() {
            // console.log(123)
            // 知识点:直接利用路由器跳转网页
            this.$router.push({
                name: 'bulletin'
            })
        }
    }
}
</script>
