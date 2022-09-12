// trade 组件的小仓库
import { reqGetUserAddressInfo, reqGetOrderInfo } from '../../api/index.js'
const state = {
  addressInfo: [],
  orderInfo: {}
}
const mutations = {
  GETUSERADDRESSINFO (state, addressInfo) {
    state.addressInfo = addressInfo
  },
  GETORDERINFO (state, orderInfo) {
    state.orderInfo = orderInfo
  }
}
const actions = {
  // 获取用户地址信息
  async getUserAddressInfo ({ commit }) {
    const { data: res } = await reqGetUserAddressInfo()
    if (res.code === 200) {
      commit('GETUSERADDRESSINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  },
  // 获取商品交易订单
  async getOrderInfo ({ commit }) {
    const { data: res } = await reqGetOrderInfo()
    if (res.code === 200) {
      commit('GETORDERINFO', res.data)
      return 'ok'
    } else {
      return Promise.reject(new Error('fail'))
    }
  }
}
const getters = {

}
export default {
  state,
  mutations,
  actions,
  getters

}
