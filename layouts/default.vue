<template>
  <body data-topbar="light" data-layout="horizontal">

  <!-- Begin page -->
  <div id="layout-wrapper">

    <!--header-->
    <Header/>
    <!--top-navbar-->
    <TopNavbar/>


    <div class="main-content bg-light">

      <div style="padding-top: 80px" class="d-md-none">


        <!--diu banner start-->
        <div class="container-fluid">

          <div class="row">
            <div class="col text-center">
              <a href="https://admission.diu.ac/" target="_blank">
                <img src="~/static/images/diu_admission.gif" class="img-fluid" alt="DIU">
              </a>
            </div>
          </div>

        </div>
        <!-- diu banner end-->

      </div>

      <nuxt/>

      <!--footer-->
      <myFooter/>
    </div>

    <a href="javaScript:void(0)" id="scrollUp" v-scroll-to="'body'"><i class="bx bx-up-arrow-alt"></i></a>

  </div>

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

  methods: {
    addCookies() {

      window.$nuxt.$cookies.set('time', {
        path: '/',
        maxAge: 3600
      });

    }
  },

  mounted: function () {
    this.addCookies();
  }
}
</script>

<style>

#scrollUp {
  /*background: #EC1A3A none repeat scroll 0 0;*/
  background: linear-gradient(#EE453B, #6F323D);
  bottom: 7px;
  /*box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);*/
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
  border-radius: 3px;
}

#scrollUp:hover {
  background: linear-gradient(#6F323D, #EE453B);
}

/*.nuxt-progress {
  position: fixed;
  width: 100%;
  display: block;
  !*background: url("/assets/images/loading.gif") center no-repeat white;*!
  height: 100%;
  !*background: url('https://hotjobs.com.bd/loading.gif') center no-repeat white;*!
}*/

body {
  margin: 0;
  padding: 0;
  z-index: 1;
}

::-webkit-scrollbar {
  width: 10px;
  background-color: #ddd;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  /*background-color: #6F323D;*/
  background: linear-gradient(transparent, #EE453B);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(transparent, #6F323D);
}


</style>
