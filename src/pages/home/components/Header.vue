<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont back-icon">&#xe601;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe674;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont arrow-icon">&#xe600;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
// 1rem = html fontsize 50px (设计图dpr = 2)
    // @import '../../../assets/styles/variables.styl' 简写为
    @import '~styles/variables.styl'
    .header
        display: flex
        line-height: .86rem
        background: $bgColor
        color: #ffffff
        .header-left
            float: left
            width: .64rem
            .back-icon
                text-align: center
                font-size: .4rem
        .header-input
            flex: 1
            height: .64rem
            line-height: .64rem
            margin-top: .12rem
            margin-left: .2rem
            padding-left: .2rem
            background: #ffffff
            border-radius: .1rem
            color: #cccccc
        .header-right
            float: right
            width: 1.24rem
            text-align: center
            .arrow-icon
                font-size: .24rem
</style>
