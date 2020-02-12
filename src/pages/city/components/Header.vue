<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe601;</div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    height $headerHeight
    line-height $headerHeight
    overflow hidden
    text-align center
    color #ffffff
    font-size .32rem
    background $bgColor
    position relative
    .header-back
      width .64rem
      color #ffffff
      font-size .4rem
      text-align center
      position absolute
      top 0
      left 0
</style>
