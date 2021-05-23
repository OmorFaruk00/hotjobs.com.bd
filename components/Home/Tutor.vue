<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Tutor / Home Tuition</h1>

        <div class="row" v-if="loading">
          <div class="col-lg-12 col-md-12 col-sm-12 text-center">
            <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
          </div>
        </div>

        <div class="row" v-if="!loading">
          <div v-for="(row,key) in all_subject" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box helping_hand_scrollbar scroll_style">
              <h3>
                <a :href="`/tutor/${row.id}/${row.slug}`" target="_blank">{{ row.title }} (
                  <countTo :startVal='0' :endVal='row.all_tuition_count'
                           :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>

        </div>

        <div class="col-12 mt-3">

<!--          <client-only>
            <infinite-loading v-if="this.page <= this.last_page" @distance="1"
                              @infinite="infiniteHandlerFetchSubject"></infinite-loading>
          </client-only>-->


          <div class="text-center" v-if="see_more && all_subject && all_subject.length >= 12">
            <a href="javaScript:void(0)" @click="subjectSeeMore" class="tcb-animate-e tcb-info">See more... <i
              v-if="tutor_see_more_loadind" class="bx bx-loader bx-spin"></i></a>
          </div>

        </div>


      </div>
    </div>
  </div>
</template>

<script>
// tender-job
import Swal from 'sweetalert2'
import countTo from "vue-count-to";
import InfiniteLoading from 'vue-infinite-loading';


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
  name: "Tutor",
  head: {
    link: [
      {rel: 'stylesheet', href: '/css/custom_scroll.css'},
    ],
  },
  components: {
    countTo,
    InfiniteLoading
  },
  data() {
    return {
      loading: false,
      all_subject: [],
      see_more: true,
      tutor_see_more_loadind: false,
      url: this.$axios.defaults.baseURL,
      page: 1,
      last_page: ''
    }
  },

  methods: {

    async fetchTutorRequest() {
      var vm = this;
      return await this.$axios.get('frontend/tutor-job')
        .then((response) => {
          vm.tutor_requests = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    async tutorRequestSeeMore() {

      var vm = this;
      return await this.$axios.get('frontend/all-tutor-job')
        .then((response) => {
          vm.tutor_requests = '';
          vm.tutor_requests = response.data;
          vm.see_more = false;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })

    },

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

    async fetchSubject() {
      var vm = this;
      return await this.$axios.get('frontend/subject')
        .then((response) => {
          vm.all_subject = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    async fetchAllSubject() {
      var vm = this;
      return await this.$axios.get('frontend/all-subject')
        .then((response) => {
          vm.all_subject = response.data;
          vm.loading = false;
        })
        .catch((error) => {
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });
        })
    },

    subjectSeeMore() {
      this.tutor_see_more_loadind = true;
      this.fetchAllSubject();
      this.see_more = false;
      this.tutor_see_more_loadind = false;
    },

    async infiniteHandlerFetchSubject($state) {
      let vm = this;
      await this.$axios.get('frontend/subject?page=' + this.page)
        .then(response => {

          vm.last_page = response.data.last_page;

          return response.data;

        }).then(data => {
          $.each(data.data, function (key, value) {
            vm.all_subject.push(value);
          });

          if (this.page <= this.last_page) {
            $state.loaded();
          }
        });

      this.page = this.page + 1;
    }

  },

  created() {
    this.fetchSubject();
    // this.infiniteHandlerFetchSubject();
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
