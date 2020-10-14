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


          <div class="popular-company" :key="index" v-for="(row, index) in popular_companies">
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
  name: "PopularCompanies",
  data() {
    return {
      loading: true,
      popular_companies: [],
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

          /*console.log(error);

          Toast.fire({
            icon: 'warning',
            title: error
          });*/

        })
    },

  },

  created() {
    this.popularCompanies();
  }
}
</script>

<style scoped>
h1 {
  font-size: 35px;
}
.popular-company h3 {
  font-size: 15px;
}

.popular-company a{
  color: #6F323D;
}

.popular-company {
  text-align: center;
  /*background-color: #ddd;*/
  -webkit-transition: 0.5s all ease;
  transition: 0.5s all ease;
  margin: 20px 5px;
  height: 250px;
  border: 1px solid transparent;
  border-image: linear-gradient(45deg, #EE453B, #6F323D, #ffff00, #6F323D);
  border-image-slice: 1;
  border-radius: 5px;
  /*box-shadow: 0px 0px 20px 0px #000;*/
}

.popular-company:hover {

}

.popular-company img {
  width: 150px;
  height: 150px;
  margin: 0 auto;
  /*clip-path: polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%);*/
  border-radius: 100%;
}
</style>
