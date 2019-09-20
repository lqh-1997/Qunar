<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <div class="item-image-wrapper">
          <img :src="item.url" class="item-image">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
        <div style="height: 300px; background-color: #25a4bb"></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        url: 'https://imgs.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg',
        title: '清远周边逛',
        desc: '人人都有一双发现美的眼睛，身边的事物最熟悉不过，那你可曾发现了被人遗漏的美？'
      }]
    }
  }
}

</script>

<style scoped lang="stylus">
  @import "~@css/mixins.styl"
  .title
    margin-top 0.2rem
    line-height 0.8rem
    background-color #eee
    text-indent 0.2rem
  .item-image-wrapper
    overflow hidden
    height 0
    padding-bottom 33%
    .item-image
      width 100%
  .item-info
    padding .2rem
    padding-right 1.6rem
    min-width 0
    .item-title
      line-height 0.54rem
      font-size 0.32rem
      ellipse()
    .item-desc
      line-height 0.4rem
      color #ccc
      ellipse()
</style>
