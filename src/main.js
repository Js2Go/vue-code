import Vue from 'vue'
import App from './App.vue'
import demo from './plugins/demo'
import router from './router'

Vue.use(demo, { ddemo: '12ioasj' })

const getChildrenTextContent = (children) => {
  return children.map(node => {
    return node.children
      ? getChildrenTextContent(node.children)
      : node.text
  }).join('')
}

Vue.component('anchored-heading', {
  render(h) {
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')

    const Hx = 'h' + this.level

    // return h(
    //   'h' + this.level,
    //   [
    //     h('a', {
    //       attrs: {
    //         name: headingId,
    //         href: '#' + headingId
    //       }
    //     }, this.$slots.default)
    //   ]
    // )

    return (
      <Hx>
        <a name={headingId} href={`#${headingId}`}>
          { this.$slots.default }
        </a>
      </Hx>
    )
  },
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})
Vue.component('anchored-hello', {
  functional: true,
  // functional函数式组件中没有this，需要为render函数指定第二个参数（context）
  render(h,   ctx) {
    const Hx = 'h' + ctx.props.level

    return (
      <Hx>
        <a name={ctx.props.level} href={`#${ctx.props.level}`}>
          Hello
        </a>
      </Hx>
    )
  },
  // 可不写
  props: {
    level: {
      type: Number,
      required: true
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
