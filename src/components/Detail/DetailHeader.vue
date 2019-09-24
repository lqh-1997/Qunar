<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-arrow-left">&#xe6db;</div>
    </router-link>
    <router-link class="header-fixed" to="/" tag="div" v-show="!showAbs" :style="opacityStyle">
        <div class="iconfont arrow-left">&#xe6db;</div>
      景点详情
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 0) {
        this.showAbs = false
        let opacity = top / 100
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
      } else {
        this.showAbs = true
      }
      // console.log(document.documentElement.scrollTop)
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .header-abs
    position absolute
    left .16rem
    top .16rem
    width .72rem
    height .72rem
    line-height .72rem
    border-radius .36rem
    background-color rgba(0, 0, 0, 0.4)
    color #fff
    text-align center
    .header-arrow-left
      font-size $iconSize
  .header-fixed
    position fixed
    top 0
    left 0
    right 0
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
