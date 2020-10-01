<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Popular Companies</h1>

        <div class="row" v-if="loading">
          <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
          </div>
        </div>


        <carousel v-if="!loading" :autoplay="true" :nav="true"
                  :responsive="{0:{items:1,nav:false},576:{items:1,nav:false},768:{items:2,nav:false},992:{items:3,nav:false},1200:{items:5,nav:false}}">


          <div class="companies-item" :key="index" v-for="(row, index) in popular_companies">
            <img :src="`${url}` + row.company_logo" :alt="row.company_logo">
            <h3>
              <a href="javaScript:void(0)">{{ row.company_name }}</a>
            </h3>

<!--            <a v-if="row.website_url != ''" class="companies-btn" target="_blank" :href="row.website_url">Details</a>-->

          </div>

        </carousel>

      </div>
    </div>
  </div>
</template>

<script>

import Swal from "sweetalert2";

export default {
  name: "PopularCompanies",
  data() {
    return {
      loading: true,
      popular_companies: "",
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    async popularCompanies() {
      return await this.$axios.get('popular-company')
        .then((response) => {
          this.popular_companies = response.data;
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
    this.popularCompanies();
  }
}
</script>

<style scoped>
h1 {
  font-size: 35px;
}

.companies-item {
  box-shadow: none;
}
</style>
