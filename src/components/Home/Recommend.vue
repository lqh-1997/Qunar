<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link class="item border-bottom" v-for="item of recommends" :key="item.id" tag="li" :to="'/detail/' + item.id">
        <img :src="item.imgUrl" class="item-image">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">{{item.price}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: {
    recommends: Array
  },
  data () {
    return {}
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
