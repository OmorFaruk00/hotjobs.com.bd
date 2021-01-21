<template>

  <div>
    <employabilityHelpBanner/>

    <div class="page-content" style="margin-top: -40px">

      <div class="container-fluid">

        <div class="row">

          <!--HotJobs Certification Test's-->
          <employabilityHelpHotJobsCertificationTest/>

          <singleAds/>

          <!--ReadCandidateFeedback-->
          <employabilityHelpReadCandidateFeedback/>

          <thirdAds/>

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
import singleAds from "~/components/SingleAds";
import doubleAds from "~/components/DoubleAds";

export default {
  name: "employability-help",
  components: {
    employabilityHelpBanner,
    employabilityHelpHotJobsCertificationTest,
    employabilityHelpReadCandidateFeedback,
    employabilityHelpFaq,
    singleAds,
    doubleAds,
  },
}
</script>

<style scoped>

</style>
