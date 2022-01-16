import WzjForm from '../'
import WzjFormItem from '../../formitem'
import WzjInput from '../../input'
import WzjButton from '../../button'

export default {
  title: 'WzjForm',
  component: WzjForm
}

export const Login = () => ({
  components: { WzjForm, WzjFormItem, WzjInput, WzjButton },
  template: `
    <wzj-form class="form" ref="form" :model="user" :rules="rules">
      <wzj-form-item label="用户名" prop="username">
        <!-- <wzj-input v-model="user.username"></wzj-input> -->
        <wzj-input :value="user.username" @input="user.username=$event" placeholder="请输入用户名"></wzj-input>
      </wzj-form-item>
      <wzj-form-item label="密码" prop="password">
        <wzj-input type="password" v-model="user.password"></wzj-input>
      </wzj-form-item>
      <wzj-form-item>
        <wzj-button type="primary" @click="login">登 录</wzj-button>
      </wzj-form-item>
    </wzj-form>
  `,
  data() {
    return {
      user: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入用户名'
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码'
          },
          {
            min: 6,
            max: 12,
            message: '请输入6-12位密码'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      console.log('button')
      this.$refs.form.validate(valid => {
        if (valid) {
          alert('验证成功')
        } else {
          alert('验证失败')
          return false
        }
      })
    }
  }
})
