<template>
  <div class="container" @click="closeGallery">
    <div class="wrapper">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) of imgs" :key="index">
          <img class="gallery-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  props: {
    imgs: {
      type: Array,
      default () {
        return ['http://img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_r_800x800_ea3a0585.jpg', 'http://img1.qunarzz.com/sight/p0/1905/3a/3acb509c88aebce1a3.img.jpg_r_800x800_3f1cd011.jpg']
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    closeGallery () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped lang="stylus">
  .container >>> .swiper-container
    overflow inherit
  .container
    display flex
    flex-direction column
    justify-content center
    position fixed
    right 0
    left 0
    top 0
    bottom 0
    background #000
    z-index 999
    .wrapper
      width 100%
      height 0
      padding-bottom 100%
      .gallery-img
        width 100%
      .swiper-pagination
        color #ffffff
        bottom -1rem
</style>
