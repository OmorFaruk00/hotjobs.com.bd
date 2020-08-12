<template>
  <ul class="twitter-bs-wizard-nav nav-justified">

    <li class="nav-item">
      <nuxt-link to="/employer/job-posting-board"  class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">01</span> <br>
        Primary Job Information
      </nuxt-link>
    </li>

    <li class="nav-item">
      <nuxt-link to="/employer/job-posting-board-step-2" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">02</span> <br>
        More Job Information
      </nuxt-link>
    </li>

    <li class="nav-item">
      <a href="#candidate-requirements" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">03</span> <br>
        Candidate Requirements
      </a>
    </li>

    <li class="nav-item">
      <a href="#company-info-visibility" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">04</span> <br>
        Company Info Visibility
      </a>
    </li>

    <li class="nav-item">
      <a href="#matching-criteria" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">05</span> <br>
        Matching Criteria
      </a>
    </li>


    <li class="nav-item">
      <a href="#preview" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">06</span> <br>
        Preview
      </a>
    </li>

    <li class="nav-item">
      <a href="#complete" class="nav-link" data-toggle="tab">
        <span class="step-number mr-2">07</span> <br>
        Complete
      </a>
    </li>

  </ul>
</template>

<script>
    export default {
        name: "formHeader"
    }
</script>

<style scoped>
  .nav-item a{
    text-align: center!important;
  }
</style>


