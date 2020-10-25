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

<!--                <img src="../../static/images/employee.jpg" alt="Employee">-->
                <i class="bx bx-user-plus"></i>
              </div>

              <div class="jobseeker-inner">
                <h3>Employee</h3>
                <p>Create your Employee account for apply job</p>

                <button type="button" class="tcb-animate-e tcb-info" @click="addEmployeeModal">
                  Create Account
                </button>

              </div>

            </div>
          </div>

          <div class="col-sm-6 col-lg-6">
            <div class="jobseeker-item">
              <div class="jobseeker-icon">
<!--                <img src="../../static/images/box/2.png" alt="Job">-->
                <i class="bx bx-user-pin"></i>
              </div>
              <div class="jobseeker-inner">
                <h3>Employer</h3>
                <p>Create your Employer account for post job</p>
                <button class="tcb-animate-e tcb-info" type="button" @click="addEmployerModal">Create Account</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>


    <!--    <addEmployee/>-->
    <div class="modal fade" id="addEmployee" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
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
                    <input v-model="employee.name" type="text" name="name" placeholder="Enter name"
                           class="form-control" :class="{ 'is-invalid': employee.errors.has('name') }" required>
                    <has-error :form="employee" field="name"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Gender</label>
                    <select v-model="employee.gender" name="gender"
                            class="form-control" :class="{ 'is-invalid': employee.errors.has('gender') }" required>
                      <option value="" selected>Select one</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <has-error :form="employee" field="gender"></has-error>

                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Select your skill from following list</label>

                    <select v-model="employee.skill_id" name="skill_id"
                            class="form-control" :class="{ 'is-invalid': employee.errors.has('skill_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in all_categories" :value="row.id">{{ row.name }}</option>
                    </select>
                    <has-error :form="employee" field="skill_id"></has-error>

                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="employee.email" type="text" name="email" placeholder="Enter email"
                           class="form-control" :class="{ 'is-invalid': employee.errors.has('email') }" required>
                    <has-error :form="employee" field="email"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Country</label>
                    <select v-model="employee.country_id" name="country_id"
                            class="form-control" :class="{ 'is-invalid': employee.errors.has('country_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                          row.countries_isd_code
                        }})
                      </option>

                    </select>

                    <has-error :form="employee" field="country_id"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Mobile Number</label>
                    <input v-model="employee.mobile_number" type="text" name="mobile_number"
                           placeholder="Enter mobile number"
                           class="form-control" :class="{ 'is-invalid': employee.errors.has('mobile_number') }"
                           required>
                    <has-error :form="employee" field="mobile_number"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="employee.password" type="password" name="password" placeholder="Enter password"
                           class="form-control" :class="{ 'is-invalid': employee.errors.has('password') }" required>
                    <has-error :form="employee" field="password"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input v-model="employee.password_confirmation" type="password" name="password_confirmation"
                           placeholder="Enter password confirmation"
                           class="form-control" :class="{ 'is-invalid': employee.errors.has('password_confirmation') }"
                           required>
                    <has-error :form="employee" field="password_confirmation"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group" style="margin-left: 18px">

                    <input type="checkbox" name="terms_and_conditions" class="form-check-input" id="defaultCheck2"
                           required>
                    <label class="form-check-label" for="defaultCheck2">
                      I agree to the Hotjobs.com Terms of use. <a href="/terms-and-conditions" target="_blank">Terms &
                      Conditions</a>
                    </label>

                    <has-error :form="employee" field="terms_and_conditions"></has-error>
                  </div>

                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-success" :disabled="employee.busy">Submit</button>
            </div>
          </form>

        </div>
      </div>

    </div>

    <!--    addEmployerSecondOption-->
    <div class="modal fade" id="addEmployerSecondOption" tabindex="-1" role="dialog"
         aria-labelledby="addEmployerSecondOption"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title">Add Employer</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createEmployer()">
            <div class="modal-body">
              <div class="row">

                <div class="col-12">
                  <h3>Account Information</h3>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="form-group">
                    <label>Username</label>
                    <input v-model="form.username" type="text" name="username" placeholder="Enter username"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('username') }" required>
                    <has-error :form="form" field="username"></has-error>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="form-group">
                    <label>Password</label>
                    <input v-model="form.password" type="password" name="password" placeholder="Enter password"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password') }" required>
                    <has-error :form="form" field="password"></has-error>
                  </div>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12">
                  <div class="form-group">
                    <label>Password Confirmation</label>
                    <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                           placeholder="Enter password confirmation"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" required>
                    <has-error :form="form" field="password_confirmation"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <div class="border-bottom"></div>
                </div>

                <div class="col-12">
                  <h3>Company Details Information</h3>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Company Name</label>
                    <input v-model="form.company_name" type="text" name="company_name"
                           placeholder="Enter company name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('company_name') }" required>
                    <has-error :form="form" field="company_name"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>কোম্পানির নাম (বাংলায়)</label>
                    <input v-model="form.company_name_bangla" type="text" name="company_name_bangla"
                           placeholder="কোম্পানির নাম বাংলায় লিখুন"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('company_name_bangla') }"
                    >
                    <has-error :form="form" field="company_name_bangla"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Company Address</label>
                    <select v-model="form.country_id" name="country_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('country_id') }"
                            @change="countryName()" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }}</option>

                    </select>

                    <has-error :form="form" field="country_id"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh' ">
                  <div class="form-group">
                    <select v-model="form.district_id" name="district_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('district_id') }"
                            v-on:change="FetchThana" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in districts" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="form" field="district_id"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh' ">
                  <div class="form-group">
                    <select v-model="form.thana_id" name="thana_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('thana_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in thanas" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="form" field="thana_id"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12" v-if="country_name != 'Bangladesh' ">
                  <div class="form-group">
                    <input v-model="form.city" type="text" name="city" placeholder="Enter City"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('city') }" required>
                    <has-error :form="form" field="city"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                      <textarea v-model="form.company_address" id="company_address" cols="30" rows="2"
                                name="present_village" placeholder="Enter company address"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('company_address') }" required></textarea>
                    <has-error :form="form" field="company_address"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                      <textarea v-model="form.company_address_bangla" id="company_address_bangla" cols="30" rows="2"
                                name="present_village" placeholder="কোম্পানীর ঠিকানা বাংলায় লিখুন "
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('company_address_bangla') }"></textarea>
                    <has-error :form="form" field="company_address_bangla"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Industry Type</label>
                    <select v-model="form.industry_category_id" name="industry_category_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('industry_category_id') }"
                            @change="fetchIndustryCategory()" required>
                      <option value="0" selected>All</option>

                      <option v-for="row in industry_categories" :value="row.id">{{ row.name }}</option>

                    </select>

                    <small v-if="errors.industry_category_id" class="text-danger with-errors"
                           v-html="errors.industry_category_id[0]"></small>
                  </div>
                </div>


                <div class="col-lg-6 col-md-6 col-sm-12" v-if="form.industry_category_id">
                  <div class="form-group mt-8">
                    <label></label>
                    <input v-model="form.industry_type_keyword" type="industry_type_keyword"
                           name="industry_type_keyword" placeholder="Search Industry Type"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('industry_type_keyword') }"
                           @blur="filterIndustryType()">
                    <has-error :form="form" field="industry_type_keyword"></has-error>
                  </div>
                </div>

                <div class="col-12" v-if="form.industry_category_id">
                  <div class="card type-box">
                    <div class="card-body">
                      <div class="row">

                        <div class="col-lg-12 col-md-12 col-sm-12">

                          <b-form-checkbox-group
                            v-model="form.industry_types"
                            :options="industry_type_lists"
                            class="mb-3"
                            value-field="id"
                            text-field="name"
                            disabled-field="notEnabled"
                          ></b-form-checkbox-group>

                        </div>

                      </div>
                    </div>

                  </div>

                  <small v-if="errors.industry_types" class="text-danger with-errors"
                         v-html="errors.industry_types[0]"></small>

                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Business Description</label>
                    <textarea v-model="form.business_description" id="business_description" cols="30" rows="4"
                              name="present_village" placeholder="Enter Business Description"
                              class="form-control"
                              :class="{ 'is-invalid': form.errors.has('business_description') }" required></textarea>
                    <has-error :form="form" field="business_description"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Business / Trade License No</label>
                    <input v-model="form.license_no" type="text" name="Business / Trade License No"
                           placeholder="Enter license no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('license_no') }">
                    <has-error :form="form" field="license_no"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <label for="">RL No (Only for Recruiting Agency)</label>
                  <div class="input-group mb-2 mr-sm-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text">RL -</div>
                    </div>
                    <input type="number" v-model="form.rl_no" name="rl_no" placeholder="Enter license no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('rl_no') }">
                    <has-error :form="form" field="rl_no"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Website URL</label>
                    <input v-model="form.website_url" type="text" name="website_url"
                           placeholder="Enter website url"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('website_url') }">
                    <has-error :form="form" field="website_url"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <div class="border-bottom"></div>
                </div>

                <div class="col-12">
                  <h3>Contact</h3>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Contact Person's Name</label>
                    <input v-model="form.contact_person_name" type="text" name="contact_person_name"
                           placeholder="Enter contact person name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_name') }" required>
                    <has-error :form="form" field="contact_person_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Contact Person's Email</label>
                    <input v-model="form.contact_person_email" type="email" name="contact_person_email"
                           placeholder="Enter contact person email"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_email') }" required>
                    <has-error :form="form" field="contact_person_email"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Contact Person's Designation</label>
                    <input v-model="form.contact_person_designation" type="text" name="contact_person_designation"
                           placeholder="Enter contact person designation"
                           class="form-control"
                           :class="{ 'is-invalid': form.errors.has('contact_person_designation') }">
                    <has-error :form="form" field="contact_person_designation"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Contact Person's Mobile</label>
                    <input v-model="form.contact_person_mobile" type="text" name="contact_person_mobile"
                           placeholder="Enter contact person mobile"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_mobile') }">
                    <has-error :form="form" field="contact_person_mobile"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <b-form-checkbox
                    id="pricing_policy2"
                    v-model="form.pricing_policy"
                    name="pricing_policy"
                    value="1"
                    unchecked-value="0"
                  >
                    I Have Read <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a> And Accepted
                    It
                  </b-form-checkbox>
                </div>


              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-if="form.pricing_policy == 1" :disabled="form.busy" class="btn btn-success">
                Submit
              </button>
              <button type="submit" v-else class="btn btn-success" :disabled="form.busy" style="cursor: not-allowed" disabled>Submit</button>
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
      all_categories: '',
      districts: '',
      thanas: '',
      industry_categories: '',
      industry_type_lists: '',
      country_name: '',
      employee: new Form({
        id: '',
        name: '',
        gender: '',
        skill_id: '',
        email: '',
        mobile_number: '',
        password: '',
        password_confirmation: '',
        country_id: '',
        category: ''
      }),

      form: new Form({
        id: '',
        username: '',
        password: '',
        password_confirmation: '',
        company_name: '',
        company_name_bangla: '',
        country_id: '',
        district_id: '',
        thana_id: '',
        city: '',
        company_address: '',
        company_address_bangla: '',
        industry_category_id: '',
        industry_type_keyword: '',
        industry_types: '',
        business_description: '',
        license_no: '',
        rl_no: '',
        website_url: '',
        contact_person_name: '',
        contact_person_email: '',
        contact_person_designation: '',
        contact_person_mobile: '',
        pricing_policy: '',

      }),

      errors:'',

      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {
    addEmployeeModal() {
      this.countries = '';
      this.all_categories = '';
      this.employee.reset();
      this.fetchCountryLists();
      this.fetchAllCategory();
      $('#addEmployee').modal('show');
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

    async fetchAllCategory() {
      return await this.$axios.get('skill-all-category')
        .then((response) => {

          this.all_categories = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    async fetchIndustryCategoryLists() {
      return await this.$axios.get('industry-category-lists')
        .then((response) => {

          this.industry_categories = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    async fetchIndustryTypeLists() {
      return await this.$axios.get('industry-type-lists')
        .then((response) => {

          this.industry_type_lists = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    async fetchDistrictLists() {
      return await this.$axios.get('district-lists')
        .then((response) => {

          this.districts = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    FetchThana() {

      var vm = this;

      var district_id = this.form.district_id;

      this.$axios.get('fetch-thana-lists/' + district_id).then(function (response) {

        vm.thanas = response.data;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

    countryName() {

      var vm = this;
      var country_id = vm.form.country_id;

      this.$axios.get('country-name/' + country_id).then(function (response) {

        vm.country_name = response.data.countries_name;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

    fetchIndustryCategory() {

      var vm = this;
      vm.form.industry_types = [];
      var industry_category_id = vm.form.industry_category_id;

      this.$axios.get('fetch-industry-type-lists/' + industry_category_id).then(function (response) {

        vm.industry_type_lists = response.data;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

    filterIndustryType() {

      var vm = this;
      var industry_category_id = vm.form.industry_category_id;


      var industry_type_keyword = vm.form.industry_type_keyword;

      this.$axios.get('fetch-keyword-industry-type-lists/' + industry_category_id + '/' + industry_type_keyword).then(function (response) {

        vm.industry_type_lists = response.data;

        // console.log(response.data);


      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });


    },

    createEmployee() {
      var vm = this
      this.employee.post(this.url + 'employee')

        .then(() => {
          Toast.fire({
            icon: 'success',
            title: 'Account Created successfully.Please login '
          });

          $('#addEmployee').modal('hide');
          vm.$router.push('/my-jobs/login');

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

        })
    },

    addEmployerModal() {

      this.errors = '';
      this.countries = '';
      this.all_categories = '';
      this.districts = '';
      this.thanas = '';
      this.industry_categories = '';
      this.industry_type_lists = '';
      this.country_name = '';
      this.form.reset();
      this.$emit('FetchData');
      $('#addEmployerSecondOption').modal('show');

    },

    createEmployer() {
      var vm = this;
      this.form.post(this.url + 'employer')
        .then(() => {

          Toast.fire({
            icon: 'success',
            title: 'Account Created successfully.Please login with valid email and password'
          });
          $('#addEmployer').modal('hide');
          vm.$router.push('/employer/login')

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
              title: 'Validation Problem'
            });
          }

        })
    },
  },

  created() {

    this.$on('FetchData', () => {
      this.fetchCountryLists();
      this.fetchDistrictLists();
      this.fetchIndustryCategoryLists();
    });

  },
}
</script>

<style scoped>
.job-seeker-reg {
  padding-bottom: 20px !important;
}

.jobseeker-inner p {
  color: #fff !important;
}

.type-box {
  max-height: 225px;
  overflow-y: scroll;
  border: 1px solid #ddd;
}

.jobseeker-icon img{
  width: 60px;
  height: 80px;
}
.jobseeker-item .jobseeker-icon i{
  font-size: 60px;
  top: 0px;
}
</style>
