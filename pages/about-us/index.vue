<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">

              <h3>About us</h3>
              <p>Stay tuned.</p>

            </div>
          </div>
        </div>
        <singleAds/>
      </div>

    </div>

  </div>
</template>

<script>
import singleAds from "~/components/SingleAds";

export default {
  name: "index",
  components: {
    singleAds
  },
}
</script>

<style scoped>

</style>
