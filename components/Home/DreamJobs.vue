<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Dream Jobs</h1>

        <div class="row" v-if="loading">
          <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
          </div>
        </div>

        <div class="row" v-else>

          <div class="col-lg-4 mix web ui" v-for="row in employer_hotjobs">
            <div class="job-item scrollbar scroll_style">
              <div class="row">
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                  <img v-if="row.company_logo" :src="getPhoto(row.company_logo)" :alt="row.company_name">
                  <img v-else src="../../static/images/box/1.png" alt="Job">
                </div>

                <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                  <div class="job-inner align-items-center">
                    <div class="job-inner-left">
                      <h4>{{ row.company_name }}</h4>

                      <a v-for="inner_row in row.dream_jobs" href="javaScript:void(0)"
                         @click="fetchJobDetails(inner_row.id,row.slug,inner_row.slug)">

                        <i class="bx bxs-right-arrow-square"></i> {{
                          inner_row.title ? inner_row.title : 'Not specified'
                        }}</a>

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
import Swal from 'sweetalert2'

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
  name: "DreamJobs",

  head: {
    link: [
      {rel: 'stylesheet', href: '/css/custom_scroll.css'},
    ],
  },

  data() {
    return {
      loading: true,
      employer_hotjobs: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    fetchDreamJob() {
      var vm = this;
      this.$axios.get('dream-job').then(function (response) {

        vm.employer_hotjobs = response.data;
        vm.loading = false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

    getPhoto(row) {
      let image_url = this.url + row;
      return image_url;
    },

    fetchJobDetails(id, company_name, slug) {

      var id = id;
      var company_name = company_name;
      var slug = slug;
      this.$router.push(`/d/${id}/${company_name}/${slug}`)
      // let route = this.$router.resolve(`/job-details/${id}`);
      // window.open(route.href, '_blank');

    }

  },
  created() {
    this.fetchDreamJob();
  }

}
</script>

<style scoped>
h1 {
  font-size: 35px;
}

.job-item img {
  max-height: 80px;
}
</style>
