(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{407:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("e1109a74",content,!0,{sourceMap:!1})},408:function(t,e,n){"use strict";var r=n(407);n.n(r).a},409:function(t,e,n){(e=n(42)(!1)).push([t.i,".navbar-background[data-v-185f8077]{background-color:#423a3d}.full-width[data-v-185f8077]{width:100%}.sub-nav-item[data-v-185f8077]{width:20%;text-align:center}.link-item[data-v-185f8077]{color:#fff}.navbar-toggler-color[data-v-185f8077]{color:#fff!important}",""]),t.exports=e},410:function(t,e,n){"use strict";var r={name:"Navbar"},o=(n(408),n(19)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-background"},[t._m(0),t._v(" "),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarTogglerDemo01"}},[n("ul",{staticClass:"navbar-nav m-auto full-width"},[n("li",{staticClass:"nav-item sub-nav-item"},[n("nuxt-link",{staticClass:"link-item",attrs:{to:"/",href:"#"}},[t._v("Employer's Panel")])],1),t._v(" "),n("li",{staticClass:"nav-item sub-nav-item"},[n("nuxt-link",{staticClass:"link-item",attrs:{to:"/",href:"#"}},[t._v("CV Bank")])],1),t._v(" "),n("li",{staticClass:"nav-item sub-nav-item"},[n("nuxt-link",{staticClass:"link-item",attrs:{to:"/",href:"#"}},[t._v("Candidate Communication")])],1),t._v(" "),n("li",{staticClass:"nav-item sub-nav-item"},[n("nuxt-link",{staticClass:"link-item",attrs:{to:"/",href:"#"}},[t._v("Analytics")])],1),t._v(" "),n("li",{staticClass:"nav-item sub-nav-item"},[n("nuxt-link",{staticClass:"link-item link-item-last",attrs:{to:"/",href:"#"}},[t._v("Services for Employers")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler navbar-toggler-color",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("i",{staticClass:"fa fa-fw fa-bars text-white"}),this._v(" Select menu item\n\n  ")])}],!1,null,"185f8077",null);e.a=component.exports},411:function(t,e,n){"use strict";var r={name:"SubNavbar"},o=n(19),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-lg-12 text-right"},[n("nuxt-link",{staticClass:"tcb-animate-e tcb-default",attrs:{to:"/employer/account-verification"}},[n("i",{staticClass:"bx bx-home-circle"}),t._v(" Account Verification "),"employer-account-verification"==t.$nuxt.$route.name?n("i",{staticClass:"bx bx-check-circle"}):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"tcb-animate-e tcb-default",attrs:{to:"/employer/dashboard"}},[n("i",{staticClass:"bx bx-home-circle"}),t._v(" Dashboard "),"employer-dashboard"==t.$nuxt.$route.name?n("i",{staticClass:"bx bx-check-circle"}):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"tcb-animate-e tcb-success",attrs:{to:"/employer/job-posting-board"}},[n("i",{staticClass:"bx bxs-plus-circle"}),t._v(" Post a New Job "),"employer-job-posting-board"==t.$nuxt.$route.name?n("i",{staticClass:"bx bx-check-circle"}):t._e()]),t._v(" "),n("nuxt-link",{staticClass:"tcb-animate-e tcb-success",attrs:{to:"/employer/tutor-request"}},[n("i",{staticClass:"bx bxs-plus-circle"}),t._v(" Tutor Request "),"employer-tutor-request"==t.$nuxt.$route.name?n("i",{staticClass:"bx bx-check-circle"}):t._e()])],1)])}),[],!1,null,"8d7a90ee",null);e.a=component.exports},465:function(t,e,n){var content=n(544);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(43).default)("3fe7e954",content,!0,{sourceMap:!1})},543:function(t,e,n){"use strict";var r=n(465);n.n(r).a},544:function(t,e,n){(e=n(42)(!1)).push([t.i,".b-pagination[data-v-672274b6]{margin-top:5px!important}",""]),t.exports=e},591:function(t,e,n){"use strict";n.r(e);n(34);var r=n(410),o=n(411),l=n(11),_=n(44),c=n.n(_),v=n(26);l.default.component(v.HasError.name,v.HasError),l.default.component(v.AlertError.name,v.AlertError);var d=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3,timerProgressBar:!0,onOpen:function(t){t.addEventListener("mouseenter",c.a.stopTimer),t.addEventListener("mouseleave",c.a.resumeTimer)}}),m={middleware:"employerAuthenticated",name:"index",validate:function(t){var e=t.params;return/^\d+$/.test(e.tutor_request_id)},components:{employerNavbar:r.a,employerSubNavbar:o.a},data:function(){return{tutor_request_id:this.$route.params.tutor_request_id,perPage:10,currentPage:1,fields:["index","job_seeker","action"],post_job:"",applicant_lists:"",employee:"",address:"",personal_details:"",career_and_application_information:"",employment_histories:"",academic_summaries:"",training_summaries:"",professional_certification_summaries:"",specialization_skills:"",language_proficiencies:"",references:"",url:this.$axios.defaults.baseURL}},methods:{getPhoto:function(){return this.url+this.employee.image_url},fetchApplicantLists:function(){var t=this,e=t.tutor_request_id,n=window.$nuxt.$cookies.get("token");this.$axios.post("employer-tutor-request-applicant?token="+n,{tutor_request_id:e}).then((function(e){t.applicant_lists=e.data})).catch((function(t){d.fire({icon:"warning",title:"There was something wrong"}),422==t.response.status&&d.fire({icon:"warning",title:"Validation Error"}),401==t.response.status&&d.fire({icon:"warning",title:t.response.data.error}),403==t.response.status&&d.fire({icon:"warning",title:"Unauthorized access"})}))},fetchApplicantDetails:function(t){var e=this,n=(t=t,window.$nuxt.$cookies.get("token"));this.$axios.get("applicant-details/"+t+"?token="+n).then((function(t){e.employee=t.data,e.address=t.data.address,e.personal_details=t.data.personal_details,e.career_and_application_information=t.data.career_and_application_information,e.employment_histories=t.data.employment_histories,e.academic_summaries=t.data.academic_summaries,e.training_summaries=t.data.training_summaries,e.professional_certification_summaries=t.data.professional_certification_summaries,e.specialization_skills=t.data.specialization__skills,e.language_proficiencies=t.data.language_proficiencies,e.references=t.data.references})).catch((function(t){d.fire({icon:"warning",title:"There was something wrong"}),422==t.response.status&&d.fire({icon:"warning",title:"Validation Problem"}),401==t.response.status&&d.fire({icon:"warning",title:t.response.data.error}),403==t.response.status&&d.fire({icon:"warning",title:"Unauthorized access"})}))},openDetails:function(t,e,n){this.fetchApplicantDetails(t),$("#details").modal("show"),0==e&&(this.applyJobStatusChange(n),this.fetchApplicantLists())},applyJobStatusChange:function(t){var e=window.$nuxt.$cookies.get("token");t=t;this.$axios.post("employer/report/apply-job-status-change?token="+e,{job_type:"tutor_job",job_id:t}).then((function(t){console.log(t.data)})).catch((function(t){d.fire({icon:"warning",title:"There was something wrong"}),422==t.response.status&&d.fire({icon:"warning",title:"Validation Error"}),401==t.response.status&&d.fire({icon:"warning",title:"Token Not Found"})}))}},computed:{rows:function(){return this.applicant_lists.length}},created:function(){this.fetchApplicantLists()}},h=(n(543),n(19)),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-content"},[n("div",{staticClass:"container-fluid"},[n("employerNavbar"),t._v(" "),n("employerSubNavbar"),t._v(" "),n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col-lg-12"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-2 col-md-2 col-sm-12"},[n("select",{directives:[{name:"model",rawName:"v-model",value:t.perPage,expression:"perPage"}],staticClass:"form-control",on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.perPage=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"10"}},[t._v("10")]),t._v(" "),n("option",{attrs:{value:"20"}},[t._v("20")]),t._v(" "),n("option",{attrs:{value:"50"}},[t._v("50")]),t._v(" "),n("option",{attrs:{value:"100"}},[t._v("100")]),t._v(" "),n("option",{attrs:{value:"1000"}},[t._v("1000")])])]),t._v(" "),n("div",{staticClass:"col-lg-12 col-md-12 col-sm-12"})]),t._v(" "),n("b-table",{attrs:{responsive:"",id:"applicant_lists",striped:"",hover:"","per-page":t.perPage,"current-page":t.currentPage,items:t.applicant_lists,fields:t.fields},scopedSlots:t._u([{key:"cell(index)",fn:function(data){return[t._v("\n                "+t._s(data.index+1)+"\n              ")]}},{key:"cell(job_seeker)",fn:function(data){return[t._v("\n\n                "+t._s(data.item.employee.name)+" ("+t._s(data.item.employee.email)+")\n\n              ")]}},{key:"cell(action)",fn:function(data){return[n("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:function(e){return t.openDetails(data.item.employee.id,data.item.status,data.item.id)}}},[n("i",{staticClass:"bx bx-expand"})])]}}])}),t._v(" "),n("b-pagination",{attrs:{"total-rows":t.rows,"per-page":t.perPage,"aria-controls":"applicant_lists"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])],1),t._v(" "),n("div",{staticClass:"modal fade",attrs:{id:"details",tabindex:"-1",role:"dialog","aria-labelledby":"detailsLabel","aria-hidden":"true"}},[n("div",{staticClass:"modal-dialog modal-xl"},[n("div",{staticClass:"modal-content"},[t._m(0),t._v(" "),n("div",{staticClass:"modal-body"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-8 col-md-8 col-sm-12"},[t.employee.personal_details?n("h4",[t._v(t._s(t.employee.personal_details.first_name)+" "+t._s(t.employee.personal_details.last_name))]):t._e(),t._v(" "),t.address?n("h6",[t._v("Address:\n\n                "),0==t.address.present_location?n("span",[t.address.present_union?n("span",[t._v(t._s(t.address.present_union.name)+",")]):t._e(),t._v("\n                    "+t._s(t.address.present_thana.name)+",\n                    "+t._s(t.address.present_district.name)+"\n                  ")]):t._e(),t._v(" "),1==t.address.present_location?n("span",[t._v(t._s(t.address.present_country.countries_name))]):t._e()]):t._e(),t._v(" "),t.personal_details.mobile_no_1?n("h6",[t._v("Mobile No 1: "+t._s(t.personal_details.mobile_no_1))]):t._e(),t._v(" "),t.personal_details.mobile_no_2?n("h6",[t._v("Mobile No 2: "+t._s(t.personal_details.mobile_no_2))]):t._e(),t._v(" "),t.personal_details.mobile_no_3?n("h6",[t._v("Mobile No 3: "+t._s(t.personal_details.mobile_no_3))]):t._e(),t._v(" "),t.personal_details?n("h6",[t._v("Email: "+t._s(t.personal_details.email)+" "),t.personal_details.alternate_email?n("span",[t._v(","+t._s(t.personal_details.alternate_email))]):t._e()]):t._e()]),t._v(" "),t.employee.image_url?n("div",{staticClass:"col-lg-4 col-md-4 col-sm-12 text-right"},[n("img",{attrs:{src:t.getPhoto(),alt:t.employee.personal_details.first_name,width:"160px"}})]):t._e(),t._v(" "),t.employee.cv_url?n("div",{staticClass:"col-lg-12 col-md-12 col-sm-12 my-2 text-right"},[n("a",{staticClass:"btn btn-info btn-sm my-2",attrs:{href:""+t.url+t.employee.cv_url,target:"_blank"}},[n("i",{staticClass:"bx bx-show-alt"}),t._v(" Uploded Cv")])]):t._e(),t._v(" "),n("div",{staticClass:"col-12 border"}),t._v(" "),t.career_and_application_information?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Career Objective:")]),t._v(" "),n("p",[t._v(t._s(t.career_and_application_information.objective))])]):t._e(),t._v(" "),t.employment_histories.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Employment History:")]),t._v(" "),t._l(t.employment_histories,(function(e,r){return n("div",{staticClass:"card-body"},[n("h5",[t._v(t._s(r+1)+". "+t._s(e.designation)+" ("+t._s(e.from_date)+" - "),"1"==e.currently_working?n("span",[t._v("Continuing")]):n("span",[t._v(t._s(e.to_date))]),t._v(")")]),t._v(" "),n("h6",[t._v(t._s(e.company_name))]),t._v(" "),n("h6",[t._v("Company Location : "+t._s(e.company_location))]),t._v(" "),n("h6",[t._v("Department : "+t._s(e.department))])])}))],2):t._e(),t._v(" "),t.academic_summaries.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Academic Qualification: :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(1),t._v(" "),n("tbody",t._l(t.academic_summaries,(function(e){return n("tr",[n("td",[t._v(t._s(e.level_of_education.name))]),t._v(" "),n("td",[t._v(t._s(e.concentration))]),t._v(" "),n("td",[t._v(t._s(e.institute_name))]),t._v(" "),n("td",[t._v(t._s(e.result))]),t._v(" "),n("td",[t._v(t._s(e.passing_year.name))]),t._v(" "),n("td",[t._v(t._s(e.duration))])])})),0)])])]):t._e(),t._v(" "),t.training_summaries.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Training Summary :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(2),t._v(" "),n("tbody",t._l(t.training_summaries,(function(e){return n("tr",[n("td",[t._v(t._s(e.training_title))]),t._v(" "),n("td",[t._v(t._s(e.topics_covered))]),t._v(" "),n("td",[t._v(t._s(e.institute))]),t._v(" "),n("td",[t._v(t._s(e.country.countries_name))]),t._v(" "),n("td",[t._v(t._s(e.location))]),t._v(" "),n("td",[t._v(t._s(e.year.name))]),t._v(" "),n("td",[t._v(t._s(e.duration))])])})),0)])])]):t._e(),t._v(" "),t.training_summaries.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Professional Qualification :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(3),t._v(" "),n("tbody",t._l(t.professional_certification_summaries,(function(e){return n("tr",[n("td",[t._v(t._s(e.certification))]),t._v(" "),n("td",[t._v(t._s(e.institute))]),t._v(" "),n("td",[t._v(t._s(e.location))]),t._v(" "),n("td",[t._v(t._s(e.from_duration))]),t._v(" "),n("td",[t._v(t._s(e.to_duration))])])})),0)])])]):t._e(),t._v(" "),t.career_and_application_information?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Career and Application Information :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[n("tr",[n("th",{attrs:{width:"30%"}},[t._v("Looking For")]),t._v(" "),n("td",[t._v(t._s(t.career_and_application_information.looking_for_job_level))])]),t._v(" "),n("tr",[n("th",[t._v("Available For")]),t._v(" "),n("td",[t._v(t._s(t.career_and_application_information.available_for_job_nature))])]),t._v(" "),n("tr",[n("th",[t._v("Present Salary")]),t._v(" "),n("td",[t._v(t._s(t.career_and_application_information.present_salary))])]),t._v(" "),n("tr",[n("th",[t._v("Expected Salary")]),t._v(" "),n("td",[t._v(t._s(t.career_and_application_information.expected_salary))])])])])]):t._e(),t._v(" "),t.specialization_skills.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Specialization :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(4),t._v(" "),n("tbody",t._l(t.specialization_skills,(function(e){return n("tr",[n("td",[n("ul",[n("li",[t._v(t._s(e.skill_name))])])])])})),0)])])]):t._e(),t._v(" "),t.language_proficiencies.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Language Proficiency :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[t._m(5),t._v(" "),n("tbody",t._l(t.language_proficiencies,(function(e){return n("tr",[n("td",[t._v(t._s(e.language))]),t._v(" "),n("td",[t._v(t._s(e.reading))]),t._v(" "),n("td",[t._v(t._s(e.writing))]),t._v(" "),n("td",[t._v(t._s(e.speaking))])])})),0)])])]):t._e(),t._v(" "),t.personal_details?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Personal Details :")]),t._v(" "),n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[n("tr",[n("th",{attrs:{width:"30%"}},[t._v("Father's Name")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.father_name))])]),t._v(" "),n("tr",[n("th",[t._v("Mother's Name")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.mother_name))])]),t._v(" "),n("tr",[n("th",[t._v("Date of Birth")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.date_of_birth))])]),t._v(" "),n("tr",[n("th",[t._v("Gender")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.gender))])]),t._v(" "),n("tr",[n("th",[t._v("Marital Status")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.marital_status))])]),t._v(" "),n("tr",[n("th",[t._v("Nationality")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.nationality))])]),t._v(" "),n("tr",[n("th",[t._v("National Id No.")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.national_id_no))])]),t._v(" "),n("tr",[n("th",[t._v("Religion")]),t._v(" "),n("td",[t._v(t._s(t.personal_details.religion))])]),t._v(" "),n("tr",[n("th",[t._v("Current Location")]),t._v(" "),t.address?n("td",[0==t.address.present_location?n("span",[t.address.present_union?n("span",[t._v(t._s(t.address.present_union.name)+",")]):t._e(),t._v("\n                          "+t._s(t.address.present_thana.name)+",\n                          "+t._s(t.address.present_district.name)+"\n                        ")]):t._e(),t._v(" "),1==t.address.present_location?n("span",[t._v(t._s(t.address.present_country.countries_name))]):t._e()]):n("td")])])])]):t._e(),t._v(" "),t.references.length>0?n("div",{staticClass:"col-12"},[n("h4",{staticClass:"bg-soft-light"},[t._v("Reference (s) :")]),t._v(" "),t._l(t.references,(function(e,r){return n("div",{staticClass:"table-responsive"},[n("table",{staticClass:"table table-bordered"},[n("tr",[n("th",{attrs:{width:"30%"}},[t._v("Name")]),t._v(" "),n("td",[t._v(t._s(e.name))])]),t._v(" "),n("tr",[n("th",[t._v("Organization")]),t._v(" "),n("td",[t._v(t._s(e.organization))])]),t._v(" "),n("tr",[n("th",[t._v("Designation")]),t._v(" "),n("td",[t._v(t._s(e.designation))])]),t._v(" "),n("tr",[n("th",[t._v("Mobile")]),t._v(" "),n("td",[t._v(t._s(e.mobile))])]),t._v(" "),n("tr",[n("th",[t._v("E-Mail")]),t._v(" "),n("td",[t._v(t._s(e.email))])]),t._v(" "),n("tr",[n("th",[t._v("Relation")]),t._v(" "),n("td",[t._v(t._s(e.relation))])])])])}))],2):t._e()])]),t._v(" "),t._m(6)])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title"},[this._v("Applicant Details")]),this._v(" "),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[this._v("×")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Exam Title")]),t._v(" "),n("th",[t._v("Concentration/Major")]),t._v(" "),n("th",[t._v("Institute")]),t._v(" "),n("th",[t._v("Result")]),t._v(" "),n("th",[t._v("Pas.Year")]),t._v(" "),n("th",[t._v("Duration")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",[t._v("Training Title")]),t._v(" "),n("th",[t._v("Topic")]),t._v(" "),n("th",[t._v("Institute")]),t._v(" "),n("th",[t._v("Country")]),t._v(" "),n("th",[t._v("Location")]),t._v(" "),n("th",[t._v("Year")]),t._v(" "),n("th",[t._v("Duration\n                    ")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td",[t._v("Certification")]),t._v(" "),n("td",[t._v("Institute")]),t._v(" "),n("td",[t._v("Location")]),t._v(" "),n("td",[t._v("From")]),t._v(" "),n("td",[t._v("To")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Fields of Specialization\n                    ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Language")]),this._v(" "),e("th",[this._v("Reading")]),this._v(" "),e("th",[this._v("Writing")]),this._v(" "),e("th",[this._v("Speaking")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-danger",attrs:{type:"button","data-dismiss":"modal"}},[this._v("Close")])])}],!1,null,"672274b6",null);e.default=component.exports}}]);