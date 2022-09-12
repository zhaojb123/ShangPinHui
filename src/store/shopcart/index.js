// shopcart 组件的小仓库
import { reqDeleteShopCart, reqGetShopCartList, reqUpdataShopChecked } from '@/api/index.js'
const state = {
  cartList: []
}
const mutations = {
  GETSHOPCARTLIST (state, cartList) {
    state.cartList = cartList
  }
}
const actions = {
  // 获取购物车列表
  async getShopCartList ({ commit }) {
    const { data: res } = await reqGetShopCartList()
    if (res.code === 200) {
      commit('GETSHOPCARTLIST', res.data)
    }
  },
  // 删除购物车某一个产品
  async deleteShopCart ({ commit }, skuId) {
    const { data: res } = await reqDeleteShopCart(skuId)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },

  // 修改某一个商品的选中状态
  async updataShopChecked ({ commit }, { skuId, isChecked }) {
    const { data: res } = await reqUpdataShopChecked(skuId, isChecked)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  },
  // 删除所有选中的商品
  deleteAllSelectShop ({ dispatch, getters }) {
    const PromiseAll = []
    getters.cartList.cartInfoList.forEach(item => {
      const promise = item.isChecked === 1 ? dispatch('deleteShopCart', item.skuId) : ''
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  },
  // 修改所有商品属性
  updataAllShopChecked ({ dispatch, state }, allChecked) {
    const PromiseAll = []
    state.cartList[0].cartInfoList.forEach(item => {
      const promise = item.isChecked !== allChecked ? dispatch('updataShopChecked', { skuId: item.skuId, isChecked: allChecked }) : ''
      PromiseAll.push(promise)
    })
    return Promise.all(PromiseAll)
  }
}
const getters = {
  cartList (state) {
    return state.cartList[0] || {}
  }
}
export default {
  state,
  mutations,
  actions,
  getters

}
