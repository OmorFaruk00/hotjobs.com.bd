<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <!--<h4 class="card-title mb-4">Wizard with progressbar</h4>-->

              <div id="progrss-wizard" class="twitter-bs-wizard">

                <jobPostingFormHeader/>


                <div class="mt-3">
                  <form @submit.prevent="createPrimaryJobInformation()">

                    <div class="form-group row">
                      <label class="col-md-2 col-form-label">Service Type</label>
                      <div class="col-md-10 mt-10">

                        <b-form-radio-group
                          v-model="primary_job_information.service_type"
                          :options="options"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                        ></b-form-radio-group>

                        <small v-if="errors.service_type" class="text-danger with-errors" v-html="errors.service_type[0]"></small>

                      </div>
                    </div>


                    <div class="form-group row">
                      <label class="col-md-2 col-form-label">Job Title</label>
                      <div class="col-md-10">
                        <input v-model="primary_job_information.job_title" type="text" name="job_title"
                               placeholder="Enter job title"
                               class="form-control"
                               :class="{ 'is-invalid': primary_job_information.errors.has('job_title') }">
                        <has-error :form="primary_job_information" field="job_title"></has-error>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-md-2 col-form-label">No. of Vacancies</label>
                      <div class="col-md-6">
                        <input v-if="primary_job_information.vacancies_status == 1" type="number"
                               name="number_of_vacancies"
                               placeholder="N/A"
                               class="form-control"
                               disabled>

                        <input v-else v-model="primary_job_information.number_of_vacancies" type="number"
                               name="number_of_vacancies"
                               placeholder="Enter number of vacancies"
                               class="form-control"
                               :class="{ 'is-invalid': primary_job_information.errors.has('number_of_vacancies') }">

                        <has-error :form="primary_job_information" field="number_of_vacancies"></has-error>
                      </div>

                      <div class="col-md-4">
                        <b-form-checkbox
                          id="vacancies_status"
                          v-model="primary_job_information.vacancies_status"
                          name="vacancies_status"
                          value="1"
                          unchecked-value="0"
                        >
                          NA
                        </b-form-checkbox>
                      </div>
                    </div>


                    <div class="form-group row">
                      <label class="col-md-2 col-form-label">Job Category</label>
                      <div class="col-md-10">
                        <div class="row">

                          <div class="col-6">

                            <select name="job_category" class="form-control"
                                    v-model="primary_job_information.job_category" @change="fetchSkill()">
                              <option value="general" selected>Functional Category</option>
                              <option value="special">Special Skilled Category</option>
                            </select>

                          </div>

                          <div class="col-6">

                            <b-form-select v-model="primary_job_information.skill_id" name="skill_id"
                                           :class="{ 'is-invalid': primary_job_information.errors.has('skill_id') }"
                                           class="mb-3"
                            >

                              <b-form-select-option v-for="(row,key) in jobs_types" :value="row.id">{{ row.name }}
                              </b-form-select-option>

                            </b-form-select>

                            <has-error :form="primary_job_information" field="skill_id"></has-error>

                          </div>

                        </div>
                      </div>
                    </div>


                    <div class=" row">
                      <label class="col-md-2 col-form-label">Employment Status</label>
                      <div class="col-md-10 mt-10">

                        <b-form-checkbox-group
                          v-model="primary_job_information.employment_status"
                          :options="option_employment_status"
                          class="mb-3"
                          value-field="item"
                          text-field="name"
                          disabled-field="notEnabled"
                        ></b-form-checkbox-group>
                        <small v-if="errors.employment_status" class="text-danger with-errors" v-html="errors.employment_status[0]"></small>
                      </div>

                    </div>

                    <div class="row">
                      <label class="col-md-2 col-form-label">Application Deadline</label>
                      <div class="col-md-10">

                        <no-ssr>
                          <datepicker v-model="primary_job_information.application_deadline" placeholder="Select Date"
                                      :class="{ 'is-invalid': primary_job_information.errors.has('application_deadline') }"></datepicker>
                        </no-ssr>
                        <has-error :form="primary_job_information" field="application_deadline"></has-error>
                      </div>

                    </div>


                    <div class="row">
                      <label class="col-md-2 col-form-label">Resume Receiving Option</label>

                      <div class="col-md-10 mt-10">

                        <div class="row">
                          <div class="col-md-2">
                            <b-form-checkbox
                              id="resume_receiving_option_online"
                              v-model="primary_job_information.resume_receiving_option_online"
                              name="resume_receiving_option_online"
                              value="1"
                              unchecked-value="0"
                            >
                              Apply Online
                            </b-form-checkbox>
                          </div>

                          <div class="col-md-10">
                            <b-form-radio-group
                              v-model="primary_job_information.resume_receiving_option_type"
                              :options="resume_receiving_option_type"
                              class="mb-3"
                              value-field="item"
                              text-field="name"
                              disabled-field="notEnabled"
                            ></b-form-radio-group>

                            <small v-if="errors.resume_receiving_option_type" class="text-danger with-errors" v-html="errors.resume_receiving_option_type[0]"></small>
                          </div>

                          <div class="col-md-12">

                            <div class="form-group" v-if="primary_job_information.resume_receiving_option_type == '1'">
                              <label>Email</label>
                              <input v-model="primary_job_information.contact_email" type="email" name="contact_email"
                                     placeholder="Enter contact email"
                                     class="form-control"
                                     :class="{ 'is-invalid': primary_job_information.errors.has('contact_email') }">
                              <has-error :form="primary_job_information" field="contact_email"></has-error>
                            </div>

                            <div v-if="primary_job_information.resume_receiving_option_type == '1'">
                              <b-form-checkbox
                                id="checkbox-1"
                                v-model="primary_job_information.hotjobs_email_system"
                                name="checkbox-1"
                                value="1"
                                unchecked-value="0"
                              >
                                Applicant can use hotjobs email system
                              </b-form-checkbox>
                            </div>


                            <div class="form-group" v-if="primary_job_information.resume_receiving_option_type == '2'">
                              <label>Hard Copy</label>
                              <textarea v-model="primary_job_information.hard_copy" id="hard_copy" cols="30" rows="3"
                                        name="hard_copy" placeholder="Write Information for Hard Copy"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('hard_copy') }"
                                        v-b-popover.hover.top="'Please write precisely Interview date, address and documents to bring at interview place or others instructions.'"
                              ></textarea>

                              <has-error :form="primary_job_information" field="hard_copy"></has-error>
                            </div>

                            <div class="form-group" v-if="primary_job_information.resume_receiving_option_type == '3'">
                              <label>Walk in Interview</label>
                              <textarea v-model="primary_job_information.walk_in_interview" id="address" cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write Information for Walk in Interview"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('walk_in_interview') }"
                                        v-b-popover.hover.top="'Please write precisely Interview date, address and documents to bring at interview place or others instructions.'"></textarea>

                              <has-error :form="primary_job_information" field="walk_in_interview"></has-error>
                            </div>


                          </div>
                        </div>

                      </div>


                    </div>

                    <div class="row">
                      <label class="col-md-2 col-form-label">Special Instruction for Job Seekers</label>
                      <div class="col-md-10">

                        <textarea v-model="primary_job_information.special_instruction" id="special_instruction"
                                  cols="30" rows="3"
                                  name="hard_copy" placeholder="Write Special Instruction for Job Seekers"
                                  class="form-control"
                                  :class="{ 'is-invalid': primary_job_information.errors.has('hard_copy') }"
                                  v-b-popover.hover.top="'* Precise & meaningful.<br>* Make your instruction explicit so that job seekers can apply easily.<br>Example: Please mail your CV with cover letter and write \'xyz\' as subject of your mail.'"
                        ></textarea>

                        <has-error :form="primary_job_information" field="hard_copy"></has-error>
                      </div>

                    </div>

                    <div class="row">
                      <label class="col-md-2 col-form-label">Photograph (Enclose with resume)</label>
                      <div class="col-md-10 mt-10">

                        <input type="checkbox" v-model="primary_job_information.enclose_photograph" id="switch1"
                               switch="success"/>
                        <label for="switch1" data-on-label="Yes"
                               data-off-label="No"></label>

                        <has-error :form="primary_job_information" field="enclose_photograph"></has-error>
                      </div>

                    </div>

                    <ul class="pager wizard twitter-bs-wizard-pager-link text-right">

                      <!--<li class="previous"><a href="#">Previous</a></li>
                      <li class="next"><a href="#">Next</a></li>-->

                      <button type="submit" :disabled="primary_job_information.busy" class="btn btn-success">Submit</button>
                    </ul>

                  </form>
                </div>


                <!--<ul class="pager wizard twitter-bs-wizard-pager-link">
                  <li class="previous"><a href="#">Previous</a></li>
                  <li class="next"><a href="#">Next</a></li>
                </ul>-->

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
    head: {
      link: [
        {rel: 'stylesheet', href: '/libs/twitter-bootstrap-wizard/prettify.css'},
      ],
      script: [
        {src: '/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'},
        {src: '/libs/twitter-bootstrap-wizard/prettify.js'},
        {src: '/js/pages/form-wizard.init.js'},
      ],
    },

    name: "job-posting-board",
    components: {
      employerNavbar,
      employerSubNavbar,
      jobPostingFormHeader,
    },

    data() {
      return {

        options: [
          {item: '0', name: 'Basic Listing'},
          {item: '1', name: 'Stand-out Listing'},
          {item: '2', name: 'Stand Out Premium'},
        ],

        option_employment_status: [
          {item: 'Full Time', name: 'Full Time'},
          {item: 'Part Time', name: 'Part Time'},
          {item: 'Contract', name: 'Contract'},
          {item: 'Internship', name: 'Internship'},
          {item: 'Freelance', name: 'Freelance'},
        ],

        resume_receiving_option_type: [
          {item: '1', name: 'Email'},
          {item: '2', name: 'Hard Copy'},
          {item: '3', name: 'Walk in Interview'},
        ],

        jobs_types: '',

        primary_job_information: new Form({
          id: '',
          service_type: '',
          job_title: '',
          number_of_vacancies: '',
          vacancies_status: '',
          job_category: 'general',
          skill_id: '',
          employment_status: '',
          application_deadline: '',
          resume_receiving_option_online: '',
          resume_receiving_option_type: '',
          contact_email: '',
          hotjobs_email_system: '',
          hard_copy: '',
          walk_in_interview: '',
          special_instruction: '',
          enclose_photograph: '',

        }),
        errors:'',
        url: this.$axios.defaults.baseURL,
      }
    },

    methods: {
      fetchSkill() {
        var vm = this;

        var job_category = this.primary_job_information.job_category;

        this.$axios.get('type-wise-skill/' + job_category).then(function (response) {

          vm.jobs_types = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      createPrimaryJobInformation(){

        var vm = this;

        var token = window.$nuxt.$cookies.get('token');
        this.primary_job_information.post(this.url + 'primary-job-information?token=' + token)
          .then((response) => {

            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            });

          })
          .catch((error) => {

            vm.errors= error.response.data;

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

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
      this.fetchSkill();
    }

  }
</script>

<style scoped>
  .mt-10 {
    margin-top: 10px;
  }

</style>
