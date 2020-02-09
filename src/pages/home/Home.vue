<template>
<!-- 注意：template只能对外暴露1个元素，因此最外层需要一个div包裹 -->
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
// export default允许import该模块使使用任何名称
import HomeHeader from './components/Header'
export default {
  name: 'home',
  components: {
    HomeHeader
  }
}
</script>

<style scoped>

</style>
