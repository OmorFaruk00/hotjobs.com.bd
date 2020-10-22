<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">TENDER / EOI</h1>

        <div class="tender_body">
          <div class="row" v-if="loading">
            <div class="col-lg-12 col-md-12 col-sm-12 text-center">
              <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
            </div>
          </div>

          <div v-if="!loading">

            <!-- <div class="col-lg-4 mix web ui" v-for="row in employer_tender_jobs">
               <div class="job-item scrollbar scroll_style">

                 <div class="row">
                   <div class="col-lg-3 col-md-3 col-sm-3 col-xs-3 text-center">
                     <img class="img-fluid" v-if="row.company_logo" :src="getPhoto(row.company_logo)"
                          :alt="row.company_name">

                     <img v-else src="../../static/images/box/1.png" alt="Job">
                   </div>

                   <div class="col-lg-9 col-md-9 col-sm-9 col-xs-9">
                     <div class="job-inner align-items-center">
                       <div class="job-inner-left">
                         <h4>{{ row.company_name }}</h4>

                         <a v-for="inner_row in row.tender_jobs" href="javaScript:void(0)"
                            @click="fetchJobDetails(inner_row.id,row.slug,inner_row.slug)">
                           <i class="bx bxs-right-arrow-square"></i> {{
                             inner_row.title ? inner_row.title : 'Not specified'
                           }}
                         </a>

                       </div>
                     </div>
                   </div>
                 </div>
               </div>
             </div>-->
            <b-card-group columns>
              <b-card v-for="row in employer_tender_jobs" no-body class="overflow-hidden">
                <b-row no-gutters class="dream-box">

                  <b-col md="3" class='text-center'>

                    <b-card-img v-if="row.company_logo" :src="getPhoto(row.company_logo)" :alt="row.company_name"
                                class="rounded-0" style="width:65px;padding:10px 0"></b-card-img>

                    <img v-else src="~/static/favicon.png" alt="Hot Jobs" style="width:80px;padding:10px 0">
                  </b-col>

                  <b-col md="9">

                    <b-card-body class="inner-dream-box" :title="row.company_name">

                      <a style="display: inherit" v-for="inner_row in row.tender_jobs" :href="`/t/${inner_row.id}/${row.slug}/${inner_row.slug}`" target="_blank">
<!--                      <a style="display: inherit" v-for="inner_row in row.tender_jobs" href="javaScript:void(0)" @click="fetchJobDetails(inner_row.id,row.slug,inner_row.slug)">-->

                        <i class="bx bxs-right-arrow-square"></i> {{
                          inner_row.title ? inner_row.title : 'Not specified'
                        }}</a>


                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-card-group>


            <div class="col-12">
              <div class="text-center" v-if="see_more && employer_tender_jobs.length >= 20">
<!--                <button type="button" @click="tenderJobSeeMore" class="btn btn-outline-info active">See more.....</button>-->
                <a href="javaScript:void(0)" @click="tenderJobSeeMore" class="tcb-animate-e tcb-info">See more...</a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// tender-job
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
  name: "Tender",
  head: {
    link: [
      {rel: 'stylesheet', href: '/css/custom_scroll.css'},
    ],
  },
  data() {
    return {
      loading: true,
      see_more: true,
      employer_tender_jobs: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    async fetchTenderJob() {
      var vm = this;
      return await this.$axios.get('frontend/tender-job')
        .then((response) => {
          vm.employer_tender_jobs = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    /* fetchRenderJob() {
       var vm = this;
       this.$axios.get('tender-job').then(function (response) {

         vm.employer_tender_jobs = response.data;
         vm.loading = false;
       }).catch(function (error) {

         Toast.fire({
           icon: 'warning',
           title: 'There was something wrong'
         });

       });
     },*/

    getPhoto(row) {
      let image_url = this.url + row;
      return image_url;
    },

    fetchJobDetails(id, company_slug, slug) {

      var id = id;
      var company_slug = company_slug;
      var slug = slug;
      // this.$router.push(`/t/${id}/${company_slug}/${slug}`)
      let route = this.$router.resolve(`/t/${id}/${company_slug}/${slug}`);
      window.open(route.href, '_blank');

    },

    async tenderJobSeeMore() {
      var vm = this;
      return await this.$axios.get('frontend/all-tender-job')
        .then((response) => {
          vm.employer_tender_jobs = response.data;
          vm.see_more = false;
          vm.loading = false;
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
    this.fetchTenderJob();
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
