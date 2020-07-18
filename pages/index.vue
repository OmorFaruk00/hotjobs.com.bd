<template>
  <div>

    <div class="page-content">

      <div class="container-fluid">

        <div class="row">

          <!--banner-->
          <homeBanner/>

          <div class="col-lg-12">
            <div class="card">
            </div>
          </div>

          <!--Desire Category-->
          <homeDesireCategory/>

          <!--Skilled jobs-->
          <homeSkill/>

          <!--Hot Jobs-->
          <homeHotJobs/>

          <!--TENDER / EOI-->
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">

                <h1 class="card-title text-center">TENDER / EOI</h1>

                <div class="tender_body">
                  <div class="row">

                    <div class="col-sm-6 col-lg-4">

                      <div class="jobseeker-item">
                        <div class="jobseeker-icon">
                          <img src="../static/images/box/7.png" alt="Job">
                        </div>

                        <div class="jobseeker-inner">
                          <span>Jobseeker</span>
                          <h3>Looking For a Job ?</h3>
                        </div>

                      </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                      <div class="jobseeker-item">
                        <div class="jobseeker-icon">
                          <img src="../static/images/box/2.png" alt="Job">
                        </div>
                        <div class="jobseeker-inner">
                          <span>Recruiter</span>
                          <h3>Are You Recruiting ?</h3>
                        </div>

                      </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                      <div class="jobseeker-item">
                        <div class="jobseeker-icon">
                          <img src="../static/images/box/4.png" alt="Job">
                        </div>
                        <div class="jobseeker-inner">
                          <span>Jobseeker</span>
                          <h3>Looking For a Job ?</h3>
                        </div>

                      </div>
                    </div>

                    <div class="col-sm-6 col-lg-4">
                      <div class="jobseeker-item">
                        <div class="jobseeker-icon">
                          <img src="../static/images/box/6.png" alt="Job">
                        </div>
                        <div class="jobseeker-inner">
                          <span>Recruiter</span>
                          <h3>Are You Recruiting ?</h3>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>

    </div>


    <!-- Counter -->
    <div class="counter-area ptb-50">

      <div class="row">

        <div class="col-6 col-sm-3 col-lg-3">
          <div class="counter-item">
            <img src="../static/images/box/4.png" alt="Job">
            <h3>
              <countTo :startVal='0' :endVal='25' :duration='5000'></countTo>
              k+
            </h3>
            <p>Job Available</p>
          </div>
        </div>

        <div class="col-6 col-sm-3 col-lg-3">
          <div class="counter-item">
            <img src="../static/images/box/6.png" alt="Job">
            <h3>
              <countTo :startVal='0' :endVal='150' :duration='5000'></countTo>
              k+
            </h3>
            <p>CV Submitted</p>
          </div>
        </div>

        <div class="col-6 col-sm-3 col-lg-3">
          <div class="counter-item">
            <img src="../static/images/box/8.png" alt="Job">
            <h3>
              <countTo :startVal='0' :endVal='120' :duration='5000'></countTo>
              k+
            </h3>
            <p>Companies</p>
          </div>
        </div>

        <div class="col-6 col-sm-3 col-lg-3">
          <div class="counter-item">
            <img src="../static/images/box/2.png" alt="Job">
            <h3>
              <countTo :startVal='0' :endVal='50' :duration='5000'></countTo>
              k+
            </h3>
            <p>Appointed to Job</p>
          </div>
        </div>

      </div>

    </div>
    <!-- End Counter -->

    <div class="page-content mt-0">

      <div class="container-fluid">

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="popular-item">
              <div class="row align-items-center">
                <div class="col-lg-7">
                  <img src="../static/images/3.jpg" alt="Popular">
                </div>
                <div class="col-lg-5">
                  <div class="practice-inner">
                    <img src="../static/images/4.jpg" alt="Popular">
                    <img src="../static/images/5.jpg" alt="Popular">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="popular-item popular-right">
              <div class="section-title text-left">
                <h2>Why We are Most Popular</h2>
              </div>
              <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                Quis ipsum suspendisse ultrices gravida</p>
              <div class="row popular-wrap">
                <div class="col-sm-6 col-lg-6">
                  <ul>
                    <li>
                      <img src="../static/images/box/4.png" alt="Job">
                      Trusted & Quality Job
                    </li>
                    <li>
                      <img src="../static/images/box/6.png" alt="Job">
                      No Extra Charge
                    </li>
                  </ul>
                </div>
                <div class="col-sm-6 col-lg-6">
                  <ul>
                    <li>
                      <img src="../static/images/box/6.png" alt="Job">
                      Top Companies
                    </li>
                    <li>
                      <img src="../static/images/box/7.png" alt="Job">
                      International Job
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
  import countTo from 'vue-count-to';
  import homeBanner from "~/components/Home/Banner";
  import homeDesireCategory from "~/components/Home/DesireCategory";
  import homeSkill from "~/components/Home/Skill";
  import homeHotJobs from "~/components/Home/HotJobs";


  export default {
    name: "index",
    components: {
      countTo,
      homeBanner,
      homeDesireCategory,
      homeSkill,
      homeHotJobs

    },
  }
</script>

<style scoped>

</style>
