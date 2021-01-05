<template>
  <div>

    <div class="page-content">

      <div class="container-fluid">

        <div class="row">

          <!--banner-->
          <homeBanner/>


          <ads />

          <div class="col-lg-12">
            <div class="card">
            </div>
          </div>

          <!--Desire Category-->
          <homeCategoryWiseJobs/>


          <ads />

          <!--Skilled jobs-->
          <homeHelpingHand/>


          <ads />

          <!--dream Jobs-->
          <homeDreamJobs/>

          <ads />

          <!--TUTOR-->
          <homeTutor/>

          <ads />

          <!--TENDER / EOI-->
          <homeTender/>

          <ads />

        </div>

      </div>

    </div>


    <!-- Counter -->
    <homeCounter/>
    <!-- End Counter -->

    <div class="page-content mt-0">

      <div class="container-fluid">

        <ads />

        <!--Most Popular-->
        <homeMostPopular/>


        <div class="row">

          <ads />


          <!--Pay Online For Training-->
          <homePopularCompanies/>

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
      ads
    },

  }
</script>

<style scoped>

</style>
