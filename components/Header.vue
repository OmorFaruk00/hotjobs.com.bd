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


        <div class="dropdown dropdown-mega d-none d-lg-block ml-2">
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
        </div>
      </div>

      <div class="d-flex">

        <div class="dropdown d-inline-block">
          <button type="button" class="btn header-item waves-effect" id="page-header-user-dropdown"
                  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img class="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg"
                 alt="Header Avatar">
            <span class="d-none d-xl-inline-block ml-1">Admin</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <!-- item-->
            <a class="dropdown-item" href="#"><i class="bx bx-user font-size-16 align-middle mr-1"></i>
              Profile</a>
            <a class="dropdown-item" href="#"><i class="bx bx-wallet font-size-16 align-middle mr-1"></i> My
              Wallet</a>
            <a class="dropdown-item d-block" href="#"><span
              class="badge badge-success float-right">11</span><i
              class="bx bx-wrench font-size-16 align-middle mr-1"></i> Settings</a>
            <a class="dropdown-item" href="#"><i class="bx bx-lock-open font-size-16 align-middle mr-1"></i>
              Lock screen</a>
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
