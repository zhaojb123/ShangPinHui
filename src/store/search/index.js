// search 组件的小仓库
import { reqGetSearchList } from '@/api/index.js'
const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST (state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  // params,当用户派发action的时候，第二个参数传递过来的，至少是一个空对象
  async getSearchList ({ commit }, params) {
    const { data: res } = await reqGetSearchList(params)
    if (res.code === 200) {
      commit('GETSEARCHLIST', res.data)
    }
  }
}
const getters = {
  // 假如没有网或者网络不给力，服务器数据没有获取，则设置一个默认空数组
  attrsList (state) {
    return state.searchList.attrsList || []
  },
  goodsList (state) {
    return state.searchList.goodsList || []
  },
  trademarkList (state) {
    return state.searchList.trademarkList || []
  }
}
export default {
  state,
  mutations,
  actions,
  getters

}
