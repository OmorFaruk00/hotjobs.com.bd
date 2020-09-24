<template>
  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">

              <b-table responsive id="post_job" striped hover :per-page="perPage" :current-page="currentPage" :items="post_job" :fields="fields">
                <template v-slot:cell(index)="data">
                  {{ data.index + 1 }}
                </template>


                <template v-slot:cell(application_deadline)="data">

                  {{ dateFormat(data.value) }}

                </template>

                <template v-slot:cell(status)="data">

                  <span v-html="status(data.value)"></span>

                </template>

              </b-table>


              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
                :per-page="perPage"
                aria-controls="post_job"
              ></b-pagination>


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
      perPage: 10,
      currentPage: 1,
      fields:[
        'index',
        'job_title',
        'application_deadline',
        'type',
        'status',
        'action',
      ],
      post_job: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods:{

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
      } else {
        return '<span class="badge badge-warning">Finished</span>';
      }

    },

    dateFormat(date) {
      return this.$moment(date).format('D MMM ,YYYY');
    },

  },

  computed:{
    row(){
      return this.post_job.length
    }
  },
  created() {
    this.loadJobPost()
  }
}
</script>

<style scoped>
.b-pagination{
  float: right;
}
</style>
