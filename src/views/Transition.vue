<template>
  <Hhh :show.sync="show" />
</template>

<script>
import asyncImport from '@/utils/async-component-factory'

export default {
  name: 'Transition',
  components: {
    Hhh: () => asyncImport(import('@/components/Hhh'))
  },
  data: () => ({
    show: false
  })
}
</script>

<style>

</style>