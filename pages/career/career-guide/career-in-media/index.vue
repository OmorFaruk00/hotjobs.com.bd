<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-10">
          <div class="card">
            <div class="card-body contact">

              <h1>
                <nuxt-link to="/career/career-guide">Career Guide & Tips</nuxt-link>
                (Career in Media)
              </h1>

              <ul class="career-guide">

                <li>
                  <nuxt-link to="/career/career-guide/career-in-media/career-in-print-media">Career In Print Media
                    (প্রিন্ট মিডিয়ায় ক্যারিয়ার)
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/career/career-guide/career-in-media/career-in-electronic-media">Career In Electronic
                    Media (ইলেকট্রনিক মিডিয়ায় ক্যারিয়ার)
                  </nuxt-link>
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
        <ads/>
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
h5 {
  color: #423A3D;
}

p {
  font-size: 1rem;
}

.career-guide li a {
  color: #423A3D;
}

.career-guide li a:hover {
  color: #EC1A3A;
}
</style>
