<template>
  <div class="row mt-2">

    <div class="col-lg-12 text-right">

      <button class="btn btn-info"><i class="bx bx-search-alt"></i> Search CV Bank</button>
      <nuxt-link to="/employer/job-posting-board" class="btn btn-success"><i class="bx bxs-plus-circle"></i> Post a New Job</nuxt-link>
      <nuxt-link to="/employer/tutor-request" class="btn btn-success"><i class="bx bxs-plus-circle"></i> Tutor Request</nuxt-link>

    </div>

  </div>
</template>

<script>
  export default {
    name: "SubNavbar"
  }
</script>

<style scoped>

</style>
