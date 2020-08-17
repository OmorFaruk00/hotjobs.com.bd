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
                              <button v-show="!secondStep && firstStep" type="submit"
                                      :disabled="primary_job_information.busy"
                                      class="btn btn-success">
                                Submit
                              </button>
                            </div>


                            <li class="next" v-show="secondStep"><a href="#">Next</a></li>
                            <li class="previous"><a href="#">Previous</a></li>
                          </ul>

                        </form>
                      </div>
                    </div>


                    <div class="tab-pane" id="candidate-requirements">
                      <div>
                        <form @submit.prevent="createCandidatesRequirements()">

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Degree</label>
                            <div class="col-md-10">
                              <div class="row">
                                <div class="col-md-2 col-sm-12">

                                  <b-form-select v-model="degrees.level_of_education_id"
                                                 @change="fetchLevelOfEducationDegree()" class="mb-3">

                                    <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                    <b-form-select-option v-for="row in level_of_educations" :value="row.id">{{ row.name
                                      }}
                                    </b-form-select-option>

                                  </b-form-select>

                                </div>

                                <div class="col-md-2 col-sm-12">

                                  <b-form-select v-model="degrees.degree_id" class="mb-3">
                                    <b-form-select-option :value="null">Please select an option</b-form-select-option>

                                    <b-form-select-option v-for="row in all_degrees" :value="row.id">{{ row.name }}
                                    </b-form-select-option>

                                  </b-form-select>

                                </div>

                                <div class="col-md-4 col-sm-12 mb-2">

                                  <input type="text" v-model="degrees.concentration" class="form-control"
                                         placeholder="Concentration/ Major">

                                </div>

                                <div class="col-md-4 col-sm-12">

                                  <button type="button" @click="addDegrees" class="btn btn-info"><i
                                    class="bx bx-plus-circle"></i> Add More
                                  </button>

                                </div>
                              </div>

                              <div class="row" v-if="primary_job_information.degree.length > 0">
                                <div class="col-12">
                                  <div class="table-responsive">
                                    <table class="table table-bordered">
                                      <thead>
                                      <tr>
                                        <th>Level</th>
                                        <th>Degree</th>
                                        <th>Concentration/ Major</th>
                                        <th>Action</th>
                                      </tr>
                                      </thead>

                                      <tbody>
                                      <tr v-for="(row,index) in primary_job_information.degree">
                                        <td v-html="levelOfEducationName(row.level_of_education_id)"></td>
                                        <td v-html="degreeName(row.degree_id)"></td>
                                        <td>{{ row.concentration }}</td>
                                        <td>
                                          <button type="button" class="btn btn-danger" @click="delete_row(row)"><i
                                            class="bx bx-trash"></i></button>
                                        </td>
                                      </tr>
                                      </tbody>

                                    </table>
                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Preferred Educational Institution</label>
                            <div class="col-md-10">

                              <!--<b-form-select v-model="primary_job_information.institution_id" name="institution_id"
                                             class="mb-3 bSelect"
                                             >

                                <b-form-select-option :value="null" disabled>Please select an option
                                </b-form-select-option>

                                <b-form-select-option v-for="(row,key) in institutes" :value="row.id">{{ row.name }}
                                </b-form-select-option>

                              </b-form-select>-->

                              <select v-model="primary_job_information.institution_id" name="institution_id"
                                      class="form-control bSelect" multiple>

                                <option v-for="(row,key) in institutes" :value="row.id">{{ row.name }}</option>
                              </select>


                              <small v-if="errors.institution_id" class="text-danger with-errors"
                                     v-html="errors.institution_id[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Other Educational Qualification</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.other_educational_qualification"
                                        id="other_educational_qualification"
                                        cols="30"
                                        rows="3"
                                        name="other_educational_qualification"
                                        placeholder="Write other educational qualification"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('other_educational_qualification') }">
                              </textarea>

                              <small v-if="errors.other_educational_qualification" class="text-danger with-errors"
                                     v-html="errors.other_educational_qualification[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Training/ Trade Course</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.training_trade_course"
                                        id="training_trade_course"
                                        cols="30"
                                        rows="3"
                                        name="training_trade_course" placeholder="Write training trade course"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('training_trade_course') }">
                              </textarea>

                              <small v-if="errors.training_trade_course" class="text-danger with-errors"
                                     v-html="errors.training_trade_course[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Professional Certification</label>
                            <div class="col-md-10">
                              <textarea v-model="primary_job_information.professional_certification"
                                        id="professional_certification"
                                        cols="30"
                                        rows="3"
                                        name="professional_certification" placeholder="Write professional certification"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('professional_certification') }">
                              </textarea>

                              <small v-if="errors.professional_certification" class="text-danger with-errors"
                                     v-html="errors.professional_certification[0]"></small>

                            </div>
                          </div>

                          <h3>Experience and Business Area</h3>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Experience</label>
                            <div class="col-md-10 mt-10">

                              <div class="row">
                                <div class="col-12">
                                  <b-form-select v-model="primary_job_information.experience_type" class="mb-3">
                                    <b-form-select-option value="0">No Experience Required</b-form-select-option>
                                    <b-form-select-option value="1">Experience Required</b-form-select-option>
                                  </b-form-select>

                                  <small v-if="errors.experience_type" class="text-danger with-errors"
                                         v-html="errors.experience_type[0]"></small>
                                </div>
                              </div>

                              <div class="row" v-if="primary_job_information.experience_type == '1'">
                                <div class="col-md-6 col-sm-12">
                                  <div class="form-group">
                                    <label>Minimum year of experience</label>

                                    <select v-model="primary_job_information.minimum_year_of_experience"
                                            name="minimum_year_of_experience"
                                            id="minimum_year_of_experience" class="form-control">
                                      <option value="Any">Any</option>
                                      <option :value="number" v-for="number in 50">{{ number }}</option>
                                    </select>

                                    <small class="text-success">Use both fields for range or use only one field.</small>

                                    <br>

                                    <small v-if="errors.minimum_year_of_experience" class="text-danger with-errors"
                                           v-html="errors.minimum_year_of_experience[0]"></small>

                                  </div>
                                </div>

                                <div class="col-md-6 col-sm-12">
                                  <div class="form-group">
                                    <label>Maximum year of experience</label>

                                    <select v-model="primary_job_information.maximum_year_of_experience"
                                            name="maximum_year_of_experience"
                                            id="maximum_year_of_experience" class="form-control">
                                      <option value="Any">Any</option>
                                      <option :value="number" v-for="number in 50">{{ number }}</option>
                                    </select>
                                    <small v-if="errors.maximum_year_of_experience" class="text-danger with-errors"
                                           v-html="errors.maximum_year_of_experience[0]"></small>

                                  </div>
                                </div>
                              </div v->

                              <div class="row" v-if="primary_job_information.experience_type == '1'">
                                <div class="col-12">
                                  <b-form-checkbox
                                    id="freshers_applay"
                                    v-model="status"
                                    name="freshers_applay"
                                    value="1"
                                    unchecked-value="0"
                                  >
                                    Freshers are also encouraged to apply

                                  </b-form-checkbox>

                                </div>
                              </div>

                              <div class="row" v-if="primary_job_information.experience_type == '1'">
                                <div class="col-12">
                                  <div class="form-group">
                                    <label>Area of experience</label>

                                    <textarea v-model="primary_job_information.area_of_experience"
                                              id="area_of_experience"
                                              cols="30"
                                              rows="3"
                                              name="area_of_experience"
                                              placeholder="Write area of experience"
                                              class="form-control"
                                              :class="{ 'is-invalid': primary_job_information.errors.has('area_of_experience') }">
                                    </textarea>

                                    <small v-if="errors.area_of_experience" class="text-danger with-errors"
                                           v-html="errors.area_of_experience[0]"></small>

                                  </div>
                                </div>

                                <div class="col-12">
                                  <div class="form-group">
                                    <label>Area of business</label>

                                    <textarea v-model="primary_job_information.area_of_business"
                                              id="area_of_business"
                                              cols="30"
                                              rows="3"
                                              name="area_of_business"
                                              placeholder="Write area of business"
                                              class="form-control"
                                              :class="{ 'is-invalid': primary_job_information.errors.has('area_of_business') }">
                                    </textarea>

                                    <small v-if="errors.area_of_business" class="text-danger with-errors"
                                           v-html="errors.area_of_business[0]"></small>

                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>


                          <div class=" row">
                            <label class="col-md-2 col-form-label">Skills</label>
                            <div class="col-md-10 mt-10">

                              <textarea v-model="primary_job_information.skills"
                                        id="skills" cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write skills"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('skills') }"
                              ></textarea>

                              <small v-if="errors.skills" class="text-danger with-errors"
                                     v-html="errors.skills[0]"></small>

                            </div>

                          </div>

                          <div class=" row">
                            <label class="col-md-2 col-form-label">Additional Requirements</label>
                            <div class="col-md-10 mt-10">

                              <textarea v-model="primary_job_information.additional_requirements"
                                        id="additional_requirements" cols="30"
                                        rows="3"
                                        name="hard_copy" placeholder="Write additional requirements"
                                        class="form-control"
                                        :class="{ 'is-invalid': primary_job_information.errors.has('additional_requirements') }"
                              ></textarea>

                              <small v-if="errors.additional_requirements" class="text-danger with-errors"
                                     v-html="errors.additional_requirements[0]"></small>

                            </div>

                          </div>

                          <h3>Personal Information</h3>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Gender</label>
                            <div class="col-md-10">

                              <b-form-checkbox-group
                                v-model="primary_job_information.gender"
                                :options="options_gender"
                                class="mb-3"
                                value-field="item"
                                text-field="name"
                                disabled-field="notEnabled"
                              ></b-form-checkbox-group>

                              <small v-if="errors.gender" class="text-danger with-errors"
                                     v-html="errors.gender[0]"></small>

                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-md-2 col-form-label">Age</label>
                            <div class="col-md-10">

                              <div class="row">
                                <div class="col-md-6 col-sm-12">
                                  <div class="form-group">
                                    <label>Min</label>

                                    <select v-model="primary_job_information.age_min" name="age_min"
                                            id="age_min" class="form-control">
                                      <option value="Any">Any</option>
                                      <option :value="number" v-for="number in 90">{{ number }}</option>
                                    </select>

                                    <small class="text-success"><i class="bx bxs-info-circle"></i> Use both fields for
                                      range or use only one field.</small>

                                    <small v-if="errors.age_min" class="text-danger with-errors"
                                           v-html="errors.age_min[0]"></small>

                                  </div>
                                </div>

                                <div class="col-md-6 col-sm-12">
                                  <div class="form-group">
                                    <label>Max</label>

                                    <select v-model="primary_job_information.age_max" name="age_max"
                                            id="age_max" class="form-control">
                                      <option value="Any">Any</option>
                                      <option :value="number" v-for="number in 90">{{ number }}</option>
                                    </select>
                                    <small v-if="errors.age_max" class="text-danger with-errors"
                                           v-html="errors.age_max[0]"></small>

                                  </div>
                                </div>
                              </div>

                            </div>
                          </div>

                          <div class="row">
                            <label class="col-md-2 col-form-label">Preferred Retired Army Officer</label>
                            <div class="col-md-10 mt-10">

                              <input type="checkbox" v-model="primary_job_information.preferred_retired_army_officer"
                                     id="preferred_retired_army_officer"
                                     switch="success"/>
                              <label for="preferred_retired_army_officer" data-on-label="Yes"
                                     data-off-label="No"></label>

                            </div>

                          </div>

                          <ul class="pager wizard twitter-bs-wizard-pager-link">

                            <div class="text-right">
                              <button v-show="!thirdStep && secondStep && firstStep" type="submit"
                                      :disabled="primary_job_information.busy"
                                      class="btn btn-success">
                                Submit
                              </button>

                            </div>


                            <li class="next" v-show="thirdStep"><a href="#">Next</a></li>
                            <li class="previous"><a href="#">Previous</a></li>
                          </ul>

                        </form>
                      </div>
                    </div>


                    <div class="tab-pane" id="company-info-visibility">
                      <div>
                        <!--<form @submit.prevent="createCandidatesRequirements()">-->
                        <form>

                          <h3>Information Visibility</h3>

                          <div class="row">
                            <label class="col-md-2 col-form-label">Company Name</label>
                            <div class="col-md-10 mt-10">

                              <div class="row">

                                <div class="col-12">
                                  <input type="checkbox" v-model="primary_job_information.company_name_show_status"
                                         id="company_name_show_status"
                                         switch="success"/>
                                  <label for="company_name_show_status" data-on-label="Show"
                                         data-off-label="Hide"></label>
                                </div>

                                <div class="col-12" v-if="!primary_job_information.company_name_show_status == '1'">
                                  <input type="text" v-model="primary_job_information.company_name"
                                         class="form-control">

                                  <small v-if="errors.company_name" class="text-danger with-errors"
                                         v-html="errors.company_name[0]"></small>
                                </div>

                              </div>


                            </div>

                          </div>


                          <div class="row">
                            <label class="col-md-2 col-form-label">Company Address</label>
                            <div class="col-md-10 mt-10">

                              <input type="checkbox" v-model="primary_job_information.company_address_show_status"
                                     id="company_address_show_status"
                                     switch="success"/>
                              <label for="company_address_show_status" data-on-label="Show"
                                     data-off-label="Hide"></label>

                            </div>

                          </div>


                          <div class="row">
                            <label class="col-md-2 col-form-label">Company Industry Type</label>
                            <div class="col-md-10 mt-10">

                              <b-form-select
                                v-model="primary_job_information.company_industry_type_id"
                                :options="company_industry_types"
                                class="mb-3"
                                value-field="id"
                                text-field="name"
                                disabled-field="notEnabled"
                              ></b-form-select>

                              <small v-if="errors.company_industry_type_id" class="text-danger with-errors"
                                     v-html="errors.company_industry_type_id[0]"></small>

                            </div>

                          </div>

                          <div class="row">
                            <label class="col-md-2 col-form-label">Company Business</label>
                            <div class="col-md-10 mt-10">

                              <div class="row">

                                <div class="col-12">
                                  <input type="checkbox" v-model="primary_job_information.company_business_show_status"
                                         id="company_business_show_status"
                                         switch="success"/>
                                  <label for="company_business_show_status" data-on-label="Show"
                                         data-off-label="Hide"></label>
                                </div>

                                <div class="col-12" v-if="primary_job_information.company_business_show_status == '1'">
                                  <input type="text" class="form-control" :value="authUser.business_description" readonly>
                                </div>

                              </div>


                            </div>

                          </div>


                          <h3>Billing Information</h3>

                          <div class="row">
                            <label class="col-md-2 col-form-label">Billing Information</label>
                            <div class="col-md-10 mt-10">

                              <b-form-select v-model="primary_job_information.billing_information_id" class="mb-3">
                                <b-form-select-option :value="null">Please select an option</b-form-select-option>
                                <b-form-select-option value="a">Option A</b-form-select-option>
                              </b-form-select>

                              <small v-if="errors.billing_information_id" class="text-danger with-errors"
                                     v-html="errors.billing_information_id[0]"></small>

                            </div>

                          </div>

                          <ul class="pager wizard twitter-bs-wizard-pager-link">

                            <div class="text-right">
                              <!--<button v-show="!thirdStep && secondStep && firstStep" type="submit"
                                      :disabled="primary_job_information.busy"
                                      class="btn btn-success">
                                Submit
                              </button>-->

                              <!--<button type="submit"
                                      :disabled="primary_job_information.busy"
                                      class="btn btn-success">
                                Submit
                              </button>-->
                            </div>


                            <li class="next" v-show="thirdStep"><a href="#">Next</a></li>
                            <li class="previous" v-show="thirdStep"><a href="#">Previous</a></li>
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
        {rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/css/select2.min.css'},
      ],
      script: [
        {src: '/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'},
        {src: '/libs/twitter-bootstrap-wizard/prettify.js'},
        {src: 'https://cdn.jsdelivr.net/npm/select2@4.1.0-beta.1/dist/js/select2.min.js'},
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
        thirdStep: false,
        fourStep: false,
        fiveStep: false,
        sixStep: false,
        sevenStep: false,

        options_gender: [
          {item: 'Male', name: 'Male'},
          {item: 'Female', name: 'Female'},
          {item: 'Others', name: 'Others'},
        ],

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
        level_of_educations: '',
        institutes: '',
        without_filter_degrees: '',
        all_degrees: '',
        authUser:'',
        company_industry_types:'',

        degrees: {
          'level_of_education_id': '',
          'degree_id': '',
          'concentration': '',
        },

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

          //3
          degree: [],
          institution_id: [],
          other_educational_qualification: '',
          training_trade_course: '',
          professional_certification: '',
          experience_type: '',
          minimum_year_of_experience: '',
          maximum_year_of_experience: '',
          freshers_applay: '',
          area_of_experience: '',
          area_of_business: '',
          skills: '',
          additional_requirements: '',
          gender: '',
          age_min: '',
          age_max: '',
          preferred_retired_army_officer: '',

          //4
          company_name_show_status:'',
          company_name:'',
          company_address_show_status:'',
          company_industry_type_id:'',
          company_business_show_status:'',
          billing_information_id:'',

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

      fetchInstitute() {
        var vm = this;
        var token = window.$nuxt.$cookies.get('token');
        return this.$axios.get('institute?token=' + token)
          .then((response) => {

            vm.institutes = response.data;

            // console.log(response.data);

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchLevelOfEducation() {
        return await this.$axios.get('fetch-level-of-education')
          .then((response) => {

            this.level_of_educations = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchDegrees() {
        return await this.$axios.get('fetch-level-of-degree')
          .then((response) => {

            this.without_filter_degrees = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      fetchLevelOfEducationDegree() {
        var vm = this;

        var level_of_education_id = this.degrees.level_of_education_id;

        this.$axios.get('fetch-degrees/' + level_of_education_id).then(function (response) {

          vm.all_degrees = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      addDegrees() {

        var vm = this;

        if (!vm.degrees.level_of_education_id) {
          Toast.fire({
            icon: 'info',
            title: 'Enter Education Level'
          });
        } else if (!vm.degrees.degree_id) {

          Toast.fire({
            icon: 'info',
            title: 'Enter Degree'
          });

        } else {

          vm.primary_job_information.degree.push({
            level_of_education_id: vm.degrees.level_of_education_id,
            degree_id: vm.degrees.degree_id,
            concentration: vm.degrees.concentration,
          });

          vm.degrees.level_of_education_id = '';
          vm.degrees.degree_id = '';
          vm.degrees.concentration = '';

        }

      },

      delete_row: function (row) {
        this.primary_job_information.degree.splice(this.primary_job_information.degree.indexOf(row), 1);
      },

      levelOfEducationName: function (id) {

        var items = this.level_of_educations;
        var level_of_education_id = id;

        let level_of_education = [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].id == level_of_education_id) {
            level_of_education.push(items[i].name);
          }
        }

        let separator = "";
        let strOptions = "";
        level_of_education.forEach(word => {
          strOptions += separator + word;
          separator = " [] ";
        });

        return strOptions;

      },

      degreeName: function (id) {

        var items = this.without_filter_degrees;
        var degree_id = id;

        let level_of_education = [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].id == degree_id) {
            level_of_education.push(items[i].name);
          }
        }

        let separator = "";
        let strOptions = "";
        level_of_education.forEach(word => {
          strOptions += separator + word;
          separator = " [] ";
        });

        return strOptions;

      },

      fetchCompanyIndustryType(){

        var vm = this;
        var token = window.$nuxt.$cookies.get('token');

        this.$axios.post('company-industry-type?token=' + token)
          .then((response) => {

            vm.company_industry_types = response.data;

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
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

      },

      createCandidatesRequirements() {

        var vm = this;
        var form = this.primary_job_information;
        var token = window.$nuxt.$cookies.get('token');

        this.$axios.post('candidates-requirements?token=' + token, {

          institution_id: form.institution_id,
          other_educational_qualification: form.other_educational_qualification,
          training_trade_course: form.training_trade_course,
          professional_certification: form.professional_certification,
          experience_type: form.experience_type,
          minimum_year_of_experience: form.minimum_year_of_experience,
          maximum_year_of_experience: form.maximum_year_of_experience,
          freshers_applay: form.freshers_applay,
          area_of_experience: form.area_of_experience,
          area_of_business: form.area_of_business,
          skills: form.skills,
          additional_requirements: form.additional_requirements,
          gender: form.gender,
          age_min: form.age_min,
          age_max: form.age_max,
          preferred_retired_army_officer: form.preferred_retired_army_officer,

        })
          .then((response) => {

            vm.thirdStep = true;

          })
          .catch((error) => {

            vm.errors = error.response.data;

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })

      }
    },

    mounted: function () {

      this.authUser = window.$nuxt.$cookies.get('user');
      var authUser = window.$nuxt.$cookies.get('user');

      this.primary_job_information.company_name = authUser.company_name;

    },

    beforeMount() {
      this.fetchSkill();
      this.fetchLevelOfEducation();
      this.fetchDegrees();
      this.fetchCompanyIndustryType();
      this.fetchInstitute();
    },

    updated(){
      $('.bSelect').selectpicker('refresh');
    }

  }

  /*$(document).ready(function() {
    $('.bSelect').selectpicker({
      liveSearch:true,
      size:5
    });
  });*/
</script>

<style scoped>
  .mt-10 {
    margin-top: 10px;
  }

</style>
