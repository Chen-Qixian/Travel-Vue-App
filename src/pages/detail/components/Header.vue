<template>
  <div>
    <router-link
      class="header-abs"
      tag="div"
      to="/"
      v-show="showAbs"
    >
      <div class="iconfont header-abs-back">&#xe601;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe601;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      console.log('scroll')
      const top = document.documentElement.scrollTop
      if (top > 60) {
        this.showAbs = false
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header-abs
    position absolute
    left .2rem
    top .2rem
    width .8rem
    height .8rem
    border-radius .4rem
    background rgba(0, 0, 0, .8)
    .header-abs-back
      color #ffffff
      font-size .4rem
      line-height .8rem
      text-align center
  .header-fixed
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    height $headerHeight
    line-height $headerHeight
    text-align center
    color #ffffff
    font-size .32rem
    background $bgColor
    .header-fixed-back
      width .64rem
      color #ffffff
      font-size .4rem
      text-align center
      position fixed
      top 0
      left 0
</style>
