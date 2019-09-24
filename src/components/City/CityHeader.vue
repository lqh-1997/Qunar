<template>
  <div>
    <div class="header">
      <router-link to="/">
        <div class="iconfont arrow-left">&#xe6db;</div>
      </router-link>
      城市选择
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .header
    position relative
    overflow hidden
    height $headHeight
    line-height $headHeight
    text-align center
    color #ffffff
    font-size .34rem
    background-color $bgcolor
    .arrow-left
      position absolute
      left 0
      top 0
      right 0
      bottom 0
      width .64rem
      text-align center
      font-size $iconSize
      color #ffffff
</style>
