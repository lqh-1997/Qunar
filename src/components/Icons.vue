<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.url">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'Icons',
  data () {
    return {
      iconList: [{
        id: '0001',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        url: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '广州必游'
      }, {
        id: '0003',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0004',
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0005',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0006',
        url: 'https://imgs.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '广州必游'
      }, {
        id: '0007',
        url: 'https://imgs.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '动植物园'
      }, {
        id: '0008',
        url: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png',
        desc: '自然风光'
      }, {
        id: '0009',
        url: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      for (let i = 0; i < this.iconList.length; i++) {
        const page = Math.floor(i / 8)
        // 记得在此处初始化一个二元数组
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(this.iconList[i])
      }
      return pages
    }
    // pages () {
    //   const pages = []
    //   this.iconList.forEach((item, index) => {
    //     const page = Math.floor(index / 8)
    //     if (!pages[page]) {
    //       pages[page] = []
    //     }
    //     pages[page].push(item)
    //   })
    //   return pages
    // }
  }
}
</script>

<style scoped lang="stylus">
  @import "~@css/mixins.styl"
  /*padding-bootom决定宽高比例*/
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icon
    position relative
    width 25%
    padding-bottom 25%
    height 0
    float left
    .icon-img
      position absolute
      left 0
      right 0
      top 0
      bottom 0.44rem
      padding 0.1rem
      box-sizing border-box
      .icon-img-content
        display block
        margin 0 auto
        height 100%
    .icon-desc
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      color #333
      text-align center
      ellipse()
</style>
