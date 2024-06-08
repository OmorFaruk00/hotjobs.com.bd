<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">


        <div class="col-lg-10">
          <div class="card">
            <div class="card-body contact">

              <h1>Career Guide & Tips</h1>

              <ul class="career-guide">
                <li>
                  <nuxt-link to="/career/career-guide/freelancing">Freelancing</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/hrm">Human Resource Management (HRM)</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/banking">Banking</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/rmg">RMG</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/career-in-ngo">Career In NGO</nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/career-in-media">Career In Media</nuxt-link>
                </li>
              </ul>

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
import ads from "~/components/Ads";
import doubleAds from "@/components/DoubleAds";

export default {
  name: "index",
  components: {
    doubleAds
  },
}
</script>

<style scoped>
.career-guide li a {
  color: #423A3D;
}

.career-guide li a:hover {
  color: #EC1A3A;
}
</style>
