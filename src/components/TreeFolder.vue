<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"/>
  </p>
</template>

<script>
export default {
  name: 'TreeFolder',
  components: {
    TreeFolderContents: () => import('./TreeFolderContents.vue')
  },
  props: {
    folder: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>