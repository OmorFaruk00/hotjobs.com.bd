<template>

  <div>

    <employabilityHelpBanner/>

    <div class="page-content" style="margin-top: -40px">

      <div class="container-fluid">

        <div class="row">

          <!--HotJobs Certification Test's-->
          <employabilityHelpHotJobsCertificationTest/>

          <!--ReadCandidateFeedback-->
          <employabilityHelpReadCandidateFeedback/>


          <employabilityHelpFaq/>

        </div>

      </div>

    </div>
  </div>


</template>

<script>
  import employabilityHelpBanner from "~/components/EmployabilityHelp/Banner";
  import employabilityHelpHotJobsCertificationTest from "~/components/EmployabilityHelp/HotJobsCertificationTest";
  import employabilityHelpReadCandidateFeedback from "~/components/EmployabilityHelp/ReadCandidateFeedback";
  import employabilityHelpFaq from "~/components/EmployabilityHelp/Faq";

  export default {
    name: "employability-help",
    components: {
      employabilityHelpBanner,
      employabilityHelpHotJobsCertificationTest,
      employabilityHelpReadCandidateFeedback,
      employabilityHelpFaq
    },
  }
</script>

<style scoped>

</style>
