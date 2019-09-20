<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekends" :key="item.id">
        <div class="item-image-wrapper">
          <img :src="item.imgUrl" class="item-image">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Weekend',
  props: {
    weekends: Array
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
  .item-image-wrapper
    overflow hidden
    height 0
    padding-bottom 37.09%
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
