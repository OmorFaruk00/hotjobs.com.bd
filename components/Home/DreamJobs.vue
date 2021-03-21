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

        <div v-else>

          <b-card-group columns>

            <b-card v-for="(row,index) in employer_hotjobs" :key="index" no-body class="overflow-hidden">
              <b-row no-gutters class="dream-box">

                <b-col md="3" class='text-center'>


                  <img v-if="row.company_logo" class="p-3 card-img" :data-src="`${url}`+row.company_logo"
                       :alt="row.company_name"
                       :title="row.company_name" v-lazy-load>


                  <img v-else
                       :src="`https://ui-avatars.com/api/?name=${row.company_name}&color=EC1A3A&background=ffffff&fbclid=IwAR06QImURpdBRxNNVrfp-hjlHOJKlj9yrPJy-HWGYDHk8U4yRG8skvQxjZc`"
                       :alt="row.company_name" class="img-fluid p-3">
                </b-col>

                <b-col md="9">

                  <b-card-body class="inner-dream-box" :title="row.company_name">

                    <a style="display: inherit" v-for="inner_row in row.dream_jobs"
                       :href="`/jobs/${inner_row.id}/${row.slug}/${inner_row.slug}`" target="_blank"
                    >

                      <!--<a style="display: inherit" v-for="inner_row in row.dream_jobs" href="javaScript:void(0)"
                       @click="fetchJobDetails(inner_row.id,row.slug,inner_row.slug)">-->

                      <i class="bx bxs-right-arrow-square"></i> {{
                        inner_row.title ? inner_row.title : 'Not specified'
                      }}</a>


                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>

          </b-card-group>


          <div class="text-center" v-if="see_more && employer_hotjobs.length >=20 ">
            <!--            <button type="button" @click="dreamJobSeeMore" class="btn btn-outline-info active">See more.....</button>-->

            <a href="javaScript:void(0)" @click="dreamJobSeeMore" class="tcb-animate-e tcb-info">See more... <i
              v-if="see_more_loadind" class="bx bx-loader bx-spin"></i></a>
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
      see_more: true,
      see_more_loadind: false,
      employer_hotjobs: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    async fetchDreamJobs() {
      var vm = this;
      return await this.$axios.get('frontend/dream-job')
        .then((response) => {
          vm.employer_hotjobs = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

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
      // this.$router.push(`/d/${id}/${company_name}/${slug}`)

      let route = this.$router.resolve(`/d/${id}/${company_name}/${slug}`);
      window.open(route.href, '_blank');

    },

    async dreamJobSeeMore() {
      var vm = this;
      vm.see_more_loadind = true;
      return await this.$axios.get('frontend/all-dream-job')
        .then((response) => {
          vm.employer_hotjobs = '';
          vm.employer_hotjobs = response.data;
          vm.see_more = false;
          vm.see_more_loadind = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    }

  },
  beforeMount() {
    // this.fetchDreamJob();
    this.fetchDreamJobs();
  }

}
</script>

<style scoped>
h1 {
  font-size: 35px;
}

h4 {
  color: #EC1A3A;
}

.inner-dream-box a {
  color: #525257;
  font-size: 14px;
}

.inner-dream-box a:hover {
  color: #EC1A3A;
}

.dream-box {
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, #307BF7, #55FF00);
  border-image-slice: 1;
}

.job-item img {
  max-height: 80px;
}

.card-columns {
  column-gap: 10px !important;
}

.card-columns .card {
  margin-bottom: 5px !important;
}

</style>
