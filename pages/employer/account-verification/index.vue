<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">

              <div class="row">

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <label for="">Email Verification <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <input v-model="contact_person_email" type="email" name="contact_person_email"
                           placeholder="Enter contact person email"
                           class="form-control"
                           required readonly>

                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button"
                              :disabled="email_frontend_verify_status=='verified' || email_verify_status == '1'"
                              @click="sendEmailOtp">

                        <span v-if="email_frontend_verify_status == 'pending'">Re send</span>
                        <span
                          v-if="email_frontend_verify_status == 'verified' || email_verify_status == '1'">Verified <i class="bx bx-check-double"></i></span>
                        <span v-if="email_frontend_verify_status == '' && email_verify_status != '1'">Send OTP</span>
                      </button>
                    </div>


                    <div class="input-group mt-3" v-if="email_frontend_verify_status=='pending'">
                      <input type="number" v-model="email_otp" name="email_otp" class="form-control"
                             placeholder="Enter email otp">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="verifyEmailOtp">Verify
                        </button>
                      </div>
                    </div>


                  </div>

                </div>


                <div class="col-lg-4 col-md-4 col-sm-12">
                  <label for="">Mobile Verification <span class="text-danger">*</span></label>
                  <div class="input-group">
                    <input v-model="contact_person_mobile" type="email" name="contact_person_mobile"
                           placeholder="Enter contact person mobile"
                           class="form-control"
                           required readonly>

                    <div class="input-group-append">
                      <button class="btn btn-outline-secondary" type="button"
                              :disabled="mobile_frontend_verify_status=='verified' || mobile_verify_status == '1'"
                              @click="sendMobileOtp">

                        <span v-if="mobile_frontend_verify_status == 'pending'">Re send</span>
                        <span
                          v-if="mobile_frontend_verify_status == 'verified' || mobile_verify_status == '1'">Verified <i class="bx bx-check-double"></i></span>
                        <span v-if="mobile_frontend_verify_status == '' && mobile_verify_status != '1'">Send OTP</span>
                      </button>
                    </div>

                    <div class="input-group mt-3" v-if="mobile_frontend_verify_status=='pending'">
                      <input type="number" v-model="mobile_otp" name="mobile_otp" class="form-control"
                             placeholder="Enter mobile otp">
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" @click="verifyMobileOtp">Verify
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <label for="">Trade License / Tin / Vat / Bank Statement <span class="text-danger">*</span></label>

                  <form action="">
                    <div class="input-group">
                      <input type="file" name="document)url"
                             class="form-control"
                      >

                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="submit">

                          <span>Submit</span>
                        </button>
                      </div>
                    </div>
                  </form>

                </div>

                <div class="col-12 mt-5">
                  <ul style="list-style: none;">
                    <li class="text-danger">*** Trade License / Tin / Vat / Bank Statement file must be .pdf extension
                      and max file size 1024KB.
                    </li>
                    <li class="text-danger">*** If you didn't find your email and phone number or modified before
                      verification ,please update your
                      <nuxt-link to="/employer/edit-profile">profile</nuxt-link>
                      and try again .
                    </li>
                  </ul>
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
import employerNavbar from '~/components/Employer/Navbar'
import employerSubNavbar from '~/components/Employer/SubNavbar'
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
  middleware: 'employerAuthenticated',
  name: "index",
  components: {
    employerNavbar,
    employerSubNavbar,
  },
  data() {
    return {
      url: this.$axios.defaults.baseURL,
      email_frontend_verify_status: '',
      mobile_frontend_verify_status: '',
      contact_people_id: '',
      contact_person_email: '',
      contact_person_mobile: '',
      email_otp: '',
      mobile_otp: '',
      document_url: '',
      document_verify_status: '',
      email_verify_status: '',
      mobile_verify_status: '',
    }
  },
  methods: {

    findEmployer() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      this.$axios.get('find-employer/' + token + '?token=' + token).then(function (response) {

        var employee = response.data;

        vm.contact_people_id = employee.contact_people_id;
        vm.contact_person_email = employee.contact_people.contact_person_email;
        vm.contact_person_mobile = employee.contact_people.contact_person_mobile;
        vm.document_url = employee.document_url;
        vm.document_verify_status = employee.document_verify_status;
        vm.email_verify_status = employee.email_verify_status;
        vm.mobile_verify_status = employee.mobile_verify_status;


      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

    sendEmailOtp() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      if (!vm.contact_person_email) {
        Toast.fire({
          icon: 'info',
          title: 'Please enter email'
        });
      } else {

        this.$axios.post('verification/employer-email-otp' + '/?token=' + token, {

          contact_person_email: vm.contact_person_email,

        })
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message,
            });

            vm.email_frontend_verify_status = 'pending';

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
                title: error.response.data.error
              });
            }

          })
      }
    },

    verifyEmailOtp() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      if (!vm.email_otp) {
        Toast.fire({
          icon: 'info',
          title: 'Please enter email otp'
        });
      } else {

        this.$axios.post('verification/employer-email-otp-verify' + '/?token=' + token, {

          email_otp: vm.email_otp,
          contact_person_email: vm.contact_person_email,

        })
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message,
            })

            vm.email_frontend_verify_status = 'verified';
            vm.errors = '';
            this.$emit('verify');

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
                title: error.response.data.error
              });
            }

          })
      }
    },

    sendMobileOtp() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');

      vm.errors = '';
      if (!vm.contact_person_mobile) {
        Toast.fire({
          icon: 'info',
          title: 'Please enter mobile number'
        });
      } else {

        this.$axios.post('verification/employer-mobile-otp' + '/?token=' + token, {

          contact_person_mobile: vm.contact_person_mobile,

        })
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message,
            });

            vm.mobile_frontend_verify_status = 'pending';

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
                title: error.response.data.error
              });
            }

          })
      }
    },

    verifyMobileOtp() {
      var vm = this;
      var token = window.$nuxt.$cookies.get('token');

      if (!vm.mobile_otp) {
        Toast.fire({
          icon: 'info',
          title: 'Please enter mobile otp'
        });
      } else {

        this.$axios.post('verification/employer-mobile-otp-verify' + '/?token=' + token, {

          mobile_otp: vm.mobile_otp,
          contact_person_mobile: vm.contact_person_mobile,

        })
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message,
            })

            vm.mobile_frontend_verify_status = 'verified';
            vm.errors = '';
            this.$emit('verify');

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
                title: error.response.data.error
              });
            }

          })
      }
    },

  },

  created() {
    this.findEmployer();

    this.$on('verify', () => {
      this.findEmployer();
    });
  },
}
</script>

<style scoped>

</style>
