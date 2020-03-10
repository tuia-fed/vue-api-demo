<template>
  <div>
    <h1 v-text="user.name"></h1>
    <h4 v-text="user.sex"></h4>
    <button @click="addSex">通过$set添加属性sex</button>
    <button @click="delSex">通过$delete删除属性sex</button>
    <button @click="delSex1">暴力删除属性sex</button>
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
    delSex () {
      this.$delete(this.user, 'sex')
      console.log(this.user)
    },

    delSex1 () {
      delete this.user.sex
      console.log(this.user)
    },

    addSex () {
      this.$set(this.user, 'sex', 'man')
      console.log(this.user)
    }
  }
}
</script>
