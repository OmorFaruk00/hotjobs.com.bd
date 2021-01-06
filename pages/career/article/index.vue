<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">
        <ads/>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">

              <h1>Article</h1>

              <p>Stay tuned.</p>

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
