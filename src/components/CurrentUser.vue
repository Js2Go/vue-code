<template>
  <span>
    <slot :user="user">{{ user.lastName }}</slot>
    <slot name="user" :user="user">{{ user.lastName }}</slot>
    <slot name="first" :user="user">{{ user.firstName }}</slot>
    <slot name="last" :user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  name: 'CurrentUser',
  props: {
    user: Object
  }
}
</script>

<style>

</style>