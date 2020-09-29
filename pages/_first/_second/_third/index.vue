<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row" v-if="loading">
        <div class="offset-lg-1 col-lg-10">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                  <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row" v-if="job_details">

        <div class="offset-lg-1 col-lg-10" v-if="job_details">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12 text-right">
                  <strong>Category:</strong>
                  <span v-html="categoryName(job_details.skill_id)"></span>
                </div>


                <div class="col-12" v-if="job_details.type == 'text'">
                  <div class="row">
                    <div class="col-lg-8 col-md-8 col-sm-12">
                      <div class="col-12">

                        <div class="preview-box">
                          <h4>{{ job_details.job_title }}</h4>
                          <span v-if="company_info_visibility">


                        <h5 v-if="company_info_visibility.company_name_show_status == 1">
                          {{ employer.company_name }}</h5>
                        <h5 v-else>{{ company_info_visibility.company_name }}</h5>
                          </span>
                        </div>

                        <div class="preview-box">
                          <h5>Vacancy</h5>
                          <p v-if="job_details.vacancies_status == 1">Not
                            specific</p>
                          <p v-else>
                            {{ job_details.number_of_vacancies }}</p>
                        </div>

                        <div class="preview-box" v-if="more_job_inforamtion">
                          <h5>Job Responsibilities</h5>
                          <p>{{ more_job_inforamtion.job_responsibilities }}</p>
                        </div>

                        <div class="preview-box" v-if="job_post_employement_status">
                          <h5>Employment Status</h5>
                          <span v-if="job_post_employement_status.length > 0">

                          <span v-for="row in job_post_employement_status"
                                class="mx-1">

                            <span class="badge badge-secondary">{{ row.employment_status }}</span>

                          </span>

                        </span>
                        </div>


                        <div class="preview-box" v-if="candidate_requirement_degree.length > 0">
                          <h5>Educational Requirements</h5>

                          <ul v-for="row in candidate_requirement_degree">
                            <li>
                              {{ degreeName(row.degree_id) }}
                              <span v-if="row.concentration !=''">({{ row.concentration }})</span>
                            </li>
                          </ul>

                        </div>

                        <div class="preview-box" v-if="candidate_requirement_institutes.length > 0">
                          <h5>Requirement Institutes</h5>

                          <ul v-for="row in candidate_requirement_institutes">
                            <li>
                              {{ instituteName(row.institute_id) }}
                            </li>
                          </ul>

                        </div>

                        <div class="preview-box" v-if="candidate_requirement">
                          <h5>Experience Requirements</h5>

                          <ul
                            v-if="candidate_requirement.experience_type == '' || candidate_requirement.experience_type == '0'">
                            <li>Negotiable</li>
                          </ul>

                          <ul v-else>
                            <li>
                              {{ candidate_requirement.minimum_year_of_experience }} to

                              {{ candidate_requirement.maximum_year_of_experience }} year(s)
                            </li>
                          </ul>

                        </div>

                        <div class="preview-box" v-if="candidate_requirement">
                          <h5>Additional Requirements</h5>
                          <p>{{ candidate_requirement.additional_requirements }}</p>
                        </div>

                        <div class="preview-box" v-if="workplaces">
                          <h5>Workplace</h5>
                          <span v-if="workplaces.length >0">

                          <span v-for="row in workplaces" class="mx-1">
                            <span class="badge badge-secondary" style="text-transform: uppercase;">{{ row.name }}</span>
                          </span>

                        </span>
                        </div>

                        <div class="preview-box" v-if="more_job_inforamtion">
                          <h5>Job Location</h5>
                          <p
                            v-html="more_job_inforamtion.job_location_type == '0' ? 'Inside Bangladesh' : 'Outside Bangladesh'"></p>

                          <p v-html="more_job_inforamtion.job_location_address"></p>
                        </div>

                        <span v-if="more_job_inforamtion">
                        <div class="preview-box"
                             v-if="more_job_inforamtion.salary_hide == '' || more_job_inforamtion.salary_hide == 0">
                        <h5>Salary</h5>

                        <p v-if="more_job_inforamtion.negotiable_status == 1">
                          Negotiable</p>
                        <p v-else>{{ more_job_inforamtion.minimum_salary }} - {{
                            more_job_inforamtion.maximum_salary
                          }} , {{
                            more_job_inforamtion.salary_paid
                          }}</p>

                      </div>
                      </span>

                        <div class="preview-box">
                          <h5>Job Source</h5>
                          <p>Hotjobs.com.bd Online Job Posting.</p>
                        </div>


                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="card">
                        <div class="card-header bg-dark text-light">
                          Job Summary
                        </div>
                        <div class="card-body bg-light">
                          <h5><strong>Posted on:</strong> {{ dateFormat(job_details.created_at) }} </h5>
                          <h5><strong>Vacancy:</strong>

                            <span v-if="job_details.vacancies_status == 1">Not specific</span>
                            <span
                              v-else>{{ job_details.number_of_vacancies }}</span>

                          </h5>

                          <h5><strong>Job Nature:</strong>

                            <span v-if="job_post_employement_status.length > 0">

                              <span v-for="row in job_post_employement_status"
                                    class="mx-1">

                                <span class="badge badge-secondary">{{ row.employment_status }}</span>

                              </span>

                            </span>

                            <span v-else>Not specific</span>

                          </h5>

                          <h5><strong>Age:</strong>

                            <span
                              v-if="candidate_requirement.age_min != '' && candidate_requirement.age_max != ''">{{
                                candidate_requirement.age_min
                              }} - {{ candidate_requirement.age_max }} years</span>

                            <span v-else>Not specific</span>

                          </h5>

                          <h5 v-if="more_job_inforamtion"><strong>Job Location:</strong>
                            <span
                              v-html="more_job_inforamtion.job_location_type == '0' ? 'Inside Bangladesh' : 'Outside Bangladesh'"></span>

                            <span v-html="more_job_inforamtion.job_location_address"></span>
                          </h5>

                          <span v-if="more_job_inforamtion">
                          <h5
                            v-if="more_job_inforamtion.salary_hide == '' || more_job_inforamtion.salary_hide == 0">
                            <strong>Salary:</strong>

                            <span v-if="more_job_inforamtion.negotiable_status == 1"> Negotiable</span>
                            <span v-else>
                                                          {{ more_job_inforamtion.minimum_salary }} - {{
                                more_job_inforamtion.maximum_salary
                              }} , {{
                                more_job_inforamtion.salary_paid
                              }}
                                                        </span>

                          </h5>
                            </span>

                          <h5><strong>Application Deadline:</strong>
                            <span v-if="job_details.application_deadline !=''"
                                  v-html="dateFormat(job_details.application_deadline)"></span>
                            <span v-else>Not specific</span>
                          </h5>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 text-center" v-if="job_details.enclose_photograph">
                      <strong style="border-bottom: 2px solid #423A3D;">Read Before Apply</strong>

                      <h4><span class="text-danger">*Photograph</span> must be enclosed with the resume.</h4>
                    </div>

                    <br>


                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                      <strong style="border-bottom: 2px solid #423A3D;">Apply Procedure </strong>
                    </div>
                    <br>

                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">

                      <span v-if="job_details.resume_receiving_option_online">
                        <button class="btn btn-danger my-2" type="button" @click="applyModal">Apply Online</button>

                        <hr>

                      </span>

                      <span v-else>

                        <span v-if="job_details.resume_receiving_option_type == 1">
                            <strong>Email</strong>
                          <br>
                            <strong>Send your CV to <a :href="`mailto:${job_details.contact_email}`">{{
                                job_details.contact_email
                              }}</a> </strong>

                        </span>

                        <span v-if="job_details.resume_receiving_option_type == 2">
                            <strong>Hard Copy</strong>
                          <br>
                            <strong>{{ job_details.hard_copy }}</strong>

                        </span>

                        <span v-if="job_details.resume_receiving_option_type == 3">
                            <strong>Walk in Interview</strong>
                          <br>
                            <strong>{{ job_details.walk_in_interview }}</strong>

                        </span>

                      </span>

                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">Application Deadline:
                      <strong v-if="job_details.application_deadline !=''"
                              v-html="dateFormat(job_details.application_deadline)"></strong>
                      <strong v-else>Not specific</strong>

                    </div>

                    <div class="col-12 border-bottom mt-5 mb-2"></div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <strong>Published On</strong> <br>
                      {{ dateFormat(job_details.application_deadline) }}
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12 mt-3" v-if="company_info_visibility">
                      <strong>Company Information</strong> <br>

                      <span
                        v-html="company_info_visibility.company_name_show_status == 1 ? this.employer.company_name : this.job_details.company_name"></span>
                      <br>

                      <span v-if="company_info_visibility.company_address_show_status !=''">{{
                          employer.company_address
                        }}</span>
                      <br>

                      <span v-if="employer.website_url !=''">Web: <a target="_blank"
                                                                     :href="employer.website_url">{{
                          employer.website_url
                        }}</a></span>
                      <br>
                      <span v-if="company_info_visibility.company_business_show_status !=''">Business: {{
                          employer.business_description
                        }}</span>

                    </div>
                  </div>
                </div>

                <div class="col-12" v-else>
                  <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <h1>{{ employer.company_name }}</h1>
                      <p>{{ job_details.job_title }}</p>
                    </div>
                    <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                      <img :src="getCompanyLogo(job_details.image_url)" :alt="employer.company_name" class="img-fluid">
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div class="offset-lg-1 col-lg-10" v-if="!job_details">
          <div class="card">
            <div class="card-body">
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

    <div class="modal fade bs-example-modal-center" id="warningApply" tabindex="-1" role="dialog"
         aria-labelledby="mySmallModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title mt-0">Warning Message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <div class="modal-body">
            <p>
              hotjobs.com.bd only works as a mean of communication between employers and job-seekers. hotjobs.com.bd Limited will
              not be responsible for any financial transaction or irregularity/ fraud by the company after applying
              through the hotjobs.com.bd website.
            </p>

            <div>
              <b-form-checkbox
                id="status"
                v-model="form.status"
                name="status"
                value="1"
                unchecked-value="0"
              >
                I have read the above warning message.
              </b-form-checkbox>

            </div>


          </div>

          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
            <button type="submit" :disabled="form.status != '1'" @click="applyButton" class="btn btn-success">Apply
            </button>
          </div>

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
    return /^\d+$/.test(params.first)
  },

  data() {
    return {
      loading: true,
      job_id: this.$route.params.first,
      company_name: this.$route.params.second,
      job_slug: this.$route.params.third,

      job_details: '',
      skills: '',
      company_info_visibility: '',
      employer: '',
      more_job_inforamtion: '',
      workplaces: '',
      job_post_employement_status: '',
      candidate_requirement: '',
      candidate_requirement_degree: '',
      without_filter_degrees: '',
      candidate_requirement_institutes: '',
      institutes: '',
      form: new Form({
        id: '',
        status: '0'
      }),
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    getCompanyLogo(url) {
      let image_url = this.url + url;
      return image_url;
    },

    fetchJobDetails() {
      var vm = this;
      var job_id = vm.job_id;
      var company_name = vm.company_name;
      var job_slug = vm.job_slug;

      this.$axios.get('fetch-job-pos-details/' + job_id + '/' + company_name + '/' + job_slug).then(function (response) {

        vm.job_details = response.data;
        vm.company_info_visibility = response.data.company_info_visibility;
        vm.employer = response.data.employer;
        vm.more_job_inforamtion = response.data.more_job_inforamtion;
        vm.workplaces = response.data.more_job_inforamtion.workplaces;
        vm.job_post_employement_status = response.data.job_post_employement_status;
        vm.candidate_requirement = response.data.candidate_requirement;
        vm.candidate_requirement_degree = response.data.candidate_requirement.candidate_requirement_degree;
        vm.candidate_requirement_institutes = response.data.candidate_requirement.candidate_requirement_institutes;

        vm.loading = false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

    async fetchLevelOfEducation() {
      return await this.$axios.get('skills')
        .then((response) => {

          this.skills = response.data;

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

    async fetchInstitutes() {
      return await this.$axios.get('institutes')
        .then((response) => {

          this.institutes = response.data;

        })

        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        })
    },

    categoryName: function (id) {

      var items = this.skills;
      var row = id;

      let skill = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == row) {
          skill.push(items[i].name);
        }
      }

      let separator = "";
      let strOptions = "";
      skill.forEach(word => {
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

    instituteName: function (id) {

      var items = this.institutes;
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

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

    applyModal() {

      this.form.reset();
      $('#warningApply').modal('show');

    },

    applyButton() {

      var user = window.$nuxt.$cookies.get('user');

      if (user) {

        var vm = this;

        if (user.type != 'employee') {

          Toast.fire({
            icon: 'warning',
            title: 'Please login as a employee'
          });

        }

        window.$nuxt.$cookies.remove('apply');

        if (vm.company_info_visibility.company_name_show_status == 1) {
          var company_name = vm.employer.company_name;
        } else {
          var company_name = vm.company_info_visibility.company_name;
        }

        const cookieValObject = {
          job_title: vm.job_details.job_title,
          company_name: company_name,
          employee_id: user.id,
          employee_name: user.name,
          job_id: vm.job_details.id,
        }

        window.$nuxt.$cookies.set('apply', cookieValObject, {
          path: '/',
          maxAge: 1800
        })

        this.$router.push(`/my-jobs/job-online-apply`);

      } else {

        Toast.fire({
          icon: 'warning',
          title: 'Please login as a employee'
        });

      }
      $('#warningApply').modal('hide');

    }
  },

  created() {
    this.fetchJobDetails();
    this.fetchLevelOfEducation();
    this.fetchDegrees();
    this.fetchInstitutes();
  }
}
</script>

<style scoped>

</style>
