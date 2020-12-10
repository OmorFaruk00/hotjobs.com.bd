<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h1 class="text-center">Account Details</h1>

              <form @submit.prevent="updateEmployerInfo()">
                <div class="row">

                  <div class="col-12">
                    <h3>Company Details Information</h3>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Company Name</label>
                      <input v-model="form.company_name" type="text" name="company_name"
                             placeholder="Enter company name"
                             class="form-control" :class="{ 'is-invalid': form.errors.has('company_name') }" readonly>
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
                              @change="countryName()">
                        <option value="" selected>Select one</option>

                        <option v-for="row in countries" :value="row.id">{{ row.countries_name }}</option>

                      </select>

                      <has-error :form="form" field="country_id"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh'">
                    <div class="form-group">
                      <select v-model="form.district_id" name="district_id"
                              class="form-control" :class="{ 'is-invalid': form.errors.has('district_id') }"
                              v-on:change="FetchThana">
                        <option value="" selected>Select one</option>

                        <option v-for="row in districts" :value="row.id">{{ row.name }}</option>

                      </select>

                      <has-error :form="form" field="district_id"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh'">
                    <div class="form-group">
                      <select v-model="form.thana_id" name="thana_id"
                              class="form-control" :class="{ 'is-invalid': form.errors.has('thana_id') }">
                        <option value="" selected>Select one</option>

                        <option v-for="row in thanas" :value="row.id">{{ row.name }}</option>

                      </select>

                      <has-error :form="form" field="thana_id"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12" v-if="country_name != 'Bangladesh'">
                    <div class="form-group">
                      <input v-model="form.city" type="text" name="city" placeholder="Enter City"
                             class="form-control" :class="{ 'is-invalid': form.errors.has('city') }">
                      <has-error :form="form" field="city"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <textarea v-model="form.company_address" id="company_address" cols="30" rows="2"
                                name="present_village" placeholder="Enter company address"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('company_address') }"></textarea>
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
                              @change="fetchIndustryCategory()">
                        <option value="0" selected>All</option>

                        <option v-for="row in industry_categories" :value="row.id">{{ row.name }}</option>

                      </select>

                      <has-error :form="form" field="industry_type_id"></has-error>
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

                          <small v-if="errors.industry_types" class="text-danger with-errors"
                                 v-html="errors.industry_types[0]"></small>

                        </div>
                      </div>

                    </div>

                    <!--                      <div class="mt-3">Selected: <strong>{{ form.industry_types }}</strong></div>-->

                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>Business Description</label>
                      <textarea v-model="form.business_description" id="business_description" cols="30" rows="4"
                                name="present_village" placeholder="Enter Business Description"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('business_description') }"></textarea>
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
                    <h3>Company Logo</h3>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                    <div class="form-group">

                      <img :src="getPhoto()" :alt="form.company_name" width="250px">

                      <br>

                      <input type="file" class="form-control mt-2" name="profile_photo" ref="profile_photo"
                             id="profile_photo" v-on:change="handleProfilePicUpload()" accept="images/*">
                    </div>
                  </div>


                  <div class="col-12">
                    <h3>Contact</h3>
                  </div>

                  <div class="col-lg-8 col-md-8 col-sm-12">

                    <div class="row">
                      <div class="col-lg-6 col-md-6 col-sm-12">
                        <div class="form-group">
                          <label>Contact Person's Name</label>

                          <b-form-select
                            v-model="form.contact_people_id"
                            :options="contact_persons"
                            class="mb-3"
                            value-field="id"
                            text-field="contact_person_name"
                            disabled-field="notEnabled"
                            @change="fetchContactPeopleDetails"
                          ></b-form-select>

                          <has-error :form="form" field="contact_person_name"></has-error>
                        </div>
                      </div>

                      <div class="col-lg-4 col-md-4 col-sm-12">
                        <div class="form-group">
                          <label for="" class="d-none">xd</label> <br>
                          <button class="btn btn-info" type="button" @click="editContactPersonDetails">Edit Contact Personal Details</button>
                        </div>

                      </div>

                    </div>

                  </div>


                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Contact Person's Designation</label>
                      <input v-model="contact_person_designation" type="text" name="contact_person_designation"
                             placeholder="Enter contact person designation"
                             class="form-control" readonly>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Contact Person's Email</label>
                      <input v-model="contact_person_email" type="text" name="contact_person_email"
                             placeholder="Enter contact person mobile"
                             class="form-control" readonly>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Contact Person's Mobile</label>
                      <input v-model="contact_person_mobile" type="text" name="contact_person_mobile"
                             placeholder="Enter contact person mobile"
                             class="form-control" readonly>
                    </div>
                  </div>

                  <div class="col-12">
                    <h3>Billing Address</h3>
                  </div>

                  <div class="col-12">
                    <div class="border-bottom"></div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Billing Address</label>

                      <input v-model="form.billing_address" type="text" name="billing_address"
                             placeholder="Enter contact person designation"
                             class="form-control"
                             :class="{ 'is-invalid': form.errors.has('billing_address') }"
                      >
                      <has-error :form="form" field="billing_address"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12">
                    <div class="form-group">
                      <label>Billing Contact Number</label>

                      <input v-model="form.billing_contact_number" type="text" name="billing_contact_number"
                             placeholder="Enter billing contact number"
                             class="form-control"
                             :class="{ 'is-invalid': form.errors.has('billing_contact_number') }"
                      >
                      <has-error :form="form" field="billing_contact_number"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>Billing Contact's Email</label>

                      <input v-model="form.billing_contact_email" type="email" name="billing_contact_email"
                             placeholder="Enter billing contact email"
                             class="form-control"
                             :class="{ 'is-invalid': form.errors.has('billing_contact_email') }"
                      >
                      <has-error :form="form" field="billing_contact_email"></has-error>
                    </div>
                  </div>

                  <div class="col-12 text-right">
                    <button type="submit" :disabled="form.busy" class="btn btn-success">Submit</button>
                  </div>

                </div>
              </form>

            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="openContactPersonDetailsModal" tabindex="-1" role="dialog"
           aria-labelledby="openContactPersonDetailsModal"
           aria-hidden="true">

        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">

              <h5 class="modal-title">Contact Person Details</h5>

              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

              <div class="modal-body">
                <div class="row">

                  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                    <div class="form-group">
                      <label>Contact Person Name</label>
                      <input v-model="contact_person_name" type="text" name="contact_person_name"
                             class="form-control">

                      <small v-if="errors.contact_person_name" class="text-danger with-errors"
                             v-html="errors.contact_person_name[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3">
                    <div class="form-group">
                      <label>Contact Person Designation</label>
                      <input v-model="contact_person_designation" type="text" name="contact_person_designation"
                             class="form-control">
                      <small v-if="errors.contact_person_designation" class="text-danger with-errors"
                             v-html="errors.contact_person_designation[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3" v-if="form.email_verify_status != '1'">
                    <div class="form-group">
                      <label>Contact Person Email</label>
                      <input v-model="contact_person_email" type="email" name="contact_person_email"
                             class="form-control">
                      <small v-if="errors.contact_person_email" class="text-danger with-errors"
                             v-html="errors.contact_person_email[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3" v-if="form.mobile_verify_status != '1'">
                    <div class="form-group">
                      <label>Contact Person Mobile</label>
                      <input v-model="contact_person_mobile" type="email" name="contact_person_mobile"
                             class="form-control">
                      <small v-if="errors.contact_person_mobile" class="text-danger with-errors"
                             v-html="errors.contact_person_mobile[0]"></small>
                    </div>
                  </div>


                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                <button type="submit" class="btn btn-success" @click="updateEmployerContactPersonDetails">Submit</button>
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
    middleware: 'employerAuthenticated',
    name: "edit-profile",
    components: {
      employerNavbar,
      employerSubNavbar,
    },
    data() {
      return {
        url: this.$axios.defaults.baseURL,
        countries: '',
        districts: '',
        thanas: '',
        industry_categories: '',
        industry_type_lists: '',
        country_name: '',
        errors: '',
        form: new Form({
          id: '',
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
          industry_types: [],
          business_description: '',
          license_no: '',
          rl_no: '',
          website_url: '',
          contact_person_name: '',
          contact_person_email: '',
          contact_person_designation: '',
          contact_person_mobile: '',
          company_logo: '',
          contact_people_id: '',
          billing_address: '',
          billing_contact_number: '',
          billing_contact_email: '',
          email_verify_status: '',
          mobile_verify_status: '',
        }),
        contact_persons: '',
        contact_person_designation: '',
        contact_person_email: '',
        contact_person_mobile: '',
        contact_person_name:'',

      }
    },

    methods: {

      pricingPolicy() {

        alert('working');
        return false;

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

      fetchContactPeopleDetails() {
        var vm = this;
        var token = window.$nuxt.$cookies.get('token');
        var contact_people_id = vm.form.contact_people_id;
        this.$axios.get('fetch-contact-people/' + contact_people_id + '?token=' + token).then(function (response) {

          vm.contact_person_designation = response.data.contact_person_designation;
          vm.contact_person_email = response.data.contact_person_email;
          vm.contact_person_mobile = response.data.contact_person_mobile;
          vm.contact_person_name = response.data.contact_person_name;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      findEmployer() {

        var vm = this;
        var token = window.$nuxt.$cookies.get('token');
        this.$axios.get('find-employer/' + token + '?token=' + token).then(function (response) {

          var employee = response.data;

          vm.form.id = employee.id;
          vm.form.company_name = employee.company_name;
          vm.form.company_name_bangla = employee.company_name_bangla;
          vm.form.country_id = employee.country_id;
          vm.form.district_id = employee.district_id;
          vm.form.thana_id = employee.thana_id;
          vm.form.city = employee.city;
          vm.form.company_address = employee.company_address;
          vm.form.company_address_bangla = employee.company_address_bangla;
          vm.form.industry_category_id = employee.industry_category_id;
          vm.form.industry_type_keyword = employee.industry_type_keyword;
          // vm.form.industry_types = employee.industry_types;
          vm.form.business_description = employee.business_description;
          vm.form.license_no = employee.license_no;
          vm.form.rl_no = employee.rl_no;
          vm.form.website_url = employee.website_url;
          vm.form.company_logo = employee.company_logo;
          vm.form.contact_people_id = employee.contact_people_id;
          vm.form.email_verify_status = employee.email_verify_status;
          vm.form.mobile_verify_status = employee.mobile_verify_status;

          vm.contact_persons = employee.company_contact_peoples;

          vm.contact_person_designation = employee.contact_people.contact_person_designation;
          vm.contact_person_email = employee.contact_people.contact_person_email;
          vm.contact_person_mobile = employee.contact_people.contact_person_mobile;

          var billing_information  = employee.billing_information;

          if (billing_information){

              vm.form.billing_address = billing_information.billing_address;
              vm.form.billing_contact_number = billing_information.billing_contact_number;
              vm.form.billing_contact_email = billing_information.billing_contact_email;

          }

          const employer_industry_types = employee.employer_industry_types;

          for (const value of employer_industry_types) {
            vm.form.industry_types.push(value.industry_types_id);
          };


        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      // company_logo
      async handleProfilePicUpload() {

        var token = window.$nuxt.$cookies.get('token');
        let formData = new FormData();
        formData.append('image_url', this.$refs.profile_photo.files[0]);

        return await this.$axios.post('company-logo?token=' + token, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then((response) => {
            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            });

            this.$emit('afterLogoCreate');
          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

            if (error.response.status == 422) {
              Toast.fire({
                icon: 'warning',
                title: 'The image url must be an image.'
              });
            }

          });
      },

      getPhoto() {
        let image_url = this.url + this.form.company_logo;
        return image_url;
      },
      // company_logo

      findImageAndContact() {

        var vm = this;
        var token = window.$nuxt.$cookies.get('token');
        this.$axios.get('find-employer/' + token + '?token=' + token).then(function (response) {

          var employee = response.data;

          vm.contact_persons = employee.company_contact_peoples;
          vm.form.company_logo = employee.company_logo;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      updateEmployerInfo() {
        var vm = this;
        var token = window.$nuxt.$cookies.get('token');
        this.form.post(this.url + 'employer-update' + '?token=' + token)
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            });

            vm.$emit('afterUpdate');

            vm.errors=[];

            vm.$router.push('dashboard');

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

      // old start
      oldCountryName() {

        var vm = this;
        var user = window.$nuxt.$cookies.get('user');
        var country_id = user.country_id;

        this.$axios.get('country-name/' + country_id).then(function (response) {

          vm.country_name = response.data.countries_name;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      oldFetchThana() {

        var vm = this;
        var user = window.$nuxt.$cookies.get('user');
        var district_id = user.district_id;

        this.$axios.get('fetch-thana-lists/' + district_id).then(function (response) {

          vm.thanas = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      oldFetchIndustryCategory() {

        var vm = this;
        var user = window.$nuxt.$cookies.get('user');
        vm.form.industry_types = [];
        var industry_category_id = user.industry_category_id;

        this.$axios.get('fetch-industry-type-lists/' + industry_category_id).then(function (response) {

          vm.industry_type_lists = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      editContactPersonDetails(){
        var vm = this;

        if (!vm.form.contact_people_id){
          Toast.fire({
            icon: 'warning',
            title: 'Please select contact people'
          });

        }else {
          this.fetchContactPeopleDetails();
          $('#openContactPersonDetailsModal').modal('show');
        }

      },

      updateEmployerContactPersonDetails(){

        var vm = this;
        var token = window.$nuxt.$cookies.get('token');

        this.$axios.post('employer-contact-person' + '?token=' + token, {

          contact_people_id: vm.form.contact_people_id,
          contact_person_name: vm.contact_person_name,
          contact_person_designation: vm.contact_person_designation,
          contact_person_email: vm.contact_person_email,
          contact_person_mobile: vm.contact_person_mobile,

        })
          .then((response) => {


            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            });

            vm.$emit('afterUpdate');
            $('#openContactPersonDetailsModal').modal('hide');

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
      }

    },

    beforeMount() {

      // this.findEmployer();
      this.fetchCountryLists();
      this.fetchDistrictLists();
      this.fetchIndustryCategoryLists();
      this.oldCountryName();
      this.oldFetchThana();
      this.oldFetchIndustryCategory();


    },

    created() {
      this.findEmployer();

      this.$on('afterLogoCreate', () => {
        this.findImageAndContact();
      });

      this.$on('afterContactPeople', () => {
        this.findImageAndContact();
      });

      this.$on('afterUpdate', () => {
        this.findEmployer();
      });

    }
  }
</script>

<style scoped>
  h3 {
    color: #EC1A3A;
  }

  .type-box {
    max-height: 225px;
    overflow-y: scroll;
    border: 1px solid #ddd;
  }

  .mt-8 {
    margin-top: 8px;
  }
</style>
