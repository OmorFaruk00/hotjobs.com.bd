<template>

  <div class="page-content">
    <div class="container-fluid">

      <employerNavbar/>

      <employerSubNavbar/>

      <div class="row mt-2">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <!--              <h4 class="card-title mb-4">Wizard with progressbar</h4>-->

              <div id="progrss-wizard" class="twitter-bs-wizard">

                <jobPostingFormHeader/>


                <div class="mt-3">
                  <form>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-pancard-input">PAN Card</label>
                          <input type="text" class="form-control" id="basicpill-pancard-input">
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-vatno-input">VAT/TIN No.</label>
                          <input type="text" class="form-control" id="basicpill-vatno-input">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-cstno-input">CST No.</label>
                          <input type="text" class="form-control" id="basicpill-cstno-input">
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-servicetax-input">Service Tax No.</label>
                          <input type="text" class="form-control" id="basicpill-servicetax-input">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-companyuin-input">Company UIN</label>
                          <input type="text" class="form-control" id="basicpill-companyuin-input">
                        </div>
                      </div>

                      <div class="col-lg-6">
                        <div class="form-group">
                          <label for="basicpill-declaration-input">Declaration</label>
                          <input type="text" class="form-control" id="basicpill-Declaration-input">
                        </div>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--<div>
    <div class="tab-pane" id="more-job-information">
      <div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-pancard-input">PAN Card</label>
                <input type="text" class="form-control" id="basicpill-pancard-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-vatno-input">VAT/TIN No.</label>
                <input type="text" class="form-control" id="basicpill-vatno-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-cstno-input">CST No.</label>
                <input type="text" class="form-control" id="basicpill-cstno-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-servicetax-input">Service Tax No.</label>
                <input type="text" class="form-control" id="basicpill-servicetax-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-companyuin-input">Company UIN</label>
                <input type="text" class="form-control" id="basicpill-companyuin-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-declaration-input">Declaration</label>
                <input type="text" class="form-control" id="basicpill-Declaration-input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="tab-pane" id="candidate-requirements">
      <div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-pancard-input">PAN Card</label>
                <input type="text" class="form-control" id="basicpill-pancard-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-vatno-input">VAT/TIN No.</label>
                <input type="text" class="form-control" id="basicpill-vatno-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-cstno-input">CST No.</label>
                <input type="text" class="form-control" id="basicpill-cstno-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-servicetax-input">Service Tax No.</label>
                <input type="text" class="form-control" id="basicpill-servicetax-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-companyuin-input">Company UIN</label>
                <input type="text" class="form-control" id="basicpill-companyuin-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-declaration-input">Declaration</label>
                <input type="text" class="form-control" id="basicpill-Declaration-input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="tab-pane" id="company-info-visibility">
      <div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-pancard-input">PAN Card</label>
                <input type="text" class="form-control" id="basicpill-pancard-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-vatno-input">VAT/TIN No.</label>
                <input type="text" class="form-control" id="basicpill-vatno-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-cstno-input">CST No.</label>
                <input type="text" class="form-control" id="basicpill-cstno-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-servicetax-input">Service Tax No.</label>
                <input type="text" class="form-control" id="basicpill-servicetax-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-companyuin-input">Company UIN</label>
                <input type="text" class="form-control" id="basicpill-companyuin-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-declaration-input">Declaration</label>
                <input type="text" class="form-control" id="basicpill-Declaration-input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="tab-pane" id="matching-criteria">
      <div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-pancard-input">PAN Card</label>
                <input type="text" class="form-control" id="basicpill-pancard-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-vatno-input">VAT/TIN No.</label>
                <input type="text" class="form-control" id="basicpill-vatno-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-cstno-input">CST No.</label>
                <input type="text" class="form-control" id="basicpill-cstno-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-servicetax-input">Service Tax No.</label>
                <input type="text" class="form-control" id="basicpill-servicetax-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-companyuin-input">Company UIN</label>
                <input type="text" class="form-control" id="basicpill-companyuin-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-declaration-input">Declaration</label>
                <input type="text" class="form-control" id="basicpill-Declaration-input">
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <div class="tab-pane" id="preview">
      <div>
        <form>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-namecard-input">Name on Card</label>
                <input type="text" class="form-control" id="basicpill-namecard-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label>Credit Card Type</label>
                <select class="custom-select">
                  <option selected>Select Card Type</option>
                  <option value="AE">American Express</option>
                  <option value="VI">Visa</option>
                  <option value="MC">MasterCard</option>
                  <option value="DI">Discover</option>
                </select>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-cardno-input">Credit Card Number</label>
                <input type="text" class="form-control" id="basicpill-cardno-input">
              </div>
            </div>

            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-card-verification-input">Card Verification Number</label>
                <input type="text" class="form-control" id="basicpill-card-verification-input">
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-6">
              <div class="form-group">
                <label for="basicpill-expiration-input">Expiration Date</label>
                <input type="text" class="form-control" id="basicpill-expiration-input">
              </div>
            </div>

          </div>
        </form>
      </div>
    </div>

    <div class="tab-pane" id="complete">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center">
            <div class="mb-4">
              <i class="mdi mdi-check-circle-outline text-success display-4"></i>
            </div>
            <div>
              <h5>Confirm Detail</h5>
              <p class="text-muted">If several languages coalesce, the grammar of the resulting</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>-->

</template>

<script>
  import employerNavbar from '~/components/Employer/Navbar'
  import employerSubNavbar from '~/components/Employer/SubNavbar'
  import jobPostingFormHeader from '~/components/Employer/JobPosting/formHeader'

  export default {
    middleware: 'employerAuthenticated',
    head: {
      link: [
        {rel: 'stylesheet', href: '/libs/twitter-bootstrap-wizard/prettify.css'},
      ],
      script: [
        {src: '/libs/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js'},
        {src: '/libs/twitter-bootstrap-wizard/prettify.js'},
        {src: '/js/pages/form-wizard.init.js'},
      ],
    },
    name: "job-posting-board-step-2",
    components: {
      employerNavbar,
      employerSubNavbar,
      jobPostingFormHeader,
    },
  }
</script>

<style scoped>

</style>
