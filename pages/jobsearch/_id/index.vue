<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body" style="max-width: 80%;margin: 0 auto;">
              <h1 class="card-title text-center">Read candidate feedback {{ $route.params.id }}</h1>
            </div>
          </div>
        </div>

      </div>

      <div class="row">
        <div class="col-lg-10">
          <div class="card">
            <div class="card-body">

              <div v-for="row in current_jobs" class="card-body border mb-2">

                <h5 class="card-title">{{ row.job_title }}</h5>
                <h6 class="card-subtitle mb-2 text-muted">

                  <span v-if="row.company_info_visibility.company_name_show_status == 1">
                      {{ row.employer.company_name }}
                  </span>

                  <span v-else>{{ row.company_info_visibility.company_name }}</span>

                </h6>

                <ul class="job-preview-list">
                  <li>
                    <i class="bx bx-map"></i>

                    <span
                      v-html="row.more_job_inforamtion.job_location_type == '0' ? 'Inside Bangladesh' : 'Outside Bangladesh'"></span>,
                    <span>{{ row.more_job_inforamtion.job_location_address }}</span>

                  </li>

                  <li v-if="row.candidate_requirement.candidate_requirement_degree.length > 0">
                    <i class="bx bxs-graduation"></i>

                    <span v-for="(inner_row,index) in row.candidate_requirement.candidate_requirement_degree">
                      <span class="badge badge-secondary mx-1" v-text="degreeName(inner_row.degree_id)"></span>
                      <span v-if="inner_row.concentration != ''">({{ inner_row.concentration }})</span>
                    </span>

                  </li>

                  <li><i class="bx bx-briefcase"></i> 0-5 years</li>
                </ul>

                <ul class="job-preview-list text-right">
                  <li><i class="bx bx-map"></i> Application Deadline:

                    <strong> August 2 ,2020</strong>

                  </li>
                </ul>

              </div>

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
  export default {
    name: "index",
    validate({params}) {
      // Must be a number
      return /^\d+$/.test(params.id)
    },
    data() {
      return {
        id: this.$route.params.id,
        current_jobs: '',
        without_filter_degrees: '',
      }
    },

    methods: {

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

      generalCategoryJob() {
        var vm = this;

        var slug = vm.id;

        this.$axios.get('general-category-wise-job/' + slug).then(function (response) {

          vm.current_jobs = response.data;

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

    },
    beforeMount() {
      this.generalCategoryJob();
      this.fetchDegrees();
    }
  }
</script>

<style scoped>
  .job-preview-list {
    list-style: none;
  }
</style>
