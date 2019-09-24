<template>
  <div>
    <banner></banner>
    <detail-header></detail-header>
    <div class="tool"></div>
  </div>
</template>

<script>
import Banner from '../components/Detail/Banner'
import DetailHeader from '../components/Detail/DetailHeader'
export default {
  name: 'Detail',
  components: {
    Banner,
    DetailHeader
  }
}
</script>

<style scoped lang="stylus">
  .tool
    height 50rem
</style>
