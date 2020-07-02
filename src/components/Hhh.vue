<template>
  <div class="hhh">
    <button type="button" name="button" @click="toggle">Toggle</button>
    <!-- <transition name="fade"> -->
    <!-- <transition name="slide-fade"> -->
    <transition name="bounce">
      <div v-show="show">
        <h1 v-for="i in 10" :key="`${i}`">This is an about page{{ i }}</h1>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Hhh',
  props: {
    show: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    toggle() {
      this.$emit('update:show', !this.show)
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.fade-leave, .fade-enter-to {
  opacity: 1;
}
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1, .5, .8, 1);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-in .5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
