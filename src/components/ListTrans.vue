<template>
  <!-- 
    <transition-group> 组件还有一个特殊之处。不仅可以进入和离开动画，还可以改变定位。
    要使用这个新功能只需了解新增的 v-move class，它会在元素的改变定位的过程中应用。
    像之前的类名一样，可以通过 name attribute 来自定义前缀，
    也可以通过 move-class attribute 手动设置
  -->
  <div id="list-demo" class="demo">
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
export default {
  data: () => ({
    items: [1,2,3,4,5,6,7,8,9],
    nextNum: 10
  }),
  methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.items.length)
    },
    add() {
      this.items.splice(this.randomIndex(), 0, this.nextNum++)
    },
    remove() {
      this.items.splice(this.randomIndex(), 1)
    }
  }
}
</script>

<style>
.list-item {
  display: inline-flex;
  margin-right: 10px;
  transition: all 1s;
}
.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.list-leave-active {
  position: absolute;
}
</style>