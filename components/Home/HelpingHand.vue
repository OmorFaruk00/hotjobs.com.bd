<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Helping Hand</h1>

        <div class="row" v-if="loading">
          <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
          </div>
        </div>

        <div class="row" v-if="!loading">
          <div v-for="(row,key) in special_categories" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box helping_hand_scrollbar scroll_style">
              <h3>
                <a :href="`/job-search/${row.id}/${row.slug}`" target="_blank">
<!--                <a href="javaScript:void(0)" @click="fetchJob(row.id,row.slug)">-->
                  {{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts_count'
                           :duration='5000'></countTo>
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
  name: "HelpingHand",
  head: {
    link: [
      {rel: 'stylesheet', href: '/css/custom_scroll.css'},
    ],
  },
  components: {
    countTo,
  },
  data() {
    return {
      loading:true,
      url: this.$axios.defaults.baseURL,
      special_categories: '',
    }
  },

  methods: {

    async fetchSpecialCategory() {
      var vm = this;
      return await this.$axios.get('skill-special-category')
        .then((response) => {
          vm.special_categories = response.data;
          vm.loading =false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    /*fetchSpecialCategory() {
      var vm = this;
      this.$axios.get('skill-special-category').then(function (response) {

        vm.special_categories = response.data;
        vm.loading =false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },*/

    fetchJob(id, slug) {
      var id = id;
      var slug = slug;
      // this.$router.push(`/job-search/${id}/${slug}`)

      let route = this.$router.resolve(`/job-search/${id}/${slug}`);
      window.open(route.href, '_blank');

    },

  },

  beforeMount() {
    this.fetchSpecialCategory();
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
  font-size: 13px;
}
</style>
