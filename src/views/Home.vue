<template>
  <div class="home">
    <home-header></home-header>
    <swiper :list="swiperList"></swiper>
    <icons :icons="iconList"></icons>
    <recommend :recommends="recommendList"></recommend>
    <weekend :weekends="weekendList"></weekend>
  </div>
</template>

<script>
import HomeHeader from '../components/Home/HomeHeader'
import Swiper from '../components/Home/Swiper'
import Icons from '../components/Home/Icons'
import Recommend from '../components/Home/Recommend'
import Weekend from '../components/Home/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
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
      lastCity: '',
      swiperList: [],
      iconList: [],
      recommendList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }
      // console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
