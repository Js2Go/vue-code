<template>
  <div>
    <input type="radio" name="v" value="v-a" v-model="view" /> A
    <input type="radio" name="v" value="v-b" v-model="view" /> B
    <transition
      name="component-fade"
      mode="out-in"
    >
      <component :is="view" />
    </transition>
  </div>
</template>

<script>
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

export default {
  name: 'MultiCompTrans',
  data: () => ({
    view: 'v-a'
  }),
  components: {
    'v-a': ComponentA,
    'v-b': ComponentB
  }
}
</script>

<style>
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>