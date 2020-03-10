<script>
export default {
  name: 'toast',

  props: ['msg'],

  render (h, c) {
    return h('div', {
      class: 'toast show'
    }, this.msg)
  }
}
</script>

<style lang="less" scoped>
@import url('./index');
</style>
