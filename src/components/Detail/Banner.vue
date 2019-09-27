<template>
  <div>
    <div class="banner" @click="showGallery">
      <img class="banner-image" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number"><span class="iconfont banner-icon">&#xe623;</span>109</div>
      </div>
    </div>
    <fade>
      <gallery :imgs="gallaryImgs" v-if="show" @close="closeGallery"></gallery>
    </fade>
  </div>
</template>

<script>
import Gallery from '../Common/Gallery'
import Fade from '../Common/Fade'
export default {
  name: 'Banner',
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  data () {
    return {
      show: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg', 'http://img1.qunarzz.com/sight/p0/1905/3a/3acb509c88aebce1a3.img.jpg_r_800x800_3f1cd011.jpg']
    }
  },
  methods: {
    showGallery () {
      this.show = true
    },
    closeGallery () {
      this.show = false
    }
  },
  components: {
    Gallery,
    Fade
  }
}
</script>

<style scoped lang="stylus">
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-image
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      padding-right .1rem
      background linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        padding 0 .4rem
        line-height .32rem
        height .32rem
        margin-top .14rem
        font-size .24rem
        border-radius .2rem
        background-color rgba(0, 0, 0, 0.8)
        .banner-icon
          font-size .24rem
          padding-right .1rem
</style>
