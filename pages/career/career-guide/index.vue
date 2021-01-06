<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">

        <ads/>

        <div class="col-lg-12">
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

        <ads/>

      </div>

    </div>

  </div>
</template>

<script>
import ads from "~/components/Ads";

export default {
  name: "index",
  components: {
    ads
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
