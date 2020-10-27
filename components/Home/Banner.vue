<template>
  <div class="col-12">
    <div class="banner-area banner-img-one">
      <div class="d-table">
        <div class="d-table-cell">
          <div class="container">
            <div class="banner-text">
              <h1>Find Your <span>Desire</span> Job</h1>
              <p>Jobs, Employment & Future Career Opportunities</p>
              <div class="banner-form-area">
                <form @submit.prevent="searchCategoryWiseJob()">
                  <div class="row">
                    <div class="col-lg-6">
                      <div class="form-group">
                        <input type="text" v-model="job_title" class="form-control" placeholder="Job Title">
                        <label>
                          <i class="icofont-search-1"></i>
                        </label>
                      </div>
                    </div>
                    <!--<div class="col-lg-4">
                        <div class="form-group">
                            <label>
                                <i class="icofont-location-pin"></i>
                            </label>
                            <input type="text" class="form-control" placeholder="City or State">
                        </div>
                    </div>-->
                    <div class="col-lg-6">
                      <div class="form-group">
                        <select class="form-control" v-model="category_id">
                          <option value="" selected disabled hidden>Select category</option>
                          <option v-for="row in all_categories" :value="row.id">{{ row.name }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <button type="submit" class="btn banner-form-btn">Search</button>
                </form>
              </div>

            </div>
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
  position: 'center',
  showConfirmButton: false,
  timer: 3000,
  animation:true,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {
  name: "Banner",
  data() {
    return {
      job_title: '',
      category_id: '',
      all_categories: [],
      url: this.$axios.defaults.baseURL,
    }
  },
  methods: {

    async fetchAllCategory() {
      var vm = this;
      return await this.$axios.get('skill-all-category')
        .then((response) => {
          vm.all_categories = response.data;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    searchCategoryWiseJob() {

      var vm = this;

      if (!vm.job_title) {
        /*Toast.fire({
          icon: 'info',
          title: 'Please type job title'
        });*/

        Swal.fire('Please type job title')
      } else if (!vm.category_id) {
        /*Toast.fire({
          icon: 'info',
          title: 'Please select category'
        });*/
        Swal.fire('Please select category')
      } else {
        var items = vm.all_categories;
        var category_id = vm.category_id;

        let skill_slug = [];
        for (let i = 0; i < items.length; i++) {
          if (items[i].id == category_id) {
            skill_slug.push(items[i].slug);
          }
        }

        let separator = "";
        let strOptions = "";
        skill_slug.forEach(word => {
          strOptions += separator + word;
          separator = " [] ";
        });

        window.$nuxt.$cookies.remove('search_token');
        const cookieValObject = {
          search_job_title: vm.job_title,
        }

        window.$nuxt.$cookies.set('search_token', cookieValObject, {
          path: '/',
          maxAge: 1800
        })

        this.$router.push(`/job-search/${vm.category_id}/${strOptions}`)
      }

    }
  },
  beforeMount() {
    this.fetchAllCategory();
  }
}
</script>

<style scoped>

</style>
