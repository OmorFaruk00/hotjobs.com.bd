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
                <div class="col-lg-2 col-md-2 col-sm-12 mb-1">
                  <select v-model="perPage" class="form-control">
                    <option value="20">20</option>
                    <option value="50">50</option>
                    <option value="100">100</option>
                  </select>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12 mb-1">

                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 mb-1">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="bx bx-search"></i></div>
                    </div>
                    <input type="text" class="form-control" v-model="job_title" placeholder="type job title">
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-12">
                  <b-table responsive id="post_job" striped hover :per-page="perPage" :current-page="currentPage"
                           :items="fetchTableData" :fields="fields">
                    <template v-slot:cell(index)="data">
                      {{ data.index + 1 }}
                    </template>


                    <template v-slot:cell(application_deadline)="data">

                      {{ dateFormat(data.value) }}

                    </template>

                    <template v-slot:cell(status)="data">

                      <span v-html="status(data.value)"></span>

                    </template>

                    <template v-slot:cell(applicant)="data">

                      <span>{{ data.value.length }}</span>

                      <a v-if="data.value.length > 0" @click="fetchApplicant(data.item.slug,data.item.id)"
                         class="btn btn-info btn-sm text-light"><i class="bx bx-list-ol"></i> Lists</a>

                    </template>

                    <template v-slot:cell(action)="data">

                      <span v-if="data.item.type == 'text'">
                        <button type="button" @click="editModal(data.item)" class="btn btn-info btn-sm"><i
                          class="fas fa-edit"></i></button>
                      </span>

                    </template>

                  </b-table>

                  <b-pagination
                    v-model="currentPage"
                    :total-rows="itemLength"
                    :per-page="perPage"
                    aria-controls="post_job"
                  ></b-pagination>
                </div>
              </div>


            </div>
          </div>
        </div>

      </div>


    </div>

    <div class="modal fade" id="addJobPost" tabindex="-1" role="dialog" aria-labelledby="addJobPost"
         aria-hidden="true">

      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Job Post</h5>
            <h5 class="modal-title" v-else>Update Job Post</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="editMode ? update() : create()">
            <div class="modal-body">


              <div class="row d-none">
                <label class="col-md-2 col-form-label">Employer <span class="text-danger">*</span></label>
                <div class="col-md-10 mt-10">

                  <select @change="employerDetails()" v-model="primary_job_information.employer_id" name="employer_id"
                          class="form-control"
                          :class="{ 'is-invalid': primary_job_information.errors.has('job_title') }">

                    <option v-for="(row,key) in employers" :value="row.id">{{ row.username }} ({{
                        row.company_name
                      }})
                    </option>
                  </select>


                  <small v-if="errors.employer_id" class="text-danger with-errors"
                         v-html="errors.employer_id[0]"></small>

                </div>


              </div>


              <div class="form-group row" style="margin-top: 5px;">
                <label class="col-md-2 col-sm-4 col-form-label">Service Type <span class="text-danger">*</span></label>
                <div class="col-md-10 col-sm-8 mt-10">

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
                <label class="col-md-2 col-sm-4 col-form-label">Job Title <span class="text-danger">*</span></label>
                <div class="col-md-10 col-sm-8">
                  <input v-model="primary_job_information.job_title" type="text" name="job_title"
                         placeholder="Enter job title"
                         class="form-control"
                         :class="{ 'is-invalid': primary_job_information.errors.has('job_title') }">
                  <small v-if="errors.job_title" class="text-danger with-errors"
                         v-html="errors.job_title[0]"></small>
                </div>
              </div>

              <div class="form-group row">
                <label class="col-md-2 col-sm-4 col-form-label">No. of Vacancies <span
                  class="text-danger">*</span></label>
                <div class="col-md-6 col-sm-6">
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

                <div class="col-md-4 col-sm-2">
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
                <label class="col-md-2 col-form-label">Job Category <span class="text-danger">*</span></label>
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

                        <b-form-select-option v-for="(row,key) in jobs_types" :value="row.id">
                          {{ row.name }}
                        </b-form-select-option>

                      </b-form-select>
                      <small v-if="errors.skill_id" class="text-danger with-errors"
                             v-html="errors.skill_id[0]"></small>

                    </div>

                  </div>
                </div>
              </div>


              <div class=" row">
                <label class="col-md-2 col-form-label">Employment Status <span class="text-danger">*</span></label>
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

              <div class="row mb-2">
                <label class="col-md-2 col-form-label">Application Deadline <span class="text-danger">*</span></label>
                <div class="col-md-10">

                  <no-ssr>
                    <datepicker placeholder="select date" v-model="primary_job_information.application_deadline"
                                :class="{ 'is-invalid': primary_job_information.errors.has('application_deadline') }"></datepicker>
                  </no-ssr>
                  <small v-if="errors.application_deadline" class="text-danger with-errors"
                         v-html="errors.application_deadline[0]"></small>
                </div>

              </div>


              <div class="row">
                <label class="col-md-2 col-form-label">Resume Receiving Option <span
                  class="text-danger">*</span></label>

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
                        <label>Email <span class="text-danger">*</span></label>
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
                        <label>Hard Copy <span class="text-danger">*</span></label>
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
                        <label>Walk in Interview <span class="text-danger">*</span></label>
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
                <div class="col-md-10 mt-2">

                  <input type="checkbox" v-model="primary_job_information.enclose_photograph" id="switch1"
                         switch="success"/>
                  <label for="switch1" data-on-label="Yes"
                         data-off-label="No"></label>

                </div>

              </div>

              <hr>

              <div class=" row">
                <label class="col-md-2 col-form-label">Job Level <span class="text-danger">*</span></label>
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
                <label class="col-md-2 col-form-label">Job Responsibilities <span class="text-danger">*</span></label>
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
                <label class="col-md-2 col-form-label">Workplace <span class="text-danger">*</span></label>
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
                <label class="col-md-2 col-form-label">Job Location <span class="text-danger">*</span></label>
                <div class="col-md-10 mt-10">

                  <div class="row">
                    <div class="col-md-2 col-sm-12">
                      <b-form-select v-model="primary_job_information.job_location_type" class="mb-3">
                        <b-form-select-option value="0">Inside Bangladesh</b-form-select-option>
                        <b-form-select-option value="1">Outside Bangladesh</b-form-select-option>
                      </b-form-select>

                      <small v-if="errors.job_location_type" class="text-danger with-errors"
                             v-html="errors.job_location_type[0]"></small>
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

              <div class="row mt-2">
                <label class="col-md-2 col-form-label">Salary <span class="text-danger">*</span></label>
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

              <hr>


              <div class="form-group row">
                <label class="col-md-2 col-form-label">Degree</label>
                <div class="col-md-10">
                  <div class="row">
                    <div class="col-md-2 col-sm-12">

                      <b-form-select v-model="degrees.level_of_education_id"
                                     @change="fetchLevelOfEducationDegree()" class="mb-3">

                        <b-form-select-option :value="null">Please select an option</b-form-select-option>
                        <b-form-select-option v-for="row in level_of_educations" :value="row.id">{{
                            row.name
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

                    <div class="col-md-4 col-sm-12 mt-n2">

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
                <label class="col-md-2 col-form-label">Experience <span class="text-danger">*</span></label>
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
                        <label>Minimum year of experience <span class="text-danger">*</span></label>

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
                        <label>Maximum year of experience <span class="text-danger">*</span></label>

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
                  </div>

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


              <div class="row">
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

              <div class="row mt-2">
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
                <label class="col-md-2 col-form-label">Gender <span class="text-danger">*</span></label>
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


              <hr>

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
                <div class="col-md-10 mt-2">

                  <input type="checkbox" v-model="primary_job_information.company_address_show_status"
                         id="company_address_show_status"
                         switch="success"/>
                  <label for="company_address_show_status" data-on-label="Show"
                         data-off-label="Hide"></label>

                </div>

              </div>


              <div class="row">
                <label class="col-md-2 col-form-label">Company Industry Type <span class="text-danger">*</span></label>
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
                      <input type="text" class="form-control" :value="employer.business_description"
                             readonly>
                    </div>

                  </div>


                </div>

              </div>


              <h3>Billing Information</h3>

              <div class="row">
                <label class="col-md-2 col-form-label">Billing Information <span class="text-danger">*</span></label>
                <div class="col-md-10 mt-10">

                  <b-form-select
                    v-model="primary_job_information.contact_people_id"
                    :options="company_contact_peoples"
                    class="mb-3"
                    value-field="id"
                    text-field="contact_person_name"
                    disabled-field="notEnabled"
                  ></b-form-select>

                  <small v-if="errors.contact_people_id" class="text-danger with-errors"
                         v-html="errors.contact_people_id[0]"></small>
                </div>

              </div>


              <hr>

              <h3>Matching Criteria</h3>

              <div class="row">

                <div class="col-lg-6 col-md6 col-sm-12">

                  <div class="row d-none d-sm-block">
                    <div class="col align-self-end" style="text-align: end;"><span
                      class="text-center">Set Mandatory</span>
                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Age <sup><i class="bx bx-question-mark"></i></sup>

                      <br>


                      <span
                        v-if="primary_job_information.age_min != '' && primary_job_information.age_max != ''">{{
                          primary_job_information.age_min
                        }} - {{ primary_job_information.age_max }} year</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.age_maching_status" type="checkbox"
                               id="age_maching_status" switch="bool"
                               :disabled="primary_job_information.age_min == '' && primary_job_information.age_max == ''"/>
                        <label for="age_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="age_maching_mandatory_status"
                        v-model="primary_job_information.age_maching_mandatory_status"
                        name="age_maching_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.age_min == '' && primary_job_information.age_max == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Total year of experience <sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span
                        v-if="primary_job_information.minimum_year_of_experience !='' && primary_job_information.maximum_year_of_experience !=''">{{
                          primary_job_information.minimum_year_of_experience
                        }} - {{ primary_job_information.maximum_year_of_experience }} years</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.total_year_of_experience_status"
                               type="checkbox" id="total_year_of_experience_status" switch="bool"
                               :disabled="primary_job_information.minimum_year_of_experience =='' && primary_job_information.maximum_year_of_experience ==''"/>
                        <label for="total_year_of_experience_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="total_year_of_experience_mandatory_status"
                        v-model="primary_job_information.total_year_of_experience_mandatory_status"
                        name="total_year_of_experience_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.minimum_year_of_experience =='' && primary_job_information.maximum_year_of_experience ==''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Gender <sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span v-if="primary_job_information.gender.length > 0">
                                    <span v-for="row in primary_job_information.gender">
                                      <span class="badge badge-secondary m-1">{{ row }}</span>
                                    </span>
                                  </span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.gender_maching_status" type="checkbox"
                               id="gender_maching_status" switch="bool"
                               :disabled="primary_job_information.gender == ''"/>
                        <label for="gender_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="gender_mandatory_status"
                        v-model="primary_job_information.gender_mandatory_status"
                        name="gender_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.gender == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Area of experience <sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span v-if="primary_job_information.area_of_experience != ''">{{
                          primary_job_information.area_of_experience
                        }}</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.area_of_experience_maching_status"
                               type="checkbox" id="area_of_experience_maching_status" switch="bool"
                               :disabled="primary_job_information.area_of_experience == ''"/>
                        <label for="area_of_experience_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="area_of_experience_mandatory_status"
                        v-model="primary_job_information.area_of_experience_mandatory_status"
                        name="area_of_experience_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.area_of_experience == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Skills <sup><i class="bx bx-question-mark"></i></sup>

                      <br>
                      <span
                        v-if="primary_job_information.skills != ''">{{ primary_job_information.skills }}</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.skills_maching_status" type="checkbox"
                               id="skills_maching_status" switch="bool"
                               :disabled="primary_job_information.skills == ''"/>
                        <label for="skills_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="skills_mandatory_status"
                        v-model="primary_job_information.skills_mandatory_status"
                        name="area_of_experience_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.skills == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                </div>

                <div class="col-lg-6 col-md6 col-sm-12">

                  <div class="row d-none d-sm-block">
                    <div class="col align-self-end" style="text-align: end;"><span
                      class="text-center">Set Mandatory</span>
                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Job location (Current)<sup><i
                      class="bx bx-question-mark"></i></sup>

                      <br>

                      <span
                        v-if="primary_job_information.job_location_type !='' && primary_job_information.job_location_address != ''">{{
                          primary_job_information.job_location_address
                        }}</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-2</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.job_location_current_maching_status"
                               type="checkbox" id="job_location_current_maching_status" switch="bool"
                               :disabled="primary_job_information.job_location_type =='' && primary_job_information.job_location_address == ''"/>
                        <label for="job_location_current_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="job_location_current_mandatory_status"
                        v-model="primary_job_information.job_location_current_mandatory_status"
                        name="job_location_current_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.job_location_type =='' && primary_job_information.job_location_address == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Salary<sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span
                        v-if="primary_job_information.negotiable_status =='' || primary_job_information.negotiable_status =='0'">{{
                          primary_job_information.minimum_salary
                        }} - {{ primary_job_information.maximum_salary }}</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-2</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.salary_maching_status" type="checkbox"
                               id="salary_maching_status" switch="bool"
                               :disabled="primary_job_information.negotiable_status ==1"/>
                        <label for="salary_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="salary_mandatory_status"
                        v-model="primary_job_information.salary_mandatory_status"
                        name="salary_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.negotiable_status ==1"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Area of business<sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span v-if="primary_job_information.area_of_business !=''">{{
                          primary_job_information.area_of_business
                        }}</span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-3</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.area_of_business_maching_status"
                               type="checkbox" id="area_of_business_maching_status" switch="bool"
                               :disabled="primary_job_information.area_of_business ==''"/>
                        <label for="area_of_business_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="area_of_business_mandatory_status"
                        v-model="primary_job_information.area_of_business_mandatory_status"
                        name="area_of_business_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.area_of_business ==''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                  <div class="row mb-2">
                    <div class="col-lg-8">Job level<sup><i class="bx bx-question-mark"></i></sup>

                      <br>

                      <span v-if="primary_job_information.job_level.length > 0">
                                    <span v-for="row in primary_job_information.job_level">
                                      <span class="badge badge-secondary m-1">{{ row }}</span>
                                    </span>
                                  </span>

                      <span v-else style="font-size: 12px;">Value not provided. <span
                        class="text-info">Go Step-2</span></span>

                    </div>
                    <div class="col-lg-2">

                      <div class="square-switch">
                        <input v-model="primary_job_information.job_level_maching_status" type="checkbox"
                               id="job_level_maching_status" switch="bool"
                               :disabled="primary_job_information.job_level == ''"/>
                        <label for="job_level_maching_status" data-on-label="Yes"
                               data-off-label="No"></label>
                      </div>

                    </div>
                    <div class="col-lg-2 text-center">

                      <b-form-checkbox
                        id="job_level_mandatory_status"
                        v-model="primary_job_information.job_level_mandatory_status"
                        name="job_level_mandatory_status"
                        value="1"
                        unchecked-value="0"
                        :disabled="primary_job_information.job_level == ''"
                      >
                      </b-form-checkbox>

                    </div>
                  </div>

                </div>

              </div>

              <div class="row" v-if="editMode">
                <label class="col-md-2 col-form-label">Status <span class="text-danger">*</span></label>
                <div class="col-md-10 mt-10">
                  <select name="status" id="" class="form-control" v-model="primary_job_information.status">
                    <option value="0">Later</option>
                    <option value="2">Post</option>
                  </select>
                </div>

              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

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
  name: "dashboard",
  components: {
    employerNavbar,
    employerSubNavbar,
  },

  data() {
    return {
      editMode: false,
      perPage: 20,
      currentPage: 1,
      job_title: '',
      fields: [
        'index',
        'job_title',
        'application_deadline',
        'type',
        'status',
        'applicant',
        'action',
      ],

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
      authUser: '',
      company_industry_types: '',
      employers: '',
      employer: '',
      errors: '',
      degrees: {
        'level_of_education_id': '',
        'degree_id': '',
        'concentration': '',
      },
      primary_job_information: new Form({
        id: '',
        employer_id: '',
        service_type: '',
        job_title: '',
        number_of_vacancies: '',
        vacancies_status: '',
        job_category: 'general',
        skill_id: '',
        employment_status: [],
        application_deadline: '',
        resume_receiving_option_online: '',
        resume_receiving_option_type: '',
        contact_email: '',
        hotjobs_email_system: '',
        hard_copy: '',
        walk_in_interview: '',
        special_instruction: '',
        enclose_photograph: '',

        // 2
        job_level: [],
        job_context: '',
        job_responsibilities: '',
        workplace: [],
        job_location_type: '',
        job_location_address: '',
        minimum_salary: '',
        maximum_salary: '',
        salary_paid: '',
        negotiable_status: '',
        salary_hide: '',
        additional_salary_info: '',
        compensation_other_benefits_status: '0',
        compensation_other_benefits_items: [],
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
        gender: [],
        age_min: '',
        age_max: '',
        preferred_retired_army_officer: '',

        //4
        company_name_show_status: '',
        company_name: '',
        company_address_show_status: '',
        company_industry_type_id: '',
        company_business_show_status: '',
        contact_people_id: '',

        //5
        age_maching_status: '',
        age_maching_mandatory_status: '',
        total_year_of_experience_status: '',
        total_year_of_experience_mandatory_status: '',
        gender_maching_status: '',
        gender_mandatory_status: '',
        area_of_experience_maching_status: '',
        area_of_experience_mandatory_status: '',
        skills_maching_status: '',
        skills_mandatory_status: '',
        job_location_current_maching_status: '',
        job_location_current_mandatory_status: '',
        salary_maching_status: '',
        salary_mandatory_status: '',
        area_of_business_maching_status: '',
        area_of_business_mandatory_status: '',
        job_level_maching_status: '',
        job_level_mandatory_status: '',
        status: '',

      }),
      post_job: [],
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    async loadJobPost() {
      var token = window.$nuxt.$cookies.get('token');
      return await this.$axios.get('/employer-job-post?token=' + token)
        .then((response) => {
          this.post_job = response.data;
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

    status(id) {

      if (id == 2) {
        return '<span class="badge badge-success">Active</span>';
      } else if (id == 1) {
        return '<span class="badge badge-warning">Waiting for Approve</span>';
      } else if (id == 0) {
        return '<span class="badge badge-warning">Published Later</span>';
      } else {
        return '<span class="badge badge-warning"></span>';
      }

    },

    dateFormat(date) {
      return this.$moment(date).format('D MMM ,YYYY');
    },

    fetchApplicant(job_title, job_id) {
      this.$router.push(`/employer/applicant/${job_id}/${job_title}`)
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

      });
    },

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

      });
    },

    async load_institute() {
      var token = window.$nuxt.$cookies.get('token');
      return this.$axios.get('institute?token=' + token)
        .then((response) => {
          this.institutes = response.data;

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

    async fetch_employers() {
      var token = window.$nuxt.$cookies.get('token');
      return await this.$axios.get('/fetch-all-employer?token=' + token)
        .then((response) => {
          this.employers = response.data;
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

    editModal(row) {

      this.editMode = true;
      this.primary_job_information.reset();
      this.fetch_employers();
      this.fetchLevelOfEducation();
      this.fetchDegrees();
      this.load_institute();

      $('#addJobPost').modal('show');

      var vm = this.primary_job_information;

      vm.id = row.id;
      vm.employer_id = row.employer_id;
      vm.service_type = row.service_type;
      vm.job_title = row.job_title;
      vm.number_of_vacancies = row.number_of_vacancies;
      vm.vacancies_status = row.vacancies_status;
      vm.job_category = row.job_category;
      vm.skill_id = row.skill_id;

      // console.log(row);

      const employement_status = row.job_post_employement_status;
      for (const value of employement_status) {
        vm.employment_status.push(value.employment_status)
      }

      vm.application_deadline = row.application_deadline;
      vm.resume_receiving_option_online = row.resume_receiving_option_online;
      vm.resume_receiving_option_type = row.resume_receiving_option_type;
      vm.contact_email = row.contact_email;
      vm.hotjobs_email_system = row.hotjobs_email_system;
      vm.hard_copy = row.hard_copy;
      vm.walk_in_interview = row.walk_in_interview;
      vm.special_instruction = row.special_instruction;
      vm.enclose_photograph = row.enclose_photograph;

      // step2
      const job_levels = row.more_job_inforamtion.job_levels;
      for (const value of job_levels) {
        vm.job_level.push(value.level_name);
      }

      vm.job_context = row.more_job_inforamtion.job_context;
      vm.job_responsibilities = row.more_job_inforamtion.job_responsibilities;

      const workplaces = row.more_job_inforamtion.workplaces;
      for (const value of workplaces) {
        vm.workplace.push(value.name);
      }

      vm.job_location_type = row.more_job_inforamtion.job_location_type;
      vm.job_location_address = row.more_job_inforamtion.job_location_address;
      vm.minimum_salary = row.more_job_inforamtion.minimum_salary;
      vm.maximum_salary = row.more_job_inforamtion.maximum_salary;
      vm.salary_paid = row.more_job_inforamtion.salary_paid;
      vm.negotiable_status = row.more_job_inforamtion.negotiable_status;
      vm.salary_hide = row.more_job_inforamtion.salary_hide;
      vm.additional_salary_info = row.more_job_inforamtion.additional_salary_info;
      vm.compensation_other_benefits_status = row.more_job_inforamtion.compensation_other_benefits_status;

      if (row.more_job_inforamtion.compensation_other_benifit) {
        const compensation_other_benifit_items = row.more_job_inforamtion.compensation_other_benifit.compensation_other_benifit_items;
        for (const value of compensation_other_benifit_items) {
          vm.compensation_other_benefits_items.push(value.name);
        }
        vm.festival_bonus = row.more_job_inforamtion.compensation_other_benifit.festival_bonus;
        vm.others = row.more_job_inforamtion.compensation_other_benifit.others;
      }

      // step 3

      const degrees = row.candidate_requirement.candidate_requirement_degree;
      for (const value of degrees) {
        vm.degree.push({
          level_of_education_id: value.level_of_education_id,
          degree_id: value.degree_id,
          concentration: value.concentration,
        })
      }

      const candidate_requirement_institutes = row.candidate_requirement.candidate_requirement_institutes;
      for (const value of candidate_requirement_institutes) {
        vm.institution_id.push(value.institute_id)
      }

      vm.other_educational_qualification = row.candidate_requirement.other_educational_qualification;
      vm.training_trade_course = row.candidate_requirement.training_trade_course;
      vm.professional_certification = row.candidate_requirement.professional_certification;
      vm.experience_type = row.candidate_requirement.experience_type;
      vm.minimum_year_of_experience = row.candidate_requirement.minimum_year_of_experience;
      vm.maximum_year_of_experience = row.candidate_requirement.maximum_year_of_experience;
      vm.freshers_applay = row.candidate_requirement.freshers_applay;
      vm.area_of_experience = row.candidate_requirement.area_of_experience;
      vm.area_of_business = row.candidate_requirement.area_of_business;
      vm.skills = row.candidate_requirement.skills;
      vm.additional_requirements = row.candidate_requirement.additional_requirements;

      const candidate_requirement_genders = row.candidate_requirement.candidate_requirement_genders;
      for (const value of candidate_requirement_genders) {

        vm.gender.push(value.name)

      }

      vm.age_min = row.candidate_requirement.age_min;
      vm.age_max = row.candidate_requirement.age_max;
      vm.preferred_retired_army_officer = row.candidate_requirement.preferred_retired_army_officer;

      // step4
      vm.company_name_show_status = row.company_info_visibility.company_name_show_status;
      vm.company_name = row.company_info_visibility.company_name;
      vm.company_address_show_status = row.company_info_visibility.company_address_show_status;
      vm.company_industry_type_id = row.company_info_visibility.company_industry_type_id;
      vm.company_business_show_status = row.company_info_visibility.company_business_show_status;
      vm.contact_people_id = row.company_info_visibility.contact_people_id;

      // step5
      vm.age_maching_status = row.matching_criteria.age_maching_status;
      vm.age_maching_mandatory_status = row.matching_criteria.age_maching_mandatory_status;
      vm.total_year_of_experience_status = row.matching_criteria.total_year_of_experience_status;
      vm.total_year_of_experience_mandatory_status = row.matching_criteria.total_year_of_experience_mandatory_status;
      vm.gender_maching_status = row.matching_criteria.gender_maching_status;
      vm.gender_mandatory_status = row.matching_criteria.gender_mandatory_status;
      vm.area_of_experience_maching_status = row.matching_criteria.area_of_experience_maching_status;
      vm.area_of_experience_mandatory_status = row.matching_criteria.area_of_experience_mandatory_status;
      vm.skills_maching_status = row.matching_criteria.skills_maching_status;
      vm.skills_mandatory_status = row.matching_criteria.skills_mandatory_status;
      vm.job_location_current_maching_status = row.matching_criteria.job_location_current_maching_status;
      vm.job_location_current_mandatory_status = row.matching_criteria.job_location_current_mandatory_status;
      vm.salary_maching_status = row.matching_criteria.salary_maching_status;
      vm.salary_mandatory_status = row.matching_criteria.salary_mandatory_status;
      vm.area_of_business_maching_status = row.matching_criteria.area_of_business_maching_status;
      vm.area_of_business_mandatory_status = row.matching_criteria.area_of_business_mandatory_status;
      vm.job_level_maching_status = row.matching_criteria.job_level_maching_status;
      vm.job_level_mandatory_status = row.matching_criteria.job_level_mandatory_status;
      vm.status = row.status;

      // api call
      this.fetchSkill();
      this.employerDetails();
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

    employerDetails() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      var slug = vm.primary_job_information.employer_id;

      if (slug) {
        this.$axios.get('fetch-employer-details/' + slug + '?token=' + token).then(function (response) {

          vm.employer = response.data.employer;
          vm.primary_job_information.company_name = response.data.employer.company_name;
          vm.company_contact_peoples = response.data.employer.company_contact_peoples;
          vm.company_industry_types = response.data.industryTypes;

        }).catch(function (error) {

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

        });
      }


    },

    update() {

      var vm = this;
      var token = window.$nuxt.$cookies.get('token');
      this.primary_job_information.put(this.url + 'job-post-update/' + this.primary_job_information.id + '?token=' + token)

        .then((response) => {

          $('#addJobPost').modal('hide');

          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

          this.$emit('afterUpdate');

        })
        .catch((error) => {

          // vm.errors = error.response.data;

          // cosnole.log(error.response.data);

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

          /*if (error.response.status == 422) {
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
          }*/

        })

    },


  },

  computed: {
    itemLength() {
      return this.post_job.length
    },

    fetchTableData() {
      return this.post_job.filter((data) => data.job_title.toLowerCase().match(this.job_title.toLowerCase()));
    },
  },

  created() {
    this.loadJobPost();

    this.$on('afterUpdate', () => {
      this.loadJobPost();
    });
  }
}
</script>

<style scoped>
.b-pagination {
  float: right;
  margin-top: 5px;
}
</style>
