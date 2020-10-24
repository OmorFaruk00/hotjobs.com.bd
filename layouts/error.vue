<template>

  <div class="page-content error-content">

    <div class="container-fluid">

      <div class="row">
        <div class="error_page">
          <h1>THE PAGE YOU ARE LOOKING FOR IS NOT FOUND! PLEASE CHECK THE URL AGAIN...</h1>

          <div class="common-btn">
            <nuxt-link to="/" class="tcb-animate-e tcb-success">Home</nuxt-link>
          </div>
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

.error_page {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.error-content {
  padding: 180px 0 !important;
}

</style>
