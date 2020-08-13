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

                  <div class="tab-content twitter-bs-wizard-tab-content">

                    <div class="tab-pane" id="primary-job-information">
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

                            <small v-if="errors.service_type" class="text-danger with-errors"
                                   v-html="errors.service_type[0]"></small>

                          </div>
                        </div>


                        <div class="form-group row">
                          <label class="col-md-2 col-form-label">Job Title</label>
                          <div class="col-md-10">
                            <input v-model="primary_job_information.job_title" type="text" name="job_title"
                                   placeholder="Enter job title"
                                   class="form-control"
                                   :class="{ 'is-invalid': primary_job_information.errors.has('job_title') }">
                            <small v-if="errors.job_title" class="text-danger with-errors"
                                   v-html="errors.job_title[0]"></small>
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

                            <small v-if="errors.number_of_vacancies" class="text-danger with-errors"
                                   v-html="errors.number_of_vacancies[0]"></small>

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
                                <small v-if="errors.skill_id" class="text-danger with-errors"
                                       v-html="errors.skill_id[0]"></small>

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
                            <small v-if="errors.employment_status" class="text-danger with-errors"
                                   v-html="errors.employment_status[0]"></small>
                          </div>

                        </div>

                        <div class="row">
                          <label class="col-md-2 col-form-label">Application Deadline</label>
                          <div class="col-md-10">

                            <no-ssr>
                              <datepicker v-model="primary_job_information.application_deadline"
                                          placeholder="Select Date"
                                          :class="{ 'is-invalid': primary_job_information.errors.has('application_deadline') }"></datepicker>
                            </no-ssr>
                            <small v-if="errors.application_deadline" class="text-danger with-errors"
                                   v-html="errors.application_deadline[0]"></small>
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

                                <small v-if="errors.resume_receiving_option_type" class="text-danger with-errors"
                                       v-html="errors.resume_receiving_option_type[0]"></small>
                              </div>

                              <div class="col-md-12">

                                <div class="form-group"
                                     v-if="primary_job_information.resume_receiving_option_type == '1'">
                                  <label>Email</label>
                                  <input v-model="primary_job_information.contact_email" type="email"
                                         name="contact_email"
                                         placeholder="Enter contact email"
                                         class="form-control"
                                         :class="{ 'is-invalid': primary_job_information.errors.has('contact_email') }">

                                  <small v-if="errors.contact_email" class="text-danger with-errors"
                                         v-html="errors.contact_email[0]"></small>
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


                                <div class="form-group"
                                     v-if="primary_job_information.resume_receiving_option_type == '2'">
                                  <label>Hard Copy</label>
                                  <textarea v-model="primary_job_information.hard_copy" id="hard_copy" cols="30"
                                            rows="3"
                                            name="hard_copy" placeholder="Write Information for Hard Copy"
                                            class="form-control"
                                            :class="{ 'is-invalid': primary_job_information.errors.has('hard_copy') }"
                                            v-b-popover.hover.top="'Please write precisely Interview date, address and documents to bring at interview place or others instructions.'"
                                  ></textarea>

                                  <small v-if="errors.hard_copy" class="text-danger with-errors"
                                         v-html="errors.hard_copy[0]"></small>

                                </div>

                                <div class="form-group"
                                     v-if="primary_job_information.resume_receiving_option_type == '3'">
                                  <label>Walk in Interview</label>
                                  <textarea v-model="primary_job_information.walk_in_interview" id="address" cols="30"
                                            rows="3"
                                            name="hard_copy" placeholder="Write Information for Walk in Interview"
                                            class="form-control"
                                            :class="{ 'is-invalid': primary_job_information.errors.has('walk_in_interview') }"
                                            v-b-popover.hover.top="'Please write precisely Interview date, address and documents to bring at interview place or others instructions.'"></textarea>
                                  <small v-if="errors.walk_in_interview" class="text-danger with-errors"
                                         v-html="errors.walk_in_interview[0]"></small>

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
                            <small v-if="errors.special_instruction" class="text-danger with-errors"
                                   v-html="errors.special_instruction[0]"></small>
                          </div>

                        </div>

                        <div class="row">
                          <label class="col-md-2 col-form-label">Photograph (Enclose with resume)</label>
                          <div class="col-md-10 mt-10">

                            <input type="checkbox" v-model="primary_job_information.enclose_photograph" id="switch1"
                                   switch="success"/>
                            <label for="switch1" data-on-label="Yes"
                                   data-off-label="No"></label>

                          </div>

                        </div>

                        <ul class="pager wizard twitter-bs-wizard-pager-link text-right">

                          <button v-show="!firstStep" type="submit" :disabled="primary_job_information.busy"
                                  class="btn btn-success">
                            Submit
                          </button>

                          <li class="next" v-show="firstStep"><a href="#">Next</a></li>
                        </ul>

                       <!-- <ul class="pager wizard twitter-bs-wizard-pager-link" v-show="firstStep">
                          <li class="previous"><a href="#">Previous</a></li>
                        </ul>-->

                      </form>
                    </div>

                    <div class="tab-pane" id="more-job-information">
                      <div>
                        <form @submit.prevent="createMoreJobInformation()">

                          <div class=" row">
                            <label class="col-md-2 col-form-label">Job Level</label>
                            <div class="col-md-10 mt-10">

                              <b-form-checkbox-group
                                v-model="primary_job_information.job_level"
                                :options="option_job_level"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                              ></b-form-checkbox-group>
                              <small v-if="errors.job_level" class="text-danger with-errors"
                                     v-html="errors.job_level[0]"></small>
                            </div>

                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Job Context</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.job_context" id="job_context" cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write Job Context"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('job_context') }"
                                        v-b-popover.hover.top="'* Write precisely terms or conditions of your job.<br>* Write whether this job is project based or contractual here.<br>Example: Contract Duration: 6- months.'"
                              ></textarea>

                              <small v-if="errors.job_context" class="text-danger with-errors"
                                     v-html="errors.job_context[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Job Responsibilities</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.job_responsibilities" id="job_responsibilities"
                                        cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write job responsibilities"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('job_responsibilities') }"
                                        v-b-popover.hover.top="'Candidates read job responsibilities to understand job role.<br>*Describe task: daily duties, key tasks, and major responsibilities.<br>*Briefly explain where this role fits within the team or company.<br>*Provide information on career development.<br>*Describe working area if needed.'"
                              ></textarea>

                              <small v-if="errors.job_responsibilities" class="text-danger with-errors"
                                     v-html="errors.job_responsibilities[0]"></small>

                            </div>
                          </div>

                          <div class=" row">
                            <label class="col-md-2 col-form-label">Workplace</label>
                            <div class="col-md-10 mt-10">

                              <b-form-checkbox-group
                                v-model="primary_job_information.workplace"
                                :options="option_workplace"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                              ></b-form-checkbox-group>
                              <small v-if="errors.workplace" class="text-danger with-errors"
                                     v-html="errors.workplace[0]"></small>
                            </div>

                          </div>


                          <div class=" row">
                            <label class="col-md-2 col-form-label">Job Location</label>
                            <div class="col-md-10 mt-10">

                              <div class="row">
                                <div class="col-md-2 col-sm-12">
                                  <b-form-select v-model="primary_job_information.job_location_type" class="mb-3">
                                    <b-form-select-option value="0">Inside Bangladesh</b-form-select-option>
                                    <b-form-select-option value="1">Outside Bangladesh</b-form-select-option>
                                  </b-form-select>
                                </div>

                                <div class="col-md-10 col-sm-12">
                                <textarea v-model="primary_job_information.job_location_address"
                                          id="job_location_address" cols="30"
                                          rows="3"
                                          name="hard_copy" placeholder="Write job location address"
                                          class="form-control"
                                          :class="{ 'is-invalid': primary_job_information.errors.has('job_location_address') }"
                                ></textarea>

                                  <small v-if="errors.job_location_address" class="text-danger with-errors"
                                         v-html="errors.job_location_address[0]"></small>

                                </div>
                              </div>

                            </div>

                          </div>

                          <div class=" row">
                            <label class="col-md-2 col-form-label">Salary</label>
                            <div class="col-md-10 mt-10">

                              <div class="row">
                                <div class="col-md-2 col-sm-12">
                                  <input v-model="primary_job_information.minimum_salary" type="number"
                                         name="minimum_salary"
                                         placeholder="Enter Minimum Salary"
                                         class="form-control"
                                         :class="{ 'is-invalid': primary_job_information.errors.has('minimum_salary') }"
                                         :disabled="primary_job_information.negotiable_status == 1">

                                  <small v-if="errors.minimum_salary" class="text-danger with-errors"
                                         v-html="errors.minimum_salary[0]"></small>
                                  
                                </div>


                                <div class="col-md-2 col-sm-12">
                                  <input v-model="primary_job_information.maximum_salary" type="number"
                                         name="maximum_salary"
                                         placeholder="Enter Maximum Salary"
                                         class="form-control"
                                         :class="{ 'is-invalid': primary_job_information.errors.has('maximum_salary') }"
                                         :disabled="primary_job_information.negotiable_status == 1">

                                  <small v-if="errors.maximum_salary" class="text-danger with-errors"
                                         v-html="errors.maximum_salary[0]"></small>

                                </div>

                                <div class="col-md-2 col-sm-12">
                                  <b-form-select v-model="primary_job_information.salary_paid" class="mb-3"
                                                 :disabled="primary_job_information.negotiable_status == 1">
                                    <b-form-select-option value="Hourly">Hourly</b-form-select-option>
                                    <b-form-select-option value="Daily">Daily</b-form-select-option>
                                    <b-form-select-option value="Monthly">Monthly</b-form-select-option>
                                    <b-form-select-option value="Yearly">Yearly</b-form-select-option>
                                  </b-form-select>

                                  <small v-if="errors.salary_paid" class="text-danger with-errors"
                                         v-html="errors.salary_paid[0]"></small>
                                </div>

                                <div class="col-md-6 col-sm-12 mt-10">
                                  <b-form-checkbox
                                    id="negotiable_status"
                                    v-model="primary_job_information.negotiable_status"
                                    name="negotiable_status"
                                    value="1"
                                    unchecked-value="0"
                                  >
                                    Negotiable
                                  </b-form-checkbox>
                                </div>

                              </div>

                              <div class="row">
                                <div class="col-12">
                                  <span><i class="bx bxs-info-circle"></i> Salary range helps to match properly but you can hide it from candidates below.</span>
                                </div>

                                <div class="col-12">
                                  <b-form-checkbox
                                    id="salary_hide"
                                    v-model="primary_job_information.salary_hide"
                                    name="salary_hide"
                                    value="1"
                                    unchecked-value="0"
                                  >
                                    Do not display in salary details but use for matching
                                  </b-form-checkbox>
                                </div>
                              </div>

                            </div>

                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Additional Salary Info</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.additional_salary_info"
                                        id="additional_salary_info." cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write additional salary info"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('additional_salary_info') }"
                              ></textarea>

                              <small v-if="errors.additional_salary_info" class="text-danger with-errors"
                                     v-html="errors.additional_salary_info[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Compensation & other benefits</label>
                            <div class="col-md-10">
                              <div class="row">

                                <div class="col-md-2 col-sm-12">
                                  <b-form-select v-model="primary_job_information.compensation_other_benefits_status"
                                                 class="mb-3">
                                    <b-form-select-option value="0">NA</b-form-select-option>
                                    <b-form-select-option value="1">Select Option</b-form-select-option>
                                  </b-form-select>
                                </div>

                                <div class="col-md-10 col-sm-12"
                                     v-if="primary_job_information.compensation_other_benefits_status == '1'">
                                  <div>
                                    <b-form-checkbox-group
                                      v-model="primary_job_information.compensation_other_benefits_items"
                                      :options="option_compensation_other_benefits_items"
                                      class="mb-3"
                                      value-field="item"
                                      text-field="name"
                                      disabled-field="notEnabled"
                                    ></b-form-checkbox-group>
                                  </div>

                                  <small v-if="errors.compensation_other_benefits_items" class="text-danger with-errors"
                                         v-html="errors.compensation_other_benefits_items[0]"></small>
                                </div>

                                <div class="col-md-12 col-sm-12"
                                     v-if="primary_job_information.compensation_other_benefits_status == '1'">
                                  <label>Festival Bonus</label>
                                  <b-form-select v-model="primary_job_information.festival_bonus" class="mb-3">
                                    <b-form-select-option value='0'>Select number of festival bonus
                                    </b-form-select-option>
                                    <b-form-select-option value="1">1</b-form-select-option>
                                    <b-form-select-option value="2">2</b-form-select-option>
                                    <b-form-select-option value="3">3</b-form-select-option>
                                    <b-form-select-option value="4">4</b-form-select-option>
                                  </b-form-select>

                                  <small v-if="errors.festival_bonus" class="text-danger with-errors"
                                         v-html="errors.festival_bonus[0]"></small>

                                </div>

                                <div class="col-md-12 col-sm-12"
                                     v-if="primary_job_information.compensation_other_benefits_status == '1'">
                                  <label>Others</label>

                                  <textarea v-model="primary_job_information.others" id="others" cols="30"
                                            rows="3"
                                            name="hard_copy" placeholder="Write Others"
                                            class="form-control"
                                            :class="{ 'is-invalid': primary_job_information.errors.has('Others') }"
                                  ></textarea>

                                  <small v-if="errors.others" class="text-danger with-errors"
                                         v-html="errors.others[0]"></small>


                                </div>

                              </div>
                            </div>
                          </div>

                          <ul class="pager wizard twitter-bs-wizard-pager-link">

                            <div class="text-right">
                              <button v-show="!secondStep && firstStep" type="submit" :disabled="primary_job_information.busy"
                                      class="btn btn-success">
                                Submit
                              </button>
                            </div>



                            <li class="next" v-show="secondStep"><a href="#">Next</a></li>
                            <li class="previous" v-show="secondStep"><a href="#">Previous</a></li>
                          </ul>

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
        firstStep: false,
        secondStep: false,
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

        option_job_level: [
          {item: 'Entry', name: 'Entry'},
          {item: 'Mid', name: 'Mid'},
          {item: 'Top', name: 'Top'},
        ],

        option_workplace: [
          {item: 'office', name: 'Work at office'},
          {item: 'home', name: 'Work from home'},
        ],

        option_compensation_other_benefits_items: [
          {item: 'T/A', name: 'T/A'},
          {item: 'Mobile bill', name: 'Mobile bill'},
          {item: 'Pension policy', name: 'Pension policy'},
          {item: 'Tour allowance', name: 'Tour allowance'},
          {item: 'Credit card', name: 'Credit card'},
          {item: 'Medical allowance', name: 'Medical allowance'},
          {item: 'Performance bonus', name: 'Performance bonus'},
          {item: 'Profit share', name: 'Profit share'},
          {item: 'Provident fund', name: 'Provident fund'},
          {item: 'Weekly 2 holidays', name: 'Weekly 2 holidays'},
          {item: 'Insurance', name: 'Insurance'},
          {item: 'Gratuity', name: 'Gratuity'},
          {item: 'Over time allowance', name: 'Over time allowance'},
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

          //
          job_level: '',
          job_context: '',
          job_responsibilities: '',
          workplace: '',
          job_location_type: '',
          job_location_address: '',
          minimum_salary: '',
          maximum_salary: '',
          salary_paid: '',
          negotiable_status: '',
          salary_hide: '',
          additional_salary_info: '',
          compensation_other_benefits_status: '',
          compensation_other_benefits_items: '',
          festival_bonus: '',
          others: '',

        }),
        errors: '',
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

      createPrimaryJobInformation() {

        var vm = this;
        var form = this.primary_job_information;
        var token = window.$nuxt.$cookies.get('token');

        this.$axios.post('primary-job-information?token=' + token, {
          service_type: form.service_type,
          job_title: form.job_title,
          number_of_vacancies: form.number_of_vacancies,
          vacancies_status: form.vacancies_status,
          job_category: form.job_category,
          skill_id: form.skill_id,
          employment_status: form.employment_status,
          application_deadline: form.application_deadline,
          resume_receiving_option_online: form.resume_receiving_option_online,
          resume_receiving_option_type: form.resume_receiving_option_type,
          contact_email: form.contact_email,
          hotjobs_email_system: form.hotjobs_email_system,
          hard_copy: form.hard_copy,
          walk_in_interview: form.walk_in_interview,
          special_instruction: form.special_instruction,
          enclose_photograph: form.enclose_photograph,
        })
          .then((response) => {

            vm.firstStep = true;

          })
          .catch((error) => {

            vm.errors = error.response.data;

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })

        /*this.primary_job_information.post(this.url + 'primary-job-information?token=' + token)
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

            if (error.response.status == 401) {
              Toast.fire({
                icon: 'warning',
                title: 'Token Not Found'
              });
            }

          })*/
      },

      createMoreJobInformation() {

        var vm = this;
        var form = this.primary_job_information;
        var token = window.$nuxt.$cookies.get('token');

        this.$axios.post('more-job-information?token=' + token, {
          job_level: form.job_level,
          job_context: form.job_context,
          job_responsibilities: form.job_responsibilities,
          workplace: form.workplace,
          job_location_type: form.job_location_type,
          job_location_address: form.job_location_address,
          minimum_salary: form.minimum_salary,
          maximum_salary: form.maximum_salary,
          salary_paid: form.salary_paid,
          negotiable_status: form.negotiable_status,
          salary_hide: form.salary_hide,
          additional_salary_info: form.additional_salary_info,
          compensation_other_benefits_status: form.compensation_other_benefits_status,
          compensation_other_benefits_items: form.compensation_other_benefits_items,
          festival_bonus: form.festival_bonus,
          others: form.others,

        })
          .then((response) => {

            vm.secondStep = true;

          })
          .catch((error) => {

            vm.errors = error.response.data;

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })

        /*this.primary_job_information.post(this.url + 'primary-job-information?token=' + token)
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

            if (error.response.status == 401) {
              Toast.fire({
                icon: 'warning',
                title: 'Token Not Found'
              });
            }

          })*/
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
