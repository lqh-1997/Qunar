<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
        <img :src="item.url" class="item-image">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        url: 'https://imgs.qunarzz.com/sight/p0/201310/22/957335b50b114829c8d65eac.jpg_200x200_d302f58f.jpg',
        title: '长隆飞鸟乐园',
        desc: '长隆飞鸟乐园有很多鸟',
        price: '$70'
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
  .item
    overflow hidden
    display flex
    height 1.9rem
    .item-image
      width 1.7rem
      height 1.7rem
      padding 0.1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height 0.54rem
        font-size 0.32rem
        ellipse()
      .item-desc
        line-height 0.4rem
        color #ccc
        ellipse()
      .item-price
        line-height 0.42rem
        margin-top 0.2rem
        color #ff9300
        padding-top 0.12rem
        font-size 0.44rem

</style>
