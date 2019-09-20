<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipter-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swipter',
  props: {
    list: {
      type: Array
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .wrapper >>> .swiper-pagination-bullet-active
    background #ffffff
  .wrapper >>> .swiper-pagination-bullet
    background #ccc
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom 28%
    .swipter-img
      width 100%
</style>
