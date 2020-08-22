<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Choose Your Desire Category</h1>


        <div class="col-12 text-right">
          <div class="btn-group" role="group" aria-label="Basic example">

            <button @click="generalCategoryStep" type="button" class="btn btn-outline-info"
                    :class="general_category_step ? 'active' : ''">Functional
            </button>

            <button @click="industialsStep" type="button" class="btn btn-outline-secondary"
                    :class="industials_step ? 'active' : ''">Industrial
            </button>

          </div>
        </div>


        <div class="row" v-if="general_category_step">
          <div v-for="row in general_categories" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box">
              <h3>
                <a href="javaScript:void(0)">{{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts.length'
                           :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div class="row" v-if="industials_step">
          <div v-for="row in industials" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box">
              <h3>
                <a href="javaScript:void(0)">{{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts.length' :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>

        </div>

        <!--<div class="row">

          <div class="col-sm-3 col-lg-3 category-border">


            <div class="category-item">
              <img src="../../static/images/box/8.png" alt="Job">

              <a href="#">Technical Support</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-two">
              <img src="../../static/images/box/7.png" alt="Job">
              <a href="#">Business Development</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-three">
              <img src="../../static/images/box/6.png" alt="Job">
              <a href="#">Real Estate Business</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-four">
              <img src="../../static//images/box/5.png" alt="Job">
              <a href="#">Share Maeket Analysis</a>
            </div>
          </div>

          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-five">
              <img src="../../static/images/box/4.png" alt="Job">
              <a href="#">Weather & Environment</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item">
              <img src="../../static/images/box/3.png" alt="Job">
              <a href="#">Technical Support</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-two">
              <img src="../../static/images/box/2.png" alt="Job">
              <a href="#">Business Development</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border">
            <div class="category-item category-three">
              <img src="../../static/images/box/1.png" alt="Job">
              <a href="#">Real Estate Business</a>
            </div>
          </div>


          <div class="col-sm-3 col-lg-3 category-border-two">
            <div class="category-item category-seven">
              <img src="../../static/images/box/3.png" alt="Job">
              <a href="#">IT & Networing Sevices</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3 category-border-two">
            <div class="category-item category-eight">
              <img src="../../static/images/box/5.png" alt="Job">
              <a href="#">Restaurant Services</a>
            </div>
          </div>
          <div class="col-sm-3 offset-sm-3 offset-lg-0 col-lg-3 category-border-two">
            <div class="category-item category-nine">
              <img src="../../static/images/box/7.png" alt="Job">
              <a href="#">Defence & Fire Service</a>
            </div>
          </div>
          <div class="col-sm-3 col-lg-3">
            <div class="category-item category-ten">
              <img src="../../static/images/box/6.png" alt="Job">
              <a href="#">Home Delivery Services</a>
            </div>
          </div>

        </div>-->

      </div>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';

  export default {
    name: "DesireCategory",
    components: {
      countTo,
    },

    data() {
      return {
        general_category_step: true,
        industials_step: false,
        url: this.$axios.defaults.baseURL,
        general_categories: '',
        industials: '',
      }
    },

    methods: {
      fetchGeneralCategory() {
        var vm = this;
        this.$axios.get('skill-general-category').then(function (response) {

          vm.general_categories = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      fetchIndustryCategory() {
        var vm = this;
        this.$axios.get('industry-category-lists').then(function (response) {

          vm.industials = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      generalCategoryStep() {
        this.general_category_step = true;
        this.industials_step = false;
      },

      industialsStep() {
        this.industials_step = true;
        this.general_category_step = false;
      },

    },

    beforeMount() {

      this.fetchGeneralCategory();
      this.fetchIndustryCategory();

    }
  }
</script>

<style scoped>
  h1 {
    font-size: 35px;
  }

  .category-item-box {
    padding: 15px 0px 1px 0px;
  }

  .category-item-box h3 a {
    font-size: 14px;
  }
</style>
