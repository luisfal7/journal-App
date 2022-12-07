<template>
  <div class="d-flex flex-column align-items-center justify-content-center img">
    <h1 class="m-2">Agenda</h1>
    <button @click="goToDayBook" class="btn btn-primary m-2">entrar</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToDayBook() {
      this.$router.push({name:'no-entry'})
    }
  }
}
</script>

<style scoped>

.img{
  min-height: 100vh;
  background: url(../../public/assets/bg-01.jpg) no-repeat center center fixed;
  background-size: cover;
}

</style>
