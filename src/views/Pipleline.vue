<template>
  <div>
  <pre>
    pipeline {
      agent {
        docker {
          image 'node:10-alpine'
        }
      }
      environment {
        DISABLE_AUTH = 'true'
        DB_ENGINE = 'sqlite'
      }
      stages {
        stage('Test') {
          steps {
            sh 'node -v'
              sh './gradlew check'
            }
        }
        stage('Build') {
          steps {
            sh 'printenv'
          }
        }
        stage('No-op') {
          steps {
            sh 'ls'
          }
        }
      }
      post {
        always {
          echo 'This will always run'
          junit 'build/reports/**/*.xml'
          archiveArtifacts artifacts: 'build/libs/**/*.jar', fingerprint: true
          deleteDir() /* clean up our workspace */
        }
        success {
          echo 'This will run only if successful'
        }
        failure {
          echo 'This will run only if failed'
          mail to: 'team@example.com',
          subject: "Failed Pipeline: ${currentBuild.fullDisplayName}",
          body: "Something is wrong with ${env.BUILD_URL}"
        }
        unstable {
          echo 'This will run only if the run was marked as unstable'
        }
        changed {
          echo 'This will run only if the state of the Pipeline has changed'
          echo 'For example, if the Pipeline was previously failing but is now successful'
        }
      }
    }
  </pre>
  <div class="rotate-wrap">
  <pre>
  {
    "apps": {
      "tls": {
        "certificates": {
          "automate": [
            "example.com",
            "example.net"
          ]
        }
      }
    }
  }
  </pre>
  </div>
  <ul>
    <li v-for="([name, color, storage], index) in sku" :key="index">
      <span>型号：{{ name }}</span>
      <span>颜色：{{ color }}</span>
      <span>内存：{{ storage }}</span>
    </li>
  </ul>
  <div class="animate-area">
    <div ref="animateEl" class="animate-block">
    </div>
    <button class="animate-start" @click="start">Start</button>
    <button class="animate-cancel" @click="cancel">Cancel</button>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Pipeline',
  data: () => ({
    names: ['iPhone XR', 'iPhone XS', 'iPhone 7'],
    colors: ['Black', 'Gold', 'White'],
    storages: ['64g', '256g'],
    rafId: -1,
    left: 0,
    flag: true,
    el: null
  }),
  computed: {
    sku() {
      return this.combine(this.names, this.colors, this.storages)
    }
  },
  methods: {
    // sku算法
    combine(...chunks) {
      let res = []
  
      let helper = (chunkIndex, prev) => {
        let chunk = chunks[chunkIndex]
        let isLast = chunkIndex === chunks.length - 1
  
        for(let val of chunk) {
          let cur = prev.concat(val)
          if (isLast) {
            res.push(cur)
          } else {
            helper(chunkIndex + 1, cur)
          }
        }
      }
  
      helper(0, [])
  
      return res
    },
    render() {
      if (this.flag == true) {
        if (this.left >= 100) {
          this.flag = false
        }
        this.el.style.left = ` ${this.left++}px`
      } else {
        if (this.left <= 0) {
          this.flag = true
        }
        this.el.style.left = ` ${this.left--}px`
      }
    },
    animate() {
      //requestAnimationFrame效果
      const vm = this
      ;(function animloop() {
        vm.render()
        vm.rafId = window.requestAnimationFrame(animloop)
      })()
    },
    start() {
      if (this.rafId === -1) {
        this.animate()
      }
    },
    cancel() {
      window.cancelAnimationFrame(this.rafId)
      this.rafId = -1
    }
  },
  mounted() {
    this.el = this.$refs.animateEl
    this.animate()
  }
}
</script>

<style lang="scss" scoped>
pre {
  text-align: left;
}
.rotate-wrap {
  width: 400px;
  perspective: 1000px;
  margin: 20px;
}
.rotate-wrap pre {
  border-radius: 5px;
  background: #fff
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(241, 241, 241, 0.5) 46%,
      rgba(225, 225, 225, 0.5) 46.5%,
      rgba(246, 246, 246, 0) 100%
    );
  transform: rotateY(20deg);
  white-space: pre;
  display: block;
  font-size: 16px;
  box-shadow: -15px 15px 25px #090;
}

li {
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
}
.animate- {
  &block {
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: rgba($color: #f00, $alpha: 0.5);
    position: absolute;
    left: 0;
    top: 0;
    zoom: 1;
  }
  &cancel, &start {
    position: absolute;
    top: 120px;
    width: 50px;
    left: 0;
  }
  &start {
    left: 60px;
  }
}
</style>
