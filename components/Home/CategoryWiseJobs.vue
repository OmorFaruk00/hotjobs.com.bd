<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Category Wise Jobs</h1>


        <div class="row text-right">
          <div class="col-12">
            <div class="btn-group" role="group" aria-label="Basic example">

              <button @click="generalCategoryStep" type="button" class="btn btn-outline-info"
                      :class="general_category_step ? 'active' : ''">Functional
              </button>

              <button @click="industialsStep" type="button" class="btn btn-outline-secondary"
                      :class="industials_step ? 'active' : ''">Industrial
              </button>

            </div>
          </div>
        </div>

        <div class="row" v-if="loading">
          <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
          </div>
        </div>


        <div class="row" v-if="general_category_step">
          <div v-for="(row,key) in general_categories" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box helping_hand_scrollbar scroll_style">
              <h3>
                <a href="javaScript:void(0)" @click="fetchJob(row.id,row.slug)">{{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts_count'
                           :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>
        </div>

        <div class="row" v-if="industials_step">
          <div v-for="(row,key) in industials" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box helping_hand_scrollbar scroll_style">
              <h3>
                <a href="javaScript:void(0)" @click="fetchIndustryJob(row.id,row.slug)">{{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts_count' :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
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
  name: "CategoryWiseJobs",
  components: {
    countTo,
  },

  data() {
    return {
      loading: true,
      general_category_step: true,
      industials_step: false,
      url: this.$axios.defaults.baseURL,
      general_categories: '',
      industials: '',
    }
  },

  methods: {

    async fetchGeneralCategory() {
      var vm = this;
      return await this.$axios.get('skill-general-category')
        .then((response) => {
          vm.general_categories = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    async fetchIndustryCategory() {
      var vm = this;
      return await this.$axios.get('industry-category-lists')
        .then((response) => {
          vm.industials = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    generalCategoryStep() {
      this.general_category_step = true;
      this.industials_step = false;
      this.general_categories='';
      this.industials='';
      this.fetchGeneralCategory();
    },

    industialsStep() {
      this.industials_step = true;
      this.general_category_step = false;
      this.fetchIndustryCategory();
    },

    fetchJob(id, slug) {
      var id = id;
      var slug = slug;
      this.$router.push(`/job-search/${id}/${slug}`)

    },

    fetchIndustryJob(id, slug) {
      var id = id;
      var slug = slug;
      this.$router.push(`/industry-job-search/${id}/${slug}`)
      // this.$router.push(`/jobsearch/${id}`)

    }

  },

  beforeMount() {
    this.fetchGeneralCategory();
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
