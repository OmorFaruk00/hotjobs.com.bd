<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">

          <nuxt-link to="/" class="logo logo-dark">

            <span class="logo-sm">
              <img src="~/static/images/small_logo.png" alt="" height="45">
            </span>

            <span class="logo-lg">
              <img src="~/static/images/logo.png" alt="" height="28">
            </span>

          </nuxt-link>
        </div>

        <button type="button"
                class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
                data-toggle="collapse" data-target="#topnav-menu-content">
          <i class="fa fa-fw fa-bars"></i>
        </button>


        <!--<div class="dropdown dropdown-mega d-none d-lg-block ml-2">
          <button type="button" class="btn header-item waves-effect" data-toggle="dropdown"
                  aria-haspopup="false" aria-expanded="false">
            Menu
            <i class="mdi mdi-chevron-down"></i>
          </button>
          <div class="dropdown-menu dropdown-megamenu">
            <div class="row">
              <div class="col-sm-8">

                <div class="row">
                  <div class="col-md-4">
                    <h5 class="font-size-14 mt-0">UI Components</h5>
                    <ul class="list-unstyled megamenu-list">
                      <li>
                        <a href="javascript:void(0);">Lightbox</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Range Slider</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Sweet Alert</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Rating</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Forms</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Tables</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Charts</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <h5 class="font-size-14 mt-0">Applications</h5>
                    <ul class="list-unstyled megamenu-list">
                      <li>
                        <a href="javascript:void(0);">Ecommerce</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Calendar</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Email</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Projects</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Tasks</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Contacts</a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-4">
                    <h5 class="font-size-14 mt-0">Extra Pages</h5>
                    <ul class="list-unstyled megamenu-list">
                      <li>
                        <a href="javascript:void(0);">Light Sidebar</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Compact Sidebar</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Horizontal layout</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Maintenance</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Coming Soon</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">Timeline</a>
                      </li>
                      <li>
                        <a href="javascript:void(0);">FAQs</a>
                      </li>

                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>-->

      </div>


      <div class="d-flex middle-header">

        <div class="dropdown d-inline-block">

          <a href="https://www.facebook.com/hotjobs.com.bd" target="_blank" title="Facebook">
            <i class="bx bxl-facebook-circle" style="font-size: 40px;color: #423A3D;"></i>
          </a>

          <a href="https://www.linkedin.com/company/hotjobs-com-bd" target="_blank" title="Linkedin">
            <i class="bx bxl-linkedin-square" style="font-size: 40px;color: #423A3D;"></i>
          </a>

          <a href="https://www.instagram.com/bdhotjobs/" target="_blank" title="Instagram">
            <i class="bx bxl-instagram-alt" style="font-size: 40px;color: #423A3D;"></i>
          </a>

          <a href="https://twitter.com/bdhotjobs" target="_blank" title="Twitter">
            <i class="bx bxl-twitter"  style="font-size: 40px;color: #423A3D;"></i>
          </a>

          <a href="https://youtube.com/channel/UC-n5t2attDAAlT3oFYQalWg" target="_blank" title="Youtube">
            <i class="bx bxl-youtube"  style="font-size: 40px;color: #423A3D;"></i>
          </a>

        </div>


      </div>

      <div class="d-flex">

        <div class="dropdown d-inline-block" v-if="! $nuxt.$cookies.get('token')">
          <button type="button" class="btn header-item noti-icon waves-effect text-info"
                  id="page-header-notifications-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            Sign in <span style="color: #423A3D;">or</span> Create Account

          </button>

          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
               aria-labelledby="page-header-notifications-dropdown">

            <div data-simplebar style="max-height: 330px;padding: 0 10px">

              <div class="card bg-light my-3">
                <div class="card-body">
                  <div class="media">

                    <div class="avatar-xs mr-3">
                        <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="bx bx-user-check"></i>
                        </span>
                    </div>

                    <div class="media-body">
                      <h6 class="mt-0 mb-1">My Hotjobs</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1">Sign in or create your My Hotjobs account to manage your profile</p>
                        <p class="mb-0">
                          <nuxt-link to="/my-jobs/login" class="btn btn-outline-primary">Sign in</nuxt-link>

