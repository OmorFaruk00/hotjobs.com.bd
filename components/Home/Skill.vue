<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <h1 class="card-title text-center">Helping Hand</h1>

        <div class="row">
          <div v-for="(row,key) in special_categories" class="col-lg-3 col-md-3 col-sm-12">
            <div class="companies-item category-item-box">
              <h3>
                <a href="javaScript:void(0)" @click="fetchJob(row.id)">{{ row.name }}
                  (
                  <countTo :startVal='0' :endVal='row.current_job_posts.length'
                           :duration='5000'></countTo>
                  )
                </a>
              </h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import countTo from 'vue-count-to';
    export default {
        name: "Skill",
      components: {
        countTo,
      },
      data() {
        return {
          url: this.$axios.defaults.baseURL,
          special_categories:'',
        }
      },

      methods:{
        fetchSpecialCategory() {
          var vm = this;
          this.$axios.get('skill-special-category').then(function (response) {

            vm.special_categories = response.data;

          }).catch(function (error) {

            Toast.fire({
              icon: 'warning',
              title: 'There was something wrong'
            });

          });
        },

        fetchJob(id){
          var id = id;
          this.$router.push(`/jobsearch/${id}`)

        }

      },

      beforeMount() {
        this.fetchSpecialCategory();
      }
    }
</script>

<style scoped>
  h1 {
    font-size: 35px;
  }

  .category-item-box {
    padding: 15px 0px 1px 0px;
  }

  .category-item-box h3 a {
    font-size: 14px;
  }
</style>
