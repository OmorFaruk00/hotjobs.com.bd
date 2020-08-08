<template>
    <div class="col-12">
      <div class="banner-area banner-img-one">
        <div class="d-table">
          <div class="d-table-cell">
            <div class="container">
              <div class="banner-text">
                <h1>Find Your <span>Desire</span> Job</h1>
                <p>Jobs, Employment & Future Career Opportunities</p>
                <div class="banner-form-area">
                  <form>
                    <div class="row">
                      <div class="col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" placeholder="Job Title">
                          <label>
                            <i class="icofont-search-1"></i>
                          </label>
                        </div>
                      </div>
                      <!--<div class="col-lg-4">
                          <div class="form-group">
                              <label>
                                  <i class="icofont-location-pin"></i>
                              </label>
                              <input type="text" class="form-control" placeholder="City or State">
                          </div>
                      </div>-->
                      <div class="col-lg-6">
                        <div class="form-group">
                          <select class="form-control">
                            <option>Organization Type</option>
                            <option>Job Category</option>
                            <option>Another option</option>
                            <option>A option</option>
                            <option>Potato</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn banner-form-btn">Search</button>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


</template>

<script>
  export default {
    name: "Banner"
  }
</script>

<style scoped>

</style>
