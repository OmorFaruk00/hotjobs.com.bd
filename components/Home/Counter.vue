<template>
  <div class="counter-area ptb-50">

    <div class="row">

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/4.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='data.total_job' :duration='5000'></countTo>
          </h3>
          <p>Job Available</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/6.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='data.employee' :duration='5000'></countTo>
          </h3>
          <p>CV Submitted</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/8.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='data.company' :duration='5000'></countTo>
          </h3>
          <p>Companies</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/2.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='data.apply_job' :duration='5000'></countTo>
          </h3>
          <p>Appointed to Job</p>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  name: "Counter",
  data() {
    return {
      loading: true,
      data: "",
      url: this.$axios.defaults.baseURL,
    }
  },
  components: {
    countTo,
  },

  methods: {

    async counterInfo() {
      return await this.$axios.get('counter-details')
        .then((response) => {

          this.data = response.data;
          this.loading = false;
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

  },

  beforeMount() {
    this.counterInfo();
  }
}
</script>

<style scoped>

</style>
