import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'

import TypeNav from './components/TypeNav/index.vue'

// 引入mockServer.js---mock数据
import '@/mock/mockServer.js'

// 引路vuex仓库
import store from './store'
import 'swiper/css/swiper.min.css'
// 组成swiper全局组件
import Carousel from './components/Carousel/index.vue'
import Pagination from './components/Pagination/index.vue'
// 图片懒加载包
import VueLazyload from 'vue-lazyload'
import atm from './assets/1.gif'
// 表单验证
import VeeValidate from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
// 统一管理api文件里的所有请求函数
import * as API from './api/index.js'

import { Button, MessageBox } from 'element-ui'

// 第一种注册方式，全局注册组件
Vue.component(Button.name, Button)
// 第二种，原型属性上
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
// import { reqGetSearchList } from './api/index.js'
// reqGetSearchList().then((res) => {
//   console.log(res)
// })
Vue.use(VueLazyload, {
  // 默认图片
  loading: atm
})

Vue.use(VeeValidate)
// 表单验证
VeeValidate.Validator.localize('zhCN', {
  messages: {
    ...zhCN.messages,
    is: (field) => `${field}必须与密码相同`
  },
  attributes: {
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    agree: '协议'
  }
})
// 自定义校验规则
VeeValidate.Validator.extend('agree', {
  validate: (value) => {
    return value
  },
  getMessage: (field) => field + '必须同意'
})

Vue.component('Carousel', Carousel)
Vue.component('TypeNav', TypeNav)
Vue.component('Pagination', Pagination)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库，组件实例身上会多一个$store的属性
  store,
  // 注册全局事件总线
  beforeCreate () {
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
    // console.log(Vue.prototype.$API)
  }
}).$mount('#app')
