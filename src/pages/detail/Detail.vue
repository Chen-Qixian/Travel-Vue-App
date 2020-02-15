<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  data () {
    return {
      list: [{
        title: '成人票',
        children: [
          {
            title: '成人三管联票'
          },
          {
            title: '成人五管联票',
            children: [
              {
                title: '成人五管联票 - 某分店'
              }
            ]
          }
        ]
      },
      {
        title: '学生票'
      },
      {
        title: '老人票'
      },
      {
        title: '优惠票'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
