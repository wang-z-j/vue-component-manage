<template>
  <div>
    <label>{{label}}</label>
    <div>
      <slot></slot>
    </div>
    <p v-if="errorMsg">{{ errorMsg }}</p>
  </div>
</template>
<script>
import AsyncValidator from 'async-validator'
export default {
  name: 'wzj-form-item',
  inject: ['form'],
  props: {
    label: {
      type: String,
    },
    prop: {
      type: String
    }
  },
  data() {
    return {
      errorMsg: ''
    }
  },
  methods: {
    validate() {
      if(!this.prop) return
      const value = this.form.model[this.prop]
      const rules = this.form.rules[this.prop]
      const validator = new AsyncValidator({[this.prop] : rules});
      return validator.validate({[this.prop] : value}, error => {
        if (error) {
          this.errorMsg = error[0].message
        } else {
          this.errorMsg = ''
        }
      })
    }
  }
}
</script>

