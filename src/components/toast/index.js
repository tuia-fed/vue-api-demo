import './index.less'

export default {
  name: 'toast',

  props: ['msg'],

  data () {
    return {
      pre: '有状态 '
    }
  },

  render (h) {
    return h('div', {
      class: 'toast show'
    }, this.pre + this.msg)
  }
}
