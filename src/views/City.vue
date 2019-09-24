<template>
  <div>
    <city-header></city-header>
    <search :cities="cities"></search>
    <list :cities="cities" :hotCities="hotCities" :letter="letter"></list>
    <alphabet :cities="cities" @change="handleLetterChange"></alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/City/CityHeader'
import Search from '../components/City/Search'
import List from '../components/City/List'
import Alphabet from '../components/City/Alphabet'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    Alphabet,
    List,
    Search,
    CityHeader
  },
  data () {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  methods: {
    getCityInfo () {
      axios.get('api/city.json')
        .then(this.handleGetCityInfoSucc)
    },
    handleGetCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
      // console.log(res)
    },
    handleLetterChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style scoped lang="stylus">

</style>
