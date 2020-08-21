<template>

  <div>
    <jobSeekerBanner/>
    <jobSeekerCreate/>

  </div>


</template>

<script>
  import jobSeekerBanner from '~/components/JobSeekerCreate/Banner';
  import jobSeekerCreate from '~/components/JobSeekerCreate/Create';

  export default {
    name: "create",
    components: {
      jobSeekerBanner,
      jobSeekerCreate
    }
  }
</script>

<style scoped>

</style>
