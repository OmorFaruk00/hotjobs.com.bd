<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">

              <div class="row">

                <div class="col-lg-2 col-md-2 col-sm-6">

                  <b-form-select
                    v-model="filter.skill_id"
                    :options="all_categories"
                    class="mb-3"
                    value-field="id"
                    text-field="name"
                    disabled-field="notEnabled"
                    @change="skillWiseJobFilter"
                  ></b-form-select>

                </div>

                <!--<div class="col-lg-2 col-md-2 col-sm-6">

                  <b-form-select v-model="filter.industry_id" class="mb-3" @change="filterIndustryJob">
                    <b-form-select-option :value="null">Please select industry</b-form-select-option>
                    <b-form-select-option v-for="row in industials" :value="row.id">{{
                        row.name
                      }}
                    </b-form-select-option>
                  </b-form-select>

                </div>

                <div class="col-lg-2 col-md-2 col-sm-6">
                  <b-form-select v-model="filter.employment_status" :options="option_employment_status"></b-form-select>
                  <div class="mt-3">Selected: <strong>{{ filter.employment_status }}</strong></div>
                </div>-->

              </div>

            </div>
          </div>
        </div>

      </div>

      <div class="row" v-if="loading">

        <div class="col-lg-12">
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

      <div class="row" v-if="current_jobs">
        <div class="col-lg-10" v-if="current_jobs.length > 0">
          <div class="card">
            <div class="card-body">

              <div class="mb-2">
                <div class="row">
                  <div class="col-lg-2 col-md-2 col-sm-12">
                    <select v-model="perPage" class="form-control">
                      <option value="20">20</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                  </div>
                </div>
              </div>

              <div id="my-table" v-for="row in lists" class="card-body border mb-2 job-short-box">

                <a :href="`/${row.id}/${row.employer.slug}/${row.slug}`" target="_blank">
                  <!--                <a href="javaScript:void(0)" @click="fetchJobDetails(row.id,row.employer.slug,row.slug)">-->
                  <h4 class="card-title">{{ row.job_title }}</h4>
                  <h6 class="card-subtitle mb-2 text-muted">


                    <span v-if="row.company_info_visibility">
                      <span v-if="row.company_info_visibility.company_name_show_status == 1">
                      {{ row.employer.company_name }}
                  </span>
                    <span v-else>{{ row.company_info_visibility.company_name }}</span>
                    </span>


                  </h6>

                  <ul class="job-preview-list">
                    <li v-if="row.more_job_inforamtion">
                      <i class="bx bx-map"></i>

                      <span
                        v-html="row.more_job_inforamtion.job_location_type == '0' ? 'Inside Bangladesh' : 'Outside Bangladesh'"></span>,
                      <span>{{ row.more_job_inforamtion.job_location_address }}</span>


                    </li>

                    <span v-if="row.candidate_requirement">
                      <li v-if="row.candidate_requirement.candidate_requirement_degree.length > 0">
                      <i class="bx bxs-graduation"></i>

                      <span v-for="(inner_row,index) in row.candidate_requirement.candidate_requirement_degree">
                      <span class="badge badge-secondary mx-1" v-text="degreeName(inner_row.degree_id)"></span>
                      <span v-if="inner_row.concentration != ''">({{ inner_row.concentration }})</span>
                    </span>

                    </li>

                      <li v-if="row.candidate_requirement.experience_type == 0"><i class="bx bx-briefcase"></i> No Experience</li>
                      <li v-if="row.candidate_requirement.experience_type == 1"><i class="bx bx-briefcase"></i> {{
                          row.candidate_requirement.minimum_year_of_experience
                        }} - {{ row.candidate_requirement.maximum_year_of_experience }} years</li>
                    </span>


                  </ul>

                  <ul class="job-preview-list text-right" v-if="row.application_deadline !=''">
                    <li><i class="bx bx-calendar"></i> Application Deadline:

                      <strong v-html="dateFormat(row.application_deadline)"></strong>

                    </li>
                  </ul>
                </a>

              </div>

              <div style="float: right;">
                <b-pagination
                  :total-rows="totalRows"
                  v-model="currentPage"
                  :per-page="perPage"
                />
              </div>


            </div>
          </div>
        </div>

        <div class="col-lg-10" v-if="!loading && current_jobs.length <= 0">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title text-center">Data not found</h4>
            </div>
          </div>
        </div>

        <div class="col-lg-2">
          <div class="card">
            <div class="card-body" style="max-width: 80%;margin: 0 auto;">
              <h1 class="card-title text-center">Read candidate feedback</h1>
            </div>
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
    return /^\d+$/.test(params.id)
  },
  data() {
    return {
      currentPage: 1,
      perPage: '20',
      loading: true,
      id: this.$route.params.id,
      slug: this.$route.params.slug,

      option_employment_status: [
        {value: '', text: 'Select Employment Status'},
        {value: 'Full Time', text: 'Full Time'},
        {value: 'Part Time', text: 'Part Time'},
        {value: 'Contract', text: 'Contract'},
        {value: 'Internship', text: 'Internship'},
        {value: 'Freelance', text: 'Freelance'},
      ],
      selected: '',
      current_jobs: [],
      all_categories: [],
      industry_id: '',
      industials: [],
      filter: new Form({
        skill_id: this.$route.params.id,
        industry_id: '',
        employment_status: '',
      }),
      without_filter_degrees: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

    fetchDegrees() {
      return this.$axios.get('fetch-level-of-degree')
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

    generalCategoryJobShortDetails() {
      var vm = this;

      var id = vm.id;
      var slug = vm.slug;

      this.$axios.get('general-category-wise-job/' + id + '/' + slug).then(function (response) {

        vm.current_jobs = response.data;
        vm.loading = false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
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

    fetchJobDetails(job_id, company_name, title,) {

      var job_id = job_id;
      var company_name = company_name;
      var title = title;
      // this.$router.push(`/${job_id}/${company_name}/${title}`)

      let route = this.$router.resolve(`/${job_id}/${company_name}/${title}`);
      window.open(route.href, '_blank');

    },

    fetchAllCategory() {
      var vm = this;
      vm.general_category_loading = true;
      return  this.$axios.get('skill-all-category')
        .then((response) => {
          vm.all_categories = response.data;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    fetchIndustryCategory() {
      var vm = this;
      vm.industials_loading = true;
      return this.$axios.get('industry-category-lists')
        .then((response) => {
          vm.industials = response.data;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    skillWiseJobFilter() {

      var items = this.all_categories;
      var skill_id = this.filter.skill_id;

      let skill_slug = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].id == skill_id) {
          skill_slug.push(items[i].slug);
        }
      }

      let separator = "";
      let strOptions = "";
      skill_slug.forEach(word => {
        strOptions += separator + word;
        separator = " [] ";
      });
      this.$router.push(`/job-search/${this.filter.skill_id}/${strOptions}`)
    },

    job_filter() {
      var vm = this

      vm.loading = true;
      this.filter.post(this.url + 'frontend/filter-job')

        .then((response) => {

          vm.current_jobs = '';
          vm.current_jobs = response.data;
          vm.loading = false;

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

    filterIndustryJob: function () {
      let vm = this;

      let industry_id = vm.filter.industry_id;
      if (industry_id === '') {

        console.log('aa')
        return vm.current_jobs;

      } else {

        console.log('w')
        return this.current_jobs.filter(m => m.industry_categories_id === industry_id);
      }
    }

  },
  created() {
    this.generalCategoryJobShortDetails();
    this.fetchDegrees();
    this.fetchAllCategory();
    this.fetchIndustryCategory();
  },

  computed: {
    lists() {
      var vm = this;
      const items = this.current_jobs
      // Return just page of items needed
      return items.slice(
        (this.currentPage - 1) * this.perPage,
        this.currentPage * this.perPage
      )
    },

    totalRows() {
      return this.current_jobs.length
    },

  }
}
</script>

<style scoped>
.job-preview-list {
  list-style: none;
}

.job-preview-list li {
  color: #423A3D;
}

.job-short-box:hover {
  box-shadow: 0px 1px 6px #000;
}

.job-short-box h4 {
  color: #EC1A3A !important;
  font-size: 25px;
}

.job-short-box h4:hover {
  text-decoration: underline;
}
</style>
