<template>
  <ul class="nav nav-tabs nav-tabs-custom nav-justified" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-toggle="tab" href="#personal" role="tab">
        <span class="d-block d-sm-none" title="Personal"><i class="bx bx-user-pin"></i></span>
        <span class="d-none d-sm-block">Personal</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#education_training" role="tab">
        <span class="d-block d-sm-none" title="Education/Training"><i class="bx bxs-graduation"></i></span>
        <span class="d-none d-sm-block"> Education/Training</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#employment" role="tab">
        <span class="d-block d-sm-none" title="Employment"><i class="bx bx-briefcase"></i></span>
        <span class="d-none d-sm-block"> Employment</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#other_information" role="tab">
        <span class="d-block d-sm-none" title="Other Information"><i class="bx bx-list-ul"></i></span>
        <span class="d-none d-sm-block"> Other Information</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-toggle="tab" href="#photograph" role="tab">
        <span class="d-block d-sm-none" title="Photograph"><i class="bx bxs-camera-plus"></i></span>
        <span class="d-none d-sm-block">Photograph</span>
      </a>
    </li>
  </ul>
</template>

<script>
    export default {
        name: "horizontalTab"
    }
</script>

<style scoped>

</style>
