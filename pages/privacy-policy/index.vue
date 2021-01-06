<template>
  <div class="page-content">

    <div class="container-fluid">

      <div class="row">
        <ads/>
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body contact">

              <h3>Privacy Policy</h3>

              <p>

                <nuxt-link to="/">Hotjobs.com.bd</nuxt-link>
                collects few information about visitors. This information
                includes your IP address, referring addresses, browser information, domain
                names and access Date & times. We use this information for operating our
                services, security management, maintaining the quality of the service, and
                providing reports for relevant business purposes.

              </p>

              <p>
                <span>Confidentiality and Security</span> We regard your CV as a very personal document and we
                wish you to have full control over who can view it and whether or not.
              </p>

              <p>
                The level of control is provided to you by your choice of whether to make your CV
                searchable by our Clients or not. Making your CV searchable considerably increases your
                exposure to potential employers.
              </p>

              <ul>
                <li>
                  When you apply to jobs through our services, your resume in your OWNJOBS account
                  and any other information that you disclosed during your job applications will be made
                  available to the companies you are applying to.
                </li>

                <li>
                  You may block any employer not to access your CV from our database.
                </li>

                <li>
                  You may remove your CV from our searchable database at any time from "Delete
                  Resume" option at OWNJOBS
                </li>

                <li>
                  We limit access to personal information about you to employees who we believe
                  reasonably need to come into contact with that information to provide products or services
                  to you or in order to do their jobs. If any recruiter is found to be breaching our terms and
                  conditions, then we will immediately terminate their use of our services.
                </li>
              </ul>

              <p>
                <span>Email Resume</span> Our Email Resume service provides facility for OWNJOBS account holder
                to email his/her detail resume to employer with message.
              </p>

              <p>
                <span>E-Mail this job to a friend</span> Our Mail-a-Friend service makes it easy for our users to
                recommend jobs to friends or relatives. Simply complete the Mail-a-Friend form and we will
                send an email to your specified recipient(s) containing detail job description to the selected
                job. We will not use your recipient's details for any other purpose than the fulfillment of this
                service.
              </p>

              <p>
                <span>Resume References</span> In reference section to your resume, Hotjobs.com.bd will ask you
                for their names, telephone numbers, emails and position titles. This information will be
                enclosed as part of your job application and employers may contact them to get references
                for your applications.
              </p>

              <p>
                <span>Job Mail Service</span> The Job Mail Service matches job seekers requirements for
                employment with the vacancies advertised on any one of our websites. For job seekers who
                register to this service you receive an email listing those jobs that we believe you should be
                interested in. Your requirements are defined by your preferred criteria which can be used to
                specific job titles, skills, organization types or other definition of the job you want. You can
                change these criteria at any time.
              </p>

              <p>
                <span>E-Mail Notification Services</span> When you subscribe to a Hotjobs.com.bd E-mail
                Notification, We use your email address to send you the notification(s) you have requested
                like Hotjobs.com.bd Newsletter, Hotjobs.com.bd workshop/Training, Third Party offers and
                Promotions. You may subscribe and unsubscribe services by following the prominent
                instructions mentioned in each of the notification.
              </p>

              <p>
                <span>Third-Party Tracking Technologies</span>
                <nuxt-link to="/">Hotjobs.com.bd</nuxt-link>
                uses the Google Analytics
                tracking technology to track visits to our website. It allows us to analyze the usage of our
                website and is merely for our internal use.
              </p>

              <p>
                <span>Cookies and Other Tracking Technologies</span> Some of our Web pages utilize "cookies"
                and other tracking technologies. A "cookie" is a small text file that may be used, for
                example, to collect information about Web website activity. Some cookies and other
                technologies may serve to recall Personal Information previously indicated by a Web user.
                Most browsers allow you to control cookies, including whether or not to accept them and
                how to remove them.
              </p>

              <p>
                You may set most browsers to notify you if you receive a cookie, or you may choose to
                block cookies with your browser, but please note that if you choose to erase or block your
                cookies, you will need to re-enter your original user ID and password to gain access to
                certain parts of the Web website. Our use of cookies and other tracking technologies allows
                us to improve our website and your web experience. Your IP address might be used to track
                your location to provide you with various location based services and for our data analysis
                purposes. We may also analyze information that does not contain personal information for
                trends and statistics.
              </p>

              <p>
                <span>Security</span> We use lots of tools (encryption, passwords, and physical security) to protect
                your
                personal information against unauthorized access and disclosure.
              </p>

              <p>
                <span>Opting out of E-Mail Notification Services</span> We allow users to opt-out of having Email
                Notification Alerts sent to them at any time.
              </p>

              <p>
                <span>Revision and updates</span>
                <nuxt-link to="/">Hotjobs.com.bd</nuxt-link>
                regularly revises and updates its privacy policy
                and publishes changes to the policy at our website.
              </p>

            </div>
          </div>
        </div>
        <ads/>
      </div>

    </div>

  </div>
</template>

<script>
import ads from "~/components/Ads";

export default {
  name: "index",
  components: {
    ads
  },
}
</script>

<style scoped>
h3 {
  color: #ec1a3a;
}

span {
  color: #423a3d;
  font-weight: 500;
}

</style>
