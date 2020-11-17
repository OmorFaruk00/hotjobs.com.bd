<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-2">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <dashboardNavbar/>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-10">
          <div class="card">
            <div class="card-body">
              <h1>Upload Resume</h1>

              <div v-if="employee.cv_url" class="col-lg-2 col-md-2 col-sm-12 offset-lg-5 offset-md-5">

                <div class="cv-box">
                  <i class="bx bxs-file-pdf"></i>

                  <br>
                  <p>{{ employee.name }} .pdf</p>
                </div>

              </div>

              <div v-if="employee.cv_url" class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 text-center mt-3">
                <a :href="`${url}`+employee.cv_url" class="btn btn-info btn-sm" target="_blank"><i class="bx bx-download"></i> Download</a>
                <a href="javaScript:void(0)" class="btn btn-danger btn-sm" @click="deleteItem(employee.id)"><i class="bx bx-trash"></i> Delete</a>
              </div>

              <div v-if="!employee.cv_url" class="col-lg-6 col-md-6 col-sm-12 offset-lg-3 offset-md-3 mt-3">
                <input type="file" class="form-control mt-2" name="cv" ref="cv"
                       id="cv" v-on:change="cvUpload()" accept="application/pdf">
              </div>

              <div class="col-12 cv-uploading-guideline">
                <h5>Standard file uploading guideline.</h5>
                <ul>
                  <li>File must be less than 1024 KB.</li>
                  <li>File format should be .pdf</li>
                </ul>
              </div>

            </div>
          </div>
        </div>

      </div>


    </div>

  </div>
</template>

<script>

import dashboardNavbar from '~/components/MyJobs/navbar'
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
  middleware: 'employeeAuthenticated',
  name: "upload-resume",
  components: {
    dashboardNavbar
  },
  data() {
    return {
      employee: '',
      url: this.$axios.defaults.baseURL,
    }
  },
  methods: {

    async getAuthEmployee() {
      var token = window.$nuxt.$cookies.get('token');

      return await this.$axios.get('/auth-employee/' + token + '?token=' + token)
        .then((response) => {
          this.employee = response.data
        })
        .catch((error) => {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

          if (error.response.status == 401) {
            Toast.fire({
              icon: 'warning',
              title: 'Token Not Found'
            });
          }

        })
    },

    async cvUpload() {

      var token = window.$nuxt.$cookies.get('token');
      let formData = new FormData();
      formData.append('cv_url', this.$refs.cv.files[0]);

      return await this.$axios.post('employee-cv-upload?token=' + token, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
        .then((response) => {
          Toast.fire({
            icon: 'success',
            title: 'Updated successfully'
          });

          this.$emit('afterCreate');
        })

        .catch((error) => {
          Swal("Failed!", "There was something wrong.", "warning");
        });
    },

    deleteItem(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        //send request to the server
        if (result.value) {
          var token = window.$nuxt.$cookies.get('token');

          this.$axios.put(this.url + 'employee-cv-delete/' + id + '?token='+token).then(() => {
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

            this.$emit('AfterDelete');

          }).catch(() => {
            Swal("Failed!", "There was something wrong.", "warning");
          });
        }
      })
    }
  },

  created() {
    this.getAuthEmployee();

    this.$on('afterCreate', () => {
      this.getAuthEmployee();
    });

    this.$on('AfterDelete', () => {
      this.getAuthEmployee();
    });

  },
}
</script>

<style scoped>
.cv-uploading-guideline h5 {
  color: #428BCA;
}

.cv-uploading-guideline ul {
  list-style: square;
}

.cv-box {
  border: 1px dotted #000;
  text-align: center;
}

.cv-box i {
  font-size: 150px;
}
</style>
