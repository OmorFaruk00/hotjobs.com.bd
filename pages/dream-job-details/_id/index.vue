<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">

        <div class="offset-lg-1 col-lg-10">
          <div class="card">
            <div class="card-body box">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <h1 class="text-center">{{ employer.company_name }}</h1>

                  <span v-html="job_details.text"></span>

                  <hr>

                  <h4>Company Name : {{ employer.company_name }}</h4>
                  <h4>Address : {{ employer.company_address }}</h4>

                  <h4 v-if="employer.website_url">Web url : <a :href="employer.website_url" target="_blank">{{ employer.website_url }}</a></h4>

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
      employer: '',
      dream_job_items: '',
    }
  },

  methods: {
    fetchDreamJobDetails() {

      var vm = this;
      var slug = vm.id;

      this.$axios.get('dream-job-details/' + slug).then(function (response) {

        vm.job_details = response.data;
        vm.employer = response.data.employer;
        vm.dream_job_items = response.data.dream_job_item;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },

  },

  beforeMount() {
    this.fetchDreamJobDetails();
  }
}
</script>

<style scoped>
.box {
  box-shadow: 0px 1px 6px #000;
}
h1{
  color: #ec1a3a;
}
</style>
