<template>
  <div>
    <banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></banner>
    <detail-header></detail-header>
    <list :list="list"></list>
    <div class="tool"></div>
  </div>
</template>

<script>
import Banner from '../components/Detail/Banner'
import DetailHeader from '../components/Detail/DetailHeader'
import List from '../components/Detail/List'
import axios from 'axios'
export default {
  name: 'Detail',
  data () {
    return {
      list: [],
      sightName: '',
      bannerImg: '',
      gallaryImgs: []
    }
  },
  components: {
    Banner,
    DetailHeader,
    List
  },
  methods: {
    getDetailInfo () {
      axios.get('api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      const data = res.data
      if (res.ret && res.data) {
        this.list = data.categoryList
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
      }
      // console.log(this.galleryImgs)
    }
  },
  mounted () {
    this.getDetailInfo()
  }
}
</script>

<style scoped lang="stylus">
  .tool
    height 50rem
</style>
