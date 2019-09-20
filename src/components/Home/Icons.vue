<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  props: {
    icons: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      for (let i = 0; i < this.icons.length; i++) {
        const page = Math.floor(i / 8)
        // 记得在此处初始化一个二元数组
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(this.icons[i])
      }
      return pages
    }
    // pages () {
    //   const pages = []
    //   this.icons.forEach((item, index) => {
    //     const page = Math.floor(index / 8)
    //     if (!pages[page]) {
    //       pages[page] = []
    //     }
    //     pages[page].push(item)
    //   })
    //   return pages
    // }
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/mixins.styl"
  /*padding-bootom决定宽高比例*/
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    width 25%
    padding-bottom 25%
    height 0
    float left
    .icon-img
      position absolute
      left 0
      right 0
      top 0
      bottom 0.44rem
      padding 0.1rem
      box-sizing border-box
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      color #333
      text-align center
      ellipse()
</style>
