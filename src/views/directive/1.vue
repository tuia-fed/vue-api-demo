<template>
  <div>
    <h1>内置指令</h1>
    <p>
      <em>v-model</em>、
      <em>v-if</em>、
      <em>v-show</em>、
      <em>v-text</em>
    </p>
    <div v-relativeTime="10"></div>
    <div class="box" v-move></div>
  </div>
</template>

<script>
import Vue from 'vue'

Vue.directive('move', {
  bind (el, binding) {
    el.style.position = 'fixed'
    el.addEventListener('touchmove', (e) => {
      e = e.targetTouches
      console.log(e)
      el.style.left = e[0].clientX + 'px'
      el.style.top = e[0].clientY + 'px'
    })
  }
})

Vue.directive('relativeTime', {
  bind (el, binding) {
    // Time.getFormatTime() 方法，自行补充
    el.innerHTML = binding.value
    el.__timeout__ = setInterval(() => {
      (el.innerHTML -= 1) <= 0 && clearInterval(el.__timeout__)
    }, 1000)
  },
  unbind (el) {
    clearInterval(el.innerHTML)
    delete el.__timeout__
  }
})

export default {
  components: {
  },

  data () {
    return {
      user: {
        name: 'vue api'
      }
    }
  },

  updated () {
    console.log('oh! updated')
  },

  mounted () {
    window.app = this
  },

  methods: {
  }
}
</script>

<style scoped>
.box {
  width: 100px;
  height: 100px;
  background-color: lightblue;
  border: 1px solid lightcoral;
}
</style>
