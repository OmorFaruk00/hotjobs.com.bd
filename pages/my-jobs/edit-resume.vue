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

              <p class="card-title-desc">Here you can edit your resume in five different steps (Personal, Education/
                Training, Employment, Other Information and Photograph). To enrich your resume provide authentic
                information.</p>

              <!-- Nav tabs -->
              <editResumeHorizontalTab/>

              <!-- Tab panes -->
              <div class="tab-content p-3 text-muted">

                <div class="tab-pane active" id="personal" role="tabpanel">
                  <div class="card">
                    <div class="card-body">
                      <div id="accordion">

                        <!--personal-->
                        <div class="card mb-1 shadow-none">
                          <div class="card-header" id="headingPersonalDetails">
                            <h6 class="m-0">
                              <a href="#collapsePersonalDetails" class="text-dark" data-toggle="collapse"
                                 aria-expanded="true"
                                 aria-controls="collapsePersonalDetails">
                                Personal Details
                              </a>
                            </h6>
                          </div>

                          <div id="collapsePersonalDetails" class="collapse"
                               aria-labelledby="headingPersonalDetails" data-parent="#accordion">
                            <div class="card-body">

                              <div class="text-center" v-if="!employee.personal_details">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addPersonalDetailsModal">Add Personal Details
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.personal_details">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editPersonalDetailsModal(employee.personal_details)"><i
                                    class="bx bx-edit"></i> Edit
                                  </button>

                                </div>

                                <table class="table">
                                  <tr>

                                    <th>First Name <br>
                                      <span>{{ employee.personal_details.first_name }}</span>
                                    </th>

                                    <th>Nationality<br>
                                      <span>{{ employee.personal_details.nationality }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Last Name<br>
                                      <span>{{ employee.personal_details.last_name }}</span>
                                    </th>

                                    <th>National Id No<br>
                                      <span>{{ employee.personal_details.national_id_no }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Father's Name<br>
                                      <span>{{ employee.personal_details.father_name }}</span>
                                    </th>

                                    <th>Passport Number<br>
                                      <span>{{ employee.personal_details.passport_number }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Mother's Name<br>
                                      <span>{{ employee.personal_details.mother_name }}</span>
                                    </th>

                                    <th>Passport Issue Date<br>
                                      <span>{{ employee.personal_details.passport_issue_date }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Date of Birth<br>
                                      <span>{{ employee.personal_details.date_of_birth }}</span>
                                    </th>

                                    <th>Mobile No 1<br>
                                      <span>{{ employee.personal_details.mobile_no_1 }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Gender<br>
                                      <span>{{ employee.personal_details.gender }}</span>
                                    </th>

                                    <th>Mobile No 2<br>
                                      <span>{{ employee.personal_details.mobile_no_2 }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Religion<br>
                                      <span>{{ employee.personal_details.religion }}</span>
                                    </th>

                                    <th>Mobile No 3<br>
                                      <span>{{ employee.personal_details.mobile_no_3 }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Marital Status<br>
                                      <span>{{ employee.personal_details.marital_status }}</span>
                                    </th>

                                    <th>Email<br>
                                      <span>{{ employee.personal_details.email }}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Alternate Email<br>
                                      <span>{{ employee.personal_details.alternate_email }}</span>
                                    </th>

                                    <th><br>
                                      <span></span>
                                    </th>

                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!--personal-->

                        <!--Address Details-->
                        <div class="card mb-1 shadow-none">
                          <div class="card-header" id="headingAddressDetails">
                            <h6 class="m-0">
                              <a href="#collapseAddressDetails" class="text-dark collapsed" data-toggle="collapse"
                                 aria-expanded="false"
                                 aria-controls="collapseAddressDetails">
                                Address Details
                              </a>
                            </h6>
                          </div>
                          <div id="collapseAddressDetails" class="collapse" aria-labelledby="headingAddressDetails"
                               data-parent="#accordion">

                            <div class="card-body">

                              <div class="text-center" v-if="!employee.address">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addAddressModal">Add Address
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.address">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editAddressModal(employee.address)"><i
                                    class="bx bx-edit"></i> Edit
                                  </button>

                                </div>

                                <table class="table">
                                  <tr>

                                    <th>Present Address <br>
                                      <span>{{ employee.address.present_village }}</span>
                                    </th>

                                    <th>Permanent Address<br>
                                      <span>{{ employee.address.permanent_village }}</span>
                                    </th>

                                  </tr>
                                </table>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!--Address Details-->

                        <!--Career and Application Information -->
                        <div class="card mb-1 shadow-none">
                          <div class="card-header" id="headingCareerAndApplicationInformation">
                            <h6 class="m-0">
                              <a href="#collapseCareerAndApplicationInformation" class="text-dark collapsed"
                                 data-toggle="collapse"
                                 aria-expanded="false"
                                 aria-controls="collapseCareerAndApplicationInformation">
                                Career and Application Information
                              </a>
                            </h6>
                          </div>
                          <div id="collapseCareerAndApplicationInformation" class="collapse"
                               aria-labelledby="headingCareerAndApplicationInformation" data-parent="#accordion">

                            <div class="card-body">

                              <div class="text-center" v-if="!employee.career_and_application_information">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addCareerAndApplicationInformationModal">Add Career and Application
                                  Information
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.career_and_application_information">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editCareerAndApplicationInformationModal(employee.career_and_application_information)">
                                    <i
                                      class="bx bx-edit"></i> Edit
                                  </button>

                                </div>

                                <table class="table">
                                  <tr>

                                    <th colspan="2">Objective <br>
                                      <span>{{ employee.career_and_application_information.objective }}</span>
                                    </th>


                                  </tr>

                                  <tr>

                                    <th>Present Salary<br>
                                      <span>{{ employee.career_and_application_information.present_salary}}</span>

                                    </th>

                                    <th>Expected Salary<br>
                                      <span>{{ employee.career_and_application_information.expected_salary}}</span>
                                    </th>

                                  </tr>

                                  <tr>

                                    <th>Looking for (Job Level)<br>
                                      <span>{{ employee.career_and_application_information.looking_for_job_level}}</span>

                                    </th>

                                    <th>Available for (Job Nature)<br>
                                      <span>{{ employee.career_and_application_information.available_for_job_nature}}</span>
                                    </th>

                                  </tr>
                                </table>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!--Career and Application Information -->

                        <!--Preferred Areas -->
                        <div class="card mb-1 shadow-none">
                          <div class="card-header" id="headingPreferredAreas">
                            <h6 class="m-0">
                              <a href="#collapsePreferredAreas" class="text-dark collapsed" data-toggle="collapse"
                                 aria-expanded="false"
                                 aria-controls="collapsePreferredAreas">
                                Preferred Areas
                              </a>
                            </h6>
                          </div>
                          <div id="collapsePreferredAreas" class="collapse"
                               aria-labelledby="headingPreferredAreas" data-parent="#accordion">

                            <div class="card-body">

                              <div class="text-center">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addPreferredAreasModal">Add Preferred Areas
                                </button>
                              </div>

                              <!--<div class="table-responsive" v-if="employee.preferred_areas">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editPreferred_areasModal(employee.preferred_areas)"><i
                                    class="bx bx-edit"></i> Edit
                                  </button>

                                </div>

                                <table class="table">
                                  <tr>
                                    <th colspan="2">Preferred Job Categories</th>
                                  </tr>



                                  <tr>
                                    <th>Functional <br>

                                    <span v-for="row in employee.preferred_areas.preferred_areas_skills">
                                        {{ row.skill.name }} ,
                                    </span>

                                    </th>

                                    <th>Special Skill <br>
                                    <span>test</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Preferred Job Location</th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Inside Bangladesh<br>
                                    <span>{{ employee.preferred_areas.inside_bangladesh }}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Outside Bangladesh<br>
                                    <span>{{ employee.preferred_areas.outside_bangladesh }}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Add your preferred organization type<br>
                                    <span>{{ employee.preferred_areas.preferred_organization_type }}</span>
                                    </th>
                                  </tr>

                                </table>
                              </div>-->

                            </div>

                          </div>
                        </div>
                        <!--Preferred Areas -->

                        <!--Other Relevant Information -->
                        <div class="card mb-1 shadow-none">
                          <div class="card-header" id="headingOtherRelevantInformation">
                            <h6 class="m-0">
                              <a href="#collapseOtherRelevantInformation" class="text-dark collapsed"
                                 data-toggle="collapse"
                                 aria-expanded="false"
                                 aria-controls="collapseOtherRelevantInformation ">
                                Other Relevant Information
                              </a>
                            </h6>
                          </div>
                          <div id="collapseOtherRelevantInformation" class="collapse"
                               aria-labelledby="headingOtherRelevantInformation" data-parent="#accordion">

                            <div class="card-body">

                              <div class="text-center" v-if="!employee.other_relevant_information">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addOtherRelevantInformationModal">Add Other Relevant Information
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.other_relevant_information">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editOtherRelevantInformationModal(employee.other_relevant_information)">
                                    <i
                                      class="bx bx-edit"></i> Edit
                                  </button>

                                </div>

                                <table class="table">
                                  <tr>
                                    <th colspan="2">Career Summary <br>
                                      <span>{{ employee.other_relevant_information.career_summary }}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Special Qualification <br>
                                      <span>{{ employee.other_relevant_information.special_qualification }}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Keywords<br>
                                      <span>{{ employee.other_relevant_information.keywords }}</span>
                                    </th>
                                  </tr>

                                </table>
                              </div>
                            </div>

                          </div>
                        </div>
                        <!--Other Relevant Information -->
                      </div>

                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="education_training" role="tabpanel2">
                  <div class="card-body">
                    <div id="accordion2">
                      <div class="card mb-1 shadow-none">
                        <div class="card-header" id="headingAcademicSummary">
                          <h6 class="m-0">
                            <a href="#collapseAcademicSummary" class="text-dark" data-toggle="collapse"
                               aria-expanded="true"
                               aria-controls="collapseAcademicSummary">
                              Academic Summary
                            </a>
                          </h6>
                        </div>

                        <div id="collapseAcademicSummary" class="collapse"
                             aria-labelledby="headingAcademicSummary" data-parent="#accordion2">
                          <div class="card-body">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life
                            accusamus terry richardson ad squid. 3 wolf moon officia
                            aute, non cupidatat skateboard dolor brunch. Food truck
                            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                            sunt aliqua put a bird on it squid single-origin coffee
                            nulla assumenda shoreditch et. Nihil anim keffiyeh
                            helvetica, craft beer labore wes anderson cred nesciunt
                            sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                            Leggings occaecat craft beer farm-to-table, raw denim
                            aesthetic synth nesciunt you probably haven't heard of them
                            accusamus labore sustainable VHS.
                          </div>
                        </div>
                      </div>

                      <div class="card mb-1 shadow-none">
                        <div class="card-header" id="headingTrainingSummary">
                          <h6 class="m-0">
                            <a href="#collapseTrainingSummary" class="text-dark collapsed" data-toggle="collapse"
                               aria-expanded="false"
                               aria-controls="collapseTrainingSummary">
                              Training Summary
                            </a>
                          </h6>
                        </div>
                        <div id="collapseTrainingSummary" class="collapse" aria-labelledby="headingTrainingSummary"
                             data-parent="#accordion2">
                          <div class="card-body">
                            <div class="card-body">

                              <div class="text-center">
                                <button type="submit" class="btn btn-outline-secondary"
                                        @click="addTrainingSummariesModal">Add Training Summaries
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.training_summaries.length > 0"
                                   v-for="(row,index) in employee.training_summaries">

                                <div class="col-lg-12 col-md-12 col-sm-12">
                                  <h5 class="text-muted">Training {{ index+1 }}</h5>

                                  <div class="text-right" style="margin-top: -30px;">
                                    <div class="btn-group">

                                      <button type="submit" class="btn btn-outline-secondary btn-sm"
                                              @click="editTrainingSummariesModal(row)"><i
                                        class="bx bx-edit"></i> Edit
                                      </button>

                                      <button type="submit" class="btn btn-outline-warning btn-sm"
                                              @click="deleteTrainingSummariesModal(row.id)"><i
                                        class="bx bx-trash"></i> Delete
                                      </button>

                                    </div>
                                  </div>


                                </div>


                                <table class="table">
                                  <tr>
                                    <th>Training Title <br>
                                      <span>{{ row.training_title}}</span>
                                    </th>

                                    <th>Country <br>
                                      <span>{{ row.country.countries_name}}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Topics Covered<br>
                                      <span>{{ row.topics_covered}}</span>
                                    </th>

                                    <th>Training Year<br>
                                      <span>{{ row.year.name}}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th>Institute<br>
                                      <span>{{ row.institute}}</span>
                                    </th>

                                    <th>Duration<br>
                                      <span>{{ row.duration}}</span>
                                    </th>
                                  </tr>

                                  <tr>
                                    <th colspan="2">Location<br>
                                      <span>{{ row.location}}</span>
                                    </th>

                                  </tr>

                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="card mb-0 shadow-none">
                        <div class="card-header" id="headingProfessionalCertificationSummary">
                          <h6 class="m-0">
                            <a href="#collapseProfessionalCertificationSummary" class="text-dark collapsed"
                               data-toggle="collapse"
                               aria-expanded="false"
                               aria-controls="collapseProfessionalCertificationSummary">
                              Professional Certification Summary
                            </a>
                          </h6>
                        </div>
                        <div id="collapseProfessionalCertificationSummary" class="collapse"
                             aria-labelledby="headingProfessionalCertificationSummary" data-parent="#accordion2">

                          <div class="card-body">

                            <div class="text-center">
                              <button type="submit" class="btn btn-outline-secondary"
                                      @click="addProfessionalCertificationSummaryModal">Add Professional Certification
                                Summary
                              </button>
                            </div>

                            <div class="table-responsive"
                                 v-if="employee.professional_certification_summaries.length > 0"
                                 v-for="(row,index) in employee.professional_certification_summaries">

                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <h5 class="text-muted">Professional Qualification {{ index+1 }}</h5>

                                <div class="text-right" style="margin-top: -30px;">
                                  <div class="btn-group">

                                    <button type="submit" class="btn btn-outline-secondary btn-sm"
                                            @click="editProfessionalCertificationSummaryModal(row)"><i
                                      class="bx bx-edit"></i> Edit
                                    </button>

                                    <button type="submit" class="btn btn-outline-warning btn-sm"
                                            @click="deleteProfessionalCertificationSummaryModal(row.id)"><i
                                      class="bx bx-trash"></i> Delete
                                    </button>

                                  </div>
                                </div>


                              </div>


                              <table class="table">
                                <tr>
                                  <th>Certification<br>
                                    <span>{{ row.certification}}</span>
                                  </th>

                                  <th>Location<br>
                                    <span>{{ row.location}}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Institute<br>
                                    <span>{{ row.institute}}</span>
                                  </th>

                                  <th>Duration<br>
                                    <span>{{ row.from_duration}} to {{ row.to_duration}}</span>
                                  </th>
                                </tr>

                              </table>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                  </div>
                </div>


                <div class="tab-pane" id="employment" role="tabpanel3">
                  <div class="card-body">
                    <div id="accordion3">

                      <div class="card mb-1 shadow-none">
                        <div class="card-header" id="headingEmploymentHistory">
                          <h6 class="m-0">
                            <a href="#collapseEmploymentHistory" class="text-dark" data-toggle="collapse"
                               aria-expanded="true"
                               aria-controls="collapseEmploymentHistory">
                              Employment History
                            </a>
                          </h6>
                        </div>

                        <div id="collapseEmploymentHistory" class="collapse"
                             aria-labelledby="headingEmploymentHistory" data-parent="#accordion3">

                          <div class="card-body">

                            <div class="text-center">
                              <button type="submit" class="btn btn-outline-secondary"
                                      @click="addExperienceModal">Add Experience (If Required)
                              </button>
                            </div>

                            <div class="table-responsive" v-if="employee.employment_histories.length > 0"
                                 v-for="(row,index) in employee.employment_histories">

                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <h5 class="text-muted">Experience {{ index+1 }}</h5>

                                <div class="text-right" style="margin-top: -30px;">
                                  <div class="btn-group">

                                    <button type="submit" class="btn btn-outline-secondary btn-sm"
                                            @click="editExperienceModal(row)"><i
                                      class="bx bx-edit"></i> Edit
                                    </button>

                                    <button type="submit" class="btn btn-outline-warning btn-sm"
                                            @click="deleteExperienceModal(row.id)"><i
                                      class="bx bx-trash"></i> Delete
                                    </button>

                                  </div>
                                </div>


                              </div>


                              <table class="table">
                                <tr>
                                  <th>Company Name <br>
                                    <span>{{ row.company_name}}</span>
                                  </th>

                                  <th>Responsibilities <br>
                                    <span>{{ row.responsibilities}}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Company Business <br>
                                    <span>{{ row.company_business}}</span>
                                  </th>

                                  <th>Company Location<br>
                                    <span>{{ row.company_location}}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Designation<br>
                                    <span>{{ row.designation}}</span>
                                  </th>

                                  <th>Employment Period <br>
                                    <span>{{ row.from_date }} to </span>

                                    <span v-if="experience.currently_working == 1">Continue </span>
                                    <span v-else>{{ row.to_date }}</span>

                                  </th>
                                </tr>

                                <tr>
                                  <th colspan="2">Department<br>
                                    <span>{{ row.department}}</span>
                                  </th>

                                </tr>

                                <tr>
                                  <th colspan="2">Area Of Experiences<br>
                                    <span>{{ row.area_of_experiences}}</span>
                                  </th>

                                </tr>

                              </table>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="card mb-1 shadow-none">
                        <div class="card-header" id="headingEmploymentHistoryArmy">
                          <h6 class="m-0">
                            <a href="#collapseEmploymentHistoryArmy" class="text-dark" data-toggle="collapse"
                               aria-expanded="true"
                               aria-controls="collapseEmploymentHistoryArmy">
                              Employment History(For Retired Army Person)
                            </a>
                          </h6>
                        </div>

                        <div id="collapseEmploymentHistoryArmy" class="collapse"
                             aria-labelledby="headingEmploymentHistoryArmy" data-parent="#accordion3">

                          <div class="card-body">

                            <div class="text-center">
                              <button type="submit" v-if="!employee.employment_history_army"
                                      class="btn btn-outline-secondary"
                                      @click="addExperienceAtBangladeshArmyModal">Add Experience at Bangladesh Army
                              </button>
                            </div>

                            <div class="table-responsive" v-if="employee.employment_history_army">

                              <div class="col-lg-12 col-md-12 col-sm-12">
                                <div class="text-right">
                                  <div class="btn-group">
                                    <button type="submit" class="btn btn-outline-secondary btn-sm"
                                            @click="editExperienceAtBangladeshArmyModal(employee.employment_history_army)"><i
                                      class="bx bx-edit"></i> Edit
                                    </button>
                                  </div>
                                </div>

                              </div>


                              <table class="table">
                                <tr>
                                  <th>Ba No <br>
                                    <span>{{ employee.employment_history_army.ba_no }}</span>
                                  </th>

                                  <th>Ba Name <br>
                                    <span>{{ employee.employment_history_army.ba_name }}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Type <br>
                                    <span>{{ employee.employment_history_army.type }}</span>
                                  </th>

                                  <th>Trade <br>
                                    <span>{{ employee.employment_history_army.trade }}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Ranks <br>
                                    <span>{{ employee.employment_history_army.ranks }}</span>
                                  </th>

                                  <th>Arms <br>
                                    <span>{{ employee.employment_history_army.arms }}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th>Course <br>
                                    <span>{{ employee.employment_history_army.course }}</span>
                                  </th>

                                  <th>Date Of Commission<br>
                                    <span>{{ employee.employment_history_army.date_of_commission }}</span>
                                  </th>
                                </tr>

                                <tr>
                                  <th colspan="2">Date Of Retirement <br>
                                    <span>{{ employee.employment_history_army.date_of_retirement }}</span>
                                  </th>
                                </tr>

                              </table>
                            </div>
                          </div>

                        </div>
                      </div>


                    </div>

                  </div>
                </div>

                <div class="tab-pane" id="other_information" role="tabpanel">
                  <p class="mb-0">
                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                    art party before they sold out master cleanse gluten-free squid
                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                    art party locavore wolf cliche high life echo park Austin. Cred
                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                    farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                    mustache readymade keffiyeh craft.
                  </p>
                </div>

                <div class="tab-pane" id="photograph" role="tabpanel">
                  <p class="mb-0">
                    Trust fund seitan letterpress, keytar raw denim keffiyeh etsy
                    art party before they sold out master cleanse gluten-free squid
                    scenester freegan cosby sweater. Fanny pack portland seitan DIY,
                    art party locavore wolf cliche high life echo park Austin. Cred
                    vinyl keffiyeh DIY salvia PBR, banh mi before they sold out
                    farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral,
                    mustache readymade keffiyeh craft.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>


    </div>

    <!--<add personal details/>-->
    <div class="modal fade" id="addPersonalDetails" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Personal Details</h5>
            <h5 class="modal-title" v-else>Update Personal Details</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createPersonalDetails()">
            <div class="modal-body">

              <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                  <div class="form-group">
                    <label>First Name</label>
                    <input v-model="form.first_name" type="text" name="first_name" placeholder="Enter first name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('first_name') }">
                    <has-error :form="form" field="first_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Last Name</label>
                    <input v-model="form.last_name" type="text" name="last_name" placeholder="Enter last name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('last_name') }">
                    <has-error :form="form" field="last_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Father Name</label>
                    <input v-model="form.father_name" type="text" name="father_name" placeholder="Enter father name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('father_name') }">
                    <has-error :form="form" field="father_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Mother Name</label>
                    <input v-model="form.mother_name" type="text" name="mother_name" placeholder="Enter mother name"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('mother_name') }">
                    <has-error :form="form" field="mother_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Date Of Birth</label>
                    <datepicker v-model="form.date_of_birth"
                                :class="{ 'is-invalid': form.errors.has('date_of_birth') }"></datepicker>

                    <has-error :form="form" field="date_of_birth"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Gender</label>
                    <select v-model="form.gender" name="gender"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('gender') }">
                      <option value="" selected>Select one</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <has-error :form="form" field="gender"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Religion</label>
                    <select v-model="form.religion" name="religion"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('religion') }">
                      <option value="" selected>Select one</option>
                      <option value="Islam">Islam</option>
                      <option value="Buddhism">Buddhism</option>
                      <option value="Christianity">Christianity</option>
                      <option value="Hinduism">Hinduism</option>
                      <option value="Jainism">Jainism</option>
                      <option value="Judaism">Judaism</option>
                      <option value="Sikhism">Sikhism</option>
                      <option value="Others">Others</option>
                    </select>
                    <has-error :form="form" field="religion"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Marital Status</label>
                    <select v-model="form.marital_status" name="marital_status"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('marital_status') }">
                      <option value="" selected>Select one</option>
                      <option value="Unmarried">Unmarried</option>
                      <option value="Married">Married</option>
                      <option value="Single">Single</option>
                    </select>
                    <has-error :form="form" field="marital_status"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">

                  <div class="form-group">
                    <label>Nationality</label>
                    <input v-model="form.nationality" type="text" name="nationality" placeholder="Enter nationality"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('nationality') }">
                    <has-error :form="form" field="nationality"></has-error>
                  </div>

                  <div class="form-group">
                    <label>National Id No</label>
                    <input v-model="form.national_id_no" type="number" name="national_id_no"
                           placeholder="Enter national id no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('national_id_no') }">
                    <has-error :form="form" field="national_id_no"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Passport Number</label>
                    <input v-model="form.passport_number" type="text" name="passport_number"
                           placeholder="Enter passport_number"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('passport_number') }">
                    <has-error :form="form" field="passport_number"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Passport Issue Date</label>

                    <datepicker v-model="form.passport_issue_date"
                                :class="{ 'is-invalid': form.errors.has('passport_issue_date') }"></datepicker>

                    <has-error :form="form" field="passport_issue_date"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Country</label>
                    <select v-model="form.country_id" name="country_id"
                            class="form-control" :class="{ 'is-invalid': form.errors.has('country_id') }" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                        row.countries_isd_code }})
                      </option>

                    </select>

                    <has-error :form="form" field="country_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Mobile No 1</label>
                    <input v-model="form.mobile_no_1" type="text" name="mobile_no_1" placeholder="Enter mobile no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('mobile_no_1') }">
                    <has-error :form="form" field="mobile_no_1"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Mobile No 2</label>
                    <input v-model="form.mobile_no_2" type="text" name="mobile_no_2" placeholder="Enter mobile no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('mobile_no_2') }">
                    <has-error :form="form" field="mobile_no_2"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Mobile No 3</label>
                    <input v-model="form.mobile_no_3" type="text" name="mobile_no_3" placeholder="Enter mobile no"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('mobile_no_3') }">
                    <has-error :form="form" field="mobile_no_3"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Email</label>
                    <input v-model="form.email" type="email" name="email" placeholder="Enter email"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('email') }">
                    <has-error :form="form" field="email"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Alternate Email</label>
                    <input v-model="form.alternate_email" type="email" name="alternate_email"
                           placeholder="Enter alternate email"
                           class="form-control" :class="{ 'is-invalid': form.errors.has('alternate_email') }">
                    <has-error :form="form" field="alternate_email"></has-error>
                  </div>

                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addAddressModal-->
    <div class="modal fade" id="addAddress" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Address</h5>
            <h5 class="modal-title" v-else>Update Address</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createAddress()">
            <div class="modal-body">

              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12">
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12">


                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="address.same_address" type="checkbox"
                           name="present_location" id="same_address">
                    <label class="form-check-label" for="same_address">
                      Same as Present Address
                    </label>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-6">

                  <h1>Present Address</h1>

                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="address.present_location" type="radio"
                           name="present_location" id="insideBangladesh" value="0" checked>
                    <label class="form-check-label" for="insideBangladesh">
                      Inside Bangladesh
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="address.present_location" type="radio"
                           name="present_location" id="outsideBangladesh" value="1" checked>
                    <label class="form-check-label" for="outsideBangladesh">
                      Outside Bangladesh
                    </label>
                  </div>

                  <div class="form-group" v-if="address.present_location == 0">
                    <label>District</label>
                    <select v-model="address.present_district_id" name="present_district_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('present_district_id') }"
                            v-on:change="fetchPresentThana" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in districts" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="present_district_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.present_location == 0">
                    <label>Thana / Upazila</label>
                    <select v-model="address.present_thana_id" name="present_thana_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('present_thana_id') }"
                            v-on:change="fetchPresentUnion" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in thanas" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="present_thana_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.present_location == 0">
                    <label>Union</label>
                    <select v-model="address.present_union_id" name="present_union_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('present_union_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in unions" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="present_union_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.present_location == 1">
                    <label>Country</label>
                    <select v-model="address.present_country_id" name="present_country_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('present_country_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                        row.countries_isd_code }})
                      </option>

                    </select>

                    <has-error :form="address" field="present_country_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Present Village</label>
                    <textarea v-model="address.present_village" id="present_village" cols="30" rows="2"
                              name="present_village" placeholder="Enter present village"
                              class="form-control"
                              :class="{ 'is-invalid': address.errors.has('present_village') }"></textarea>

                    <has-error :form="address" field="present_village"></has-error>
                  </div>


                </div>


                <div class="col-lg-6 col-md-6 col-sm-6" v-if="!address.same_address">

                  <h1>Permanent Address</h1>

                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="address.permanent_location" type="radio"
                           name="permanent_location" id="permanentInsideBangladesh" value="0" checked>
                    <label class="form-check-label" for="permanentInsideBangladesh">
                      Inside Bangladesh
                    </label>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="address.permanent_location" type="radio"
                           name="permanent_location" id="permanentOutsideBangladesh" value="1" checked>
                    <label class="form-check-label" for="permanentOutsideBangladesh">
                      Outside Bangladesh
                    </label>

                    <has-error :form="address" field="present_location"></has-error>
                  </div>

                  <div class="form-group" v-if="address.permanent_location == 0">
                    <label>District</label>
                    <select v-model="address.permanent_district_id" name="permanent_district_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('permanent_district_id') }"
                            v-on:change="fetchPermanentThana" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in districts" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="permanent_district_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.permanent_location == 0">
                    <label>Thana / Upazila</label>
                    <select v-model="address.permanent_thana_id" name="permanent_thana_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('permanent_thana_id') }"
                            v-on:change="fetchPermanentUnion" required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in permanent_thanas" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="permanent_thana_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.permanent_location == 0">
                    <label>Union</label>
                    <select v-model="address.permanent_union_id" name="permanent_union_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('permanent_union_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in permanent_unions" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="address" field="permanent_union_id"></has-error>
                  </div>

                  <div class="form-group" v-if="address.permanent_location == 1">
                    <label>Country</label>
                    <select v-model="address.permanent_country_id" name="permanent_country_id"
                            class="form-control" :class="{ 'is-invalid': address.errors.has('permanent_country_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                        row.countries_isd_code }})
                      </option>

                    </select>

                    <has-error :form="address" field="permanent_country_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Permanent Village</label>
                    <textarea v-model="address.permanent_village" id="" cols="30" rows="2" name="permanent_village"
                              placeholder="Enter permanent village"
                              class="form-control"
                              :class="{ 'is-invalid': address.errors.has('permanent_village') }"></textarea>

                    <has-error :form="address" field="permanent_village"></has-error>
                  </div>

                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addCareerAndApplicationInformation-->
    <div class="modal fade" id="addCareerAndApplicationInformation" tabindex="-1" role="dialog"
         aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Career And Application Information</h5>
            <h5 class="modal-title" v-else>Update Career And Application Information</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createCareerAndApplicationInformation()">
            <div class="modal-body">

              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Objective</label>
                    <textarea v-model="career.objective" cols="30" rows="2" name="objective"
                              placeholder="Enter objective"
                              class="form-control" :class="{ 'is-invalid': career.errors.has('objective') }"></textarea>
                    <has-error :form="career" field="objective"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Present Salary</label>
                    <input v-model="career.present_salary" type="number" name="present_salary"
                           placeholder="Enter present salary"
                           class="form-control" :class="{ 'is-invalid': career.errors.has('present_salary') }">
                    <has-error :form="career" field="present_salary"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Expected Salary</label>
                    <input v-model="career.expected_salary" type="number" name="expected_salary"
                           placeholder="Enter expected salary"
                           class="form-control" :class="{ 'is-invalid': career.errors.has('expected_salary') }">
                    <has-error :form="career" field="expected_salary"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Looking for (Job Level)</label>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.looking_for_job_level" type="radio"
                             name="looking_for_job_level" id="Entry" value="Entry">
                      <label class="form-check-label" for="Entry">
                        Entry
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.looking_for_job_level" type="radio"
                             name="looking_for_job_level" id="Mid" value="Mid">
                      <label class="form-check-label" for="Mid">
                        Mid
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.looking_for_job_level" type="radio"
                             name="looking_for_job_level" id="Top" value="Top">
                      <label class="form-check-label" for="Top">
                        Top
                      </label>
                    </div>

                    <has-error :form="career" field="looking_for_job_level"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Available for (Job Nature)</label>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.available_for_job_nature" type="radio"
                             name="available_for_job_nature" id="FullTime" value="Full Time">
                      <label class="form-check-label" for="FullTime">
                        Full Time
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.available_for_job_nature" type="radio"
                             name="available_for_job_nature" id="PartTime" value="Part Time">
                      <label class="form-check-label" for="PartTime">
                        Part Time
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.available_for_job_nature" type="radio"
                             name="available_for_job_nature" id="Contract" value="Contract">
                      <label class="form-check-label" for="Contract">
                        Contract
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.available_for_job_nature" type="radio"
                             name="available_for_job_nature" id="Internship" value="Internship">
                      <label class="form-check-label" for="Internship">
                        Internship
                      </label>
                    </div>

                    <div class="form-check mb-3">
                      <input class="form-check-input" v-model="career.available_for_job_nature" type="radio"
                             name="available_for_job_nature" id="Freelance" value="Freelance">
                      <label class="form-check-label" for="Freelance">
                        Freelance
                      </label>
                    </div>

                    <has-error :form="career" field="available_for_job_nature"></has-error>
                  </div>
                </div>
              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addOtherRelevantInformationModal-->
    <div class="modal fade" id="addOtherRelevantInformationModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Other Relevant Information</h5>
            <h5 class="modal-title" v-else>Update Other Relevant Information</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createOtherRelevantInformation()">
            <div class="modal-body">

              <div class="row">

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Career Summary</label>
                    <textarea v-model="relevant.career_summary" cols="30" rows="2" name="career_summary"
                              placeholder="Enter career summary"
                              class="form-control"
                              :class="{ 'is-invalid': relevant.errors.has('career_summary') }"></textarea>
                    <has-error :form="relevant" field="career_summary"></has-error>
                  </div>

                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Special Qualification</label>
                    <textarea v-model="relevant.special_qualification" cols="30" rows="2" name="special_qualification"
                              placeholder="Enter special qualification"
                              class="form-control"
                              :class="{ 'is-invalid': relevant.errors.has('special_qualification') }"></textarea>
                    <has-error :form="relevant" field="special_qualification"></has-error>
                  </div>

                </div>

                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Keywords</label>
                    <textarea v-model="relevant.keywords" cols="30" rows="2" name="keywords"
                              placeholder="Enter keywords"
                              class="form-control"
                              :class="{ 'is-invalid': relevant.errors.has('keywords') }"></textarea>
                    <has-error :form="relevant" field="keywords"></has-error>
                  </div>

                </div>

              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addPreferAreaModal-->
    <div class="modal fade" id="addPreferAreaModal" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Prefer Area</h5>
            <h5 class="modal-title" v-else>Update Prefer Area</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="createPreferredAreas()">
            <div class="modal-body">

              <div class="row">

                <div class="col-lg-6 co-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Functional (Skill)</label>
                    <select v-model="prefer_area.general_skill_id" name="general_skill_id"
                            class="form-control " :class="{ 'is-invalid': prefer_area.errors.has('general_skill_id') }">

                      <option v-for="row in skill_general_categories" v-html="row.name"></option>

                    </select>


                    <has-error :form="prefer_area" field="general_skill_id"></has-error>
                  </div>
                </div>

                <div class="col-lg-6 co-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Special (Skill)</label>
                    <select v-model="prefer_area.special_skill_id" name="special_skill_id"
                            class="form-control bSelect"
                            :class="{ 'is-invalid': prefer_area.errors.has('special_skill_id') }">

                      <option v-for="row in skill_general_categories" v-html="row.name"></option>

                    </select>
                    <has-error :form="prefer_area" field="special_skill_id"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 co-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Inside Bangladesh</label>
                    <input v-model="prefer_area.inside_bangladesh" type="text" name="inside_bangladesh"
                           placeholder="Enter inside bangladesh"
                           class="form-control" :class="{ 'is-invalid': prefer_area.errors.has('inside_bangladesh') }">
                    <has-error :form="prefer_area" field="inside_bangladesh"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 co-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Outside Bangladesh</label>
                    <input v-model="prefer_area.outside_bangladesh" type="text" name="outside_bangladesh"
                           placeholder="Enter outside bangladesh"
                           class="form-control" :class="{ 'is-invalid': prefer_area.errors.has('outside_bangladesh') }">
                    <has-error :form="prefer_area" field="outside_bangladesh"></has-error>
                  </div>
                </div>

                <div class="col-lg-12 co-md-12 col-sm-12">
                  <div class="form-group">
                    <label>Preferred Organization Type</label>
                    <input v-model="prefer_area.preferred_organization_type" type="text"
                           name="preferred_organization_type" placeholder="Enter outside bangladesh"
                           class="form-control"
                           :class="{ 'is-invalid': prefer_area.errors.has('preferred_organization_type') }">
                    <has-error :form="prefer_area" field="preferred_organization_type"></has-error>
                  </div>
                </div>

              </div>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--    addTrainingSummariesModal-->
    <div class="modal fade" id="addTrainingSummariesModal" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Training Summaries</h5>
            <h5 class="modal-title" v-else>Update Training Summaries</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form @submit.prevent="editMode ? updateTrainingSummaries() : createTrainingSummaries()">
            <div class="modal-body">
              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Training Title</label>
                    <input v-model="training_summery.training_title" type="text" name="training_title"
                           placeholder="Enter training title"
                           class="form-control"
                           :class="{ 'is-invalid': training_summery.errors.has('training_title') }">
                    <has-error :form="training_summery" field="training_title"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Topics Covered</label>
                    <input v-model="training_summery.topics_covered" type="text" name="topics_covered"
                           placeholder="Enter topics covered"
                           class="form-control"
                           :class="{ 'is-invalid': training_summery.errors.has('topics_covered') }">
                    <has-error :form="training_summery" field="topics_covered"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Institute</label>
                    <input v-model="training_summery.institute" type="text" name="institute"
                           placeholder="Enter institute"
                           class="form-control" :class="{ 'is-invalid': training_summery.errors.has('institute') }">
                    <has-error :form="training_summery" field="institute"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Location</label>
                    <input v-model="training_summery.location" type="text" name="location"
                           placeholder="Enter location"
                           class="form-control" :class="{ 'is-invalid': training_summery.errors.has('location') }">
                    <has-error :form="training_summery" field="location"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Country</label>
                    <select v-model="training_summery.country_id" name="country_id"
                            class="form-control" :class="{ 'is-invalid': training_summery.errors.has('country_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                        row.countries_isd_code }})
                      </option>

                    </select>

                    <has-error :form="training_summery" field="country_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Year</label>
                    <select v-model="training_summery.training_year_id" name="country_id"
                            class="form-control"
                            :class="{ 'is-invalid': training_summery.errors.has('training_year_id') }"
                            required>
                      <option value="" selected>Select one</option>

                      <option v-for="row in years" :value="row.id">{{ row.name }}</option>

                    </select>

                    <has-error :form="training_summery" field="training_year_id"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Duration</label>
                    <input v-model="training_summery.duration" type="text" name="duration"
                           placeholder="Enter duration"
                           class="form-control"
                           :class="{ 'is-invalid': training_summery.errors.has('duration') }">
                    <has-error :form="training_summery" field="duration"></has-error>
                  </div>

                </div>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addProfessionalCertificationSummaryModal-->
    <div class="modal fade" id="addProfessionalCertificationSummaryModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Professional Certification Summary</h5>
            <h5 class="modal-title" v-else>Update Professional Certification Summary</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form
            @submit.prevent="editMode ? updateProfessionalCertificationSummary() : createProfessionalCertificationSummary()">
            <div class="modal-body">
              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Certification</label>
                    <input v-model="certificate.certification" type="text" name="certification"
                           placeholder="Enter certification"
                           class="form-control"
                           :class="{ 'is-invalid': certificate.errors.has('certification') }">
                    <has-error :form="certificate" field="certification"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Institute</label>
                    <input v-model="certificate.institute" type="text" name="institute"
                           placeholder="Enter institute"
                           class="form-control"
                           :class="{ 'is-invalid': certificate.errors.has('institute') }">
                    <has-error :form="certificate" field="institute"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Location</label>
                    <input v-model="certificate.location" type="text" name="location"
                           placeholder="Enter location"
                           class="form-control"
                           :class="{ 'is-invalid': certificate.errors.has('location') }">
                    <has-error :form="certificate" field="location"></has-error>
                  </div>

                  <div class="form-group">
                    <label>From Duration</label>

                    <datepicker v-model="certificate.from_duration"
                                :class="{ 'is-invalid': certificate.errors.has('from_duration') }"></datepicker>

                    <has-error :form="certificate" field="from_duration"></has-error>
                  </div>

                  <div class="form-group">
                    <label>To Duration</label>
                    <datepicker v-model="certificate.to_duration"
                                :class="{ 'is-invalid': certificate.errors.has('to_duration') }"></datepicker>

                    <has-error :form="certificate" field="to_duration"></has-error>
                  </div>

                </div>


              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addExperienceModal-->
    <div class="modal fade" id="addExperienceModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add Experience</h5>
            <h5 class="modal-title" v-else>Update Experience</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form
            @submit.prevent="editMode ? updateExperience() : createExperience()">
            <div class="modal-body">
              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Company Name</label>
                    <input v-model="experience.company_name" type="text" name="company_name"
                           placeholder="Enter company name"
                           class="form-control"
                           :class="{ 'is-invalid': experience.errors.has('company_name') }">
                    <has-error :form="experience" field="company_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Company Business</label>
                    <input v-model="experience.company_business" type="text" name="company_business"
                           placeholder="Enter company business"
                           class="form-control"
                           :class="{ 'is-invalid': experience.errors.has('company_business') }">
                    <has-error :form="experience" field="company_business"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Designation</label>
                    <input v-model="experience.designation" type="text" name="designation"
                           placeholder="Enter designation"
                           class="form-control"
                           :class="{ 'is-invalid': experience.errors.has('designation') }">
                    <has-error :form="experience" field="designation"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Department</label>
                    <input v-model="experience.department" type="text" name="department"
                           placeholder="Enter department"
                           class="form-control"
                           :class="{ 'is-invalid': experience.errors.has('department') }">
                    <has-error :form="experience" field="department"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Area Of Experiences</label>

                    <textarea v-model="experience.area_of_experiences" name="area_of_experiences" cols="30" rows="2"
                              class="form-control"
                              :class="{ 'is-invalid': experience.errors.has('area_of_experiences') }"
                              placeholder="Enter area of experiences"></textarea>

                    <has-error :form="experience" field="area_of_experiences"></has-error>
                  </div>
                </div>


                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Responsibilities</label>

                    <textarea v-model="experience.responsibilities" name="responsibilities" cols="30" rows="4"
                              class="form-control"
                              :class="{ 'is-invalid': experience.errors.has('responsibilities') }"
                              placeholder="Enter responsibilities"></textarea>

                    <has-error :form="experience" field="responsibilities"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Company Location</label>
                    <input v-model="experience.company_location" type="text" name="company_location"
                           placeholder="Enter company location"
                           class="form-control"
                           :class="{ 'is-invalid': experience.errors.has('company_location') }">
                    <has-error :form="experience" field="company_location"></has-error>
                  </div>

                  <div class="form-group">
                    <label>From Date</label>

                    <datepicker v-model="experience.from_date"
                                :class="{ 'is-invalid': experience.errors.has('from_date') }"></datepicker>

                    <has-error :form="experience" field="from_date"></has-error>
                  </div>

                  <div class="form-group">
                    <label>To Date</label>

                    <input type="text" value="Continuing" v-if="experience.currently_working == 1" readonly>

                    <datepicker v-else v-model="experience.to_date"
                                :class="{ 'is-invalid': experience.errors.has('to_date') }" required></datepicker>

                    <has-error :form="experience" field="to_date"></has-error>
                  </div>

                  <div class="form-check mb-3">
                    <input class="form-check-input" v-model="experience.currently_working" type="checkbox"
                           name="currently_working" id="currently_working">
                    <label class="form-check-label" for="currently_working">
                      Currently Working
                    </label>
                  </div>

                </div>


              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

    <!--addExperienceAtBangladeshArmyModal-->
    <div class="modal fade" id="addExperienceAtBangladeshArmyModal" tabindex="-1" role="dialog"
         aria-labelledby="addUserLabel"
         aria-hidden="true">

      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">

            <h5 class="modal-title" v-if="!editMode">Add ExperienceAt Bangladesh Army</h5>
            <h5 class="modal-title" v-else>Update ExperienceAt Bangladesh Army</h5>

            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

          <form
            @submit.prevent="createExperienceAtBangladeshArmy()">
            <div class="modal-body">
              <div class="row">

                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Ba no</label>
                    <select v-model="experience_army.ba_no" name="gender"
                            class="form-control" :class="{ 'is-invalid': experience_army.errors.has('ba_no') }">
                      <option value="" selected>Select one</option>

                      <option value="BA">BA</option>
                      <option value="BSS">BSS</option>
                      <option value="JSS">JSS</option>
                      <option value="BSP">BSP</option>
                      <option value="BJO">BJO</option>
                      <option value="No">No</option>

                    </select>
                    <has-error :form="experience_army" field="ba_no"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Ba Name</label>
                    <input v-model="experience_army.ba_name" type="text" name="ba_name"
                           placeholder="Enter ba name"
                           class="form-control"
                           :class="{ 'is-invalid': experience_army.errors.has('ba_name') }">
                    <has-error :form="experience_army" field="ba_name"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Type</label>
                    <select v-model="experience_army.type" name="type"
                            class="form-control" :class="{ 'is-invalid': experience_army.errors.has('type') }">
                      <option value="" selected>Select one</option>

                      <option value="Officer">Officer</option>
                      <option value="JCO">JCO</option>
                      <option value="NCO">NCO</option>

                    </select>
                    <has-error :form="experience_army" field="type"></has-error>
                  </div>


                  <div class="form-group">
                    <label>Trade</label>
                    <input v-model="experience_army.trade" type="text" name="trade"
                           placeholder="Enter trade"
                           class="form-control"
                           :class="{ 'is-invalid': experience_army.errors.has('trade') }">
                    <has-error :form="experience_army" field="trade"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Date Of Commission</label>
                    <datepicker v-model="experience_army.date_of_commission"
                                :class="{ 'is-invalid': experience_army.errors.has('date_of_commission') }"
                                required></datepicker>
                    <has-error :form="experience_army" field="date_of_commission"></has-error>
                  </div>


                </div>


                <div class="col-lg-6 col-md-6 col-sm-12">

                  <div class="form-group">
                    <label>Ranks</label>
                    <select v-model="experience_army.ranks" name="ranks"
                            class="form-control" :class="{ 'is-invalid': experience_army.errors.has('ranks') }">
                      <option value="" selected>Select one</option>

                      <option value="2Lt">2Lt</option>
                      <option value="Lt">Lt</option>
                      <option value="Capt">Capt</option>
                      <option value="Maj">Maj</option>
                      <option value="Lt Col">Lt Col</option>
                      <option value="Col">Col</option>
                      <option value="Brig Gen">Brig Gen</option>
                      <option value="Maj Gen">Maj Gen</option>
                      <option value="Lt Gen">Lt Gen</option>
                      <option value="Gen">Gen</option>
                      <option value="Snk">Snk</option>
                      <option value="L/cpl">L/cpl</option>
                      <option value="Cpl">Cpl</option>
                      <option value="Sgt">Sgt</option>
                      <option value="WO">WO</option>
                      <option value="SWO">SWO</option>
                      <option value="MWO">MWO</option>
                      <option value="H/Lt">H/Lt</option>
                      <option value="H/Capt">H/Capt</option>
                    </select>
                    <has-error :form="experience_army" field="ranks"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Arms</label>
                    <select v-model="experience_army.arms" name="arms"
                            class="form-control" :class="{ 'is-invalid': experience_army.errors.has('arms') }">
                      <option value="" selected>Select one</option>

                      <option value="AC">AC</option>
                      <option value="Arty">Arty</option>
                      <option value="EB">EB</option>
                      <option value="BIR">BIR</option>
                      <option value="Sigs">Sigs</option>
                      <option value="Engr">Engr</option>
                      <option value="EME">EME</option>
                      <option value="Ord">Ord</option>
                      <option value="ASC">ASC</option>
                      <option value="AMC">AMC</option>
                      <option value="AEC">AEC</option>
                      <option value="CMP">CMP</option>
                      <option value="ADC">ADC</option>
                      <option value="AFNS">AFNS</option>
                      <option value="RVFC">RVFC</option>
                      <option value="ACC">ACC</option>
                    </select>
                    <has-error :form="experience_army" field="arms"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Course</label>
                    <input v-model="experience_army.course" type="text" name="course"
                           placeholder="Enter course"
                           class="form-control"
                           :class="{ 'is-invalid': experience_army.errors.has('course') }">
                    <has-error :form="experience_army" field="course"></has-error>
                  </div>

                  <div class="form-group">
                    <label>Date Of Retirement</label>
                    <datepicker v-model="experience_army.date_of_retirement"
                                :class="{ 'is-invalid': experience_army.errors.has('date_of_retirement') }"
                                required></datepicker>
                    <has-error :form="experience_army" field="date_of_retirement"></has-error>
                  </div>

                </div>

              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
              <button type="submit" v-show="!editMode" class="btn btn-success">Submit</button>
              <button type="submit" v-show="editMode" class="btn btn-success">Update</button>
            </div>
          </form>

        </div>
      </div>
    </div>

  </div>
