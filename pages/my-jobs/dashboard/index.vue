<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-2">

          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <dashboardNavbar/>
                </div>
              </div>
            </div>
          </div>


          <div class="col-12">
            <div class="card" style="background: transparent">
              <div class="card-body">

                <adsbygoogle/>

              </div>
            </div>
          </div>


        </div>

        <div class="col-lg-10">
          <div class="card">
            <div class="card-body">
              <h1>Dashboard</h1>

              <div class="row">
                <div class="col-md-3 col-sm-6">
                  <nuxt-link to="/my-jobs/dashboard/job-post">
                    <div class="card mini-stats-wid bg-soft-dark">
                      <div class="card-body">
                        <div class="media">
                          <div class="media-body">
                            <p class="text-dark font-weight-medium">Job Apply</p>
                            <h4 class="mb-0 text-muted">{{ apply_job.job_post }}</h4>
                          </div>

                          <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                              <span class="avatar-title">
                                  <i class="bx bx-brightness-half font-size-24"></i>
                              </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-3 col-sm-6">
                  <nuxt-link to="/my-jobs/dashboard/dream-job">
                    <div class="card mini-stats-wid bg-soft-dark">
                      <div class="card-body">
                        <div class="media">
                          <div class="media-body">
                            <p class="text-dark font-weight-medium">Dream Job Apply</p>
                            <h4 class="mb-0 text-muted">{{ apply_job.dream_job }}</h4>
                          </div>

                          <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span class="avatar-title">
                                                            <i class="bx bx-copy-alt font-size-24"></i>
                                                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-3 col-sm-6">
                  <nuxt-link to="/my-jobs/dashboard/tender-job">
                    <div class="card mini-stats-wid bg-soft-dark">
                      <div class="card-body">
                        <div class="media">
                          <div class="media-body">
                            <p class="text-dark font-weight-medium">Tender Job Apply</p>
                            <h4 class="mb-0 text-muted">{{ apply_job.tender_job }}</h4>
                          </div>

                          <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span class="avatar-title">
                                                            <i class="bx bx-brightness-half font-size-24"></i>
                                                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

                <div class="col-md-3 col-sm-6">

                  <nuxt-link to="/my-jobs/dashboard/tutor-request">
                    <div class="card mini-stats-wid bg-soft-dark">
                      <div class="card-body">
                        <div class="media">
                          <div class="media-body">
                            <p class="text-dark font-weight-medium">Tutor Request Apply</p>
                            <h4 class="mb-0 text-muted">{{ apply_job.tutor_request_job }}</h4>
                          </div>

                          <div class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center">
                                                        <span class="avatar-title">
                                                            <i class="bx bx-copy-alt font-size-24"></i>
                                                        </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nuxt-link>
                </div>

              </div>

            </div>
          </div>


          <div class="row">
            <ads/>
          </div>

        </div>

      </div>

    </div>
  </div>

</template>

<script>
import dashboardNavbar from '~/components/MyJobs/navbar'
import ads from "@/components/Ads";

export default {
  middleware: 'employeeAuthenticated',
  name: "index",
  components: {
    dashboardNavbar,
    ads
  },
  data() {
    return {
      apply_job: [],
    }
  },
  methods: {
    async getUserApplyJobReport() {
      var token = window.$nuxt.$cookies.get('token');

      return await this.$axios.get('employee/report/employee-apply-job-report/' + '?token=' + token)
        .then((response) => {
          this.apply_job = response.data;
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
  },
  created() {
    this.getUserApplyJobReport();
  },
}
</script>

<style scoped>

</style>
