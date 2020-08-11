<template>
  <nav class="navbar navbar-expand-lg navbar-background">

    <button class="navbar-toggler navbar-toggler-color" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
   <i class="fa fa-fw fa-bars text-white"></i> Select menu item

    </button>

    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

      <ul class="navbar-nav m-auto full-width">

        <li class="nav-item sub-nav-item">
          <nuxt-link to="/" class="link-item" href="#">Employer's Panel</nuxt-link>
        </li>

        <li class="nav-item sub-nav-item">
          <nuxt-link to="/" class="link-item" href="#">CV Bank</nuxt-link>
        </li>

        <li class="nav-item sub-nav-item">
          <nuxt-link to="/" class="link-item" href="#">Candidate Communication</nuxt-link>
        </li>

        <li class="nav-item sub-nav-item">
          <nuxt-link to="/" class="link-item" href="#">Analytics</nuxt-link>
        </li>

        <li class="nav-item sub-nav-item">
          <nuxt-link to="/" class="link-item link-item-last" href="#">Services for Employers</nuxt-link>
        </li>

      </ul>

    </div>
  </nav>
</template>

<script>
  export default {
    name: "Navbar"
  }
</script>

<style scoped>
  .navbar-background{
    background-color: #423A3D; /*#EC1A3A*/
  }
  .full-width {
    width: 100%;
  }

  .sub-nav-item {
    width: 20%;
    text-align: center;
  }
  .link-item{
    color: #fff;
  }
  .navbar-toggler-color{
    color: #fff!important;
  }
</style>
