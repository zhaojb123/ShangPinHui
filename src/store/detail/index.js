// detail 组件的小仓库
import { reqGetGoodsList, reqAddOrUpdateShopCart } from '@/api/index.js'
import { getUUID } from '@/utils/uuid_token.js'
const state = {
  goodsList: {},
  // 游客临时身份
  uuid_token: getUUID()
}
const mutations = {
  GETGOODSLIST (state, goodsList) {
    state.goodsList = goodsList
  }
}
const actions = {
  // 获取产品信息
  async getGoodsList ({ commit }, id) {
    const { data: res } = await reqGetGoodsList(id)
    if (res.code === 200) {
      commit('GETGOODSLIST', res.data)
    }
  },
  // 将产品添加到购物车
  async addShopCart ({ commit }, { skuId, skuNum }) {
    const { data: res } = await reqAddOrUpdateShopCart(skuId, skuNum)
    if (res.code === 200) {
      return 'ok'
    } else {
      return Promise.reject(new Error('faile'))
    }
  }
}
const getters = {
  categoryView (state) {
    return state.goodsList.categoryView || {}
  },
  skuInfo (state) {
    return state.goodsList.skuInfo || {}
  },
  spuSaleAttrList (state) {
    return state.goodsList.spuSaleAttrList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters

}
