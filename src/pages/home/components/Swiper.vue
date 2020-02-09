<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [
        {
          id: '0001',
          imgUrl:
            'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20201/be6871c9b0b0ffab3ef2a86fa9688677.jpg'
        },
        {
          id: '0002',
          imgUrl:
            '//img1.qunarzz.com/sight/p0/1912/95/95de80b7eade95eda3.img.jpg_600x330_4cc47b6e.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
// 对样式进行穿透：使scoped中的样式可以被外层访问
.wrapper >>> .swiper-pagination-bullet-active {
  background: #fff;
}

.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;

  // 高度height需要设置一下占比，否则目录出错
  .swiper-img {
    width: 100%;
    height: 31.25vw;
  }
}
</style>
