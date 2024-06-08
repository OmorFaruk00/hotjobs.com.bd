<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12">
          <div class="card">


            <div class="card-body">

              <div class="row">
                <div class="col-12 text-right">
                  <nuxt-link to="/my-jobs/dashboard" class="tcb-animate-e tcb-info mb-2">Dashboard</nuxt-link>
                </div>
              </div>

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

<!--                <div class="col-lg-4 col-md-4 col-sm-12 mb-1">
                  <div class="input-group mb-2">
                    <div class="input-group-prepend">
                      <div class="input-group-text"><i class="bx bx-search"></i></div>
                    </div>
                    <input type="text" class="form-control" v-model="job_title" placeholder="type job title">
                  </div>
                </div>-->

                <div class="col-12">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead class="bg-dark text-white">
                      <tr>
                        <th>Title</th>
                        <th>Subject</th>
                        <th>Viewed (by employer)</th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="(row,index) in fetchTableData" :key="index">
                        <td>
                          <a :href="`/tutor/d/${row.tutor_details.id}/${row.tutor_details.employer.slug}`" target="_blank">
<!--                          <a :href="`/tutor/d/${row.tutor_request_detail.id}/${row.tutor_request_detail.employer.slug}`" target="_blank">-->
                            Need {{ row.tutor_details.tuition_category.title }} Tutor For {{ row.tutor_details.tuition_class.title }} Student

                            <span v-if="row.tutor_details.tuition_days_week">- {{ row.tutor_details.tuition_days_week.title }}</span>

                          </a>

                        </td>
                        <td>
                          <span v-for="(inner_row,index) in row.tutor_details.tutor_request_subjects">
                            <span class="badge badge-info mx-1">{{ inner_row.subject.title }}</span>
                          </span>
                        </td>
                        <td>

                          <span v-if="row.status == 0" class="bx bx-x"></span>
                          <span v-else class="bx bx-check-circle"></span>

                        </td>
                      </tr>
                      </tbody>

                    </table>
                  </div>

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

  </div>
</template>

<script>

export default {
  middleware: 'employeeAuthenticated',
  name: "index",
  data(){
    return{
      perPage: 20,
      currentPage: 1,
      job_title: '',
      apply_tutor_request:[],
    }
  },
  methods: {
    async getApplyTutorRequestJobDetails() {

      var token = window.$nuxt.$cookies.get('token');

      return await this.$axios.get('employee/report/employee-apply-tutor-request-report/'+ '?token=' + token)
        .then((response) => {
          this.apply_tutor_request = response.data;
        })
        .catch((error) => {

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

          if (error.response.status == 422) {
            Toast.fire({
              icon: 'warning',
              title: 'Validation Error'
            });
          }

        })
    },

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },
  },

  created() {
    this.getApplyTutorRequestJobDetails();
  },

  computed: {
    itemLength() {
      return this.apply_tutor_request.length
    },

    fetchTableData() {
      // return this.apply_tutor_request.filter((data) => data.dream_job_details.title.toLowerCase().match(this.job_title.toLowerCase()));
      return this.apply_tutor_request;
    },
  },

}
</script>

<style scoped>
.b-pagination {
  float: right;
  margin-top: 5px;
}
</style>
