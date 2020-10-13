<template>

  <div>

    <jobSeekerReset/>

    <!-- Login -->
    <div class="login-area py-5">
      <div class="container">
        <h2>Password change</h2>
        <form @submit.prevent="submitNewPassword()">
          <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">

            <div class="form-group">
              <label>Password</label>
              <input v-model="form.password" type="password" name="password" placeholder="Enter password"
                     class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">

              <small v-if="errors.password" class="text-danger with-errors"
                     v-html="errors.password[0]"></small>
            </div>


          </div>

          <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">

            <div class="form-group">
              <label>Password Confirmation</label>
              <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                     placeholder="Enter password confirmation"
                     class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }">
              <small v-if="errors.password_confirmation" class="text-danger with-errors"
                     v-html="errors.password_confirmation[0]"></small>


            </div>

          </div>

          <div class="login-sign-in">
            <div class="text-center">
              <button type="submit" class="btn login-btn">Submit</button>
            </div>
          </div>

        </form>

      </div>
    </div>
    <!-- End Login -->


  </div>


</template>

<script>

import jobSeekerReset from '~/components/JobSeekerLogin/Reset';
import Vue from 'vue'
import Swal from 'sweetalert2'
import {Form, HasError, AlertError} from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

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
      form: new Form({
        token: this.$route.params.token,
        password: '',
        password_confirmation: '',
      }),
      errors: '',
    }
  },

  methods: {

    submitNewPassword() {

      var vm = this;

      this.$axios.post('password-update', {

        token: vm.form.token,
        password: vm.form.password,
        password_confirmation: vm.form.password_confirmation,

      })
        .then((response) => {

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

          vm.form.reset();

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
