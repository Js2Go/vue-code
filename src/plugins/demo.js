const install = function (Vue, options) {
  Vue.globalMethod = function (params) {
    console.log(options)
    console.log(params)
  }

  Vue.directive('m-directive', {
    bind(el, binding, vnode, oldVnode) {
      // console.log(options)
      // console.log(el, binding, vnode, oldVnode)
    }
  })

  // Vue.directive('pin', {
  //   bind(el, binding, vnode) {
  //     el.style.position = 'fixed'
  //     let s = (binding.arg === 'left' ? 'left' : 'top')
  //     el.style[s] = binding.value + 'px'
  //   },
  //   update(el, binding, vnode) {
  //     let s = (binding.arg === 'left' ? 'left' : 'top')
  //     if (s === 'left') {
  //       el.style.top = 'auto'
  //     }
  //     if (s === 'top') {
  //       el.style.left = 'auto'
  //     }
  //     el.style[s] = binding.value + 'px'
  //   }
  // })

  // bind 和 update 一起触发的简写
  Vue.directive('pin', function (el, binding) {
    el.style.position = 'fixed'
    let s = (binding.arg === 'left' ? 'left' : 'top')
    if (s === 'left') {
      el.style.top = '0'
    }
    if (s === 'top') {
      el.style.left = '0'
    }
    el.style[s] = binding.value + 'px'
  })

  Vue.mixin({
    created: function () {
      // console.log(this.$data)
    }
  })

  Vue.prototype.$meth = function (opts) {
    console.log(options)
    console.log(opts)
  }
}

export default install
