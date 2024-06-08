<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-8 col-md-8 offset-lg-2 offset-md-2 col-sm-8 offset-sm-2">
          <div class="card">
            <div class="card-body contact text-center">

              <h3>User Feedback</h3>

            </div>
          </div>
        </div>

        <div class="col-lg-8 col-md-8 offset-lg-2 offset-md-2 col-sm-8 offset-sm-2">
          <div class="card">
            <div class="card-body contact">

              <form @submit.prevent="createFeedBack()">

                <div class="col-12">
                  <div class="form-group">
                    <label for="">Please choose a site <span class="text text-danger">*</span></label>
                    <select name="site" id="" v-model="feedback.site" class="form-control"
                            :class="{ 'is-invalid': feedback.errors.has('site') }">
                      <option value="">Select one</option>
                      <option value="Category Wise Jobs">Category Wise Jobs (Functional)</option>
                      <option value="Category Wise Jobs">Category Wise Jobs (Industrial)</option>
                      <option value="Helping Hand">Helping Hand</option>
                      <option value="Dream Jobs">Dream Jobs</option>
                      <option value="Tutor / Home Tuition">Tutor / Home Tuition</option>
                      <option value="TENDER / EOI">TENDER / EOI</option>
                    </select>
                    <has-error :form="feedback" field="site"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <label for="">How satisfied you are with this module? <span class="text-danger">*</span></label>
                  <b-form-group>
                    <b-form-radio v-model="feedback.module_status" name="module_status" value="Excellent">Excellent
                    </b-form-radio>
                    <b-form-radio v-model="feedback.module_status" name="module_status" value="Very Good">Very Good
                    </b-form-radio>
                    <b-form-radio v-model="feedback.module_status" name="module_status" value="Good">Good</b-form-radio>
                    <b-form-radio v-model="feedback.module_status" name="module_status" value="Satisfactory">SatisfactoryNot
                      Satisfactory
                    </b-form-radio>
                    <b-form-radio v-model="feedback.module_status" name="module_status" value="Not Satisfactory">Not
                      Satisfactory
                    </b-form-radio>
                  </b-form-group>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="">Are you facing any problem ? <span class="text-danger">*</span></label>
                    <textarea v-model="feedback.facing_problem" name="facing_problem" id="facing_problem" cols="30" rows="10" class="form-control"
                              :class="{ 'is-invalid': feedback.errors.has('facing_problem') }" placeholder="Are you facing any problem"></textarea>
                    <has-error :form="feedback" field="facing_problem"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="">Do you have any suggestions? <span class="text-danger">*</span></label>
                    <textarea v-model="feedback.suggestions" name="suggestions" id="suggestions" cols="30" rows="10" class="form-control" :class="{ 'is-invalid': feedback.errors.has('suggestions') }"
                              placeholder="Do you have any suggestions?"></textarea>
                    <has-error :form="feedback" field="suggestions"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="">Email <span class="text-danger">*</span></label>
                    <input v-model="feedback.email" type="email" class="form-control" :class="{ 'is-invalid': feedback.errors.has('email') }" placeholder="Enter email">
                    <has-error :form="feedback" field="email"></has-error>
                  </div>
                </div>

                <div class="col-12">
                  <div class="form-group">
                    <label for="">Phone <span class="text-danger">*</span></label>
                    <input v-model="feedback.phone" type="text" class="form-control" :class="{ 'is-invalid': feedback.errors.has('phone') }" placeholder="Enter phone">
                    <has-error :form="feedback" field="email"></has-error>
                  </div>
                </div>

                <div class="col-12 text-center">
                  <div class="form-group">
                    <button class="tcb-animate-e tcb-info"><i class="bx bx-rocket"></i> Send</button>
                  </div>
                </div>

              </form>


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
  data() {
    return {
      feedback: new Form({
        id: '',
        feedback: '',
        module_status: '',
        facing_problem: '',
        suggestions: '',
        email: '',
        phone: '',
      }),
      url: this.$axios.defaults.baseURL,
    }
  },
  methods: {
    createFeedBack() {
      alert('working...')

      console.log(this.feedback)
    }
  }
}
</script>

<style scoped>

</style>
