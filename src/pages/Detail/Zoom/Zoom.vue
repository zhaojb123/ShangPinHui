<template>
  <div class="spec-preview">
    <img :src="skuImageList[currentIndex].imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="skuImageList[currentIndex].imgUrl" ref="bigImg" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: 'Zoom',
  props: {
    skuImageList: {
      default () {
        return [{}]
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  mounted () {
    this.$bus.$on('indexInfo', (index) => {
      this.currentIndex = index
    })
  },
  methods: {
    handler (e) {
      let left = e.offsetX - 100
      let top = e.offsetY - 100

      // this.$refs.mask.style.transform.translate=(-50%,-50%)
      if (e.offsetX <= 100) left = 0// this.$refs.mask.style.left = 0 + 'px'
      if (e.offsetX >= 300) left = 200// this.$refs.mask.style.left = 200 + 'px'
      if (e.offsetY <= 100) top = 0// this.$refs.mask.style.top = 0 + 'px'
      if (e.offsetY >= 300) top = 200// this.$refs.mask.style.top = 200 + 'px'
      this.$refs.mask.style.top = top + 'px'
      this.$refs.mask.style.left = left + 'px'
      this.$refs.bigImg.style.left = -left * 2 + 'px'
      this.$refs.bigImg.style.top = -top * 2 + 'px'
    }
  }
}
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>
