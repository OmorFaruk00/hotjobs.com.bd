<template>
  <body data-topbar="light" data-layout="horizontal">

    <!-- Begin page -->
    <div id="layout-wrapper">

      <!--header-->
      <Header/>
      <!--top-navbar-->
      <TopNavbar/>


      <div class="main-content bg-light">

        <nuxt/>

        <!--footer-->
        <myFooter/>
      </div>


    </div>
    <!-- END layout-wrapper -->
  </body>
</template>

<script>
  import Header from "~/components/Header";
  import TopNavbar from "~/components/TopNavbar";
  import myFooter from "~/components/Footer";

  export default {
    name: "default",
    components: {
      Header,
      TopNavbar,
      myFooter,
    },
  }
</script>

<style scoped>

</style>
