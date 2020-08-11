<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center">Account Details</h1>
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
  import employerSubNavbar from '~/components/Employer/SubNavbar'

  export default {
    middleware: 'employerAuthenticated',
    name: "edit-profile",
    components: {
      employerNavbar,
      employerSubNavbar,
    }
  }
</script>

<style scoped>

</style>
