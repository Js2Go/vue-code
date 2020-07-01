<template>
  <ul>
    <li v-for="(child, index) in children" :key="index">
      <tree-folder v-if="child.children" :folder="child"/>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>

<script>
import TreeFolder from './TreeFolder'

export default {
  name: 'TreeFolderContents',
  components: {
    TreeFolder
  },
  props: {
    children: {
      type: Array
    }
  }
}
</script>

<style>

</style>