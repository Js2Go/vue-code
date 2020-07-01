<template>
  <div class="about">
    <h1 v-for="i in 100000" :key="`${i}`">This is an about page{{ i }}</h1>
  </div>
</template>
