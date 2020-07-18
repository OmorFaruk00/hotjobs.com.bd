<template>
  <div class="page-content">
    <div class="container-fluid">

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title mb-4">My Stats</h4>

              <div class="card">
                <div class="card-header">Lorem ipsum dolor.</div>
                <div class="card-body bg-light">
                  Here you can check your detailed states like Companies viewed my Resume, Online
                  Application, Emailed Resume, Shortlisted Jobs etc. Beside My Stats in Edit
                  Resume option you can find all features at a glance to add/update.
                </div>
              </div>

              <h4 class="card-title mb-4">Availed SMS plan</h4>

              <div class="row">
                <div class="col-md-4">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="media">
                        <div class="media-body">
                          <p class="text-muted font-weight-medium">Purchased SMS</p>
                          <h4 class="mb-0">0</h4>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="media">
                        <div class="media-body">
                          <p class="text-muted font-weight-medium">Remaining SMS</p>
                          <h4 class="mb-0">2</h4>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="card mini-stats-wid">
                    <div class="card-body">
                      <div class="media">
                        <div class="media-body">
                          <p class="text-muted font-weight-medium">SMS Limit (per day)</p>
                          <h4 class="mb-0">1</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">

              <div class="table-responsive">
                <table class="table mb-0">

                  <tbody>

                  <tr>
                    <td>Companies viewed my Resume</td>
                    <td>0</td>
                    <td>
                                                <span class="badge badge-info" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                    <i class="bx bx-question-mark"></i>
                                                </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Online Application</td>
                    <td>0</td>
                    <td>
                                                <span class="badge badge-info" data-toggle="tooltip" data-placement="bottom" title="Tooltip on bottom">
                                                    <i class="bx bx-question-mark"></i>
                                                </span>
                    </td>
                  </tr>

                  <tr>
                    <td>Emailed Resume</td>
                    <td>0</td>
                    <td>

                                                <span class="badge badge-info" data-toggle="tooltip"
                                                      data-placement="bottom" title="Tooltip on bottom">
                                                    <i class="bx bx-question-mark"></i>
                                                </span>

                    </td>
                  </tr>

                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
      <!-- end row -->
    </div>
    <!-- container-fluid -->
  </div>
</template>

<script>
    export default {
        name: "index"
    }
</script>

<style scoped>

</style>
