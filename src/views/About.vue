<template>
  <div class="about">
    <button @click="getToken">获取token</button>
    <switch-tab />
    <image-viewer :src="require('../assets/logo.png')" alt="img" />
    <driver msg="This is the message title" />
    <div class="ch">
      <input id="ch" type="checkbox" name="ch" v-model="ch">
      <div class="checkbox-wrap">
        <div class="checkbox" :style="check" @click="toggle"></div>
        <div class="right" :style="style" @click="toggle"></div>
        <label for="ch">点我</label>
      </div>
    </div>
    <Hhh :show.sync="show" />
  </div>
</template>

<script>
import asyncImport from '@/utils/async-component-factory'
import Driver from '@/components/Driver'
import SwitchTab from '@/components/switchTab'
import ImageViewer from '@/components/ImageViewer'
import { login } from '@/apis/login'

export default {
  name: 'About',
  components: {
    Hhh: () => asyncImport(import('@/components/Hhh')),
    Driver,
    SwitchTab,
    ImageViewer
  },
  computed: {
    check() {
      return this.ch ? {
        opacity: 0,
        'transition-delay': 0
      } : {
        opacity: 1,
        transform: 'unset',
        'transition-delay': '.3s'
      }
    },
    style() {
      return this.ch ? {
        opacity: 1,
        transform: 'rotate(220deg)',
        'transition-delay': 0
      } : {
        opacity: 0,
        transform: 'unset',
        'transition-delay': '.3s'
      }
    }
  },
  data: () => ({
    show: false,
    ch: false
  }),
  methods: {
    toggle() {
      this.ch = !this.ch
    },
    async getToken() {
      const { token } = await login()
      localStorage.setItem('token', token)
    }
  }
}
</script>

<style scoped>
.ch {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
}
.ch #ch {
  visibility: hidden;
}
.checkbox-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}
.checkbox-wrap label {
  cursor: pointer;
}
.checkbox {
  width: 20px;
  height: 20px;
  transition-duration: .3s;
  border: 1px solid #606266;
  margin-right: 3px;
  box-sizing: border-box;
}
.right {
  position: absolute;
  width: 10px;
  height: 20px;
  border: 2px solid #45B6AF;
  border-right: none;
  border-bottom: none;
  transition: .3s;
  box-sizing: border-box;
  left: 5px;
  top: -1px;
}
</style>
