<template>
  <div class="topnav bg-dark">
    <div class="container-fluid">

        <nav class="navbar navbar-light navbar-expand-lg topnav-menu ">

          <div class="collapse navbar-collapse" id="topnav-menu-content">

            <ul class="navbar-nav justify-content-center">
              <li class="nav-item dropdown">
                <nuxt-link class="nav-link dropdown-toggle arrow-none" to="/employability-help">Employability Test <span
                  class="badge badge-secondary">New</span></nuxt-link>
              </li>

              <li class="nav-item dropdown">

                <a class="nav-link dropdown-toggle arrow-none" href="javaScript:void(0)" id="topnav-layout" role="button"
                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Career Resources
                  <div class="arrow-down"></div>
                </a>

                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="topnav-layout">
                  <nuxt-link to="/" class="dropdown-item">Career Guide</nuxt-link>
                  <nuxt-link to="/" class="dropdown-item">Interview Tips</nuxt-link>
                  <nuxt-link to="/" class="dropdown-item">Resume Writing Tips</nuxt-link>
                  <nuxt-link to="/" class="dropdown-item">Cover Letter</nuxt-link>
                  <nuxt-link to="/" class="dropdown-item">Articles</nuxt-link>
                  <nuxt-link to="/" class="dropdown-item">Career Counseling <span class="badge badge-info">New</span></nuxt-link>

                </div>
              </li>

              <li class="nav-item dropdown">
                <nuxt-link class="nav-link dropdown-toggle arrow-none" to="/">Contact Us</nuxt-link>
              </li>


            </ul>

          </div>
        </nav>

    </div>
  </div>
</template>

<script>
  export default {
    name: "TopNavbar"
  }
</script>

<style scoped>

</style>
