<template>

  <div>

    <jobSeekerBanner/>

    <!-- Login -->
    <div class="login-area py-5">
      <div class="container">
        <h2>Login Your Account</h2>


        <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Email">
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password">
          </div>
        </div>


        <div class="login-sign-in">
          <a href="javaScript:void(0)">Forgot Password?</a>
          <ul>
            <li>Don’t Have Account ?</li>
            <li>
              <a href="javaScript:void(0)">Sign Up Here</a>
            </li>
          </ul>
          <div class="text-center">
            <button type="submit" class="btn login-btn">Sign In</button>
          </div>
        </div>


        <!--<div class="login-social">
          <a href="https://www.facebook.com/" target="_blank">
            <i class="icofont-facebook"></i>
            Login With Facebook
          </a>
          <a class="login-google" href="https://mail.google.com/" target="_blank">
            <i class="icofont-google-plus"></i>
            Login With Google
          </a>
        </div>-->

      </div>
    </div>
    <!-- End Login -->


  </div>


</template>

<script>

  import jobSeekerBanner from '~/components/JobSeekerLogin/Banner';

  export default {
    name: "job-seeker-login",
    components: {
      jobSeekerBanner
    }
  }
</script>

<style scoped>

</style>
