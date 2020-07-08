<template>
  <div id="dynamic-fade-demo" class="demo">
    Fade In:  <input type="range" v-model="fadeInDuration" min="0" :max="maxFadeDuration" />
    Fade Out:  <input type="range" v-model="fadeOutDuration" min="0" :max="maxFadeDuration" />
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @leave="leave"
    >
      <p v-if="show">hello</p>
    </transition>
    <button
      v-if="stop"
      v-on:click="stop = false; show = false"
    >Start animating</button>
    <button
      v-else
      v-on:click="stop = true"
    >Stop it!</button>
  </div>
</template>

<script>
import Velocity from '@/utils/velocity.min'

export default {
  name: 'DynamicTrans',
  data: () => ({
    show: true,
    fadeInDuration: 1000,
    fadeOutDuration: 1000,
    maxFadeDuration: 1500,
    stop: true
  }),
  mounted() {
    this.show = false
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      Velocity(
        el,
        { opacity: 1 },
        {
          duration: this.fadeInDuration,
          complete: () => {
            done()
            if (!this.stop) this.show = false
          }
        }
      )
    },
    leave(el, done) {
      Velocity(
        el,
        { opacity: 0 },
        {
          duration: this.fadeOutDuration,
          complete: () => {
            done()
            this.show = true
          }
        }
      )
    }
  }
}
</script>

<style>

</style>