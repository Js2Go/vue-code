<template>
  <div class="drag-area" @drop="drop" @dragover="allowDrop">
    <span class="drag-content" id="drag-content" draggable @dragstart="drag">
      Drag Me
    </span>
  </div>
</template>

<script>
export default {
  data: () => ({
    tasks: [
      () => {
        console.log("第一个任务");
      },
      () => {
        console.log("第二个任务");
      },
      () => {
        console.log("第三个任务");
      }
    ]
  }),
  methods: {
    rICb() {
      window.requestIdleCallback(this.myNonEssentialWork, { timeout: 2000 })
    },
    myNonEssentialWork(deadline) {
      // 如果帧内有富余的时间，或者超时
      while (
        (deadline.timeRemaining() > 0 || deadline.didTimeout)
        && this.tasks.length > 0
      ) {
        this.work()
      }
      if (this.tasks.length > 0) {
        window.requestIdleCallback(this.myNonEssentialWork)
      }
    },
    work() {
      this.tasks.shift()()
      console.log('执行任务')
    },
    allowDrop(e) {
      e.preventDefault()
    },
    drag(e) {
      console.log(e)
      e.dataTransfer.setData('text', e.target.id)
    },
    drop(e) {
      e.preventDefault()
      const data = e.dataTransfer.getData('text')
      document.getElementById(data).style.left = e.x + 'px'
      document.getElementById(data).style.top = e.y + 'px'
      // ev.target.appendChild(document.getElementById(data))
    }
  },
  mounted() {
    this.rICb()
  }
}
</script>

<style lang="scss" scoped>
.drag {
  &-area {
    width: 100%;
    height: 90vh;
  }
  &-content {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 100px;
  }
}
</style>