<template>

  <div>
    <employabilityHelpBanner/>

    <div class="page-content" style="margin-top: -40px">

      <div class="container-fluid">

        <div class="row">

          <ads/>

          <!--HotJobs Certification Test's-->
          <employabilityHelpHotJobsCertificationTest/>

          <ads/>

          <!--ReadCandidateFeedback-->
          <employabilityHelpReadCandidateFeedback/>

          <ads/>

          <employabilityHelpFaq/>

          <ads/>

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
import ads from "~/components/Ads";

export default {
  name: "employability-help",
  components: {
    employabilityHelpBanner,
    employabilityHelpHotJobsCertificationTest,
    employabilityHelpReadCandidateFeedback,
    employabilityHelpFaq,
    ads
  },
}
</script>

<style scoped>

</style>
