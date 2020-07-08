<template>
  <div class="levels">
    <div class="level" :class="`level${level.id}`" v-for="level in levels" :key="level.id">
      {{ level.msg }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultiLevels',
  data: () => ({
    levels: [
      { id: 1, msg: 'msg1' },
      { id: 2, msg: 'msg2' },
      { id: 3, msg: 'msg3' },
      { id: 4, msg: 'msg4' },
      { id: 5, msg: 'msg5' },
    ]
  })
}
</script>

<style lang="scss" scoped>
.levels {
  .level {
    width: 19%;
    box-sizing: border-box;
    font-size: 20px;
    height: 300px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    visibility: visible;
    opacity: 0;
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 20, 0, 1);
    transition: opacity 0.35s ease 0.26s, transform 0.35s ease 0.26s;
    color: #fff;
    border-radius: 5px;
    margin-right: 2px;
  }

  @for $i from 1 through 5 {
    .level#{$i} {
      transition: opacity 0.35s ease 0.13s * (5 - $i), transform 0.35s ease 0.13s * (5 - $i);
      background-color: rgba($color: #000, $alpha: (1 - 0.8) * $i);
    }
  }

  @for $i from 1 through 5 {
    &:hover .level#{$i} {
      // color: red;
      transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      transition: opacity 0.35s ease 0.13s * $i, transform 0.35s ease 0.13s * $i;
      opacity: 1;
    }
  }
}
</style>