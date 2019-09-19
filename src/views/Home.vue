<template>
  <div class="home">
    <home-header></home-header>
    <swipter></swipter>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import Swipter from '../components/Swipter'
export default {
  name: 'home',
  components: {
    Swipter,
    HomeHeader
  }
}
</script>
