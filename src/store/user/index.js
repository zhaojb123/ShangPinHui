import { reqGetCode, reqUserRegister, reqUserLogin, reqGetUserInfo, reqLoginOut } from '../../api/index.js'
const state = {
  code: '',
  token: localStorage.getItem('token'),
  userInfo: {}
}

const mutations = {
  GETCODE (state, code) {
    state.code = code
  },
  USERLOGIN (state, token) {
    state.token = token
  },
  GETUSERINFO (state, userInfo) {
    state.userInfo = userInfo
  },
  // 清空本地数据
  CLEAR (state) {
    state.code = ''
    state.userInfo = {}
    state.token = ''
    localStorage.removeItem('token')
  }
}

const actions = {
  // 获取验证码
  async getCode ({ commit }, phone) {
    const { data: res } = await reqGetCode(phone)
    if (res.code === 200) {
      commit('GETCODE', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户注册
  async userRegister ({ commit }, { phone, password, code }) {
    const { data: res } = await reqUserRegister(phone, password, code)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 用户登录
  async userLogin ({ commit }, { phone, password }) {
    const { data: res } = await reqUserLogin(phone, password)
    if (res.code === 200) {
      commit('USERLOGIN', res.data.token)
      localStorage.setItem('token', res.data.token)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取用户信息
  async getUserInfo ({ commit }) {
    const { data: res } = await reqGetUserInfo()
    if (res.code === 200) {
      commit('GETUSERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 退出登录
  async loginOut ({ commit }) {
    const { data: res } = await reqLoginOut()
    if (res.code === 200) {
      commit('CLEAR')
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
