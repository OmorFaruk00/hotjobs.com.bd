<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-2">

          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <dashboardNavbar/>
                </div>
              </div>
            </div>
          </div>


          <div class="col-12">
            <div class="card" style="background: transparent">
              <div class="card-body">

                <adsbygoogle/>

              </div>
            </div>
          </div>


        </div>

        <div class="col-lg-10">
          <div class="card">
            <div class="card-header">
              View resume
            </div>
            <div class="card-body">
              <p>Here you will get a detailed view of your resume and you can download your resume from Download Resume
                option.</p>

              <div class="row">
                <div class="col-lg-8 col-md-8 col-sm-12">
                  <h4 v-if="employee.personal_details">{{ employee.personal_details.first_name }} {{
                    employee.personal_details.last_name }}</h4>
                  <h6 v-if="address">Address:

                    <span v-if="address.present_location == 0">
                      <span v-if="address.present_union">{{ address.present_union.name }},</span>
                      {{ address.present_thana.name }},
                      {{ address.present_district.name }}
                    </span>

                    <span v-if="address.present_location == 1">{{ address.present_country.countries_name }}</span>

                  </h6>

                  <h6 v-if="personal_details.mobile_no_1">Mobile No 1: {{ personal_details.mobile_no_1 }}</h6>
                  <h6 v-if="personal_details.mobile_no_2">Mobile No 2: {{ personal_details.mobile_no_2 }}</h6>
                  <h6 v-if="personal_details.mobile_no_3">Mobile No 3: {{ personal_details.mobile_no_3 }}</h6>
                  <h6 v-if="personal_details">Email: {{ personal_details.email }} <span
                    v-if="personal_details.alternate_email">,{{ personal_details.alternate_email }}</span></h6>
                </div>

                <div class="col-lg-4 col-md-4 col-sm-12 text-right" v-if="employee.image_url">

                  <img :src="getPhoto()" alt="employee.image_url" width="160px">

                </div>

                <div class="col-lg-12 col-md-12 col-sm-12 my-2 text-right" v-if="employee.cv_url">

                  <a :href="`${url}`+employee.cv_url" class="btn btn-info btn-sm my-2" target="_blank"><i
                    class="bx bx-show-alt"></i> Uploded Cv</a>

                </div>

                <div class="col-12 border"></div>

                <div class="col-12" v-if="career_and_application_information">
                  <h4 class="bg-soft-light">Career Objective:</h4>
                  <p>{{ career_and_application_information.objective }}</p>
                </div>

                <div class="col-12" v-if="employment_histories.length > 0">
                  <h4 class="bg-soft-light">Employment History:</h4>

                  <div class="card-body" v-for="(row,index) in employment_histories">
                    <h5>{{ index+1 }}. {{ row.designation }} ({{ row.from_date }} - <span
                      v-if="row.currently_working == '1'">Continuing</span> <span v-else>{{ row.to_date }}</span>)</h5>
                    <h6>{{ row.company_name}}</h6>
                    <h6>Company Location : {{ row.company_location }}</h6>
                    <h6>Department : {{ row.department }}</h6>
                  </div>

                </div>

                <div class="col-12" v-if="academic_summaries.length > 0">
                  <h4 class="bg-soft-light">Academic Qualification: :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th>Exam Title</th>
                        <th>Concentration/Major</th>
                        <th>Institute</th>
                        <th>Result</th>
                        <th>Pas.Year</th>
                        <th>Duration</th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="row in academic_summaries">
                        <td>{{ row.level_of_education.name }}</td>
                        <td>{{ row.concentration }}</td>
                        <td>{{ row.institute_name }}</td>
                        <td>{{ row.result }}</td>
                        <td>{{ row.passing_year.name }}</td>
                        <td>{{ row.duration }}</td>
                      </tr>

                      </tbody>

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="training_summaries.length > 0">
                  <h4 class="bg-soft-light">Training Summary :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th>Training Title</th>
                        <th>Topic</th>
                        <th>Institute</th>
                        <th>Country</th>
                        <th>Location</th>
                        <th>Year</th>
                        <th>Duration
                        </th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="row in training_summaries">
                        <td>{{ row.training_title}}</td>
                        <td>{{ row.topics_covered }}</td>
                        <td>{{ row.institute }}</td>
                        <td>{{ row.country.countries_name }}</td>
                        <td>{{ row.location }}</td>
                        <td>{{ row.year.name }}</td>
                        <td>{{ row.duration }}</td>
                      </tr>

                      </tbody>

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="training_summaries.length > 0">
                  <h4 class="bg-soft-light">Professional Qualification :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <td>Certification</td>
                        <td>Institute</td>
                        <td>Location</td>
                        <td>From</td>
                        <td>To</td>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="row in professional_certification_summaries">
                        <td>{{ row.certification }}</td>
                        <td>{{ row.institute }}</td>
                        <td>{{ row.location }}</td>
                        <td>{{ row.from_duration }}</td>
                        <td>{{ row.to_duration }}</td>

                      </tr>

                      </tbody>

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="career_and_application_information">
                  <h4 class="bg-soft-light">Career and Application Information :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">

                      <tr>
                        <th width="30%">Looking For</th>
                        <td>{{ career_and_application_information.looking_for_job_level }}</td>
                      </tr>

                      <tr>
                        <th>Available For</th>
                        <td>{{ career_and_application_information.available_for_job_nature }}</td>
                      </tr>

                      <tr>
                        <th>Present Salary</th>
                        <td>{{ career_and_application_information.present_salary }}</td>
                      </tr>

                      <tr>
                        <th>Expected Salary</th>
                        <td>{{ career_and_application_information.expected_salary }}</td>
                      </tr>

                      <!--<tr>
                        <th>Preferred Job Category</th>
                        <td>{{ career_and_application_information.id }}</td>
                      </tr>-->

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="specialization_skills.length > 0">
                  <h4 class="bg-soft-light">Specialization :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">

                      <thead>
                      <tr>
                        <th>Fields of Specialization
                        </th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="row in specialization_skills">
                        <td>
                          <ul>
                            <li>{{ row.skill_name }}</li>
                          </ul>
                        </td>
                      </tr>

                      </tbody>


                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="language_proficiencies.length > 0">
                  <h4 class="bg-soft-light">Language Proficiency :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead>
                      <tr>
                        <th>Language</th>
                        <th>Reading</th>
                        <th>Writing</th>
                        <th>Speaking</th>
                      </tr>
                      </thead>

                      <tbody>
                      <tr v-for="row in language_proficiencies">
                        <td>{{ row.language }}</td>
                        <td>{{ row.reading }}</td>
                        <td>{{ row.writing }}</td>
                        <td>{{ row.speaking }}</td>
                      </tr>
                      </tbody>

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="personal_details">
                  <h4 class="bg-soft-light">Personal Details :</h4>

                  <div class="table-responsive">
                    <table class="table table-bordered">

                      <tr>
                        <th width="30%">Father's Name</th>
                        <td>{{ personal_details.father_name }}</td>
                      </tr>

                      <tr>
                        <th>Mother's Name</th>
                        <td>{{ personal_details.mother_name }}</td>
                      </tr>

                      <tr>
                        <th>Date of Birth</th>
                        <td>{{ personal_details.date_of_birth }}</td>
                      </tr>

                      <tr>
                        <th>Gender</th>
                        <td>{{ personal_details.gender }}</td>
                      </tr>

                      <tr>
                        <th>Marital Status</th>
                        <td>{{ personal_details.marital_status }}</td>
                      </tr>

                      <tr>
                        <th>Nationality</th>
                        <td>{{ personal_details.nationality }}</td>
                      </tr>

                      <tr>
                        <th>National Id No.</th>
                        <td>{{ personal_details.national_id_no }}</td>
                      </tr>

                      <tr>
                        <th>Religion</th>
                        <td>{{ personal_details.religion }}</td>
                      </tr>

                      <tr>
                        <th>Current Location</th>
                        <td v-if="address">
                          <span v-if="address.present_location == 0">
                            <span v-if="address.present_union">{{ address.present_union.name }},</span>
                            {{ address.present_thana.name }},
                            {{ address.present_district.name }}
                          </span>
                          <span v-if="address.present_location == 1">{{ address.present_country.countries_name }}</span>
                        </td>
                        <td v-else></td>
                      </tr>

                    </table>
                  </div>

                </div>

                <div class="col-12" v-if="references.length > 0">
                  <h4 class="bg-soft-light">Reference (s) :</h4>

                  <div class="table-responsive" v-for="(row,index) in references">
                    <table class="table table-bordered">

                      <tr>
                        <th width="30%">Name</th>
                        <td>{{ row.name }}</td>
                      </tr>

                      <tr>
                        <th>Organization</th>
                        <td>{{ row.organization }}</td>
                      </tr>

                      <tr>
                        <th>Designation</th>
                        <td>{{ row.designation }}</td>
                      </tr>

                      <tr>
                        <th>Mobile</th>
                        <td>{{ row.mobile }}</td>
                      </tr>

                      <tr>
                        <th>E-Mail</th>
                        <td>{{ row.email }}</td>
                      </tr>

                      <tr>
                        <th>Relation</th>
                        <td>{{ row.relation }}</td>
                      </tr>
                    </table>
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


    </div>

  </div>
