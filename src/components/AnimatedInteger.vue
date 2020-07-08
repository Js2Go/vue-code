<template>
  <span>{{ tweeningValue }}</span>
</template>

<script>
export default {
  name: 'AnimatedInteger',
  props: {
    value: {
      type: Number,
      required: true
    }
  },
  data: () => ({
    tweeningValue: 0
  }),
  watch: {
    value(newVal, oldVal) {
      this.tween(oldVal, newVal)
    }
  },
  mounted() {
    this.tween(0, this.value)
  },
  methods: {
    tween(startVal, endVal) {
      // console.log(startVal, endVal)
      const vm = this
      const animate = () => {
        if (TWEEN.update()) {
          requestAnimationFrame(animate)
        }
      }

      new TWEEN.Tween({ tweeningValue: startVal })
        .to({ tweeningValue: endVal }, 500)
        .onUpdate(function() {
          vm.tweeningValue = this.tweeningValue.toFixed(0)
        })
        .start()

      animate()
    }
  }
}
</script>

<style>

</style>