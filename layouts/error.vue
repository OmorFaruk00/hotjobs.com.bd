<template>

  <div class="page-content">

    <div class="container-fluid">

      <div class="row">
        <div class="error_page">
          <h1>THE PAGE YOU ARE LOOKING FOR IS NOT FOUND! PLEASE CHECK THE URL AGAIN...</h1>

          <nuxt-link to="/" class="btn btn-outline-secondary">Home</nuxt-link>
        </div>
      </div>

    </div>

  </div>

</template>

<script>
    export default {
        name: "error"
    }
</script>

<style scoped>
  .error_page{
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
  }

</style>
