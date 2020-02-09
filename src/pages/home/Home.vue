<template>
<!-- 注意：template只能对外暴露1个元素，因此最外层需要一个div包裹 -->
  <div class="big">
    <div>Home</div>
    <router-link to='/list'>To List</router-link>
  </div>
</template>

<script>
// default允许import该模块使使用任何名称
export default {
  name: 'home'
}
</script>

<style scoped>
.big {
  font-size: 50px;
}
</style>
