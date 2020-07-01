import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const msg = 'hello!'

const wrapper = shallowMount(HelloWorld, {
  propsData: { msg }
})

function getMountedComponent(Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe('HelloWorld', () => {
  it('has a created hook', () => {
    expect(typeof HelloWorld.created).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof HelloWorld.props).toBe('object')
    expect(wrapper.text()).toMatch(msg)
  })

  it('correctly sets the message when created', () => {
    expect(wrapper.vm.$props.msg).toBe('hello!')
  })

  it('renders the correct message', () => {
    expect(wrapper.text()).toBe(msg)
  })
})

describe('mounted HelloWorld', () => {
  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(HelloWorld, {
        msg: 'Hello'
      }).text()
    ).toBe('Hello')
  })

  it('renders correctly with different props', () => {
    expect(
      getMountedComponent(HelloWorld, {
        msg: 'Bye'
      }).text()
    ).toBe('Bye')
  })
})

describe('async HelloWorld', () => {
  it('updates the rendered message when wrapper.message updates', async () => {
    wrapper.setData({ message: 'foo' })
  
    // 在状态改变后和断言 DOM 更新前等待一刻
    await wrapper.vm.$nextTick()
    expect(wrapper.text()).toBe('hello! foo')
  })
})
