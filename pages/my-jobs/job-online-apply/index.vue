<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12 col-md-12 col-sm-12">
          <div class="card">
            <div class="card-body">

              <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                <div class="card">
                  <div class="card-header">
                    Submit application online
                  </div>
                  <div class="card-body">

                    <form @submit.prevent="applyOnline()">

                      <div class="form-group row">
                        <label for="accountName" class="col-sm-4 col-form-label">Account Name</label>
                        <div class="col-sm-8">
                          <input type="text" v-model="form.employee_name" class="form-control" id="accountName"
                                 readonly>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="company" class="col-sm-4 col-form-label">Company</label>
                        <div class="col-sm-8">
                          <input type="text" v-model="form.company_name" class="form-control" id="company" readonly>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="position_Applied" class="col-sm-4 col-form-label">Position Applied</label>
                        <div class="col-sm-8">
                          <input type="text" v-model="form.job_title" class="form-control" id="position_Applied"
                                 readonly>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label for="expectedSalary" class="col-sm-4 col-form-label">Your Expected Salary (Monthly) <span class="text-danger">*</span></label>
                        <div class="col-sm-8">
                          <input type="text" v-model="form.expected_salary" class="form-control" id="expectedSalary" :class="{ 'is-invalid': form.errors.has('expected_salary') }">
                          <has-error :form="form" field="expected_salary"></has-error>
                        </div>
                      </div>

                      <div class="form-group row">
                        <label class="col-sm-4"></label>
                        <div class="col-sm-8">
                          <button type="submit" class="btn btn-secondary"><i class="bx bxs-rocket"></i> Apply</button>
                        </div>
                      </div>
                    </form>

                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>
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
  middleware: 'jobApply',
  name: "index",
  data() {
    return {
      form: new Form({
        job_title: '',
        company_name: '',
        employee_id: '',
        employee_name: '',
        job_id: '',
        expected_salary: '',
      }),
      url: this.$axios.defaults.baseURL,
    }
  },
  methods: {

    applyOnline(){
      var token = window.$nuxt.$cookies.get('token');
      this.form.post(this.url + 'apply-job?token=' + token)
        .then((response) => {

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });
          window.$nuxt.$cookies.remove('apply');
          this.$router.push(`/my-jobs/dashboard`);

        })
        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

          if (error.response.status == 422) {
            Toast.fire({
              icon: 'warning',
              title: 'Validation Problem'
            });
          }

          if (error.response.status == 401) {
            Toast.fire({
              icon: 'warning',
              title: error.response.data.error
            });
          }

          if (error.response.status == 403) {
            Toast.fire({
              icon: 'warning',
              title: 'Unauthorized access'
            });
          }

        })
    }

  },

  beforeMount() {
    var apply = window.$nuxt.$cookies.get('apply');

    this.form.fill({
      job_title: apply.job_title,
      company_name: apply.company_name,
      employee_id: apply.employee_id,
      employee_name: apply.employee_name,
      job_id: apply.job_id,
    })
  }
}
</script>

<style scoped>

</style>
