import './index.less'

export default {
  name: 'toast',

  props: ['msg'],

  render (h) {
    return h('div', {
      class: 'toast show'
    }, this.msg)
  }
}
