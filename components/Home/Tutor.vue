<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">TUTOR</h1>

        <div class="tender_body">
          <div class="row" v-if="loading">
            <div class="col-lg-12 col-md-12 col-sm-12 text-center">
              <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
            </div>
          </div>

          <div class="row" v-if="!loading">

            <div v-for="row in tutor_requests" class="col-lg-4 col-md-4 col-sm-6">
              <b-card class="tutor-card" border-variant="primary" bg-variant="default" text-variant="dark">
                <blockquote class="card-blockquote">
                  <h5>Need {{ row.tuition_type.title }} Tutor For {{ row.tuition_class.title }} Student

                    <span v-if="row.tuition_days_week">- {{ row.tuition_days_week.title}}</span>
                  </h5>

                  <h6>Hire Date : {{ dateFormat(row.hire_date) }}</h6>
                </blockquote>

                <b-card-text>
                  <h6>Tuition Type : {{ row.tuition_category.title }}</h6>
                  <h6>Location : {{ row.district.name }}, {{  row.thana.name }} <span v-if="row.union">. {{ row.union.name}}</span></h6>
                  <h6>Salary : <span v-text="row.salary_negotiable_status == '1' ? 'Negotiable': row.salary + ' ' +'BDT' "></span></h6>
                  <h6>Subjects : <span class="badge badge-secondary" v-for="innter_row in row.tutor_request_subjects">{{ innter_row.subject.title }}</span></h6>
                </b-card-text>

                <template class="text-right" v-slot:footer>
                  <b-button href="javaScript:void(0)" variant="primary" size="sm">View Details</b-button>
                </template>
              </b-card>
            </div>



          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// tender-job
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
  name: "Tutor",
  data() {
    return {
      loading: true,
      tutor_requests: [],
      url: this.$axios.defaults.baseURL,
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

    /*fetchTutorRequest() {
      var vm = this;
      this.$axios.get('frontend/tutor-job').then(function (response) {

        vm.tutor_requests = response.data;
        vm.loading = false;
      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });
    },*/

    fetchJobDetails(id, company_slug, slug) {

      var id = id;
      var company_slug = company_slug;
      var slug = slug;
      this.$router.push(`/t/${id}/${company_slug}/${slug}`)
      /*let route = this.$router.resolve(`/t/${id}/${company_slug}/${slug}`);
      window.open(route.href, '_blank');*/

    },

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

  },
  beforeMount() {
    this.fetchTutorRequest();
  }

}
</script>

<style scoped>
h1 {
  font-size: 35px;
}

.card-footer{
  text-align: right;
  background-color:#fff;
  padding: 2px 10px;
}

.tutor-card:before{
  content: '';
  position: absolute;
  /*background-color: #000;*/
  background: linear-gradient(90deg, #EC1A3A, #423A3D);
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(1deg,1deg);
  z-index: -1;
}

.tutor-card:after{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255,255,255,0.05);
  pointer-events: none;

}

.tutor-card{
  position: relative;
  z-index: 1;
  background-color: #fff;

}
.card-body{
  background-color: #fff;
  padding: 1rem;
}
</style>
