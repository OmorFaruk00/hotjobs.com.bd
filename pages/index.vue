<template>
  <div>

    <div class="page-content">

      <div class="container-fluid">

        <div class="row">

          <!--banner-->
          <homeBanner/>

          <singleAds/>

          <div class="col-lg-12">
            <div class="card">
            </div>
          </div>

          <!--Desire Category-->
          <homeCategoryWiseJobs/>

          <doubleAds/>

          <!--Skilled jobs-->
          <homeHelpingHand/>

          <singleAds/>

          <!--dream Jobs-->
          <homeDreamJobs/>

          <singleAds/>

          <!--TUTOR-->
          <homeTutor/>

          <doubleAds/>

          <!--TENDER / EOI-->
          <homeTender/>

          <thirdAds/>

        </div>

      </div>

    </div>


    <!-- Counter -->
    <homeCounter/>
    <!-- End Counter -->

    <div class="page-content mt-0">

      <div class="container-fluid">

        <!--Most Popular-->
        <homeMostPopular/>


        <div class="row">

          <ads/>


          <!--Pay Online For Training-->
          <homePopularCompanies/>

          <ads/>

          <!--Pay Online For Training-->
          <!--          <homePayOnlineForTraining />-->


        </div>

      </div>

    </div>

  </div>
</template>

<script>
import homeBanner from "~/components/Home/Banner";
import homeCategoryWiseJobs from "~/components/Home/CategoryWiseJobs";
import homeHelpingHand from "~/components/Home/HelpingHand";
import homeDreamJobs from "~/components/Home/DreamJobs";
import homeTutor from "~/components/Home/Tutor";
import homeTender from "~/components/Home/Tender";
import homeCounter from "~/components/Home/Counter";
import homeMostPopular from "~/components/Home/MostPopular";
import homePopularCompanies from "~/components/Home/PopularCompanies";
import homePayOnlineForTraining from "~/components/Home/PayOnlineForTraining";
import ads from "~/components/Ads";
import singleAds from "~/components/SingleAds";
import doubleAds from "~/components/DoubleAds";
import thirdAds from "~/components/ThirdAds";

export default {
  name: "index",
  components: {
    homeBanner,
    homeCategoryWiseJobs,
    homeHelpingHand,
    homeDreamJobs,
    homeTutor,
    homeTender,
    homeCounter,
    homeMostPopular,
    homePopularCompanies,
    homePayOnlineForTraining,
    ads,
    singleAds,
    doubleAds,
    thirdAds,
  },

}
</script>

<style scoped>

</style>
