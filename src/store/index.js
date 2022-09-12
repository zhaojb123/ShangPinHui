import Vue from 'vue'
import Vuex from 'vuex'
// // state:仓库存储数据的地方
// const state = { count: 1 }
// // mutations：修改state的唯一手段
// const mutations = {
//   ADD (state) {
//     state.count++
//   }
// }
// // actions：处理action，可以书写自己的业务逻辑，也可以处理异步
// const actions = {
//   add ({ commit }) {
//     commit('ADD')
//   }
// }
// // getters：可以理解为计算属性，可以简化数据仓库，让组件获取仓库的数据更加方便
// const getters = {}

// 引入小仓库
import home from './home'
import search from './search'
import detail from './detail'
import shopcart from './shopcart'
import user from './user'
import trade from './trade'

Vue.use(Vuex)
// 对外暴露store类的一个实例
export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters

  // 实现vuex仓库模块化开发存储数据
  modules: {
    home,
    search,
    detail,
    shopcart,
    user,
    trade
  }
})
