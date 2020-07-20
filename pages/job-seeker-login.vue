<template>

  <div>

    <jobSeekerBanner/>

    <!-- Login -->
    <div class="login-area py-5">
      <div class="container">
        <h2>Login Your Account</h2>
        <form @submit.prevent="submitLoginForm()">
        <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
          <div class="form-group">
            <input type="email" name="email" class="form-control" v-model="email" placeholder="Email Address">
            <small id="email_help" class="form-text text-danger"></small>
          </div>
        </div>

        <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
          <div class="form-group">
            <input type="password" name="password" class="form-control" v-model="password" placeholder="Password">

            <small id="password_help" class="form-text text-danger"></small>

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

        </form>


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
  import Swal from 'sweetalert2'

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  export default {
    name: "job-seeker-login",
    components: {
      jobSeekerBanner
    },
    data() {
      return {
        email: "",
        password: "",
      }
    },

    methods: {

      async submitLoginForm () {
        return await this.$axios.post('/auth/admin', {
          email: this.email,
          password: this.password,
          type: 'employee',
        })
          .then((response) => {
            $(".form-text").html("&nbsp;");

            window.$nuxt.$cookies.remove('token');
            window.$nuxt.$cookies.remove('user');

            window.$nuxt.$cookies.set('token', response.data.token, {
              path: '/',
              maxAge:1800
            });

            window.$nuxt.$cookies.set('user', response.data.user, {
              path: '/',
              maxAge:1800
            })

            window.location.href  = "/dashboard";

          })
          .catch((error) => {


            $(".form-text").html("&nbsp;");
            $.each(error.response.data, function(index, value){
              $("#" + index + "_help").html(value[0]);
            });


            if (error.response.status == 400) {
              Toast.fire({
                icon: 'warning',
                title: 'Employee not found'
              });
            }

            if (error.response.status == 422) {
              Toast.fire({
                icon: 'warning',
                title: 'Validation Error'
              });
            }


          })
      },

    },
  }
</script>

<style scoped>

</style>
