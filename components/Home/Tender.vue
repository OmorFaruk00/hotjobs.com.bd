<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">TENDER / EOI</h1>

        <div class="tender_body">
          <div class="row">

            <div class="col-lg-4 mix web ui" v-for="row in employer_tender_jobs">
              <div class="job-item scrollbar scroll_style">

                <img v-if="row.company_logo" :src="getPhoto(row.company_logo)" :alt="row.company_name">
                <img v-else src="../../static/images/box/1.png" alt="Job">

                <div class="job-inner align-items-center">
                  <div class="job-inner-left">
                    <h4>{{ row.company_name }}</h4>

                    <a v-for="inner_row in row.tender_jobs" href="javaScript:void(0)" @click="fetchJobDetails(inner_row.id,row.slug,inner_row.slug)">
                      <i class="bx bxs-right-arrow-square"></i> {{ inner_row.title ? inner_row.title : 'Not specified' }}
                    </a>

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
// tender-job
export default {
  name: "Tender",
  head: {
    link: [
      { rel: 'stylesheet', href: '/css/custom_scroll.css'},
    ],
  },
  data() {
    return {
      employer_tender_jobs: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods:{

    fetchRenderJob() {
      var vm = this;
      this.$axios.get('tender-job').then(function (response) {

        vm.employer_tender_jobs = response.data;

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

    fetchJobDetails(id,company_slug,slug){

      var id = id;
      var company_slug = company_slug;
      var slug = slug;
      this.$router.push(`/t/${id}/${company_slug}/${slug}`)
      // let route = this.$router.resolve(`/job-details/${id}`);
      // window.open(route.href, '_blank');

    }

  },
  beforeMount() {
    this.fetchRenderJob();
  }

}
</script>

<style scoped>
h1 {
  font-size: 35px;
}
.job-item img{
  width: 50px;
}
</style>
