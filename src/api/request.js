// 对axios进行二次封装
import axios from 'axios'
import nprogress from 'nprogress'
// 引入进度条样式
import 'nprogress/nprogress.css'
// start进度条开始，done进度条结束

import store from '@/store'

// axios.defaults.baseURL = 'http://gmall-h5-api.atguigu.cn'
const request = axios.create({
  baseURL: '/api',
  // 代表请求超时的时间
  timeout: 5000
})

request.interceptors.request.use((config) => {
  nprogress.start()

  if (store.state.detail.uuid_token) {
    // 请求头添加一个字段，不能瞎写，预先设定好的
    config.headers.userTempId = store.state.detail.uuid_token
  }
  if (store.state.user.token) {
    config.headers.token = store.state.user.token
  }
  return config
})

request.interceptors.response.use((response) => {
  // 响应成功的回调函数
  nprogress.done()
  return response
}, (error) => {
  // 响应失败的回调函数
  console.log(error)
  return Promise.reject(new Error('faile'))
})

export default request
