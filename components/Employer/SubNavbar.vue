<template>
  <div class="row mt-2">

    <div class="col-lg-12 text-right">
      <nuxt-link to="/employer/dashboard" class="tcb-animate-e tcb-default"><i class="bx bx-home-circle"></i> Dashboard <i v-if="$nuxt.$route.name == 'employer-dashboard'" class="bx bx-check-circle"></i></nuxt-link>
<!--      <button class="tcb-animate-e tcb-info"><i class="bx bx-search-alt"></i> Search CV Bank</button>-->
      <nuxt-link to="/employer/job-posting-board" class="tcb-animate-e tcb-success"><i class="bx bxs-plus-circle"></i> Post a New Job <i v-if="$nuxt.$route.name == 'employer-job-posting-board'" class="bx bx-check-circle"></i></nuxt-link>
      <nuxt-link to="/employer/tutor-request" class="tcb-animate-e tcb-success"><i class="bx bxs-plus-circle"></i> Tutor Request <i v-if="$nuxt.$route.name == 'employer-tutor-request'" class="bx bx-check-circle"></i></nuxt-link>

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
