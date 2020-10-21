<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">

              <form @submit.prevent="createTutorRequest()">
                <div class="row">

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Tuition Type <span class="text-danger">*</span></label>

                      <b-form-select
                        v-model="form.tuition_type_id"
                        :options="tuition_types"
                        class="mb-3"
                        value-field="id"
                        text-field="title"
                        disabled-field="notEnabled"
                      ></b-form-select>

                      <small v-if="errors.tuition_type_id" class="text-danger with-errors"
                             v-html="errors.tuition_type_id[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>District <span class="text-danger">*</span></label>

                      <b-form-select
                        v-model="form.district_id"
                        :options="district_lists"
                        class="mb-3"
                        value-field="id"
                        text-field="name"
                        disabled-field="notEnabled"
                        @change="fetchThana"
                      ></b-form-select>

                      <small v-if="errors.district_id" class="text-danger with-errors"
                             v-html="errors.district_id[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Thana / Upazilla <span class="text-danger">*</span></label>

                      <b-form-select
                        v-model="form.thana_id"
                        :options="thanas"
                        class="mb-3"
                        value-field="id"
                        text-field="name"
                        disabled-field="notEnabled"
                        @change="fetchUnion"
                      ></b-form-select>

                      <small v-if="errors.thana_id" class="text-danger with-errors"
                             v-html="errors.thana_id[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Union</label>

                      <b-form-select
                        v-model="form.union_id"
                        :options="unions"
                        class="mb-3"
                        value-field="id"
                        text-field="name"
                        disabled-field="notEnabled"
                      ></b-form-select>

                      <small v-if="errors.union_id" class="text-danger with-errors"
                             v-html="errors.union_id[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Category <span class="text-danger">*</span></label>

                      <b-form-select
                        v-model="form.tuition_category_id"
                        :options="tuition_categories"
                        class="mb-3"
                        value-field="id"
                        text-field="title"
                        disabled-field="notEnabled"
                        @change="fetchCurriculumAndClass"
                      ></b-form-select>

                      <small v-if="errors.tuition_category_id" class="text-danger with-errors"
                             v-html="errors.tuition_category_id[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Curriculum</label>

                      <b-form-select
                        v-model="form.tuition_curriculum_id"
                        :options="curriculums"
                        class="mb-3"
                        value-field="id"
                        text-field="title"
                        disabled-field="notEnabled"
                      ></b-form-select>

                      <small v-if="errors.tuition_curriculum_id" class="text-danger with-errors"
                             v-html="errors.tuition_curriculum_id[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Class <span class="text-danger">*</span></label>

                      <b-form-select
                        v-model="form.tuition_class_id"
                        :options="tuition_classes"
                        class="mb-3"
                        value-field="id"
                        text-field="title"
                        disabled-field="notEnabled"
                        @change="fetchSubject"
                      ></b-form-select>

                      <small v-if="errors.tuition_class_id" class="text-danger with-errors"
                             v-html="errors.tuition_class_id[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Subjects <span class="text-danger">*</span></label>

                      <select v-model="form.subject_id" name="subject_id" id="subject_id" class="form-control" multiple
                              size="5">
                        <option v-for="row in subjects" :value="row.subject_id">{{ row.subject.title }}</option>
                      </select>

                      <small v-if="errors.subject_id" class="text-danger with-errors"
                             v-html="errors.subject_id[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Student Gender <span class="text-danger">*</span></label>

                      <b-form-radio-group
                        v-model="form.student_gender"
                        :options="student_gender_option"
                        class="mb-3"
                        value-field="value"
                        text-field="name"
                        disabled-field="notEnabled"
                      ></b-form-radio-group>

                      <small v-if="errors.student_gender" class="text-danger with-errors"
                             v-html="errors.student_gender[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Tutor Gender <span class="text-danger">*</span></label>

                      <b-form-radio-group
                        v-model="form.tutor_gender"
                        :options="tutor_gender_option"
                        class="mb-3"
                        value-field="value"
                        text-field="name"
                        disabled-field="notEnabled"
                      ></b-form-radio-group>

                      <small v-if="errors.tutor_gender" class="text-danger with-errors"
                             v-html="errors.tutor_gender[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>Address Details</label>

                      <textarea v-model="form.address"
                                cols="30"
                                rows="3"
                                name="address"
                                placeholder="Enter address"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('address') }">
                              </textarea>

                      <small v-if="errors.address" class="text-danger with-errors"
                             v-html="errors.address[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Institute</label>

                      <b-form-select
                        v-model="form.institute_id"
                        :options="institutes"
                        class="mb-3"
                        value-field="id"
                        text-field="name"
                        disabled-field="notEnabled"
                      ></b-form-select>

                      <small v-if="errors.institute_id" class="text-danger with-errors"
                             v-html="errors.institute_id[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Number Of Student <span class="text-danger">*</span></label>
                      <input v-model="form.number_of_student" type="number" name="number_of_student"
                             placeholder="Enter number of student"
                             class="form-control" :class="{ 'is-invalid': form.errors.has('number_of_student') }">
                      <has-error :form="form" field="number_of_student"></has-error>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Days Of Week</label>

                      <b-form-select
                        v-model="form.tuition_days_week_id"
                        :options="tuition_days_weeks"
                        class="mb-3"
                        value-field="id"
                        text-field="title"
                        disabled-field="notEnabled"
                      ></b-form-select>

                      <small v-if="errors.tuition_days_week_id" class="text-danger with-errors"
                             v-html="errors.tuition_days_week_id[0]"></small>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Hire Date <span class="text-danger">*</span></label>

                      <no-ssr>
                        <datepicker placeholder="select date" v-model="form.hire_date"
                                    :class="{ 'is-invalid': form.errors.has('hire_date') }"></datepicker>
                      </no-ssr>

                      <small v-if="errors.hire_date" class="text-danger with-errors"
                             v-html="errors.hire_date[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Tutoring Time</label>

                      <b-col md="auto">
                        <b-time v-model="form.tutoring_time" locale="en" @context="onContext"></b-time>
                      </b-col>


                    </div>
                  </div>

                  <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="form-group">
                      <label>Salary <span class="text-danger">*</span></label>

                      <input v-model="form.salary" type="number" name="salary" placeholder="Enter salary"
                             class="form-control" :class="{ 'is-invalid': form.errors.has('salary') }"
                             :disabled="form.salary_negotiable_status == 1">
                      <has-error :form="form" field="salary"></has-error>

                      <br>

                      <b-form-checkbox
                        id="salary_negotiable_status"
                        v-model="form.salary_negotiable_status"
                        name="negotiable_status"
                        value="1"
                        unchecked-value="0"
                      >
                        Negotiable
                      </b-form-checkbox>


                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="form-group">
                      <label>More About Requirement</label>

                      <textarea v-model="form.more_about_requirement"
                                cols="30"
                                rows="3"
                                name="more_about_requirement"
                                placeholder="Enter more about requirement"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('more_about_requirement') }">
                              </textarea>

                      <small v-if="errors.more_about_requirement" class="text-danger with-errors"
                             v-html="errors.more_about_requirement[0]"></small>

                    </div>
                  </div>

                  <div class="col-lg-12 col-md-12 col-sm-12 text-right">

                    <button type="submit" :disabled="form.busy" class="btn btn-success">Submit</button>
                  </div>

                </div>
              </form>

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
import jobPostingFormHeader from '~/components/Employer/JobPosting/formHeader'

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

  name: "job-posting-board",
  components: {
    employerNavbar,
    employerSubNavbar,
    jobPostingFormHeader,
  },

  data() {
    return {
      title: "",
      student_gender_option: [
        {value: 'Male', name: 'Male'},
        {value: 'Female', name: 'Female'},
      ],
      tutor_gender_option: [
        {value: 'Male', name: 'Male'},
        {value: 'Female', name: 'Female'},
        {value: 'Any', name: 'Any'},
      ],
      tutor_requests: [],
      form: new Form({
        id: '',
        tuition_type_id: '',
        district_id: '',
        thana_id: '',
        union_id: '',
        tuition_category_id: '',
        tuition_curriculum_id: '',
        tuition_class_id: '',
        subject_id: [],
        student_gender: '',
        tutor_gender: '',
        address: '',
        institute_id: '',
        number_of_student: '',
        tuition_days_week_id: '',
        hire_date: '',
        tutoring_time: '',
        salary: '',
        salary_negotiable_status: '',
        more_about_requirement: '',
        status: '',
      }),
      tuition_types: [],
      district_lists: [],
      thanas: [],
      unions: [],
      tuition_categories: [],
      curriculums: [],
      tuition_classes: [],
      subjects: [],
      institutes: [],
      tuition_days_weeks: [],
      errors: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {
    async fetch_tuition_type() {

      var token = window.$nuxt.$cookies.get('token');
      return await this.$axios.get('frontend/fetch-tuition-type?token=' + token)
        .then((response) => {
          this.tuition_types = response.data;
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
    },

    async fetch_district() {
      return await this.$axios.get('district-lists')
        .then((response) => {
          this.district_lists = response.data;
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
    },

    fetchThana() {

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

    fetchUnion() {

      var vm = this;
      var thana_id = this.form.thana_id;
      this.$axios.get('fetch-union-lists/' + thana_id).then(function (response) {

        vm.unions = response.data;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

    fetchCurriculumAndClass() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      var tuition_category_id = this.form.tuition_category_id;
      this.$axios.get('frontend/fetch-tuition-curriculum-and-class/' + tuition_category_id + '?token=' + token).then(function (response) {

        vm.curriculums = response.data.tuition_curriculum;
        vm.tuition_classes = response.data.tuition_class_course;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

    async fetch_tuition_category() {
      var token = window.$nuxt.$cookies.get('token');
      return await this.$axios.get('frontend/fetch-tuition-category?token=' + token)
        .then((response) => {
          this.tuition_categories = response.data;
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
    },

    async fetch_tuition_day_week() {
      var token = window.$nuxt.$cookies.get('token');
      return await this.$axios.get('frontend/fetch-tuition-days-week?token=' + token)
        .then((response) => {
          this.tuition_days_weeks = response.data;
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
    },

    async fetchInstitute() {
      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      return this.$axios.get('institute?token=' + token)
        .then((response) => {

          vm.institutes = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    fetchSubject() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      var tuition_class_id = this.form.tuition_class_id;
      this.$axios.get('frontend/fetch-class-wise-tuition-subjects/' + tuition_class_id + '?token=' + token).then(function (response) {

        vm.subjects = response.data;

        console.log(response.data)

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

    createTutorRequest() {

      var token = window.$nuxt.$cookies.get('token');
      this.form.post(this.url + 'frontend/tutor-request?token=' + token)
        .then((response) => {

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

          this.errors = '';
          this.form.reset();
          this.thanas='';
          this.unions='';
          this.curriculums='';
          this.tuition_classes='';
          this.subjects='';

        })
        .catch((error) => {

          this.errors = error.response.data;

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
    this.fetch_tuition_type();
    this.fetch_district();
    this.fetch_tuition_category();
    this.fetch_tuition_day_week();
    this.fetchInstitute();

  }

}

</script>

<style scoped>
.mt-10 {
  margin-top: 10px;
}

.nav-link.active {
  color: #ffffff;
  background-color: #423A3D;
}

.bg-1 {
  background-color: #F45E55;
  border-radius: 100%;
  color: #F45E55;
}

.bg-2 {
  background-color: #F8BB45;
  border-radius: 100%;
  color: #F8BB45;
}

.bg-3 {
  background-color: #43CB47;
  border-radius: 100%;
  color: #43CB47;
}

.h5 {
  color: #0b0b0b;
  font-weight: bold;
}

.job-preview-list {
  list-style: none;
}

.nav-item a {
  text-align: center !important;
}

</style>
