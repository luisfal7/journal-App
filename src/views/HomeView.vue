<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>hola mundo</h1>
    <button @click="goToDayBook" class="btn btn-primary">primary</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({name:'daybook'})
    }
  }
}
</script>

