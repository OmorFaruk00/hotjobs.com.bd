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

      <a href="javaScript:void(0)" id="scrollUp" v-scroll-to="'body'"><i class="bx bx-up-arrow-alt"></i></a>

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

  #scrollUp {
    background: #EC1A3A none repeat scroll 0 0;
    bottom: 7px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    color: #fff;
    font-size: 25px;
    height: 30px;
    /*line-height: 27px;*/
    position: fixed;
    right: 7px;
    text-align: center;
    transition: all 0.3s ease 0s;
    width: 30px;
    z-index: 200;
  }

</style>
