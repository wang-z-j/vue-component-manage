import WzjInput from '../'
export default {
  title: 'WzjInput',
  component: WzjInput
}
export const Text = () => ({
  components: { WzjInput },
  template: `<wzj-input v-model="value"></wzj-input>`,
  data() {
    return {
      value: 'admin'
    }
  }
})


export const Password = () => ({
  components: { WzjInput },
  template: `<wzj-input type="password" v-model="value"></wzj-input>`,
  data() {
    return {
      value: '123456'
    }
  }
})
