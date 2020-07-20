<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <dashboardNavbar/>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-10">
          <div class="card">
            <div class="card-body">
              <h1>View resume</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, iste!</p>

            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
  import dashboardNavbar from '~/components/Dashboard/navbar'

  export default {
    name: "view-resume",
    components: {
      dashboardNavbar
    }
  }
</script>

<style scoped>

</style>