<!--                          <nuxt-link to="/my-jobs/create" class="btn btn-outline-info">Create account</nuxt-link>-->

                          <button type="button" class="btn btn-outline-info waves-effect waves-light"
                                  @click="addGeneralEmployeeModal">
                            Create Account
                          </button>

                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>


              <hr>

              <div class="card bg-light my-3">
                <div class="card-body">
                  <div class="media">

                    <div class="avatar-xs mr-3">
                        <span class="avatar-title bg-primary rounded-circle font-size-16">
                            <i class="bx bx-user-pin"></i>
                        </span>
                    </div>

                    <div class="media-body">
                      <h6 class="mt-0 mb-1">Employers</h6>
                      <div class="font-size-12 text-muted">
                        <p class="mb-1">Lorem ipsum dolor sit amet.</p>

                        <p class="mb-0">
                          <nuxt-link to="/employer/login" class="btn btn-outline-primary">Sign in</nuxt-link>
                          <button type="button" class="btn btn-outline-info waves-effect waves-light"
                                  @click="addEmployerModal">
                            Create Account
                          </button>
                        </p>

                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

        <div class="dropdown d-inline-block" v-if="$nuxt.$cookies.get('token') && authUser.type == 'employee' ">

          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            <img class="rounded-circle header-profile-user" v-if="getPhoto()" :src="getPhoto()" alt="">

            <img class="rounded-circle header-profile-user" v-else src="~/static/images/logo.png" alt="">

            <span class="d-none d-xl-inline-block ml-1">{{ authUser.email}}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <!-- item-->
            <nuxt-link class="dropdown-item" to="/my-jobs/dashboard"><i
              class="bx bx-home-circle font-size-16 align-middle mr-1"></i>Dashboard
            </nuxt-link>

            <nuxt-link class="dropdown-item" to="/my-jobs/view-resume"><i
              class="bx bx-show-alt font-size-16 align-middle mr-1"></i>View Resume
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="/my-jobs/edit-resume"><i
              class="bx bx-edit-alt font-size-16 align-middle mr-1"></i>Edit Resume
            </nuxt-link>

            <div class="dropdown-divider"></div>
            <!--<a class="dropdown-item text-danger" href="#"><i
              class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>-->

            <form id="logoutForm" @submit.prevent="logout()">
              <input type="hidden" name="_token" value="">
              <button type="submit" class="dropdown-item text-danger">
                <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                Logout
              </button>
            </form>
          </div>
        </div>


        <div class="dropdown d-inline-block" v-if="$nuxt.$cookies.get('token') && authUser.type == 'employer' ">

          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

            <img class="rounded-circle header-profile-user" v-if="getPhoto()" :src="getPhoto()" alt="">

            <img class="rounded-circle header-profile-user" v-else src="~/static/images/logo.png" alt="">

            <span class="d-none d-xl-inline-block ml-1">{{ authUser.username }}</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <!-- item-->

            <nuxt-link class="dropdown-item" to="/employer/dashboard"><i
              class="bx bx-home-circle font-size-16 align-middle mr-1"></i>Dashboard
            </nuxt-link>

            <nuxt-link class="dropdown-item" to="/employer/edit-profile"><i
              class="bx bxs-edit font-size-16 align-middle mr-1"></i>Edit Profile
            </nuxt-link>

            <!--<nuxt-link class="dropdown-item" to="/my-jobs/view-resume"><i
              class="bx bx bx-show-alt font-size-16 align-middle mr-1"></i>View Resume
            </nuxt-link>
            <nuxt-link class="dropdown-item" to="/my-jobs/edit-resume"><i
              class="bx bx-edit-alt font-size-16 align-middle mr-1"></i>Edit Resume
            </nuxt-link>-->

            <div class="dropdown-divider"></div>
            <!--<a class="dropdown-item text-danger" href="#"><i
              class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>-->

            <form id="logoutForm" @submit.prevent="logout()">
              <input type="hidden" name="_token" value="">
              <button type="submit" class="dropdown-item text-danger">
                <i class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i>
                Logout
              </button>
            </form>
          </div>
        </div>


        <div class="modal fade" id="addEmployer" tabindex="-1" role="dialog" aria-labelledby="addEmployer"
             aria-hidden="true">

          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">

                <h5 class="modal-title">Add Employer</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form @submit.prevent="createEmployer()">
                <div class="modal-body">
                  <div class="row">

                    <div class="col-12">
                      <h3>Account Information</h3>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Username</label>
                        <input v-model="form.username" type="text" name="username" placeholder="Enter username"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('username') }">
                        <has-error :form="form" field="username"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Password</label>
                        <input v-model="form.password" type="password" name="password" placeholder="Enter password"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('password') }">
                        <has-error :form="form" field="password"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-4 col-md-4 col-sm-12">
                      <div class="form-group">
                        <label>Password Confirmation</label>
                        <input v-model="form.password_confirmation" type="password" name="password_confirmation"
                               placeholder="Enter password confirmation"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('password_confirmation') }"
                        >
                        <has-error :form="form" field="password_confirmation"></has-error>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="border-bottom"></div>
                    </div>

                    <div class="col-12">
                      <h3>Company Details Information</h3>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Company Name</label>
                        <input v-model="form.company_name" type="text" name="company_name"
                               placeholder="Enter company name"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('company_name') }">
                        <has-error :form="form" field="company_name"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>কোম্পানির নাম (বাংলায়)</label>
                        <input v-model="form.company_name_bangla" type="text" name="company_name_bangla"
                               placeholder="কোম্পানির নাম বাংলায় লিখুন"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('company_name_bangla') }"
                        >
                        <has-error :form="form" field="company_name_bangla"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Company Address</label>
                        <select v-model="form.country_id" name="country_id"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('country_id') }"
                                @change="countryName()">
                          <option value="" selected>Select one</option>

                          <option v-for="row in countries" :value="row.id">{{ row.countries_name }}</option>

                        </select>

                        <has-error :form="form" field="country_id"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh' ">
                      <div class="form-group">
                        <select v-model="form.district_id" name="district_id"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('district_id') }"
                                v-on:change="FetchThana">
                          <option value="" selected>Select one</option>

                          <option v-for="row in districts" :value="row.id">{{ row.name }}</option>

                        </select>

                        <has-error :form="form" field="district_id"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12" v-if="country_name == 'Bangladesh' ">
                      <div class="form-group">
                        <select v-model="form.thana_id" name="thana_id"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('thana_id') }">
                          <option value="" selected>Select one</option>

                          <option v-for="row in thanas" :value="row.id">{{ row.name }}</option>

                        </select>

                        <has-error :form="form" field="thana_id"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12" v-if="country_name != 'Bangladesh' ">
                      <div class="form-group">
                        <input v-model="form.city" type="text" name="city" placeholder="Enter City"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('city') }">
                        <has-error :form="form" field="city"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                      <textarea v-model="form.company_address" id="company_address" cols="30" rows="2"
                                name="present_village" placeholder="Enter company address"
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('company_address') }"></textarea>
                        <has-error :form="form" field="company_address"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                      <textarea v-model="form.company_address_bangla" id="company_address_bangla" cols="30" rows="2"
                                name="present_village" placeholder="কোম্পানীর ঠিকানা বাংলায় লিখুন "
                                class="form-control"
                                :class="{ 'is-invalid': form.errors.has('company_address_bangla') }"></textarea>
                        <has-error :form="form" field="company_address_bangla"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Industry Type</label>
                        <select v-model="form.industry_category_id" name="industry_category_id"
                                class="form-control" :class="{ 'is-invalid': form.errors.has('industry_category_id') }"
                                @change="fetchIndustryCategory()">
                          <option value="0" selected>All</option>

                          <option v-for="row in industry_categories" :value="row.id">{{ row.name }}</option>

                        </select>

                        <has-error :form="form" field="industry_type_id"></has-error>
                      </div>
                    </div>


                    <div class="col-lg-6 col-md-6 col-sm-12" v-if="form.industry_category_id">
                      <div class="form-group mt-8">
                        <label></label>
                        <input v-model="form.industry_type_keyword" type="industry_type_keyword"
                               name="industry_type_keyword" placeholder="Search Industry Type"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('industry_type_keyword') }"
                               @blur="filterIndustryType()">
                        <has-error :form="form" field="industry_type_keyword"></has-error>
                      </div>
                    </div>

                    <div class="col-12" v-if="form.industry_category_id">
                      <div class="card type-box">
                        <div class="card-body">
                          <div class="row">

                            <div class="col-lg-12 col-md-12 col-sm-12">

                              <b-form-checkbox-group
                                v-model="form.industry_types"
                                :options="industry_type_lists"
                                class="mb-3"
                                value-field="id"
                                text-field="name"
                                disabled-field="notEnabled"
                              ></b-form-checkbox-group>

                            </div>

                          </div>
                        </div>

                      </div>

