export default function(asyncView) {
  const asyncHandler = () => ({
    component: asyncView,
    loading: require('@/components/Loading.vue').default,
    error: require('@/components/Error.vue').default,
    // 展示加载时组件的延时时间。默认值是 200 (毫秒)
    delay: 200,
    timeout: 5000
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(asyncHandler, data, children)
    }
  })
}
