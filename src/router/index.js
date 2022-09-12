// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login/index.vue'
import Register from '../pages/Register/index.vue'
import Search from '../pages/Search/index.vue'
import Detail from '../pages/Detail/index.vue'
import AddCartSuccess from '../pages/AddCartSuccess/index.vue'
import ShopCart from '../pages/ShopCart/index.vue'
import Trade from '../pages/Trade/index.vue'
import Pay from '../pages/Pay/index.vue'
import PaySuccess from '../pages/PaySuccess/index.vue'
import Center from '../pages/Center/index.vue'
// 引入二级路由
import MyOrder from '../pages/Center/myOrder/index.vue'
import GroupOrder from '../pages/Center/groupOrder/index.vue'
import store from '../store/index.js'

// import Home from '../pages/Home/index.vue'
const Home = () => import('../pages/Home/index.vue')
Vue.use(VueRouter)
// 重写push,replace 解决多次点击同一路由报错问题
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, reject, resolve)
  } else {
    originPush.call(this, location, () => {}, () => {})
  }
}
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, reject, resolve)
  } else {
    originReplace.call(this, location, () => {}, () => {})
  }
}
const router = new VueRouter({
  // 代表滚动条回到最顶上
  scrollBehavior () {
    return { y: 0 }
  },
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home, meta: { show: true } },
    { path: '/login', component: Login, meta: { show: false } },
    { path: '/register', component: Register, meta: { show: false } },
    // params后加一个？号，代表可传可不传
    // 路由props传参三种写法，布尔型，对象型，函数型
    { path: '/search/:keyword?', component: Search, meta: { show: true }, name: 'search' },
    { path: '/detail/:id', component: Detail, meta: { show: true } },
    { path: '/addcartsuccess', component: AddCartSuccess, name: 'addcartsuccess', meta: { show: true } },
    { path: '/shopcart', component: ShopCart, name: 'shopcart', meta: { show: true } },
    {
      path: '/trade',
      component: Trade,
      name: 'trade',
      beforeEnter: (to, from, next) => {
        if (from.path === '/shopcart' || from.path === '/') {
          next()
        } else {
          next(false)
        }
      },
      meta: { show: true }
    },
    {
      path: '/pay',
      component: Pay,
      name: 'pay',
      beforeEnter: (to, from, next) => {
        if (from.path === '/trade' || from.path === '/') {
          next()
        } else {
          next(false)
        }
      },
      meta: { show: true }
    },
    { path: '/paysuccess', component: PaySuccess, name: 'paysuccess', meta: { show: true } },
    {
      path: '/center',
      component: Center,
      name: 'center',
      redirect: '/center/myorder',
      meta: { show: true },
      children: [
        { path: 'myorder', component: MyOrder, name: 'myorder', meta: { show: true } },
        { path: 'grouporder', component: GroupOrder, name: 'grouporder', meta: { show: true } }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const token = localStorage.getItem('token')
  const userName = store.state.user.userInfo.loginName
  // console.log(token)
  if (token) {
    // console.log(1)
    // 用户要登陆，要去login
    if (to.path === '/login') {
      next('/home')
      // console.log(2)
    } else {
      // 用户去的是非login，用户信息存在
      if (userName) {
        next()
      } else {
        // 用户信息不存在
        try {
          await store.dispatch('getUserInfo')
          next()
        } catch (error) {
          // token过期
          await store.dispatch('loginOut')
          next('/login')
        }
      }
    }
  } else {
    // 未登录
    // console.log(3)
    if (to.path === '/home' || to.path === '/login' || to.path === '/register') {
      next()
    } else {
      alert('用户未登录请登录，请登录后查看')
      next('/login?redirect=' + to.path)
    }
  }
})

export default router
