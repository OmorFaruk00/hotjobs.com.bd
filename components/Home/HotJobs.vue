<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Drem Jobs</h1>

        <div class="row">

          <div class="col-lg-4 mix web ui" v-for="row in employer_hotjobs">
            <div class="job-item">

              <img v-if="row.company_logo" :src="getPhoto(row.company_logo)" alt="Hot jobs">
              <img v-else src="../../static/images/box/1.png" alt="Job">

              <div class="job-inner align-items-center">
                <div class="job-inner-left">
                  <h4>{{ row.company_name }}</h4>

                  <a v-for="inner_row in row.dream_jobs" href="javaScript:void(0)" @click="fetchJobDetails(inner_row.id)">{{ inner_row.title ? inner_row.title : 'Not specified' }}</a>


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
  name: "HotJobs",

  data() {
    return {
      employer_hotjobs:'',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods:{

    fetchDreamJob() {
      var vm = this;
      this.$axios.get('dream-job').then(function (response) {

        vm.employer_hotjobs = response.data;

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

    fetchJobDetails(id){

      var id = id;
      this.$router.push(`/dream-job-details/${id}`)
      // let route = this.$router.resolve(`/job-details/${id}`);
      // window.open(route.href, '_blank');

    }

  },
  beforeMount() {
    this.fetchDreamJob();
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
