<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12 text-right">

          <button class="btn btn-info"><i class="bx bx-search-alt"></i> Search CV Bank</button>
          <button class="btn btn-success"><i class="bx bxs-plus-circle"></i> Post a New Job</button>

        </div>

      </div>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h1>Dashboard</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, iste!</p>
            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
  import employerNavbar from '~/components/Employer/Navbar'

  export default {
    name: "dashboard",
    components: {
      employerNavbar,
    }
  }
</script>

<style scoped>

</style>
