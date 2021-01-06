<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">
        <ads/>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">

              <h1>
                <nuxt-link to="/career/career-guide">Career Guide & Tips</nuxt-link>
                (Career in Media) (প্রিন্ট মিডিয়ায় ক্যারিয়ার)
              </h1>

              <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos error itaque nostrum quod sit
                velit!</P>

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

</style>
