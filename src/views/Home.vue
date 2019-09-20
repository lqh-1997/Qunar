<template>
  <div class="home">
    <home-header :city="city"></home-header>
    <swiper :list="swiperList"></swiper>
    <icons :icons="iconList"></icons>
    <recommend :recommends="recommendList"></recommend>
    <weekend :weekends="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/HomeHeader'
import Swiper from '../components/Swiper'
import Icons from '../components/Icons'
import Recommend from '../components/Recommend'
import Weekend from '../components/Weekend'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    Weekend,
    Recommend,
    Icons,
    Swiper,
    HomeHeader
  },
  data () {
    return {
      city: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.city = res.city
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      console.log(this.iconList)
      // console.log(res)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
