<template>
  <div>
    <button @click="showToast">toast</button>
  </div>
</template>

<script>
import Vue from 'vue'
import Toast from '../../components/toast/toast.js'

Vue.use(Toast)

export default {
  data () {
    return {
    }
  },

  mounted () {
    window.app = this
  },

  methods: {
    showToast () {
      const num = Math.random() * 10 | 0
      this.$toast('hello ' + num)
    }
  }
}
</script>
