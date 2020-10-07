<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body" style="max-width: 80%;margin: 0 auto;">

        <h1 class="card-title text-center">Read candidate feedback</h1>

        <carousel :autoplay="true" :nav="false"
                  :responsive="{0:{items:1,nav:false},576:{items:1,nav:false},768:{items:2,nav:false},992:{items:2,nav:false},1200:{items:2,nav:false}}">

          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>
          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/1.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/2.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/3.png" alt="Companies">
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>
          <div class="companies-item">
            <img src="../../static/images/companies/4.png" alt="Companies">

            <p>
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium autem cumque esse ex in,
              quasi?"
            </p>

            <h3>
              Bizotic.com
            </h3>

          </div>

        </carousel>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ReadCandidateFeedback",
  }
</script>

<style scoped>
  h1 {
    font-size: 35px;
  }
  .companies-item {
    box-shadow: none;
  }
</style>
