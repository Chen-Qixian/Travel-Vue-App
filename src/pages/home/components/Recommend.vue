<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
        title: '澳门蹦极跳',
        desc: '澳门全球十大观光塔之一'
      },
      {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
        title: '澳门蹦极跳',
        desc: '澳门全球十大观光塔之一'
      },
      {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1903/b0/b0a81289b537c934a3.water.jpg_200x200_816c0f59.jpg',
        title: '澳门蹦极跳',
        desc: '澳门全球十大观光塔之一'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
  .title
    line-height .8rem
    text-indent .2rem
    background #eeeeee
    margin-top .2rem
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        font-size .32rem
        line-height .54rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #999999
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .2rem
        border-radius .06rem
        color #fff

</style>
