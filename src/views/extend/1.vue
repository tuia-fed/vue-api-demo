<template>
  <div class="about">
    <component :is="toast ? 'toast1' : 'toast2'" :msg="msg" />
    <button @click="toggle">切换</button>
  </div>
</template>

<script>
import Toast1 from '../../components/toast/index.vue'
import Toast2 from '../../components/toast/index.js'

console.log(Toast1)
console.log(Toast2)

console.log(Toast1.render.toString())
console.log(Toast2.render.toString())

export default {
  components: { Toast1, Toast2 },

  data () {
    return {
      toast: true
    }
  },

  computed: {
    msg () {
      return this.toast ? 'hello toast1' : 'hello toast2'
    }
  },

  mounted () {
    window.app = this
  },

  methods: {
    toggle () {
      this.toast = !this.toast
    }
  }
}
</script>
