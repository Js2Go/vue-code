<template>
  <div>
    <img class="img" :src="src" :alt="alt" @click="handleShow">
    <div class="modal" :style="style" @click="close">
      <img v-if="visible" :src="dataSrc">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageViewer',
  data: () => ({
    visible: false,
    dataSrc: ''
  }),
  props: {
    src: String,
    alt: String
  },
  computed: {
    style() {
      return {
        width: this.visible ? '100%' : 0,
        height: this.visible ? '100%' : 0
      }
    }
  },
  methods: {
    handleShow() {
      this.dataSrc = this.src
      this.visible = true
    },
    close(e) {
      console.log(e)
      const ele = document.querySelector('.modal')
      if (ele === e.target) {
        this.visible = false
      }
    }
  }
}
</script>

<style>
.img {
  cursor: zoom-in;
}
.modal {
  opacity: 1;
  transition: .5s;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, .7);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}
.not-show {
  display: none;
  opacity: 0;
  z-index: -1;
  width: 0;
  height: 0;
}
</style>
