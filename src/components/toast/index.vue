<template>
  <div class="toast show">{{msg}}</div>
</template>

<script>
export default {
  name: 'toast',

  props: ['msg']
}
</script>

<style lang="less" scoped>
@import url('./index');
</style>
