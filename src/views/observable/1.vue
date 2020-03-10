<template>
  <div class="about">
    <counter :count="count" />
    <button @click="count += 1">+1</button>
  </div>
</template>

<script>
import Counter from '../../components/counter/index'

export default {
  components: {
    Counter
  },

  data () {
    return {
      count: 1
    }
  },

  mounted () {
    window.app = this
  },

  methods: {
  }
}
</script>
