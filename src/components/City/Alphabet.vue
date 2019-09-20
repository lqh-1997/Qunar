<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.78rem
    bottom 0
    width .4rem
    .item
      text-align center
      line-height .4rem
      color: $bgcolor
</style>
