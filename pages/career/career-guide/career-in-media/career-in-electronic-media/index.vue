<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-10">
          <div class="card">
            <div class="card-body contact">

              <h1>
                <nuxt-link to="/career/career-guide">Career Guide & Tips</nuxt-link>
                (Career in Media) (ইলেকট্রনিক মিডিয়ায় ক্যারিয়ার)
              </h1>

              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error itaque nostrum quod sit
                velit!</P>

            </div>
          </div>
        </div>
        <div class="col-lg-2">
          <div class="col-12">
            <div class="card" style="background: transparent;box-shadow: none;">
              <div class="card-body">

                <adsbygoogle/>


              </div>
            </div>
          </div>

          <div class="col-12 mt-2">
            <div class="card" style="background: transparent;box-shadow: none;">
              <div class="card-body">

                <adsbygoogle/>


              </div>
            </div>
          </div>
        </div>

        <doubleAds/>
      </div>

    </div>

  </div>
</template>

<script>
import doubleAds from "@/components/DoubleAds";

export default {
  name: "index",
  components: {
    doubleAds
  },
}
</script>

<style scoped>

</style>
