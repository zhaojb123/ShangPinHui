// home 组件的小仓库
import { reqCategoryList, reqGetBanner, reqGetFloorList } from '../../api/index.js'
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST (state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST (state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST (state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  // 向服务器发起请求，获取数据
  async CategoryList ({ commit }) {
    const result = await reqCategoryList()
    // console.log(result)
    if (result.status === 200) {
      commit('CATEGORYLIST', result.data.data)
    }
  },
  // 获取banner数据
  async getBannerList ({ commit }) {
    const { data: res } = await reqGetBanner()
    // console.log(res)
    if (res.code === 200) {
      commit('GETBANNERLIST', res.data)
    }
  },
  // 获取floor数据
  async getFloorList ({ commit }) {
    const { data: res } = await reqGetFloorList()
    if (res.code === 200) {
      commit('GETFLOORLIST', res.data)
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
