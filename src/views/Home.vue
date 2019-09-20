<template>
  <div class="home">
    <home-header></home-header>
    <swiper></swiper>
    <icons></icons>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import Swiper from '../components/Swiper'
import Icons from '../components/Icons'
export default {
  name: 'home',
  components: {
    Icons,
    Swiper,
    HomeHeader
  }
}
</script>
