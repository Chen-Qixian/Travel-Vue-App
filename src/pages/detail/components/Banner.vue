<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/1602/45/459bd3d00321a44790.water.jpg_600x330_81c878a2.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">景山公园（AAAA景区）</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe60f;</span>39</div>
      </div>
    </div>
    <common-gallary
      :imgs="imgs"
      v-show="showGallary"
      @close="handleGallaryClose"
    ></common-gallary>
  </div>
</template>

<script>
import CommonGallary from '@/common/gallary/Gallary.vue'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1611/c3/c3f052dea489a593a3.water.jpg_r_800x800_016e25e6.jpg',
        '//img1.qunarzz.com/sight/p0/1604/70/709e192a7e79773a90.img.png_600x330_fd83232a.png'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #ffffff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        margin-right .14rem
        padding 0 .3rem
        border-radius .2rem
        background rgba(0, 0, 0, 0.8)
        font-size .24rem
        .banner-icon
          font-size .24rem
          margin-right .1rem
</style>
