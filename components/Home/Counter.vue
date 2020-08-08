<template>
  <div class="counter-area ptb-50">

    <div class="row">

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/4.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='25' :duration='5000'></countTo>
            k+
          </h3>
          <p>Job Available</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/6.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='150' :duration='5000'></countTo>
            k+
          </h3>
          <p>CV Submitted</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/8.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='120' :duration='5000'></countTo>
            k+
          </h3>
          <p>Companies</p>
        </div>
      </div>

      <div class="col-6 col-sm-3 col-lg-3">
        <div class="counter-item">
          <img src="../../static/images/box/2.png" alt="Job">
          <h3>
            <countTo :startVal='0' :endVal='50' :duration='5000'></countTo>
            k+
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
    components: {
      countTo,
    },
  }
</script>

<style scoped>

</style>
