<template>
  <div class="home">
    <div>
      <input id="left" type="radio" name="pos" value="left" v-model="pos" /><label for="left">left</label>
      <input id="top" type="radio" name="pos" value="top" v-model="pos" /><label for="top">top</label>
    </div>
    <img v-pin:[pos]="100" alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" :obj.sync="obj" :hhh.sync="hhh" v-model="msg" />
    <div>
      <input id="first" type="radio" name="user" value="first" v-model="name" /><label for="first">first</label>
      <input id="last" type="radio" name="user" value="last" v-model="name" /><label for="last">last</label>
    </div>
    <current-user :user="user">
      <template v-slot:default="slotProps">
        {{ slotProps.user.firstName }}
      </template>
      <!-- 注意默认插槽的缩写语法不能和具名插槽混用，因为它会导致作用域不明确 -->
      <!-- <template v-slot="slotProps">
        {{ slotProps.user.firstName }}
      </template> -->
      <!-- <template v-slot:user="{ user }">
        {{ user.fullName }}
      </template> -->
      <!-- <template v-slot:user="{ user: person }">
        {{ person.fullName }}
      </template> -->
      <!-- 默认值用于解构prop时没有这个属性的后备内容 -->
      <!-- <template v-slot:user="{ person = { firstName: 'Guest' } }">
        {{ person.firstName }}
      </template> -->
      <template #user="{ person = { firstName: 'Guest' } }">
        {{ person.firstName }}
      </template>
      <template v-slot:[name]="{ user }">
        {{ user.fullName }}
      </template>
    </current-user>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import CurrentUser from '@/components/CurrentUser'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    CurrentUser
  },
  provide() {
    return {
      emmm: this.emmm
    }
  },
  data: () => ({
    name: 'first',
    pos: 'left',
    user: {
      firstName: 'ma',
      lastName: 'zi',
      fullName: 'mazi'
    },
    obj: {
      a: 'a',
      b: 'b'
    },
    hhh: 'hhh',
    msg: 'msg'
  }),
  methods: {
    emmm() {
      console.log(this.name)
    }
  }
}
</script>

<style scoped>
img {
  transition: .3s;
  transition-delay: .2s;
}
</style>
