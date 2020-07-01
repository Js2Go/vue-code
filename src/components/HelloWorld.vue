<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ message }}</h1>
    <h1>{{ hhh }}</h1>
    <h1>{{ obj.a }}</h1>
    <h1>{{ obj.b }}</h1>
    <input type="text" :value="msg" @input="change1">
    <input type="text" :value="hhh" @input="change2">
    <input type="text" v-model="obj.a">
    <input type="text" v-model="obj.b">
    <tree-folder :folder="folder" />
  </div>
</template>

<script>
import TreeFolder from '@/components/TreeFolder'

export default {
  name: 'HelloWorld',
  components: {
    TreeFolder
  },
  inject: ['emmm'],
  props: {
    msg: String,
    hhh: String,
    obj: {
      type: Object,
      default: () => ({
        a: '',
        b: ''
      })
    }
  },
  model: {
    prop: 'msg',
    event: 'change'
  },
  data: () => ({
    message: '',
    folder: {
      name: '1111111',
      children: [{
        name: '2222222',
        children: [{
          name: '3333333',
        }]
      }]
    }
  }),
  mounted() {
    const _this = this
    console.log(_this.name)
    this.emmm.call(window)
  },
  methods: {
    change1(e) {
      this.$emit('change', e.target.value)
    },
    change2(e) {
      this.$emit('update:hhh', e.target.value)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
