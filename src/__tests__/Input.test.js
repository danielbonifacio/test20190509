import { mount, shallowMount } from '@vue/test-utils'
import Input from 'Components/Input.vue'

describe('Input component', () => {
  it('should render without crash', () => {
    mount(Input)
  })
  
  it('should render correctly', () => {
    const wrapper = mount(Input)
    expect(wrapper.html()).toMatchSnapshot()
  })
  
  it('contains input type text html element', () => {
    const wrapper = mount(Input)
    expect(wrapper.contains('input[type="text"]')).toBe(true)
  })
  
  it('should add invalid class on invalidation', () => {
    const wrapper = mount(Input, { propsData: { valid: false } })
    wrapper.setData({ shouldValidate: true })
    expect(wrapper.contains('.invalid')).toBe(true)
  })
  
  it('should not add invalid class on invalidation with falsy shouldValidate property', () => {
    const wrapper = mount(Input, { propsData: { valid: false } })
    wrapper.setData({ shouldValidate: false })
    expect(wrapper.contains('.invalid')).toBe(false)
  })
})