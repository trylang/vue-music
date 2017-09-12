<template>
  <div class="slider">
    <div class="slider-group">
      <slot>
      </slot>
    </div>
    <div class="dots">
      <span class="dot"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'
export default {

  name: 'slider',
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data () {
    return {
      dots: [],
      currentIndex: 0
    }
  },
  components: {
    BScroll
  }
}
</script>

<style lang="stylus" scoped>
</style>
