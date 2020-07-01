<template>
  <div class="about">
    <Hhh />
  </div>
</template>

<script>
import asyncImport from '@/utils/async-component-factory'

export default {
  components: {
    Hhh: () => asyncImport(import('@/components/Hhh'))
  }
}
</script>
