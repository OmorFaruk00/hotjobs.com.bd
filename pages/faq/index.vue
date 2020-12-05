<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">

              <h3>FAQ</h3>

<!--              <p>
                This is a public site with free access and
                <nuxt-link to="/">Hotjobs.com.bd</nuxt-link>
                assumes no liability for the quality and
                genuineness of responses.
                <nuxt-link to="/">Hotjobs.com.bd</nuxt-link>
                is not liable for any information provided by any individual.
                The individual/company would have to conduct its own background checks on the bona fide nature of all
                responses.
              </p>-->

            </div>
          </div>
        </div>


        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">
              
              <employabilityHelpFaq />

            </div>
          </div>
        </div>


      </div>

    </div>

  </div>
</template>

<script>
import employabilityHelpFaq from "@/components/EmployabilityHelp/Faq";

export default {
  name: "index",
  components: {
    employabilityHelpFaq
  },
}
</script>

<style scoped>

</style>
