<template>
  <div>
    <city-header></city-header>
    <search></search>
  </div>
</template>

<script>
import CityHeader from '../components/City/CityHeader'
import Search from '../components/City/Search'
export default {
  name: 'City',
  components: {
    Search,
    CityHeader
  }
}
</script>

<style scoped lang="stylus">

</style>
