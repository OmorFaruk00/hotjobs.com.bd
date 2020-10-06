<template>

  <div>

    <jobSeekerReset/>

    <!-- Login -->
    <div class="login-area py-5">
      <div class="container">
        <h2>Reset Your Account</h2>
        <form @submit.prevent="submitResetForm()">
          <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
            <div class="form-group">
              <input type="text" name="email" class="form-control" v-model="email" placeholder="username">
              <small id="email_help" class="form-text text-danger"></small>
            </div>
          </div>

          <div class="login-sign-in">
            <div class="text-center">
              <button type="submit" class="btn login-btn">Reset</button>
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

import jobSeekerReset from '~/components/JobSeekerLogin/Reset';

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
  name: "index",
  components: {
    jobSeekerReset
  },
  data() {
    return {
      email: "",
    }
  },

  methods: {

    submitResetForm() {

      var vm = this;

      this.$axios.post('password-reset', {

        email: vm.email,
        type: 'employer',

      })
        .then((response) => {

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

        })
        .catch((error) => {

          vm.errors = error.response.data;

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

          if (error.response.status == 422) {
            Toast.fire({
              icon: 'warning',
              title: 'Validation Error'
            });
          }

          if (error.response.status == 401) {
            Toast.fire({
              icon: 'warning',
              title: 'Token Not Found'
            });
          }

        })

    },

  },
}
</script>

<style scoped>

</style>
