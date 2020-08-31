import { find, assign } from 'lodash'

const users = [
  { username: 'admin', password: 'admin', uuid: 'admin-uuid', name: 'Admin', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' },
  { username: 'editor', password: 'editor', uuid: 'editor-uuid', name: 'Editor', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' },
  { username: 'user1', password: 'user1', uuid: 'user1-uuid', name: 'User1', avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif' }
]

export default ({ service, request, serviceForMock, requestForMock, mock, faker, tools }) => ({
  /**
     * @description 登录
     * @param {Object} data 登录携带的信息
     */
  // D2项目逻辑:登录5.最终接收用户输入并验证
  SYS_USER_LOGIN(data = {}) {
    // 模拟数据
    mock
      .onAny('/login')
      .reply(config => {
        const user = find(users, tools.parse(config.data))
        return user
          ? tools.responseSuccess(assign({}, user, { token: faker.random.uuid() }))

        // tools.responseSuccess(assign({}, user, { token: 3123123213213 })) :
          : tools.responseError({}, '账号或密码不正确')
      })
    // 接口请求
    return requestForMock({
      url: '/login',
      method: 'post',
      data
    })
  }
})
