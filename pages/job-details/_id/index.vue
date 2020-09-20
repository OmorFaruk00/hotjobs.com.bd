<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">

        <div class="offset-lg-1 col-lg-10">
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

                  <div class="col-lg-12 col-md-12 col-sm-12 text-center"><strong>Apply
                    Procedure </strong></div>

                  <br>
                  <br>

                  <div class="col-lg-12 col-md-12 col-sm-12 text-center">

                    <strong v-if="job_details.resume_receiving_option_type == 1">Email</strong>
                    <strong v-if="job_details.resume_receiving_option_type == 2">Hard Copy</strong>
                    <strong v-if="job_details.resume_receiving_option_type == 3">Walk in Interview</strong>

                    <br>


                    <button class="btn btn-danger my-2">Apply Online</button>
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

      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      id: this.$route.params.id,
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
      var slug = vm.id;

      this.$axios.get('fetch-job-pos-details/' + slug).then(function (response) {

        vm.job_details = response.data;
        vm.company_info_visibility = response.data.company_info_visibility;
        vm.employer = response.data.employer;
        vm.more_job_inforamtion = response.data.more_job_inforamtion;
        vm.workplaces = response.data.more_job_inforamtion.workplaces;
        vm.job_post_employement_status = response.data.job_post_employement_status;
        vm.candidate_requirement = response.data.candidate_requirement;
        vm.candidate_requirement_degree = response.data.candidate_requirement.candidate_requirement_degree;
        vm.candidate_requirement_institutes = response.data.candidate_requirement.candidate_requirement_institutes;

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
  },

  beforeMount() {
    this.fetchJobDetails();
    this.fetchLevelOfEducation();
    this.fetchDegrees();
    this.fetchInstitutes();
  }
}
</script>

<style scoped>

</style>
