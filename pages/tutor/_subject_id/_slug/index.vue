<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">
        <ads/>
      </div>

      <div class="row">
        <div class="offset-lg-1 col-lg-10">
          <div class="card">
            <div class="card-body">

                <div class="row" v-if="loading">
                  <div class="col-lg-12 col-md-12 col-sm-12 text-center">
                    <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
                  </div>
                </div>

                <div class="row" v-if="!loading">

                  <div v-for="row in subject_wise_tutor_requests" class="col-lg-4 col-md-4 col-sm-6">
                    <b-card class="tutor-card" border-variant="primary" bg-variant="default" text-variant="dark">
                      <blockquote class="card-blockquote">
                        <h5>Need

                          {{ row.tutor_request_detail.tuition_category.title }} Tutor For {{ row.tutor_request_detail.tuition_class.title }} Student

                          <span v-if="row.tutor_request_detail.tuition_days_week">- {{ row.tutor_request_detail.tuition_days_week.title }}</span>
                        </h5>

                        <h6>Hire Date : {{ dateFormat(row.tutor_request_detail.hire_date) }}</h6>
                      </blockquote>

                      <b-card-text>
                        <h6>Tuition Type : {{ row.tutor_request_detail.tuition_type.title }}</h6>
                        <h6>Location : {{ row.tutor_request_detail.district.name }}, {{ row.tutor_request_detail.thana.name }} <span
                          v-if="row.tutor_request_detail.union">, {{ row.tutor_request_detail.union.name }}</span></h6>
                        <h6>Salary : <span
                          v-text="row.tutor_request_detail.salary_negotiable_status == '1' ? 'Negotiable': row.tutor_request_detail.salary + ' ' +'BDT' "></span></h6>
                        <h6>Subjects : <span class="badge badge-secondary mx-1"
                                             v-for="innter_row in row.tutor_request_detail.tutor_request_subjects">{{
                            innter_row.subject.title
                          }}</span></h6>
                      </b-card-text>

                      <template class="text-right" v-slot:footer>

                        <a class="tcb-animate-e tcb-info" :href="`/tutor/d/${row.tutor_request_detail.id}/${row.tutor_request_detail.employer.slug}`" target="_blank">View Details</a>
<!--                        <a class="tcb-animate-e tcb-info" href="javaScript:void(0)" @click="fetchTutorRequestDetails(row.tutor_request_detail.id,row.tutor_request_detail.employer.slug)">View Details</a>-->

                      </template>
                    </b-card>
                  </div>

                  <div class="col-12" v-if="!subject_wise_tutor_requests.length >0">
                    <p class="text-center">No data found</p>
                  </div>

                </div>

            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <ads/>
      </div>

    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import Swal from 'sweetalert2'
import {Form, HasError, AlertError} from 'vform'
import ads from "@/components/Ads"

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

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
  name: "index",
  validate({params}) {
    // Must be a number
    return /^\d+$/.test(params.subject_id)
  },
  comments:{
    ads
  },

  data() {
    return {
      loading: true,
      subject_id: this.$route.params.subject_id,
      slug: this.$route.params.slug,

      form: new Form({
        id: '',
        status: '0'
      }),
      subject_wise_tutor_requests:[],
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

    fetchTutorRequestDetails(id, slug) {

      var id = id;
      var username = slug;
      // this.$router.push(`/tutor/d/${id}/${username}`)

      let route = this.$router.resolve(`/tutor/d/${id}/${username}`);
      window.open(route.href, '_blank');

    },

    fetchSubjectWiseTutorRequest() {
      var vm = this;
      var subject_id = vm.subject_id;
      var slug = vm.slug;

      this.$axios.get('frontend/subject-wise-tutor-request/' + subject_id + '/' + slug).then(function (response) {

        vm.subject_wise_tutor_requests = response.data;
        vm.loading = false;

      }).catch(function (error) {

        Toast.fire({
          icon: 'warning',
          title: 'There was something wrong'
        });

      });

    },

  },

  created() {
    this.fetchSubjectWiseTutorRequest();
  }
}
</script>

<style scoped>
.card-footer {
  text-align: center;
  background-color: #fff;
  /*padding: 2px 10px;*/
}

.tutor-card:before {
  content: '';
  position: absolute;
  /*background-color: #000;*/
  background: linear-gradient(90deg, #EC1A3A, #423A3D);
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  transform: skew(1deg, 1deg);
  z-index: -1;
}

.tutor-card:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: rgba(255, 255, 255, 0.05);
  pointer-events: none;

}

.tutor-card {
  position: relative;
  z-index: 1;
  background-color: #fff;

}

.card-body {
  background-color: #fff;
  /*padding: 1rem;*/
}
</style>
