<template>
  <!-- Page Title -->
  <div class="page-title-area">
    <div class="d-table">
      <div class="d-table-cell">
        <div class="container">
          <div class="page-title-text">
            <h2>Log In</h2>
            <ul>
              <li>
                <nuxt-link to="/">Home</nuxt-link>
              </li>
              <li>
                <i class="bx bx-chevrons-right"></i>
              </li>
              <li>Log In</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Page Title -->
</template>

<script>
    export default {
        name: "Banner"
    }
</script>

<style scoped>
  .page-title-area{
    margin-top: 123px;
  }
  .page-title-text{
    margin-top: 0;
  }
  .page-title-text ul li i{
    vertical-align: middle;
  }
  .page-title-text ul li{
    color: #fff;
  }

</style>
