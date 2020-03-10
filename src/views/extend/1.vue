<template>
  <div>
    <component :is="toast[index].name" :msg="toast[index].msg" />
    <button @click="toggle">切换</button>
  </div>
</template>

<script>
import Toast1 from '../../components/toast/index.vue'
import Toast2 from '../../components/toast/index.js'
import Toast3 from '../../components/toast/toast.vue'

console.log(Toast1)
console.log(Toast2)
console.log(Toast3)

console.log(Toast1.render.toString())
console.log(Toast2.render.toString())
/** vue-loader 配合webpack进行热更新 对render进行了包装
 *
 * var instances = map[id].instances
 * if (ctx && instances.indexOf(ctx.parent) < 0) {
 *    instances.push(ctx.parent)
 * }
 *
 * 详细见：https://www.jianshu.com/p/652fbae768bf
 */
console.log(Toast3.render.toString())

export default {
  components: { Toast1, Toast2, Toast3 },

  data () {
    return {
      toast: [
        {
          msg: 'hello toast1',
          name: 'toast1'
        },
        {
          msg: 'hello toast2',
          name: 'toast2'
        },
        {
          msg: 'hello toast3',
          name: 'toast3'
        }
      ],
      index: 0
    }
  },

  mounted () {
    window.app = this
  },

  methods: {
    toggle () {
      this.index += 1
      if (this.index >= this.toast.length) {
        this.index = 0
      }
    }
  }
}
</script>
