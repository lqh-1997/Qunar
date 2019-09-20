<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont arrow-left">&#xe6db;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe6e1;</span>
        输入城市/景点/游玩主题</div>
      <router-link to="/City">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-down">&#xe6aa;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: {
      type: String
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .header
    display flex
    line-height: $headHeight
    background-color $bgcolor
    color #fff
    .header-left
      width 0.64rem
      float left
      .arrow-left
        text-align center
        font-size 0.46rem
        padding-left 0.2rem
    .header-right
      width 1.24rem
      float right
      text-align center
      color #fff
      .arrow-down
        font-size 0.36rem
    .header-input
      flex 1
      height 0.64rem
      line-height 0.64rem
      margin-top 0.12rem
      margin-left 0.2rem
      padding-left 0.2rem
      background #ffffff
      border-radius 0.1rem
      color #ccc
</style>
