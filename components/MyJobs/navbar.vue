<template>
  <div class="col-md-12">
    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">

      <nuxt-link to="/my-jobs/dashboard" class="nav-link mb-2" :class="$nuxt.$route.name == 'my-jobs-dashboard' ? 'active' : ''">Home</nuxt-link>

      <nuxt-link to="/my-jobs/view-resume" class="nav-link mb-2"  :class="$nuxt.$route.name == 'my-jobs-view-resume' ? 'active' : ''">View Resume</nuxt-link>
      <nuxt-link to="/my-jobs/edit-resume" class="nav-link mb-2"  :class="$nuxt.$route.name == 'my-jobs-edit-resume' ? 'active' : ''">Edit Resume</nuxt-link>
      <nuxt-link to="/my-jobs/upload-resume" class="nav-link mb-2" :class="$nuxt.$route.name == 'my-jobs-upload-resume' ? 'active' : ''">Upload Resume</nuxt-link>

    </div>
  </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped>

</style>
