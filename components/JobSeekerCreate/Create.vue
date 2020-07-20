<template>
  <!-- create -->
  <div class="login-area job-seeker-reg my-5">
    <div class="container">
      <h2>Create your free Hotjobs account now</h2>

      <div class="login-wrap">
        <div class="row">

          <div class="col-sm-6 col-lg-6">
            <div class="jobseeker-item">
              <div class="jobseeker-icon">
                <img src="../../static/images/box/8.png" alt="Job">
              </div>

              <div class="jobseeker-inner">
                <h3>General Category</h3>
                <p>Accountant, Project Manager, Engineer, Lecturer</p>
                <button class="btn btn-primary">Create Account</button>
              </div>

            </div>
          </div>

          <div class="col-sm-6 col-lg-6">
            <div class="jobseeker-item">
              <div class="jobseeker-icon">
                <img src="../../static/images/box/2.png" alt="Job">
              </div>
              <div class="jobseeker-inner">
                <h3>Special Category</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <button class="btn btn-primary">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
    export default {
        name: "Create"
    }
</script>

<style scoped>
  .job-seeker-reg{
    padding-bottom: 20px!important;
  }
  .jobseeker-inner p{
    color: #fff!important;
  }
</style>
