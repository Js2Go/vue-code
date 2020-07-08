<template>
  <!-- 多个元素公用需要提供key -->
  <div style="position: relative;">
    <transition
      enter-active-class="animate__animated animate__fadeIn"
      enter-leave-class="animate__animated animate__fadeIn"
      mode="out-in"
    >
      <button style="position: absolute;" :key="isEditing" @click="isEditing = !isEditing">
        {{ isEditing ? 'Save' : 'Edit' }}
      </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'TransMode',
  data: () => ({
    isEditing: false
  })
}
</script>

<style>

</style>