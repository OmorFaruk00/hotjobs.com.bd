<template>
  <!-- Footer -->
  <footer id="footer-section">
    <div class="container">

      <!-- Subscribe Form -->
      <div class="subscribe-area">
        <div class="section-title">
          <h2>Subscribe Newsletter</h2>
        </div>
        <div class="subscribe-shape">
          <img src="../static/images/shape/1.png" alt="Shape">
          <img src="../static/images/shape/2.png" alt="Shape">
          <img src="../static/images/shape/1.png" alt="Shape">
          <img src="../static/images/shape/2.png" alt="Shape">
          <img src="../static/images/shape/1.png" alt="Shape">
        </div>

        <div class="subscribe-item">
          <form class="newsletter-form" @submit.prevent="addNewsLatter()">
            <input type="email" v-model="form.email" class="form-control" placeholder="Enter Your Email" name="email"
                   required autocomplete="off">
            <small v-if="errors.email" class="text-danger with-errors"
                   v-html="errors.email[0]"></small>

            <button class="btn subscribe-btn" type="submit">
              Subscribe
            </button>

            <div id="validator-newsletter" class="form-result"></div>
          </form>
        </div>
      </div>
      <!-- End Subscribe Form -->

      <div class="row" style="margin-top: -45px;">
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-logo">

              <nuxt-link to="/">
                <img src="../static/images/logo.png" alt="HotJobs">
              </nuxt-link>

              <ul>
                <li>
                  <a href="https://www.facebook.com/hotjobs.com.bd" target="_blank" title="Facebook">
                    <i class="bx bxl-facebook-circle"></i> Facebook
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/company/hotjobs-com-bd" target="_blank" title="Linkedin">
                    <i class="bx bxl-linkedin-square"></i> Linkedin
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/bdhotjobs/" target="_blank" title="Instagram">
                    <i class="bx bxl-instagram-alt"></i> Instagram
                  </a>
                </li>

                <li>
                  <a href="https://twitter.com/bdhotjobs" target="_blank" title="Twitter">
                    <i class="bx bxl-twitter"></i> Twitter
                  </a>
                </li>

                <li>
                  <a href="https://youtube.com/channel/UC-n5t2attDAAlT3oFYQalWg" target="_blank" title="Youtube">
                    <i class="bx bxl-youtube"></i> Youtube
                  </a>
                </li>


              </ul>

            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-category">
              <h3>Category</h3>
              <ul>
                <li>
                  <nuxt-link to="/about-us">
                    <i class="bx bx-right-arrow-alt"></i>
                    About Us
                  </nuxt-link>
                </li>

<!--                <li>
                  <nuxt-link to="/feedback-form">
                    <i class="bx bx-right-arrow-alt"></i>
                    Feedback Form
                  </nuxt-link>
                </li>-->

                <li>
                  <nuxt-link to="/terms-and-conditions">
                    <i class="bx bx-right-arrow-alt"></i>
                    Terms & Conditions
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/privacy-policy">
                    <i class="bx bx-right-arrow-alt"></i>
                    Privacy Policy
                  </nuxt-link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-category">
              <h3>Quick Links</h3>
              <ul>

                <li>
                  <nuxt-link to="/">
                    <i class="bx bx-right-arrow-alt"></i>
                    Home
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/my-jobs/create">
                    <i class="bx bx-right-arrow-alt"></i>
                    Create Account
                  </nuxt-link>
                </li>

                <li>
                  <nuxt-link to="/contact">
                    <i class="bx bx-right-arrow-alt"></i>
                    Contact Us
                  </nuxt-link>
                </li>

                <li>
                  <a href="https://blog.hotjobs.com.bd/" target="_blank">
                    <i class="bx bx-right-arrow-alt"></i>
                    Blogs
                  </a>
                </li>

                <li>
                  <nuxt-link to="/faq">
                    <i class="bx bx-right-arrow-alt"></i>
                    FAQ
                  </nuxt-link>
                </li>

              </ul>
            </div>
          </div>
        </div>
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-find">
              <h3>Find Us</h3>
              <ul>

                <li>
                  <i class="bx bx-home-circle"></i>
                  Al-Hera Tower, Ka-86/1/A
                  Kuratoli Bazar, Dhaka-1229
                  Bangladesh.
                </li>
                <li>
<!--                  <a href="tel:+8801726893448">
                    <i class="bx bx-phone-incoming"></i>
                    +88 017 2689 3448
                  </a>-->

                  <a href="javaScript:void(0)">
                    <i class="bx bx-phone-incoming"></i>
                    +880255040889 (Exten: 221)
                  </a>
                </li>
                <li>
                  <a href="mailto:info@hotjobs.com.bd">
                    <i class="bx bx-envelope"></i>
                    info@hotjobs.com.bd
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="copyright-area">
        <div class="row">
          <div class="col-12">
            <div class="copyright-item text-center">
              <p>
                Copyright © {{ current_year }} HotJobs. Technical Team: <a href="http://it.diu.ac" target="_blank" style="color: #EC1A3A;">Hotjobs</a>
              </p>
            </div>
          </div>

