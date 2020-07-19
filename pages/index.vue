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

          <!--Hot Jobs-->
          <homeHotJobs/>

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
  import homeHotJobs from "~/components/Home/HotJobs";
  import homeTender from "~/components/Home/Tender";
  import homeCounter from "~/components/Home/Counter";
  import homeMostPopular from "~/components/Home/MostPopular";
  import homePayOnlineForTraining from "~/components/Home/PayOnlineForTraining";


  export default {
    name: "index",
    components: {
      homeBanner,
      homeDesireCategory,
      homeSkill,
      homeHotJobs,
      homeTender,
      homeCounter,
      homeMostPopular,
      homePayOnlineForTraining
    },

  }
</script>

<style scoped>

</style>
