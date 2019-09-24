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
          <span class="header-right-desc">{{this.city}}</span>
          <!--<span class="header-right-desc">{{this.$store.state.city}}</span>-->
          <span class="iconfont arrow-down">&#xe6aa;</span>
        </div>
      </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    // 把vuex里面的数据映射到这个组件的computed的计算属性里(把city映射到这个组件名为city的计算属性之中)
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  @import "~@css/mixins.styl"
  // 利用flex 1 使input框自适应大小，然后利用min-width来适应城市名长度的不同
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
      min-width 1.04rem
      padding 0 0.1rem
      float right
      text-align center
      color #fff
      .arrow-down
        font-size 0.3rem
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
