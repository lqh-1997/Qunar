<template>
  <div class="home">
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
    <recommend></recommend>
    <weekend></weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import Swiper from '../components/Swiper'
import Icons from '../components/Icons'
import Recommend from '../components/Recommend'
import Weekend from '../components/Weekend'
export default {
  name: 'home',
  components: {
    Weekend,
    Recommend,
    Icons,
    Swiper,
    HomeHeader
  }
}
</script>
