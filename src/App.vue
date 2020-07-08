<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/anchor">Anchor</router-link> |
      <router-link to="/scss">Scss</router-link> |
      <router-link to="/pipeline">Pipeline</router-link> |
      <router-link to="/transition">Transition</router-link> |
      <router-link to="/animation">Animation</router-link> |
      <router-link to="/multi-levels">MultiLevels</router-link> |
      <router-link to="/drag-drop">DragDrop</router-link> |
      <router-link to="/input-code">InputCode</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
