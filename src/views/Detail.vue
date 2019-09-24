<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <list :list="list"></list>
    <div class="tool"></div>
  </div>
</template>

<script>
import Banner from '../components/Detail/Banner'
import DetailHeader from '../components/Detail/DetailHeader'
import List from '../components/Detail/List'
export default {
  name: 'Detail',
  data () {
    return {
      list: [{
        title: '成人票',
        children: [{
          title: '成人年票'
        }, {
          title: '成人月票'
        }]
      }, {
        title: '学生票'
      }, {
        title: '特惠票'
      }, {
        title: '免费票'
      } ]
    }
  },
  components: {
    Banner,
    DetailHeader,
    List
  }
}
</script>

<style scoped lang="stylus">
  .tool
    height 50rem
</style>
