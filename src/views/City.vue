<template>
  <div>
    <city-header></city-header>
    <search></search>
    <list></list>
    <alphabet></alphabet>
  </div>
</template>

<script>
import CityHeader from '../components/City/CityHeader'
import Search from '../components/City/Search'
import List from '../components/City/List'
import Alphabet from '../components/City/Alphabet'
export default {
  name: 'City',
  components: {
    Alphabet,
    List,
    Search,
    CityHeader
  }
}
</script>

<style scoped lang="stylus">

</style>
