<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .search
    height .72rem
    background-color $bgcolor
    padding 0.1rem
    .search-input
      box-sizing border-box
      padding: .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
</style>
