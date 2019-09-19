<template>
  <div class="wrapper">
    <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swipter-img" :src="item.url">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Swipter',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      list: [{
        id: '0001',
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/5e82991722549bfec5ada28ab25d0820.jpg_750x200_4bb9032d.jpg'
      },
      {
        id: '0002',
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/249dfa53de67b8824a96f9821e58f30d.jpg_750x200_48bf24d9.jpg'
      },
      {
        id: '0003',
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20199/dd7c1ed57e6315e738545578e60212e4.jpg_750x200_8f87eb30.jpg'
      }]
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
    padding-bottom 31.25%
    .swipter-img
      width 100%
</style>
