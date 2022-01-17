/**
 * @jest-environment jsdom
 */
// 解决报错[vue-test-utils]: window is undefined, vue-test-utils needs to be run in a browser environment.
import { mount } from '@vue/test-utils'
import WzjInput from '../src/input.vue'
describe('wzj-input', () => {
  test('input-password', () => {
    const wrapper = mount(WzjInput, {
      propsData: {
        type: 'password'
      }
    })
    // 推断type="password
    expect(wrapper.html()).toContain('input type="password"')
  })
})
