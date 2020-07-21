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

                          <div id="collapsePersonalDetails" class="collapse show"
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
                        <div class="card mb-0 shadow-none">
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
                                        @click="addCareerAndApplicationInformationModal">Add Career and Application Information
                                </button>
                              </div>

                              <div class="table-responsive" v-if="employee.career_and_application_information">

                                <div class="text-right my-2">

                                  <button type="submit" class="btn btn-outline-secondary"
                                          @click="editCareerAndApplicationInformationModal(employee.career_and_application_information)"><i
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
                        <div class="card mb-0 shadow-none">
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
                        <!--Preferred Areas -->

                        <!--Other Relevant Information -->
                        <div class="card mb-0 shadow-none">
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
                              Other Relevant Information Anim pariatur cliche reprehenderit, enim eiusmod high life
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
                        <!--Other Relevant Information -->
                      </div>

                    </div>
                  </div>
                </div>

                <div class="tab-pane" id="education_training" role="tabpanel">
                  <p class="mb-0">
                    Food truck fixie locavore, accusamus mcsweeney's marfa nulla
                    single-origin coffee squid. Exercitation +1 labore velit, blog
                    sartorial PBR leggings next level wes anderson artisan four loko
                    farm-to-table craft beer twee. Qui photo booth letterpress,
                    commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                    vinyl cillum PBR. Homo nostrud organic, assumenda labore
                    aesthetic magna delectus.
                  </p>
                </div>
                <div class="tab-pane" id="employment" role="tabpanel">
                  <p class="mb-0">
                    Etsy mixtape wayfarers, ethical wes anderson tofu before they
                    sold out mcsweeney's organic lomo retro fanny pack lo-fi
                    farm-to-table readymade. Messenger bag gentrify pitchfork
                    tattooed craft beer, iphone skateboard locavore carles etsy
                    salvia banksy hoodie helvetica. DIY synth PBR banksy irony.
                    Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh
                    mi whatever gluten-free carles.
                  </p>
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
                    <textarea v-model="address.present_village" id="present_village" cols="30" rows="2" name="present_village" placeholder="Enter present village"
                              class="form-control" :class="{ 'is-invalid': address.errors.has('present_village') }"></textarea>

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
                    <textarea v-model="address.permanent_village" id="" cols="30" rows="2" name="permanent_village" placeholder="Enter permanent village"
                              class="form-control" :class="{ 'is-invalid': address.errors.has('permanent_village') }"></textarea>

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
    <div class="modal fade" id="addCareerAndApplicationInformation" tabindex="-1" role="dialog" aria-labelledby="addUserLabel"
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
                    <textarea v-model="career.objective" cols="30" rows="2" name="objective" placeholder="Enter objective"
                              class="form-control" :class="{ 'is-invalid': career.errors.has('objective') }"></textarea>
                    <has-error :form="career" field="objective"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Present Salary</label>
                    <input v-model="career.present_salary" type="number" name="present_salary" placeholder="Enter present salary"
                           class="form-control" :class="{ 'is-invalid': career.errors.has('present_salary') }">
                    <has-error :form="career" field="present_salary"></has-error>
                  </div>

                </div>

                <div class="col-lg-6 col-md-6 col-sm-12">
                  <div class="form-group">
                    <label>Expected Salary</label>
                    <input v-model="career.expected_salary" type="number" name="expected_salary" placeholder="Enter expected salary"
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

  </div>
</template>

<script>
  import dashboardNavbar from '~/components/MyJobs/navbar'
  import editResumeHorizontalTab from '~/components/MyJobs/EditResume/horizontalTab'

  import Vue from 'vue'
  import Swal from 'sweetalert2'
  import datepicker from 'vuejs-datepicker';
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
        permanent_thanas: '',
        unions: '',
        permanent_unions: '',
        employee: "",
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
          present_village:'',

          same_address:'',

          permanent_location: '',
          permanent_district_id: '',
          permanent_thana_id: '',
          permanent_union_id: '',
          permanent_country_id: '',
          permanent_village:'',
        }),
        career: new Form({
          id: '',
          objective:'',
          present_salary:'',
          expected_salary:'',
          looking_for_job_level:'',
          available_for_job_nature:'',
        }),
        url: this.$axios.defaults.baseURL,
      }
    },
    components: {
      dashboardNavbar,
      editResumeHorizontalTab,
      datepicker
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
      //
      // address start
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

    }
  }
</script>

<style scoped>
  table tr span {
    color: #000;
    font-weight: 300;
  }

</style>
