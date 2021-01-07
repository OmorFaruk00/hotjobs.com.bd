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
              <input type="text" name="username" class="form-control" v-model="username" placeholder="username" required>
              <small id="email_help" class="form-text text-danger"></small>
            </div>
          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
            <div class="form-group">
              <input type="password" name="password" class="form-control" v-model="password" placeholder="Password" required>
              <small id="password_help" class="form-text text-danger"></small>
            </div>
          </div>

          <div class="login-sign-in">
            <nuxt-link to="/employer/reset-password">Forgot Password?</nuxt-link>

            <div class="text-center">
              <button type="submit" class="btn login-btn">Sign In</button>
            </div>
          </div>

        </form>

      </div>
    </div>
    <!-- End Login -->

    <div class="row">
      <ads/>
    </div>

  </div>
</template>

<script>
  import jobSeekerBanner from '~/components/JobSeekerLogin/Banner'
  import Swal from 'sweetalert2';
  import ads from "~/components/Ads";

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
    name: "login",
    components: {
      jobSeekerBanner,
      ads
    },
    data() {
      return {
        username: "",
        password: "",
      }
    },

    methods: {

      async submitLoginForm () {
        return await this.$axios.post('/auth/admin', {
          email: this.username,
          password: this.password,
          type: 'employer',
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

            window.location.href  = "/employer/dashboard";

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
