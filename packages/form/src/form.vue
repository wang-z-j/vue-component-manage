<template>
  <form action="">
    <slot></slot>
  </form>
</template>
<script>
export default {
  name: "wzj-form",
  provide() {
    return {
      form: this
    }
  },
  props: {
    rules: {
      type: Object,
    },
    model: {
      type: Object
    }
  },
  methods: {
    validate(cb) {
      const tasks = this.$children
        .filter(child => child.prop)
        .map(child => child.validate())
      Promise.all(tasks)
        .then(() => {
          cb(true)
        })
        .catch(() => {
          cb(false)
        })
    }
  }
}
</script>