</template>

<script>
  import dashboardNavbar from '~/components/MyJobs/navbar'
  import Swal from 'sweetalert2';
  import ads from "@/components/Ads";

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
    name: "view-resume",
    data() {
      return {
        employee: '',
        address: '',
        personal_details: '',
        career_and_application_information: '',
        employment_histories: '',
        academic_summaries: '',
        training_summaries: '',
        professional_certification_summaries: '',
        specialization_skills: '',
        language_proficiencies: '',
        references: '',
        url: this.$axios.defaults.baseURL,
      }
    },
    components: {
      dashboardNavbar,
      ads
    },
    methods: {

      getPhoto() {
        let image_url = this.url + this.employee.image_url;
        return image_url;
      },

      async getAuthEmployee() {
        var token = window.$nuxt.$cookies.get('token');

        return await this.$axios.get('/auth-employee/' + token + '?token=' + token)
          .then((response) => {
            this.employee = response.data;
            // console.log(response.data);
            this.address = response.data.address;
            this.personal_details = response.data.personal_details;
            this.career_and_application_information = response.data.career_and_application_information;
            this.employment_histories = response.data.employment_histories;
            this.academic_summaries = response.data.academic_summaries;
            this.training_summaries = response.data.training_summaries;
            this.professional_certification_summaries = response.data.professional_certification_summaries;
            this.specialization_skills = response.data.specialization__skills;
            this.language_proficiencies = response.data.language_proficiencies;
            this.references = response.data.references;
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

            if (error.response.status == 422) {
              Toast.fire({
                icon: 'warning',
                title: 'Validation Error'
              });
            }

          })
      },
    },
    mounted() {
      this.getAuthEmployee();
    },
  }
</script>

<style scoped>
  .border {
    border-bottom: 2px solid #000;
    margin: 15px 0;
  }

</style>
