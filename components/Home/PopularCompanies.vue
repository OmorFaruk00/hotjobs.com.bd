<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Popular Companies</h1>

        <carousel :autoplay="true" :nav="false"
                  :responsive="{0:{items:1,nav:false},576:{items:1,nav:false},768:{items:2,nav:false},992:{items:3,nav:false},1200:{items:4,nav:false}}">

          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <h3>
              <a href="company-details.html">Winbrans.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Quadra, Street, Canada
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <h3>
              <a href="company-details.html">Infiniza.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              North Street, California
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <h3>
              <a href="company-details.html">Glovibo.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Barming Road, UK
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>


          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">
            <h3>
              <a href="company-details.html">Bizotic.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Washington, New York
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <h3>
              <a href="company-details.html">Winbrans.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Quadra, Street, Canada
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <h3>
              <a href="company-details.html">Infiniza.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              North Street, California
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <h3>
              <a href="company-details.html">Glovibo.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Barming Road, UK
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">
            <h3>
              <a href="company-details.html">Bizotic.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Washington, New York
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <h3>
              <a href="company-details.html">Winbrans.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Quadra, Street, Canada
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <h3>
              <a href="company-details.html">Infiniza.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              North Street, California
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <h3>
              <a href="company-details.html">Glovibo.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Barming Road, UK
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">
            <h3>
              <a href="company-details.html">Bizotic.com</a>
            </h3>
            <p>
              <i class="icofont-location-pin"></i>
              Washington, New York
            </p>
            <a class="companies-btn" href="create-account.html">Hiring</a>
          </div>

        </carousel>

      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: "PopularCompanies",
  }
</script>

<style scoped>
  h1 {
    font-size: 35px;
  }
</style>
