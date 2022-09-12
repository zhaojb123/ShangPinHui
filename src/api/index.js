// 所有api‘接口统一管理
import request from './request.js'
import mockAjax from './mockAjax.js'

// 三级联动接口
export const reqCategoryList = () => {
  return request({ url: '/product/getBaseCategoryList', method: 'get' })
}

// 获取banner数据接口
export const reqGetBanner = () => {
  return mockAjax.get('/banner')
}

// 获取floor接口数据
export const reqGetFloorList = () => {
  return mockAjax.get('/floor')
}

// 获取search接口数据
export const reqGetSearchList = (params) => {
  return request.post('/list', params)
}

// 获取商品详情接口数据
export const reqGetGoodsList = (id) => {
  return request.get(`/item/${id}`)
}

// 添加或更新购物车请求
export const reqAddOrUpdateShopCart = (skuId, skuNum) => {
  return request.post(`/cart/addToCart/${skuId}/${skuNum}`)
}

// 获取购物车数据列表
export const reqGetShopCartList = () => {
  return request.get('/cart/cartList')
}

// 删除购物车商品
export const reqDeleteShopCart = (skuId) => {
  return request.delete(`/cart/deleteCart/${skuId}`)
}

// 切换商品选中状态
export const reqUpdataShopChecked = (skuId, isChecked) => {
  return request.get(`/cart/checkCart/${skuId}/${isChecked}`)
}

// 获取验证码
export const reqGetCode = (phone) => {
  return request.get(`/user/passport/sendCode/${phone}`)
}

// 用户注册
export const reqUserRegister = (phone, password, code) => {
  return request.post('/user/passport/register', { phone, password, code })
}

// 用户登录
export const reqUserLogin = (phone, password) => {
  return request.post('/user/passport/login', { phone, password })
}

// 获取用户信息 需要token
export const reqGetUserInfo = () => {
  return request.get('/user/passport/auth/getUserInfo')
}

// 退出登录
export const reqLoginOut = () => {
  return request.get('/user/passport/logout')
}

// 获取用户地址信息
export const reqGetUserAddressInfo = () => {
  return request.get('/user/userAddress/auth/findUserAddressList')
}

// 获取商品交易订单
export const reqGetOrderInfo = () => {
  return request.get('/order/auth/trade')
}

// 提交订单请求
export const reqSubmitOrder = (tradeNo, data) => {
  return request.post(`/order/auth/submitOrder?tradeNo=${tradeNo}`, data)
}

// 获取订单支付信息
export const reqGetOrderPayInfo = (orderId) => {
  return request.get(`/payment/weixin/createNative/${orderId}`)
}

// 获取支付订单状态
export const reqGetPayStatusInfo = (orderId) => {
  return request.get(`/payment/weixin/queryPayStatus/${orderId}`)
}

// 获取个人中心数据（我的订单）
export const reqGetMyOrderList = (page, limit) => {
  return request.get(`/order/auth/${page}/${limit}`)
}
