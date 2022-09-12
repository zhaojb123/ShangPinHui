<template>
<!-- 右侧内容 -->
  <div class="order-right">
          <div class="order-content">
            <div class="title">
              <h3>我的订单</h3>
            </div>
            <div class="chosetype">
              <table>
                <thead>
                  <tr>
                    <th width="29%">商品</th>
                    <th width="31%">订单详情</th>
                    <th width="13%">收货人</th>
                    <th>金额</th>
                    <th>状态</th>
                    <th>操作</th>
                  </tr>
                </thead>
              </table>
            </div>
            <div class="orders">

              <table class="order-item" v-for="item in myOrderInfo.records" :key="item.id">
                <thead>
                  <tr>
                    <th colspan="5">
                      <span class="ordertitle">{{item.createTime}} 订单编号：{{item.outTradeNo}} <span
                          class="pull-right delete"><img src="../images/delete.png"></span></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item01,index) in item.orderDetailList" :key="item01.id">
                    <td width="60%">
                      <div class="typographic">
                        <img :src="item01.imgUrl" style="width:100px;height:100px">
                        <a href="#" class="block-text">{{item01.skuName}}</a>
                        <span>x{{item01.skuNum}}</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                    <td :rowspan="item.orderDetailList.length" v-if="index===0" width="8%" class="center">{{item.consignee}}</td>
                    <td :rowspan="item.orderDetailList.length" v-if="index===0" width="13%" class="center">
                      <ul class="unstyled">
                        <li>总金额¥{{item.totalAmount}}.00</li>
                        <li>在线支付</li>

                      </ul>
                    </td>
                    <td :rowspan="item.orderDetailList.length" v-if="index===0" width="8%" class="center">
                      <a href="#" class="btn">{{item.orderStatusName}} </a>
                    </td>
                    <td :rowspan="item.orderDetailList.length" v-if="index===0" width="13%" class="center">
                      <ul class="unstyled">
                        <li>
                          <a href="mycomment.html" target="_blank">评价|晒单</a>
                        </li>

                      </ul>
                    </td>
                  </tr>
                  <!-- <tr>
                    <td width="50%">
                      <div class="typographic">
                        <img src="../images/goods.png">
                        <a href="#" class="block-text">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                        <span>x1</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                  </tr> -->
                </tbody>
              </table>

              <!-- <table class="order-item">
                <thead>
                  <tr>
                    <th colspan="5">
                      <span class="ordertitle">2017-02-11 11:59 订单编号：7867473872181848 <span
                          class="pull-right delete"><img src="../images/delete.png"></span></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td width="60%">
                      <div class="typographic">
                        <img src="../images/goods.png">
                        <a href="#" class="block-text">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                        <span>x1</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                    <td rowspan="2" width="8%" class="center">小丽</td>
                    <td rowspan="2" width="13%" class="center">
                      <ul class="unstyled">
                        <li>总金额¥138.00</li>
                        <li>在线支付</li>

                      </ul>
                    </td>
                    <td rowspan="2" width="8%" class="center">
                      <a href="#" class="btn">已完成 </a>
                    </td>
                    <td rowspan="2" width="13%" class="center">
                      <ul class="unstyled">
                        <li>
                          <a href="mycomment.html" target="_blank">评价|晒单</a>
                        </li>

                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <div class="typographic">
                        <img src="../images/goods.png">
                        <a href="#" class="block-text">包邮 正品玛姬儿压缩面膜无纺布纸膜100粒 送泡瓶面膜刷喷瓶 新款</a>
                        <span>x1</span>
                        <a href="#" class="service">售后申请</a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table> -->
            </div>
            <div class="choose-order">
              <!-- 分页器 -->
              <Pagination :pageNo="page" :pageSize="limit" :total="myOrderInfo.total" :continues="5" @getPageNo="getPageNo"></Pagination>
            </div>
          </div>
          <!--猜你喜欢-->
          <div class="like">
            <h4 class="kt">猜你喜欢</h4>
            <ul class="like-list">
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike01.png" />
                </div>
                <div class="attr">
                  <em>DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本</em>
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>3699.00</i>
                </div>
                <div class="commit">已有6人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike02.png" />
                </div>
                <div class="attr">
                  Apple苹果iPhone 6s/6s Plus 16G 64G 128G
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4388.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike03.png" />
                </div>
                <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4088.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
              <li class="likeItem">
                <div class="p-img">
                  <img src="../images/itemlike04.png" />
                </div>
                <div class="attr">DELL戴尔Ins 15MR-7528SS 15英寸 银色 笔记本
                </div>
                <div class="price">
                  <em>¥</em>
                  <i>4088.00</i>
                </div>
                <div class="commit">已有700人评价
                </div>
              </li>
            </ul>
          </div>
        </div>
</template>

<script>
export default {
  name: 'MyOrder',
  data () {
    return {
      // 第几页
      page: 1,
      // 每页显示多少数据
      limit: 3,
      myOrderInfo: {}
    }
  },
  methods: {
    // 获取数据
    async getdata () {
      const { data: res } = await this.$API.reqGetMyOrderList(this.page, this.limit)
      if (res.code === 200) {
        this.myOrderInfo = res.data
      }
    },
    // 获取当前点击的页数
    getPageNo (page) {
      this.page = page
      this.getdata()
    }
  },
  mounted () {
    this.getdata()
  }
}
</script>

<style>

</style>
