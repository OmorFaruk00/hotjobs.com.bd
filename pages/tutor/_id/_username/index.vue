<template>
  <div class="page-content" style="margin-top: 80px">

    <div class="container-fluid">

      <div class="row">
        <div class="offset-lg-1 col-lg-10">
          <div class="card">
            <div class="card-body">
              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12 text-center" v-if="loading">
                  <i class="bx bx-loader bx-spin" style="font-size: 40px;color: #EC1A3A"></i>
                </div>


                <div class="col-lg-12 col-md-12 col-sm-12 py-2" v-if="!loading">

                  <b-card class="tutor-card" border-variant="primary" bg-variant="default" text-variant="dark">
                    <blockquote class="card-blockquote">
                      <h4>Need {{ tuition_category.title }} Tutor For {{ tuition_class.title }} Student

                        <span v-if="tuition_days_week">- {{ tuition_days_week.title }}</span>
                      </h4>

                      <h5><strong>Hire Date</strong> : {{ dateFormat(tutor_request_details.hire_date) }}</h5>
                    </blockquote>

                    <div class="col-lg-10 col-md-10 col-sm-12">

                      <div class="row">

                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <h5><strong>Tuition Type </strong> <br> {{ tuition_type.title }}</h5>
                          <h5 v-if="tutor_request_details.tutoring_time"><strong>Tutoring Time </strong> <br> {{ tutor_request_details.tutoring_time }}</h5>
                          <h5 v-if="!tutor_request_details.tutoring_time"><strong>Tutoring Time </strong> <br> N/A</h5>
                          <h5><strong>Salary </strong> <br> <span
                            v-text="tutor_request_details.salary_negotiable_status == '1' ? 'Negotiable': tutor_request_details.salary + ' ' +'BDT' "></span>
                          </h5>

                          <h5><strong>Location </strong> <br> {{ district.name }}, {{ thana.name }} <span
                            v-if="union">, {{ union.name }}</span></h5>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <h5><strong>Student Gender </strong> <br> {{ tutor_request_details.student_gender }}</h5>
                          <h5 v-if="tuition_days_week"><strong>Tutoring Days </strong> <br> {{ tuition_days_week.title }}</h5>
                          <h5 v-if="!tuition_days_week"><strong>Tutoring Days </strong> <br> N/A </h5>
                          <h5><strong>Subjects </strong> <br> <span class="badge badge-secondary mx-1"
                                                                    v-for="inner_row in tutor_request_subjects">{{
                              inner_row.subject.title
                            }}</span></h5>
                        </div>

                        <div class="col-lg-4 col-md-4 col-sm-12">
                          <h5><strong>Preferred Tutor </strong> <br> {{ tutor_request_details.tutor_gender }}</h5>
                          <h5><strong>No of Student </strong> <br> {{ tutor_request_details.number_of_student }}</h5>
                        </div>

                        <div class="col-lg-12 col-md-12 col-sm-12" v-if="tutor_request_details.more_about_requirement">
                          <h5><strong>Other Requirements </strong> <br> {{ tutor_request_details.more_about_requirement }}</h5>
                        </div>

                      </div>

                    </div>


                    <template class="text-right" v-slot:footer>

                      <a href="javaScript:void(0)" class="btn btn-info">Apply</a>

                    </template>
                  </b-card>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
import Vue from 'vue'
import Swal from 'sweetalert2'
import {Form, HasError, AlertError} from 'vform'

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
    return /^\d+$/.test(params.id)
  },

  data() {
    return {
      loading: true,
      id: this.$route.params.id,
      username: this.$route.params.username,
      tutor_request_details: '',
      tuition_category: '',
      tuition_class: '',
      tuition_days_week: '',
      tuition_type: '',
      district: '',
      thana: '',
      union: '',
      tutor_request_subjects: [],
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {

    dateFormat(date) {
      return this.$moment(date).format('MMMM D,YYYY');
    },

    fetchTutorRequestDetails() {
      var vm = this;
      var id = vm.id;
      var username = vm.username;

      this.$axios.get('frontend/fetch-tutor-request-details/' + id + '/' + username).then(function (response) {

        vm.tutor_request_details = response.data;
        vm.tuition_category = response.data.tuition_category;
        vm.tuition_class = response.data.tuition_class;
        vm.tuition_days_week = response.data.tuition_days_week;
        vm.tuition_type = response.data.tuition_type;
        vm.tutor_request_subjects = response.data.tutor_request_subjects;
        vm.district = response.data.district;
        vm.thana = response.data.thana;
        vm.union = response.data.union;
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
    this.fetchTutorRequestDetails();
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
