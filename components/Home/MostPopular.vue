<template>
  <div class="align-items-center">
    <div class="row">

      <div class="col-lg-6">
        <div class="popular-item">
          <div class="row align-items-center">
            <div class="col-lg-7">
<!--              <img src="../../static/images/3.png" alt="Popular">-->

              <img data-src="../../static/images/3.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
            </div>
            <div class="col-lg-5">
              <div class="practice-inner">
                <img data-src="../../static/images/4.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
                <img data-src="../../static/images/5.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>

<!--                <img src="../../static/images/4.png" alt="Popular">
                <img src="../../static/images/5.png" alt="Popular">-->

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
<!--                  <img src="../../static/images/box/4.png" alt="Job">-->
                  <img data-src="../../static/images/box/4.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
                  Trusted & Quality Job
                </li>
                <li>
                  <img data-src="../../static/images/box/6.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
<!--                  <img src="../../static/images/box/6.png" alt="Job">-->
                  No Extra Charge
                </li>
              </ul>
            </div>
            <div class="col-sm-6 col-lg-6">
              <ul>
                <li>
                  <img data-src="../../static/images/box/6.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
<!--                  <img src="../../static/images/box/6.png" alt="Job">-->
                  Top Companies
                </li>
                <li>
                  <img data-src="../../static/images/box/7.png" alt="HotJobsBD" title="HotJobsBD" v-lazy-load>
<!--                  <img src="../../static/images/box/7.png" alt="Job">-->
                  International Job
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "MostPopular"
  }
</script>

<style scoped>

</style>
