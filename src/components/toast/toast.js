import Toast from './index.vue'

Toast.install = Vue => {
  if (Vue.prototype.$toast) throw new Error('Vue.prototype.$toast 已经存在')

  let instance = null
  let timer = null
  const ToastConstructor = Vue.extend(Toast)

  Vue.prototype.$toast = (msg, time = 2000) => {
    if (!instance) instance = new ToastConstructor()
    if (timer) clearTimeout(timer)
    if (instance.$el) document.body.removeChild(instance.$el)

    instance.msg = msg
    instance.vm = instance.$mount()
    document.body.appendChild(instance.$el)

    timer = setTimeout(() => {
      if (instance.$el) document.body.removeChild(instance.$el)
      instance.$el = null
    }, time)
  }
}

export default Toast
