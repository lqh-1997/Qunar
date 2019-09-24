<template>
  <div>
    <div class="item" v-for="(item, index) of list" :key="index">
      <div class="item-title">
        <span class="item-title-icon border-bottom"></span>
        {{item.title}}
      </div>
      <!--<div v-if="item.children">-->
      <!--  <div v-for="(child, index) of item.children" :key="index" class="item-title">-->
      <!--    <span class="item-title-icon border-bottom"></span>-->
      <!--    {{child.title}}-->
      <!--  </div>-->
      <!--</div>-->
      <!--使用递归实现上面功能(把子组件的项传入当前组件中,组件标签由组件name决定)-->
      <div v-if="item.children" class="item-children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array
    }
  },
  name: 'List'
}
</script>

<style scoped lang="stylus">
  .item-title
    line-height .8rem
    font-size .32rem
    padding 0 .2rem
    .item-title-icon
      position: relative
      display inline-block
      width: .36rem
      height: .36rem
      top: .06rem
      left: .06rem
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
      margin-right: .1rem
      background-size: .4rem 3rem
  .item-children
    padding: 0 .2rem
</style>
