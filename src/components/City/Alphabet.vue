<template>
  <ul class="list">
    <li class="item"
        v-for="item of letters"
        :key="item"
        :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">{{item}}</li>
  </ul>
</template>

<script>
export default {
  name: 'Alphabet',
  props: {
    cities: Object
  },
  computed: {
    // for in 遍历对象 i表示的是对象的键
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
      // ["A","B","C",....]
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // console.log(e.target.innerText)
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // this.timer = setTimeout(() => {
        //   const touchY = e.touches[0].clientY - 89
        //   const index = Math.floor((touchY - this.startY) / 20)
        //   if (index >= 0 && index < this.letters.length) {
        //     this.$emit('change', this.letters[index])
        //   }
        //   console.log(touchY)
        //   console.log(index)
        // }, 16)
        let that = this
        this.timer = setTimeout(function () {
          const touchY = e.touches[0].clientY - 89
          const index = Math.floor((touchY - that.startY) / 20)
          if (index >= 0 && index < that.letters.length) {
            that.$emit('change', that.letters[index])
          }
          console.log(that.startY)
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
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
