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
          <form class="newsletter-form" data-toggle="validator">
            <input type="email" class="form-control" placeholder="Enter Your Email" name="EMAIL"
                   required autocomplete="off">

            <button class="btn subscribe-btn" type="button">
              Subscribe
            </button>

            <div id="validator-newsletter" class="form-result"></div>
          </form>
        </div>
      </div>
      <!-- End Subscribe Form -->

      <div class="row">
        <div class="col-sm-6 col-lg-3">
          <div class="footer-item">
            <div class="footer-logo">
              <a href="#">
                <img src="../static/images/logo.png" alt="HotJobs">
              </a>

              <!--<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. </p>-->


              <ul>
                <li>
                  <a href="https://www.facebook.com/hotjobs.com.bd" target="_blank" title="Facebook">
                    <i class="bx bxl-facebook-circle"></i> Facebook
                  </a>
                </li>

                <li>
                  <a href="https://www.linkedin.com/in/hotjobs-com-bd-1466321a4/" target="_blank" title="Linkedin">
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
                  <a href="javaScript:void(0)">
                    <i class="icofont-simple-right"></i>
                    Development
                  </a>
                </li>
                <li>
                  <a href="javaScript:void(0)">
                    <i class="icofont-simple-right"></i>
                    Business
                  </a>
                </li>
                <li>
                  <a href="http://it.diu.ac" target="_blank">
                    <i class="icofont-simple-right"></i>
                    Tech & IT
                  </a>
                </li>
                <li>
                  <a href="javaScript:void(0)">
                    <i class="icofont-simple-right"></i>
                    Finance
                  </a>
                </li>
                <li>
                  <a href="javaScript:void(0)">
                    <i class="icofont-simple-right"></i>
                    Networking
                  </a>
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
                    <i class="icofont-simple-right"></i>
                    Home
                  </nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">
                    <i class="icofont-simple-right"></i>
                    Contact Us
                  </nuxt-link>
                </li>
                <li>
                  <a href="https://hotjobs.com.bd/blog/" target="_blank">
                    <i class="icofont-simple-right"></i>
                    Blogs
                  </a>
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
                <li>Al-Hera Tower, Ka-86/1/A
                  Kuratoli Bazar, Dhaka-1229
                  Bangladesh.
                </li>
                <li>
                  <a href="tel:+8801726893448">
                    +88 017 2689 3448
                  </a>

                  <a href="javaScript:void(0)">
                    +880255040889 (Extension: 221)
                  </a>
                </li>
                <li>
                  <a href="mailto:info@hotjobs.com.bd">
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
          <div class="col-lg-6">
            <div class="copyright-item">
              <p>
                Copyright @{{ date }} HotJobs. Technical Team: <a href="http://it.diu.ac" target="_blank">Hotjobs</a>
              </p>
            </div>
          </div>
          <div class="col-lg-6">
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
          </div>
        </div>
      </div>

    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
  export default {
    name: "Footer",
    data() {
      return {
        date: this.$moment().format('Y')
      }
    },

    methods:{

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
    background-position: center center;
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
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #6bbf75;
    margin-top: 70px;
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
