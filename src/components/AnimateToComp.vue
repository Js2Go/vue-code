<template>
  <div id="exp">
    <input type="number" v-model.number="firstNumber" step="20"> +
    <input type="number" v-model.number="secondNumber" step="20"> =
    {{ result }}
    <p>
      <animated-integer :value="firstNumber"></animated-integer> +
      <animated-integer :value="secondNumber"></animated-integer> =
      <animated-integer :value="result"></animated-integer>
    </p>
  </div>
</template>

<script>
import AnimatedInteger from './AnimatedInteger'

export default {
  name: 'AnimateToComp',
  components: {
    AnimatedInteger
  },
  data: () => ({
    firstNumber: 20,
    secondNumber: 40
  }),
  computed: {
    result() {
      return this.firstNumber + this.secondNumber
    }
  }
}
</script>

<style>

</style>