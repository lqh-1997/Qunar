<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" placeholder="请输入城市名或拼音" v-model="keyWord">
    </div>
    <div class="search-content" ref="search" v-show="keyWord">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
        <li class="search-item" v-show="hasNoData">没有找到匹配数据 </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Search',
  props: {
    cities: Object
  },
  data () {
    return {
      keyWord: '',
      list: [],
      timer: null
    }
  },
  methods: {
    handleCityClick (city) {
      this.$store.dispatch('changeCity', city)
      this.$router.push('/')
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyWord () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyWord) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyWord) > -1 || value.name.indexOf(this.keyWord) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .search
    height .72rem
    background-color $bgcolor
    padding 0.1rem
    .search-input
      box-sizing border-box
      padding: .1rem
      width 100%
      height .62rem
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
  .search-content
    z-index 1
    overflow hidden
    position absolute
    top 1.78rem
    right 0rem
    left 0rem
    bottom 0rem
    background-color #eee
    .search-item
      line-height .62rem
      padding-left .2rem
      background-color #ffffff
      color #666
</style>
