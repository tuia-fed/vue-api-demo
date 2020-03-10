<template>
  <div class="about">
    <counter :count="state.count" />
    <auto-counter />
    <button @click="state.count += 10">+10</button>
  </div>
</template>

<script>
import AutoCounter from '../../components/auto-counter/index'
import Counter from '../../components/counter/index'
import state from './store'

export default {
  components: {
    Counter,
    AutoCounter
  },

  data () {
    return {
      state
    }
  },

  mounted () {
    window.app = this
  },

  methods: {
  }
}
</script>
