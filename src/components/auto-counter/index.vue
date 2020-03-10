<template>
  <div class="counter">auto-counter: {{count}}</div>
</template>

<script>
import state from '../../views/observable/store'

export default {
  name: 'counter',

  props: ['count'],

  mounted () {
    setInterval(() => {
      state.count += 1
    }, 1000)
  }
}
</script>

<style lang="less" scoped>
@import url('./index');
</style>
