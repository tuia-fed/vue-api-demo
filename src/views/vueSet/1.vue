<template>
  <div>
    <h1 v-text="user.name"></h1>
    <button @click="addAge">暴力添加属性age</button>
    <button @click="addSex">通过$set添加属性sex</button>
  </div>
</template>

<script>
export default {
  components: {
  },

  data () {
    return {
      user: {
        name: 'vue api'
      }
    }
  },

  updated () {
    console.log('oh! updated')
  },

  mounted () {
    window.app = this
    console.log(this.user)
  },

  methods: {
    addAge () {
      this.user.age = 18
      console.log(this.user)
    },

    addSex () {
      this.$set(this.user, 'sex', 'man')
      console.log(this.user)
    }
  }
}
</script>
