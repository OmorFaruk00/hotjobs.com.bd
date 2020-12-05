<template>
  <div class="col-lg-12">
    <div class="card">
      <div class="card-body">

        <div role="tablist">

          <b-card no-body class="mb-1" v-for="(row,index) in 5" :key="index">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle="'accordion-' + row" variant="light" class="faq_tab">Accordion {{ row }}</b-button>
            </b-card-header>
            <b-collapse :id="`accordion-${row}`" visible accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>I start opened because <code>visible</code> is <code>true</code></b-card-text>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

<!--          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-2  class="faq_tab">Accordion 2</b-button>
            </b-card-header>
            <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-3  class="faq_tab">Accordion 3</b-button>
            </b-card-header>
            <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-1">
            <b-card-header header-tag="header" class="p-1" role="tab">
              <b-button block v-b-toggle.accordion-4  class="faq_tab">Accordion 4</b-button>
            </b-card-header>
            <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
              <b-card-body>
                <b-card-text>{{ text }}</b-card-text>
              </b-card-body>
            </b-collapse>
          </b-card>-->

        </div>


      </div>
    </div>
  </div>
</template>

<script>

  import Vue from 'vue'
  import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'

  Vue.use(BootstrapVue)

  export default {
    name: "Faq",
    data() {
      return {
        text: `
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
          brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
          tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
          assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
          wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher
          vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic
          synth nesciunt you probably haven't heard of them accusamus labore VHS.
        `
      }
    },
  }
</script>

<style scoped>
  .faq_tab {
    color: #333333!important;
    font-size: 17px;
    width: 100%;
    display: block;
    cursor: pointer;
    font-weight: 600;
    padding: 15px 0 15px 18px;
    border: 1px solid;
    border-image-source: linear-gradient(90deg, #38a745 0%, #4cce5b 63%);
    border-image-slice: 1;
    background-color: #fff;
  }

  .faq_tab:active {
    color: #212529!important;
    background: -webkit-gradient(linear, left top, right top, from(#EC1A3A), color-stop(63%, #423A3D));
    background: linear-gradient(90deg, #EC1A3A 0%, #423A3D 63%);
    border-color: #c5cfe2;
  }
</style>