</template>

<script>
  import dashboardNavbar from '~/components/MyJobs/navbar'
  import editResumeHorizontalTab from '~/components/MyJobs/EditResume/horizontalTab'

  import Vue from 'vue'
  import Swal from 'sweetalert2'
  import datepicker from 'vuejs-datepicker'
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
    name: "edit-resume",

    data() {
      return {
        editMode: false,
        countries: '',
        districts: '',
        thanas: '',
        years: '',
        permanent_thanas: '',
        unions: '',
        permanent_unions: '',
        employee: '',
        skill_general_categories: '',
        form: new Form({
          id: '',
          first_name: '',
          last_name: '',
          father_name: '',
          mother_name: '',
          date_of_birth: '',
          gender: '',
          religion: '',
          marital_status: '',
          nationality: '',
          national_id_no: '',
          passport_number: '',
          passport_issue_date: '',
          country_id: '',
          mobile_no_1: '',
          mobile_no_2: '',
          mobile_no_3: '',
          email: '',
          alternate_email: '',
        }),
        address: new Form({
          id: '',
          present_location: '',
          present_district_id: '',
          present_thana_id: '',
          present_union_id: '',
          present_country_id: '',
          present_village: '',

          same_address: '',

          permanent_location: '',
          permanent_district_id: '',
          permanent_thana_id: '',
          permanent_union_id: '',
          permanent_country_id: '',
          permanent_village: '',
        }),
        career: new Form({
          id: '',
          objective: '',
          present_salary: '',
          expected_salary: '',
          looking_for_job_level: '',
          available_for_job_nature: '',
        }),
        relevant: new Form({
          id: '',
          career_summary: '',
          special_qualification: '',
          keywords: '',
        }),
        prefer_area: new Form({
          id: '',
          inside_bangladesh: '',
          outside_bangladesh: '',
          preferred_organization_type: '',
          general_skill_id: '',
          special_skill_id: '',
        }),

        training_summery: new Form({
          id: '',
          training_title: '',
          country_id: '',
          topics_covered: '',
          training_year_id: '',
          institute: '',
          duration: '',
          location: '',
        }),

        experience: new Form({
          id: '',
          company_name: '',
          responsibilities: '',
          company_business: '',
          designation: '',
          company_location: '',
          department: '',
          from_date: '',
          to_date: '',
          currently_working: '',
          area_of_experiences: '',
        }),

        certificate: new Form({
          id: '',
          certification: '',
          location: '',
          institute: '',
          from_duration: '',
          to_duration: '',

        }),

        experience_army: new Form({
          id: '',
          ba_no: '',
          ba_name: '',
          ranks: '',
          type: '',
          arms: '',
          trade: '',
          course: '',
          date_of_commission: '',
          date_of_retirement: '',
        }),
        url: this.$axios.defaults.baseURL,
      }
    },
    components: {
      dashboardNavbar,
      editResumeHorizontalTab,
      datepicker,
    },

    methods: {

      // fetch data start

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

          })
      },

      async fetchYearLists() {
        return await this.$axios.get('year-lists')
          .then((response) => {

            this.years = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchCountryLists() {
        return await this.$axios.get('country-lists')
          .then((response) => {

            this.countries = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchDistrictLists() {
        return await this.$axios.get('district-lists')
          .then((response) => {

            this.districts = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchSkillGeneralCategory() {
        return await this.$axios.get('skill-general-category')
          .then((response) => {

            this.skill_general_categories = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      fetchPresentThana() {

        var vm = this;

        var district_id = this.address.present_district_id;

        this.$axios.get('fetch-thana-lists/' + district_id).then(function (response) {

          vm.thanas = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      fetchPermanentThana() {

        var vm = this;

        var district_id = this.address.permanent_district_id;

        this.$axios.get('fetch-thana-lists/' + district_id).then(function (response) {

          vm.permanent_thanas = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      fetchPresentUnion() {

        var vm = this;

        var thana_id = this.address.present_thana_id;

        this.$axios.get('fetch-union-lists/' + thana_id).then(function (response) {

          vm.unions = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      fetchPermanentUnion() {

        var vm = this;

        var thana_id = this.address.permanent_thana_id;

        this.$axios.get('fetch-union-lists/' + thana_id).then(function (response) {

          vm.permanent_unions = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      // fetch data end

      // personal information start
      addPersonalDetailsModal() {
        this.editMode = false;
        this.form.reset();
        this.fetchCountryLists(),
          $('#addPersonalDetails').modal('show');
      },
      editPersonalDetailsModal(row) {
        this.editMode = true;
        this.form.reset();
        this.fetchCountryLists(),
          $('#addPersonalDetails').modal('show');
        this.form.fill(row);

      },
      createPersonalDetails() {

        var token = window.$nuxt.$cookies.get('token');
        this.form.post(this.url + 'employee-personal-detail?token=' + token)
          .then(() => {

            $('#addPersonalDetails').modal('hide');
            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },
      // personal information end


      // address start
      addAddressModal() {
        this.editMode = false;
        this.form.reset();
        this.fetchCountryLists(),
          this.fetchDistrictLists(),
          $('#addAddress').modal('show');
      },
      editAddressModal(row) {

        this.editMode = false;
        this.form.reset();
        this.fetchCountryLists(),
          this.fetchDistrictLists(),
          this.fetchPresentThana(),
          this.fetchPermanentThana(),
          this.fetchPresentUnion(),
          this.fetchPermanentUnion(),
          $('#addAddress').modal('show');
        this.address.fill(row);
      },
      createAddress() {

        // alert('w');
        // return false;

        var token = window.$nuxt.$cookies.get('token');
        this.address.post(this.url + 'employee-address-detail?token=' + token)
          .then(() => {

            $('#addAddress').modal('hide');
            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },
      // address end

      // CareerAndApplicationInformationModal start
      addCareerAndApplicationInformationModal() {
        this.editMode = false;
        this.form.reset();
        $('#addCareerAndApplicationInformation').modal('show');
      },
      editCareerAndApplicationInformationModal(row) {

        this.editMode = false;
        this.form.reset();
        $('#addCareerAndApplicationInformation').modal('show');
        this.career.fill(row);
      },
      createCareerAndApplicationInformation() {

        var token = window.$nuxt.$cookies.get('token');
        this.career.post(this.url + 'employee-career-and-application-information?token=' + token)
          .then(() => {

            $('#addCareerAndApplicationInformation').modal('hide');
            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },
      // CareerAndApplicationInformationModal end

      // OtherRelevantInformationModal start
      addOtherRelevantInformationModal() {
        this.editMode = false;
        this.relevant.reset();
        $('#addOtherRelevantInformationModal').modal('show');
      },
      editOtherRelevantInformationModal(row) {

        this.editMode = false;
        this.relevant.reset();
        $('#addOtherRelevantInformationModal').modal('show');
        this.relevant.fill(row);
      },
      createOtherRelevantInformation() {

        var token = window.$nuxt.$cookies.get('token');
        this.relevant.post(this.url + 'employee-other-relevant-information?token=' + token)
          .then(() => {

            $('#addOtherRelevantInformationModal').modal('hide');
            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },
      // address end

      // addPreferredAreas start
      addPreferredAreasModal() {
        this.editMode = false;
        this.prefer_area.reset();
        this.fetchSkillGeneralCategory();
        $('#addPreferAreaModal').modal('show');
      },

      editPreferred_areasModal(row) {

        this.editMode = false;
        this.prefer_area.reset();
        this.fetchSkillGeneralCategory();
        $('#addPreferAreaModal').modal('show');
        this.prefer_area.fill(row);
      },
      // addPreferredAreas end

      // addTrainingSummaries start
      addTrainingSummariesModal() {
        this.editMode = false;
        this.training_summery.reset();
        this.fetchCountryLists();
        this.fetchYearLists();
        $('#addTrainingSummariesModal').modal('show');
      },

      editTrainingSummariesModal(row) {

        this.editMode = true;
        this.training_summery.reset();
        this.fetchCountryLists();
        this.fetchYearLists();
        $('#addTrainingSummariesModal').modal('show');
        this.training_summery.fill(row);

      },

      createTrainingSummaries() {
        var token = window.$nuxt.$cookies.get('token');
        this.training_summery.post(this.url + 'employee-training-summary?token=' + token)
          .then(() => {

            $('#addTrainingSummariesModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      updateTrainingSummaries() {
        var token = window.$nuxt.$cookies.get('token');
        this.training_summery.put(this.url + 'employee-training-summary/' + this.training_summery.id + '?token=' + token)
          .then(() => {

            $('#addTrainingSummariesModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            });

            this.$emit('afterUpdate');

          })
          .catch(() => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      },

      deleteTrainingSummariesModal(row) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            var token = window.$nuxt.$cookies.get('token');
            this.training_summery.delete(this.url + 'employee-training-summary/' + row + '?token=' + token).then(() => {
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
      },
      // addTrainingSummaries end

      // addProfessionalCertificationSummary start
      addProfessionalCertificationSummaryModal() {
        this.editMode = false;
        this.certificate.reset();
        $('#addProfessionalCertificationSummaryModal').modal('show');
      },

      editProfessionalCertificationSummaryModal(row) {
        this.editMode = true;
        this.certificate.reset();
        $('#addProfessionalCertificationSummaryModal').modal('show');
        this.certificate.fill(row);
      },

      createProfessionalCertificationSummary() {
        var token = window.$nuxt.$cookies.get('token');
        this.certificate.post(this.url + 'employee-professional-certification-summary?token=' + token)
          .then(() => {

            $('#addProfessionalCertificationSummaryModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      updateProfessionalCertificationSummary() {
        var token = window.$nuxt.$cookies.get('token');
        this.certificate.put(this.url + 'employee-professional-certification-summary/' + this.certificate.id + '?token=' + token)
          .then(() => {

            $('#addProfessionalCertificationSummaryModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            });

            this.$emit('afterUpdate');

          })
          .catch(() => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      },

      deleteProfessionalCertificationSummaryModal(row) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            var token = window.$nuxt.$cookies.get('token');
            this.certificate.delete(this.url + 'employee-professional-certification-summary/' + row + '?token=' + token).then(() => {
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
      },
      // addTrainingSummaries end

      // addExperienceModal start
      addExperienceModal() {
        this.editMode = false;
        this.experience.reset();
        $('#addExperienceModal').modal('show');
      },

      editExperienceModal(row) {
        this.editMode = true;
        this.experience.reset();
        $('#addExperienceModal').modal('show');
        this.experience.fill(row);
      },

      createExperience() {
        var token = window.$nuxt.$cookies.get('token');
        this.experience.post(this.url + 'employee-employment-history?token=' + token)
          .then(() => {

            $('#addExperienceModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      updateExperience() {
        var token = window.$nuxt.$cookies.get('token');
        this.experience.put(this.url + 'employee-employment-history/' + this.experience.id + '?token=' + token)
          .then(() => {

            $('#addExperienceModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Updated successfully'
            });

            this.$emit('afterUpdate');

          })
          .catch(() => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      },

      deleteExperienceModal(row) {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.value) {
            var token = window.$nuxt.$cookies.get('token');
            this.experience.delete(this.url + 'employee-employment-history/' + row + '?token=' + token).then(() => {
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
      },
      // addTrainingSummaries end

      // address start
      addExperienceAtBangladeshArmyModal() {
        this.editMode = false;
        this.experience_army.reset();
        $('#addExperienceAtBangladeshArmyModal').modal('show');
      },
      editExperienceAtBangladeshArmyModal(row) {

        this.editMode = true;
        this.experience_army.reset();
        $('#addExperienceAtBangladeshArmyModal').modal('show');
        this.experience_army.fill(row);

      },

      createExperienceAtBangladeshArmy() {
        var token = window.$nuxt.$cookies.get('token');
        this.experience_army.post(this.url + 'employee-employment-history-army?token=' + token)
          .then(() => {

            $('#addExperienceAtBangladeshArmyModal').modal('hide');

            Toast.fire({
              icon: 'success',
              title: 'Successfully Submitted'
            });

            this.$emit('afterCreate');

          })
          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },
      // address end

    },

    created() {
      this.getAuthEmployee();

      this.$on('afterCreate', () => {
        this.getAuthEmployee();
      });

      this.$on('afterUpdate', () => {
        this.getAuthEmployee();
      });

      this.$on('AfterDelete', () => {
        this.getAuthEmployee();
      });

    },

    mounted() {
      // $('.bSelect').selectpicker('refresh');
    }

  }
  $('.bSelect').selectpicker({
    liveSearch: true,
    size: 5
  });
</script>

<style scoped>
  table tr span {
    color: #000;
    font-weight: 300;
  }

</style>
