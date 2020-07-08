<template>
  <!-- appear-class="custom-appear-class"
  appear-to-class="custom-appear-to-class"
  appear-active-class="animate__animated animate__tada" -->
  <transition
    appear
    @before-appear="customBeforeAppearHook"
    @appear="customAppearHook"
    @after-appear="customAfterAppearHook"
    @appear-cancelled="customAppearCancelledHook"
  >
    <div>DefaultTrans</div>
  </transition>
</template>

<script>
export default {
  name: 'DefaultTrans',
  methods: {
    customBeforeAppearHook() {},
    customAppearHook() {},
    customAfterAppearHook() {},
    customAppearCancelledHook() {}
  }
}
</script>

<style>

</style>