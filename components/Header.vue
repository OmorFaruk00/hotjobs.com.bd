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

          <a href="javaScript:void(0)">
            <i class="bx bxl-facebook-circle" style="font-size: 40px;"></i>
          </a>

          <a href="javaScript:void(0)">
            <i class="bx bxl-youtube" style="font-size: 40px;"></i>
          </a>

          <a href="javaScript:void(0)">
            <i class="bx bxl-linkedin-square" style="font-size: 40px;"></i>
          </a>

        </div>


      </div>

      <div class="d-flex">

        <div class="dropdown d-inline-block">
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
                          <nuxt-link to="/job-seeker-login" class="btn btn-outline-primary">Sign in</nuxt-link>
                          <nuxt-link to="/job-seeker-create" class="btn btn-outline-info">Create account</nuxt-link>
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
                          <nuxt-link to="/" class="btn btn-outline-primary">Sign in</nuxt-link>
                          <nuxt-link to="/" class="btn btn-outline-info">Create account</nuxt-link>
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>


          </div>
        </div>

        <div class="dropdown d-inline-block">

          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                 alt="">
            <span class="d-none d-xl-inline-block ml-1">Admin</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>

          <div class="dropdown-menu dropdown-menu-right">
            <!-- item-->
            <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle mr-1"></i>
              Profile</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item text-danger" href="#"><i
              class="bx bx-power-off font-size-16 align-middle mr-1 text-danger"></i> Logout</a>
          </div>
        </div>

      </div>

    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped>

</style>
