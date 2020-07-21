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

                <button type="button" class="btn btn-primary waves-effect waves-light" @click="addGeneralEmployeeModal">
                  Create Account
                </button>

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


    <!--    <SkillModal/>-->
    <div class="modal fade" id="addGeneralEmployee" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title">Add Account</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createEmployee()">
            <div class="modal-body">
              <div class="row">


                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Name</label>
                    <input v-model="form.name" type="text" name="name" placeholder="Enter name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('name') }" required>
                    <has-error :form="form" field="name"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Gender</label>
                    <select v-model="form.gender" name="gender"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('gender') }" required>
                      <option value="" selected>Select one</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <has-error :form="form" field="gender"></has-error>

                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Select your skill from following list</label>

                    <select v-model="form.skill_id" name="skill_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('skill_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in special_categories" :value="row.id">{{ row.name }}</option>
                    </select>
                    <has-error :form="form" field="skill_id"></has-error>

                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="form.email" type="text" name="email" placeholder="Enter email"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }" required>
                    <has-error :form="form" field="email"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Country</label>
                    <select v-model="form.country_id" name="country_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('country_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                        row.countries_isd_code }})
                      </option>

                    </select>

                    <has-error :form="form" field="country_id"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Mobile Number</label>
                    <input v-model="form.mobile_number" type="text" name="mobile_number"
                           placeholder="Enter mobile number"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('mobile_number') }" required>
                    <has-error :form="form" field="mobile_number"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="form.password" type="password" name="password" placeholder="Enter password"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" required>
                    <has-error :form="form" field="password"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                           placeholder="Enter password confirmation"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" required>
                    <has-error :form="form" field="password_confirmation"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group" style="margin-left: 18px">

                    <input type="checkbox" name="terms_and_conditions" class="form-check-input" id="defaultCheck1"
                           required>
                    <label class="form-check-label" for="defaultCheck1">
                      I agree to the Bdjobs.com Terms of use. <a href="">Terms & Conditions</a>
                    </label>

                    <has-error :form="form" field="terms_and_conditions"></has-error>
                  </div>

                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success">Submit</button>
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
    name: "Create",

    data() {
      return {
        countries: '',
        special_categories: '',
        form: new Form({
          id: '',
          name: '',
          gender: '',
          skill_id: '',
          email: '',
          mobile_number: '',
          password: '',
          password_confirmation: '',
          country_id:'',
          category:''
        }),
        url: this.$axios.defaults.baseURL,
      }
    },

    methods: {
      addGeneralEmployeeModal() {
        this.form.reset();
        this.fetchCountryLists(),
        this.fetchSpecialCategory(),
        $('#addGeneralEmployee').modal('show');
      },

      async fetchCountryLists() {
        return await this.$axios.get('country-lists')
          .then((response) => {

            this.countries = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchSpecialCategory() {
        return await this.$axios.get('skill-general-category')
          .then((response) => {

            this.special_categories = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      createEmployee() {

        this.form.post(this.url + 'employee')
          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Account Created successfully.Please login '
            });
            $('#addGeneralEmployee').modal('hide');
          })
          .catch((error) => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      }
    }
  }
</script>

<style scoped>
  .job-seeker-reg {
    padding-bottom: 20px !important;
  }

  .jobseeker-inner p {
    color: #fff !important;
  }
</style>

first_name: '',
last_name: '',
father_name: '',
mother_name: '',
date_of_birth: '',
mobile_no_1: '',
religion: '',
marital_status: '',
nationality: '',
national_id_no: '',
passport_number: '',
passport_issue_date: '',
country_id: '',
mobile_no_1: '',
mobile_no_2: '',
mobile_no_3: '',
email: '',
alternate_email: '',


















