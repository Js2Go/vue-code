<template>
  <!-- <div id="app" class="animate__animated animate__slideInDown"> -->
  <div>
    <div>{{ offset }}</div>
    <div class="tabs">
      <div class="tabs-wrap">
        <div @click="click(1)">1</div>
        <div @click="click(2)">2</div>
      </div>
      <div class="tabs-line" :style="{ transform }"></div>
      <div class="tabs-contents" :style="{ transform: transStyle }">
        <!-- <HelloWorld class="tab-content" msg="Welcome to Your Vue.js App"/> -->
        <div class="tab-content">饿饿饿饿饿饿饿饿饿饿饿饿饿饿饿饿饿饿</div>
        <div class="tab-content">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'switchTab',
  data: () => ({
    startX: 0,
    endX: 0,
    offset: 0,
    tab: 1
  }),
  computed: {
    transform() {
      const rul = '50vw'
      return `translateX(calc((50vw - 100px) / 2 + ${rul} * ${this.tab - 1}))`
    },
    transStyle() {
      return `translate3d(calc(-100% * ${this.tab - 1}), 0, 0)`
    }
  },
  mounted() {
    const app = document.getElementById('app')
    app.addEventListener('touchstart', this.start)
    app.addEventListener('touchend', this.end)
  },
  methods: {
    start(e) {
      this.startX = e.changedTouches[0].clientX
    },
    end(e) {
      this.endX = e.changedTouches[0].clientX
      this.offset = this.endX - this.startX
      if (Math.abs(this.offset) > 100) {
        if (this.offset < 0) {
          if (this.tab < 2) {
            this.tab++
          }
        } else {
          if (this.tab > 1) {
            this.tab--
          }
        }
      }
    },
    click(e) {
      this.tab = this.tab !== e && e
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.tabs .tabs-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
.tabs .tabs-wrap > * {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 255, 0, .6);
  width: 50%;
  border: 1px solid #ccc;
}
.tabs-line {
  width: 100px;
  height: 3px;
  background-color: hotpink;
  transition: .3s;
}
.tabs-contents {
  width: 100%;
  height: 100%;
  display: flex;
  will-change: left;
  transition-duration: .3s;
}
.tabs-contents .tab-content {
  width: 100%;
  flex-shrink: 0;
}
</style>
