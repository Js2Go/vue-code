<template>
  <div class="hhh">
    <default-trans />
    <multi-el-trans />
    <!-- <trans-mode /> -->
    <multi-comp-trans />
    <list-trans />
    <list-cross-trans />
    <dynamic-trans />
    <!-- <button type="button" name="button" @click="toggle">Toggle</button> -->
    <!-- <transition name="fade"> -->
    <!-- <transition name="slide-fade"> -->
    <!-- :duration="5000" -->
    <!-- :duration="{ enter: 500, leave: 800 }" -->
    <!-- <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__tada"
      leave-active-class="animate__animated animate__bounceOutRight"
    > -->
    <!-- <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @enter-cancelled="enterCancelled"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @leave-cancelled="leaveCancelled"
    >
      <div v-show="show">
        <h1 v-for="i in 10" :key="`${i}`">This is an about page{{ i }}</h1>
      </div>
    </transition> -->
  </div>
</template>

<script>
import DefaultTrans from './DefaultTrans'
import MultiElTrans from './MultiElTrans'
import TransMode from './TransMode'
import MultiCompTrans from './MultiCompTrans'
import ListTrans from './ListTrans'
import ListCrossTrans from './ListCrossTrans'
import DynamicTrans from './DynamicTrans'

export default {
  name: 'Hhh',
  components: {
    DefaultTrans,
    MultiElTrans,
    TransMode,
    MultiCompTrans,
    ListTrans,
    ListCrossTrans,
    DynamicTrans
  },
  props: {
    show: {
      type: Boolean,
      require: true
    }
  },
  methods: {
    toggle() {
      this.$emit('update:show', !this.show)
    },
    beforeEnter(el) {
    },
    enter(el, done) {
      done()
    },
    afterEnter(el) {},
    enterCancelled(el) {},
    beforeLeave(el) {},
    leave(el, done) {
      done()
    },
    afterLeave(el) {},
    leaveCancelled(el) {}
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
