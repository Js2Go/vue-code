<template>
  <!-- 多个元素公用需要提供key -->
  <transition
    enter-active-class="animate__animated animate__fadeIn"
    enter-leave-class="animate__animated animate__fadeIn"
    :duration="{ enter: 10, leave: 20 }"
  >
    <button :key="isEditing" @click="isEditing = !isEditing">
      {{ isEditing ? 'Save' : 'Edit' }}
    </button>
  </transition>
</template>

<script>
export default {
  name: 'MultiElTrans',
  data: () => ({
    isEditing: false
  })
}
</script>

<style>

</style>