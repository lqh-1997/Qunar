<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
            <!--<div class="button">{{this.$store.state.city}}</div>-->
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item of hotCities" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <!--循环对象第二个值为key-->
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <!--对象里面是个数组，使用两层循环-->
        <div class="item-list" v-for="innerItem of item" :key="innerItem.id"  @click="handleCityClick(innerItem.name)">
          <div class="item border-bottom">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import BScroll from 'better-scroll'
export default {
  name: 'List',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  methods: {
    // 传递给store里面的action
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  mounted () {
    // setTimeout(() => {
    //   this.scroll = new BScroll(this.$refs.wrapper, {})
    // }, 20)
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true
      })
    })
  },
  watch: {
    letter () {
      // console.log(this.$refs.key)
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        // console.log(this.$refs[this.letter])
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #ccc
  .list
    position absolute
    top 1.78rem
    bottom 0
    right 0
    left 0
    overflow hidden
    .title
      line-height .54rem
      background #eee
      padding-left .2rem
      color #666
    .button-list
      overflow hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float left
        width 33.33%
        .button
          margin .1rem
          padding .1rem 0
          text-align center
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      .item
        line-height .76rem
        color #666
        padding-left .2rem
</style>