<!--          <div class="col-lg-6">
            <div class="copyright-item copyright-right">
              <ul>
                <li>
                  <a href="/terms-and-conditions" target="_blank">Terms & Conditions</a>
                </li>
                <li>
                  <span>-</span>
                </li>
                <li>
                  <a href="/privacy-policy" target="_blank">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>-->

        </div>
      </div>

    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
import Vue from 'vue'
import Swal from 'sweetalert2'
import {Form, HasError, AlertError} from 'vform'

Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
export default {
  name: "Footer",
  data() {
    return {
      current_year: this.$moment().format('Y'),
      form: new Form({
        email: '',
      }),
      errors: '',
      url: this.$axios.defaults.baseURL,
    }
  },

  methods: {
    addNewsLatter() {
      var vm = this;

      vm.form.post(this.url + 'news-latter')
        .then((response) => {


          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          });

          vm.form.email = '';
          vm.errors = [];

        })
        .catch((error) => {
          vm.errors = error.response.data;
          Toast.fire({
            icon: 'warning',
            title: 'There was something wrong'
          });

          if (error.response.status == 422) {
            Toast.fire({
              icon: 'warning',
              title: 'Validation Problem'
            });
          }

          if (error.response.status == 401) {
            Toast.fire({
              icon: 'warning',
              title: error.response.data.error
            });
          }

          if (error.response.status == 403) {
            Toast.fire({
              icon: 'warning',
              title: 'Unauthorized access'
            });
          }

        })
    },
  }
}
</script>

<style scoped>
/*-- End Subscribe --*/
/*-- Footer --*/

#footer-section {
  margin-top: 102px;
}

footer {
  background-image: url("../static/images/footer_bg.png");
  background-size: cover;
  /*background-position: center center;*/
  background-repeat: no-repeat;
  opacity: .9;
}

.footer-item {
  margin-bottom: 30px;
}

.footer-item .footer-logo a {
  display: block;
  margin-bottom: 25px;
}

.footer-item .footer-logo p {
  margin-bottom: 20px;
  font-size: 15px;
}

.footer-item .footer-logo ul {
  margin: 0;
  padding: 0;
}

.footer-item .footer-logo ul li {
  list-style-type: none;
  /*display: inline-block;*/
  margin-right: 15px;
}

.footer-item .footer-logo ul li:last-child {
  margin-right: 0;
}

.footer-item .footer-logo ul li a {
  display: block;
  color: #423A3D;
  font-size: 15px;
  margin-bottom: 0;
  padding: 5px 0;
}

.footer-item .footer-logo ul li a:hover {
  color: #333333;
}

.footer-item .footer-category h3 {
  margin-bottom: 30px;
  color: #423A3D;
  font-weight: 600;
  font-size: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid #EE324F;
  position: relative;
}

.footer-item .footer-category h3:before {
  position: absolute;
  content: '';
  width: 50px;
  height: 3px;
  bottom: -2px;
  left: 0;
  background-color: #423A3D;
}

.footer-item .footer-category ul {
  margin: 0;
  padding: 0;
}

.footer-item .footer-category ul li {
  list-style-type: none;
  display: block;
  margin-bottom: 15px;
}

.footer-item .footer-category ul li:last-child {
  margin-bottom: 0;
}

.footer-item .footer-category ul li a {
  color: #423A3D;
  display: block;
  font-size: 15px;
}

.footer-logo ul li a i {
  color: #423A3D !important;
}

.footer-item .footer-category ul li a:hover {
  color: #333333;
}

.footer-item .footer-find h3 {
  margin-bottom: 30px;
  color: #423A3D;
  font-weight: 600;
  font-size: 22px;
  padding-bottom: 20px;
  border-bottom: 1px solid #423A3D;
  position: relative;
}

.footer-item .footer-find h3:before {
  position: absolute;
  content: '';
  width: 50px;
  height: 3px;
  bottom: -2px;
  left: 0;
  background-color: #423A3D;
}

.footer-item .footer-find ul {
  margin: 0;
  padding: 0;
}

.footer-item .footer-find ul li {
  list-style-type: none;
  display: block;
  margin-bottom: 15px;
}

.footer-item .footer-find ul li i {
  font-size: 18px;
  display: inline-block;
  position: relative;
  top: 1px;
  margin-right: 2px;
}

.footer-item .footer-find ul li:last-child {
  margin-bottom: 0;
}

.footer-item .footer-find ul li a {
  display: inline-block;
  color: #ffffff;
  font-size: 15px;
}

.footer-find ul li a {
  color: #423A3D !important;
}

.copyright-area {
  /*padding-top: 30px;*/
  /*padding-bottom: 30px;*/
  padding: 10px 0;
  border-top: 1px solid #6bbf75;
  /*margin-top: 70px;*/
}

.copyright-item p {
  margin-bottom: 0;
}

.copyright-item p a {
  display: inline-block;
  color: #423A3D;
}

.copyright-item p a:hover {
  color: #EC1A3A;
}

.copyright-item ul {
  margin: 0;
  padding: 0;
}

.copyright-item ul li {
  list-style-type: none;
  display: inline-block;
}

.copyright-item ul li span {
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
}

.copyright-item ul li a {
  color: #423A3D;
  display: block;
}

.copyright-item ul li a:hover {
  color: #EC1A3A;
}

.copyright-right {
  text-align: right;
}

/*-- End Footer --*/
</style>
