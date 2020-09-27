<template>
  <div>

    <div class="page-content">

      <div class="container-fluid">

        <div class="row">

          <!--banner-->
          <homeBanner/>

          <div class="col-lg-12">
            <div class="card">
            </div>
          </div>

          <!--Desire Category-->
          <homeDesireCategory/>

          <!--Skilled jobs-->
          <homeSkill/>

          <!--dream Jobs-->
          <homeDreamJobs/>

          <!--TENDER / EOI-->
          <homeTender/>

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
          <!--Pay Online For Training-->
          <homePopularCompanies/>

          <!--Pay Online For Training-->
          <homePayOnlineForTraining/>


        </div>

      </div>

    </div>

  </div>
</template>

<script>

  import homeBanner from "~/components/Home/Banner";
  import homeDesireCategory from "~/components/Home/DesireCategory";
  import homeSkill from "~/components/Home/Skill";
  import homeDreamJobs from "~/components/Home/DreamJobs";
  import homeTender from "~/components/Home/Tender";
  import homeCounter from "~/components/Home/Counter";
  import homeMostPopular from "~/components/Home/MostPopular";
  import homePopularCompanies from "~/components/Home/PopularCompanies";
  import homePayOnlineForTraining from "~/components/Home/PayOnlineForTraining";


  export default {
    name: "index",
    components: {
      homeBanner,
      homeDesireCategory,
      homeSkill,
      homeDreamJobs,
      homeTender,
      homeCounter,
      homeMostPopular,
      homePopularCompanies,
      homePayOnlineForTraining
    },

  }
</script>

<style scoped>

</style>
