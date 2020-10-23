<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">
        <div class="offset-lg-1 col-lg-10" v-if="loading">
          <div class="card">
            <div class="card-body box">
              <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                  <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="!loading">

        <div class="offset-lg-1 col-lg-10" v-if="employer">
          <div class="card">
            <div class="card-body box">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <h1 class="text-center">{{ employer.company_name }}</h1>


                  <span v-html="job_details.text"></span>



                  <div class="text-center" v-if="job_details.online_apply_status == 1">
                    <button @click="tenderJobApply" type="button" class="tcb-animate-e tcb-info">Apply Online</button>
                  </div>


                  <hr>

                  <h4>Company Name : {{ employer.company_name }}</h4>
                  <h4>Address : {{ employer.company_address }}</h4>

                  <h4 v-if="employer.website_url">Web url : <a :href="employer.website_url"
                                                               target="_blank">{{ employer.website_url }}</a></h4>

                </div>


              </div>
            </div>
          </div>
        </div>

        <div class="offset-lg-1 col-lg-10" v-if="!employer">
          <div class="card">
            <div class="card-body box">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                  <strong>Data Not Found</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div class="modal fade bs-example-modal-center" id="tenderJobOnlineApply" tabindex="-1" role="dialog"
         aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mt-0">Apply Job</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="applyOnlineTenderJob()">

            <div class="modal-body">

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
                <label for="expectedSalary" class="col-sm-4 col-form-label">Your Expected Salary (Monthly) <span
                  class="text-danger">*</span></label>
                <div class="col-sm-8">
                  <input type="number" v-model="form.expected_salary" class="form-control" id="expectedSalary"
                         :class="{ 'is-invalid': form.errors.has('expected_salary') }">
                  <has-error :form="form" field="expected_salary"></has-error>
                </div>
              </div>

            </div>

            <div class="modal-footer">
              <button type="button" class="tcb-animate-e tcb-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="tcb-animate-e tcb-primary">Apply</button>
            </div>

          </form>

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
  name: "index",
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      loading: true,
      id: this.$route.params.id,
      company_slug: this.$route.params.company_slug,
      slug: this.$route.params.slug,
      job_details: '',
      employer: '',
      form: new Form({
        employee_name: '',
        company_name: '',
        job_title: '',
        expected_salary: '',
        employee_id: '',
        job_id: '',
      }),
      url:this.$axios.defaults.baseURL,
    }
  },

  methods: {
    fetchTenderJobDetails() {

      var vm = this;
      var id = vm.id;
      var company_slug = vm.company_slug;
      var slug = vm.slug;

      this.$axios.get('tender-job-details/' + id + '/' + company_slug + '/' + slug).then(function (response) {

        vm.job_details = response.data;
        vm.employer = response.data.employer;
        vm.loading = false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

    tenderJobApply() {

      var vm = this;
      var user = window.$nuxt.$cookies.get('user');

      if (user) {

        var vm = this;

        if (user.type != 'employee') {

          Swal.fire('Please login as a employee')

        }else {

          vm.form.reset();

          vm.form.fill({
            job_title: vm.job_details.title,
            company_name: vm.employer.company_name,
            employee_id: user.id,
            employee_name: user.name,
            job_id: vm.job_details.id,

          })
          $('#tenderJobOnlineApply').modal('show');

        }


      } else {

        Swal.fire('Please login as a employee')

      }
    },

    applyOnlineTenderJob(){
      var token = window.$nuxt.$cookies.get('token');
      this.form.post(this.url + 'apply-tender-job?token=' + token)
        .then((response) => {

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

          $('#tenderJobOnlineApply').modal('hide');

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

  created() {
    this.fetchTenderJobDetails();
  }
}
</script>

<style scoped>
.box {
  box-shadow: 0px 1px 6px #000;
}

h1 {
  color: #ec1a3a;
}
</style>
