<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body" style="max-width: 80%;margin: 0 auto;">
              <h1 class="card-title text-center">Job Details</h1>
            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
}
</script>

<style scoped>

</style>