<!--                      <div class="mt-3">Selected: <strong>{{ form.industry_types }}</strong></div>-->

                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Business Description</label>
                        <textarea v-model="form.business_description" id="business_description" cols="30" rows="4"
                                  name="present_village" placeholder="Enter Business Description"
                                  class="form-control"
                                  :class="{ 'is-invalid': form.errors.has('business_description') }"></textarea>
                        <has-error :form="form" field="business_description"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Business / Trade License No</label>
                        <input v-model="form.license_no" type="text" name="Business / Trade License No"
                               placeholder="Enter license no"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('license_no') }">
                        <has-error :form="form" field="license_no"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <label for="">RL No (Only for Recruiting Agency)</label>
                      <div class="input-group mb-2 mr-sm-2">
                        <div class="input-group-prepend">
                          <div class="input-group-text">RL -</div>
                        </div>
                        <input type="number" v-model="form.rl_no" name="rl_no" placeholder="Enter license no"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('rl_no') }">
                        <has-error :form="form" field="rl_no"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-12 col-md-12 col-sm-12">
                      <div class="form-group">
                        <label>Website URL</label>
                        <input v-model="form.website_url" type="text" name="website_url"
                               placeholder="Enter website url"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('website_url') }">
                        <has-error :form="form" field="website_url"></has-error>
                      </div>
                    </div>

                    <div class="col-12">
                      <div class="border-bottom"></div>
                    </div>

                    <div class="col-12">
                      <h3>Contact</h3>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Contact Person's Name</label>
                        <input v-model="form.contact_person_name" type="text" name="contact_person_name"
                               placeholder="Enter contact person name"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_name') }">
                        <has-error :form="form" field="contact_person_name"></has-error>
                      </div>

                      <div class="form-group">
                        <label>Contact Person's Email</label>
                        <input v-model="form.contact_person_email" type="email" name="contact_person_email"
                               placeholder="Enter contact person email"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_email') }">
                        <has-error :form="form" field="contact_person_email"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Contact Person's Designation</label>
                        <input v-model="form.contact_person_designation" type="text" name="contact_person_designation"
                               placeholder="Enter contact person designation"
                               class="form-control"
                               :class="{ 'is-invalid': form.errors.has('contact_person_designation') }">
                        <has-error :form="form" field="contact_person_designation"></has-error>
                      </div>

                      <div class="form-group">
                        <label>Contact Person's Mobile</label>
                        <input v-model="form.contact_person_mobile" type="text" name="contact_person_mobile"
                               placeholder="Enter contact person mobile"
                               class="form-control" :class="{ 'is-invalid': form.errors.has('contact_person_mobile') }">
                        <has-error :form="form" field="contact_person_mobile"></has-error>
                      </div>
                    </div>

                    <div class="col-12">
                      <b-form-checkbox
                        id="pricing_policy"
                        v-model="form.pricing_policy"
                        name="pricing_policy"
                        value="1"
                        unchecked-value="0"
                      >
                        I Have Read <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>And Accepted
                        It
                      </b-form-checkbox>
                    </div>


                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  <button type="submit" v-if="form.pricing_policy == 1" :disabled="form.busy" class="btn btn-success">Submit</button>
                  <button type="submit" v-else  class="btn btn-success" style="cursor: not-allowed" disabled>Submit</button>
                </div>
              </form>

            </div>
          </div>

        </div>


        <!--    <addGeneralEmployee/>-->
        <div class="modal fade" id="addGeneralEmployee" tabindex="-1" role="dialog" aria-labelledby="addGeneralEmployee"
             aria-hidden="true">

          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">

                <h5 class="modal-title">Add Account</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>

              <form @submit.prevent="createEmployee()">
                <div class="modal-body">
                  <div class="row">


                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Name</label>
                        <input v-model="employee_form.name" type="text" name="name" placeholder="Enter name"
                               class="form-control" :class="{ 'is-invalid': employee_form.errors.has('name') }" required>
                        <has-error :form="employee_form" field="name"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Gender</label>
                        <select v-model="employee_form.gender" name="gender"
                                class="form-control" :class="{ 'is-invalid': employee_form.errors.has('gender') }" required>
                          <option value="" selected>Select one</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                        <has-error :form="employee_form" field="gender"></has-error>

                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Select your skill from following list</label>

                        <select v-model="employee_form.skill_id" name="skill_id"
                                class="form-control" :class="{ 'is-invalid': employee_form.errors.has('skill_id') }" required>
                          <option value="" selected>Select one</option>

                          <option v-for="row in special_categories" :value="row.id">{{ row.name }}</option>
                        </select>
                        <has-error :form="employee_form" field="skill_id"></has-error>

                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Email</label>
                        <input v-model="employee_form.email" type="email" name="email" placeholder="Enter email"
                               class="form-control" :class="{ 'is-invalid': employee_form.errors.has('email') }" required>
                        <has-error :form="employee_form" field="email"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">

                      <div class="form-group">
                        <label>Country</label>
                        <select v-model="employee_form.country_id" name="country_id"
                                class="form-control" :class="{ 'is-invalid': employee_form.errors.has('country_id') }" required>
                          <option value="" selected>Select one</option>

                          <option v-for="row in countries" :value="row.id">{{ row.countries_name }} ({{
                              row.countries_isd_code
                            }})
                          </option>

                        </select>

                        <has-error :form="employee_form" field="country_id"></has-error>
                      </div>

                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">

                      <div class="form-group">
                        <label>Mobile Number</label>
                        <input v-model="employee_form.mobile_number" type="text" name="mobile_number"
                               placeholder="Enter mobile number"
                               class="form-control" :class="{ 'is-invalid': employee_form.errors.has('mobile_number') }" required>
                        <has-error :form="employee_form" field="mobile_number"></has-error>
                      </div>

                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Password</label>
                        <input v-model="employee_form.password" type="password" name="password" placeholder="Enter password"
                               class="form-control" :class="{ 'is-invalid': employee_form.errors.has('password') }" required>
                        <has-error :form="employee_form" field="password"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">
                      <div class="form-group">
                        <label>Password Confirmation</label>
                        <input v-model="employee_form.password_confirmation" type="password" name="password_confirmation"
                               placeholder="Enter password confirmation"
                               class="form-control" :class="{ 'is-invalid': employee_form.errors.has('password_confirmation') }"
                               required>
                        <has-error :form="employee_form" field="password_confirmation"></has-error>
                      </div>
                    </div>

                    <div class="col-lg-6 col-md-6 col-sm-12">

                      <div class="form-group" style="margin-left: 18px">

                        <input type="checkbox" name="terms_and_conditions" class="form-check-input" id="defaultCheck1"
                               required>
                        <label class="form-check-label" for="defaultCheck1">
                          I agree to the Hotjobs.com Terms of use. <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>
                        </label>

                        <has-error :form="employee_form" field="terms_and_conditions"></has-error>
                      </div>

                    </div>

                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
                  <button type="submit" class="btn btn-success">Submit</button>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>

    </div>
  </header>
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
    name: "Header",

    data() {
      return {
        authUser: '',
        url: this.$axios.defaults.baseURL,
        countries: '',
        districts: '',
        thanas: '',
        industry_categories: '',
        industry_type_lists: '',
        country_name: '',
        special_categories:'',
        form: new Form({
          id: '',
          username: '',
          password: '',
          password_confirmation: '',
          company_name: '',
          company_name_bangla: '',
          country_id: '',
          district_id: '',
          thana_id: '',
          city: '',
          company_address: '',
          company_address_bangla: '',
          industry_category_id: '',
          industry_type_keyword: '',
          industry_types: '',
          business_description: '',
          license_no: '',
          rl_no: '',
          website_url: '',
          contact_person_name: '',
          contact_person_email: '',
          contact_person_designation: '',
          contact_person_mobile: '',
          pricing_policy: '',

        }),

        employee_form: new Form({
          id: '',
          name: '',
          gender: '',
          skill_id: '',
          email: '',
          mobile_number: '',
          password: '',
          password_confirmation: '',
          country_id: '',
          category: ''
        }),
      }
    },

    methods: {

      logout() {
        window.$nuxt.$cookies.remove('token');
        window.$nuxt.$cookies.remove('user');
        // this.$router.push('/');
        window.location.href = "/";
      },

      getPhoto() {
        let image_url = this.url + this.authUser.company_logo;
        return image_url;
      },

      pricingPolicy() {

        alert('working');
        return false;

      },

      addEmployerModal() {
        this.form.reset();
        this.$emit('FetchData');
        $('#addEmployer').modal('show');
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

      async fetchIndustryCategoryLists() {
        return await this.$axios.get('industry-category-lists')
          .then((response) => {

            this.industry_categories = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      async fetchIndustryTypeLists() {
        return await this.$axios.get('industry-type-lists')
          .then((response) => {

            this.industry_type_lists = response.data;

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

      FetchThana() {

        var vm = this;

        var district_id = this.form.district_id;

        this.$axios.get('fetch-thana-lists/' + district_id).then(function (response) {

          vm.thanas = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      countryName() {

        var vm = this;
        var country_id = vm.form.country_id;

        this.$axios.get('country-name/' + country_id).then(function (response) {

          vm.country_name = response.data.countries_name;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });

      },

      fetchIndustryCategory() {

        var vm = this;
        vm.form.industry_types = [];
        var industry_category_id = vm.form.industry_category_id;

        this.$axios.get('fetch-industry-type-lists/' + industry_category_id).then(function (response) {

          vm.industry_type_lists = response.data;

        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });
      },

      filterIndustryType() {

        var vm = this;
        var industry_category_id = vm.form.industry_category_id;


        var industry_type_keyword = vm.form.industry_type_keyword;

        this.$axios.get('fetch-keyword-industry-type-lists/' + industry_category_id + '/' + industry_type_keyword).then(function (response) {

          vm.industry_type_lists = response.data;

          // console.log(response.data);


        }).catch(function (error) {

          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

        });


      },

      createEmployer() {

        var vm = this;

        this.form.post(this.url + 'employer')
          .then(() => {

            Toast.fire({
              icon: 'success',
              title: 'Account Created successfully.Please login with valid email and password'
            });
            $('#addEmployer').modal('hide');

            vm.$router.push('/employer/login')

          })

          .catch((error) => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      },

      addGeneralEmployeeModal() {
        this.employee_form.reset();
        this.fetchCountryLists();
        this.fetchSpecialCategory();
        $('#addGeneralEmployee').modal('show');
      },

      async fetchSpecialCategory() {
        return await this.$axios.get('skill-general-category')
          .then((response) => {

            this.special_categories = response.data;

          })

          .catch((error) => {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          })
      },

      createEmployee() {
        var vm = this
        this.employee_form.post(this.url + 'employee')

          .then(() => {
            Toast.fire({
              icon: 'success',
              title: 'Account Created successfully.Please login '
            });
            $('#addGeneralEmployee').modal('hide');
            vm.$router.push('/my-jobs/login');

          })
          .catch((error) => {
            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });
          })
      }

    },

    mounted: function () {

      this.authUser = window.$nuxt.$cookies.get('user');

    },

    created() {

      this.$on('FetchData', () => {
        this.fetchCountryLists();
        this.fetchDistrictLists();
        this.fetchIndustryCategoryLists();
        // this.fetchIndustryTypeLists();
      });

    },

  }
</script>

<style scoped>
  h3 {
    color: #EC1A3A;
  }

  .type-box {
    max-height: 225px;
    overflow-y: scroll;
    border: 1px solid #ddd;
  }

  .mt-8 {
    margin-top: 8px;
  }

</style>
