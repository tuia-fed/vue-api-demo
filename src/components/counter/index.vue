<template>
  <div class="counter">counter: {{count}}</div>
</template>

<script>
export default {
  name: 'counter',

  props: ['count']
}
</script>

<style lang="less" scoped>
@import url('./index');
</style>
