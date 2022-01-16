<template>
  <input :type="type" name="" id="" @input="handleInput">
</template>
<script>
export default {
  props: {
    value: {
      type: String,
    },
    type: {
      type: String,
      default : 'text'
    }
  },
  methods: {
    handleInput(e) {
      console.log(e);
      this.$emit('input' ,e.target.value)
    }
  }
}
</script>
