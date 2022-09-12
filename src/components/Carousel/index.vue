<template>
  <!--banner轮播-->
    <div class="swiper-container" ref="swiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="item in List" :key="item.id">
                <img :src="item.imgUrl" />
            </div>
            <!-- <div class="swiper-slide">
                <img src="./images/banner2.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="./images/banner3.jpg" />
            </div>
            <div class="swiper-slide">
                <img src="./images/banner4.jpg" />
            </div> -->
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
  props: ['List'],
  watch: {
    List: {
      immediate: true,
      handler (newVal, oldVal) {
        this.$nextTick(() => {
          const mySwiper = new Swiper(this.$refs.swiper, {
          //   direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            },

            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar'
            }
          })
          if (mySwiper) {
          // 这个if没有意义，请忽略
            console.log()
          }
        })
      }
    }
  }
}
</script>

<style>

</style>
