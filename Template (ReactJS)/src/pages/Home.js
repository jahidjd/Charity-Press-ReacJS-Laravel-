import { useEffect, useState } from "react";

import Footer from "./Footer";
import Menu from "./Menu";
import Preloader from "./Preloadper";
import Volunteer from "./Volunteer";

export default function Home() {
  const [general, setGeneral] = useState([])
  const [isBusy, setBusy] = useState(true)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/generalList')
      .then(response => response.json())
      .then(data => setGeneral(data))
    //  .then(() => setBusy(false))
  }, [])
  const [awarness, setAwarness] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/awarnessArea')
      .then(response => response.json())
      .then(data => setAwarness(data.data[0]))
    // .then(()=>setBusy(false))
  }, [])
  const [causesCategory, setCausesCategory] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/causesCategory')
      .then(response => response.json())
      .then(data => setCausesCategory(data.data))
    // .then(() => setBusy(false))
  }, [])
  const [causes, setCauses] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/causesData')
      .then(response => response.json())
      .then(data => setCauses(data.data))
      .then(() => setBusy(false))
  }, [])
  if (isBusy) {
    return <Preloader />
  } else {
    return (
      <>
        <Menu />

        {/* <section className="xs-welcome-slider">
        <div className="xs-banner-slider owl-carousel">
          <div className="xs-welcome-content" style={{backgroundImage: "url(assets/images/slider/slider_1.jpg)"}}>
            <div className="container">
              <div className="xs-welcome-wraper color-white">
                <h2>Hunger is stalking the globe</h2>
                <p>Hundreds of thousands of children experiencing or witnessing assault <br/> and other gender-based violence.</p>
                <div className="xs-btn-wraper">
                  <a href="#" className="btn btn-outline-primary">
                    join us now
                  </a>
                  <a href="#" className="btn btn-primary">
                    <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                  </a>
                </div>
              </div>
            </div>
            <div className="xs-black-overlay"></div>
          </div>
          <div className="xs-welcome-content" style={{backgroundImage: "url(assets/images/slider/slider_2.jpg)"}}>
            <div className="container">
              <div className="xs-welcome-wraper color-white">
                <h2>Hunger is stalking the globe</h2>
                <p>Hundreds of thousands of children experiencing or witnessing assault <br/> and other gender-based violence.</p>
                <div className="xs-btn-wraper">
                  <a href="#" className="btn btn-outline-primary">
                    join us now
                  </a>
                  <a href="#" className="btn btn-primary">
                    <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                  </a>
                </div>
              </div>
            </div>
            <div className="xs-black-overlay"></div>
          </div>
          <div className="xs-welcome-content" style={{backgroundImage: "url(assets/images/slider/slider_3.jpg)"}}>
            <div className="container">
              <div className="xs-welcome-wraper color-white">
                <h2>Hunger is stalking the globe</h2>
                <p>Hundreds of thousands of children experiencing or witnessing assault <br/> and other gender-based violence.</p>
                <div className="xs-btn-wraper">
                  <a href="#" className="btn btn-outline-primary">
                    join us now
                  </a>
                  <a href="#" className="btn btn-primary">
                    <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                  </a>
                </div>
              </div>
            </div>
            <div className="xs-black-overlay"></div>
          </div>
        </div>
      </section> */}
        <section className="xs-banner-inner-section parallax-window" style={{ backgroundImage: "url(assets/images/slider/slider_3.jpg)" }}>
          <div className="xs-black-overlay"></div>
          <div className="container">
            <div className="color-white xs-inner-banner-content">
              <h2>Home</h2>
              <p>Give a helping hand for poor people</p>
              <ul className="xs-breadcumb">
                <li className="badge badge-pill badge-primary"><a href="index.html" className="color-white"> Home </a> </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="xs-what-we-do-image">
          <div class="container">
            <div class="row">
              <div class="col-md-4">
                <div class="xs-service-promo box-image" style={{ backgroundImage: "url(assets/images/category/category_1.jpg)" }}>
                  <span class="icon-groceries"></span>
                  <h5>Food Donate</h5>
                  <p>In Balukhali Camp in Cox’s Bazar, Bangladesh, women lack privacy, safe places to sleep, sufficient sanitation facilities and mental health support.</p>
                  <div class="xs-black-overlay bg-aqua"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="xs-service-promo box-image" style={{ backgroundImage: "url(assets/images/category/category_2.jpg)" }}>
                  <span class="icon-care"></span>
                  <h5>Medical Care</h5>
                  <p>In Balukhali Camp in Cox’s Bazar, Bangladesh, women lack privacy, safe places to sleep, sufficient sanitation facilities and mental health support.</p>
                  <div class="xs-black-overlay bg-purple"></div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="xs-service-promo box-image" style={{ backgroundImage: "url(assets/images/category/category_3.jpg)" }}>
                  <span class="icon-open-book"></span>
                  <h5>Child Education</h5>
                  <p>In Balukhali Camp in Cox’s Bazar, Bangladesh, women lack privacy, safe places to sleep, sufficient sanitation facilities and mental health support.</p>
                  <div class="xs-black-overlay bg-blue"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="waypoint-tigger xs-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="xs-archive-content">
                  <div className="xs-heading">
                    <h2 className="xs-line-title">Our Missions</h2>
                    <h3 className="xs-title big" data-title="Archived">Archived</h3>
                  </div>
                  <p>{general.data.home_mission_text}</p>
                  <h5>Our strategic priorities up to 2018 are:</h5>
                  <ul className="xs-unorder-list arrow">
                    {/* <li>Protecting charities from abuse or mismanagement</li>
                    <li>Enabling trustees to run their charities effectively</li>
                    <li>Encouraging greater transparency and accountability</li> */}
                    {general.data.home_mission_stratigy}
                  </ul>
                  <ul className="xs-funfact-list">
                    <li>
                      <p>
                        <span className="number-percentage-count number-percentage" data-value="132" data-animation-duration="3500">{general.data.school}</span><sup> + </sup>
                      </p>
                      <span>Primary Schools</span>
                    </li>
                    <li>
                      <p>
                        <span className="number-percentage-count number-percentage" data-value="19" data-animation-duration="3500">{general.data.hospital}</span><sup> + </sup>
                      </p>
                      <span>Hospitals</span>
                    </li>
                    <li>
                      <p>
                        <span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">{general.data.volunteers}</span><sup> + </sup>
                      </p>
                      <span>Volunteers</span>
                    </li>
                    <li>
                      <p>
                        <span className="number-percentage-count number-percentage" data-value="27" data-animation-duration="3500">0</span><sup> + </sup>
                      </p>
                      <span>Winning Awards</span>
                    </li>
                    <div className="clearfix"></div>
                  </ul>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 row xs-archive-image">
                <div className="col-md-12 xs-mb-30">
                  <img src={"http://127.0.0.1:8000/photo/archivePhoto/" + general.data.home_mission_photo_one} alt="" className="rounded" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <img src={"http://127.0.0.1:8000/photo/archivePhoto/" + general.data.home_mission_photo_two} alt="" className="rounded" />
                </div>
                <div className="col-md-6 col-sm-6">
                  <img src={"http://127.0.0.1:8000/photo/archivePhoto/" + general.data.home_mission_photo_three} alt="" className="rounded" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray waypoint-tigger xs-section-padding">
          <div className="container">
            <div className="xs-heading row xs-mb-60">
              <div className="col-md-9 col-xl-9">
                <h2 className="xs-title">Popular Causes</h2>
                <span className="xs-separetor dashed"></span>
                <p>FundPress has built a platform focused on aiding entrepreneurs, startups, and <br /> companies raise capital from anyone.</p>
              </div>
              <div className="col-xl-3 col-md-3 xs-btn-wraper">
                <a href="#" className="btn btn-primary">all Causes</a>
              </div>
            </div>
            <div className="row">
              {
                causes.map((d, i) => {
                  if (i < 6) {
                    return (
                      <div className="col-lg-4 col-md-6" key={i}>
                        <div className="xs-popular-item xs-box-shadow">
                          <div className="xs-item-header">
                            <img src={`http://127.0.0.1:8000/photo/causes/${d.photo}`} alt="" />
                            <div className="xs-skill-bar">
                              <div className="xs-skill-track">
                                <p><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">68</span>%</p>
                              </div>
                            </div>
                          </div>
                          <div className="xs-item-content">
                            <ul className="xs-simple-tag xs-mb-20">
                              <li>{
                              
                              causesCategory.map((k,l)=>{
                                if(k.id == d.causes_category_id){
                                  <a href="#" key={i}> { k.name} </a>
                                }
                              })
                              }</li>
                            </ul>
                            <a href="#" className="xs-post-title xs-mb-30">{d.title}</a>
                            <ul className="xs-list-with-content">
                              <li>{d.total_amount_need}<span>Pledged</span></li>
                              <li><span className="number-percentage-count number-percentage" data-value="90" data-animation-duration="3500">68</span>% <span>Funded</span></li>
                              <li>3<span>Days to go</span></li>
                            </ul>
                            <span className="xs-separetor"></span>
                            <div className="row xs-margin-0">
                              <div className="xs-round-avatar">
                                <img src="assets/images/avatar/avatar_1.jpg" alt="" />
                              </div>
                              <div className="xs-avatar-title">
                                <a href="#"><span>By</span>{d.posted_by}</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  }
                })
              }


            </div>
          </div>
        </section>

        <section className="xs-section-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="xs-text-content xs-pr-20">
                  <h2 className="color-navy-blue">{awarness.title}</h2>
                  <p>{awarness.description}</p>
                  <blockquote>
                    {awarness.quotation}
                  </blockquote>
                  <a href="#" className="btn btn-primary">
                    <span className="badge"><i className="fa fa-heart"></i></span> Donate Now
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="xs-feature-image">
                  <img src={`http://127.0.0.1:8000/photo/awarnessArea/${awarness.photo_one}`} alt="" />
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="xs-feature-image">
                  <img src={`http://127.0.0.1:8000/photo/awarnessArea/${awarness.photo_two}`} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-blue">
          <div className="container-fulid">
            <div className="xs-feature-content">
              <h2 className="color-white">CharityPress are <span> charity </span> activities are taken place around the world, lets contribute.</h2>
            </div>
          </div>
        </section>

        <section className="xs-feature-box-fulid">
          <div className="container-fulid">
            <div className="row xs-feature-box-wraper">
              <div className="col-md-12 col-lg-4 xs-feature-box">
                <div className="xs-feature-box-content">
                  <h3 className="color-white">But we’re not done yet. We need your.</h3>
                  <a href="#" className="btn btn-secondary btn-color-alt">
                    get involved
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 xs-feature-box highlight">
                <div className="xs-feature-box-content">
                  <h3 className="color-white">Sponsor an entire trending project</h3>
                  <p>For $10,000 or more you can fully fund a water project for a Community. 100% funds clean water projects. 663 million people drink.</p>
                  <a href="#" className="btn btn-secondary btn-color-alt">
                    Become an Sponsor
                  </a>
                </div>
              </div>
              <div className="col-md-12 col-lg-4 xs-feature-box">
                <div className="xs-feature-box-content">
                  <h3 className="color-white">Connect with us on social media</h3>
                  <ul className="xs-social-list">
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                    <li><a href="#"><i className="fa fa-google-plus"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-section-padding">
          <div className="container">
            <div className="xs-heading xs-mb-70 text-center">
              <h2 className="xs-mb-0 xs-title">We’ve funded <span>120,00 charity projects</span> for <br /> 20M people around the world.</h2>
            </div>
            <div className="row">
              {
                causesCategory.map((d, i) => {
                  if (i < 4) {
                    return (
                      <div className="col-md-6 col-lg-3" key={i}>
                        <div className="xs-service-promo">
                          <span className={d.icon}></span>
                          <h5>{d.title}</h5>
                          <p>{d.description}</p>
                        </div>
                      </div>
                    )
                  }
                })
              }


            </div>
          </div>
        </section>

        <Volunteer />

        <section className="xs-section-padding">
          <div className="container">
            <div className="xs-heading row xs-mb-60">
              <div className="col-md-9 col-xl-9">
                <h2 className="xs-title">Our Events</h2>
                <span className="xs-separetor dashed"></span>
                <p>FundPress has built a platform focused on aiding entrepreneurs, startups, and <br /> companies raise capital from anyone.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 row xs-single-event">
                <div className="col-md-5">
                  <div className="xs-event-image">
                    <img src="assets/images/event/event_1.jpg" alt="" />
                    <div className="xs-entry-date">
                      <span className="entry-date-day">27</span>
                      <span className="entry-date-month">dec</span>
                    </div>
                    <div className="xs-black-overlay"></div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="xs-event-content">
                    <a href="#">Raspberry velbet</a>
                    <p>In a time of overwhelming emotions, sadness, and pain, obligations.</p>
                    <div className="xs-countdown-timer" data-countdown="2020/01/24"></div>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 row xs-single-event">
                <div className="col-md-5">
                  <div className="xs-event-image">
                    <img src="assets/images/event/event_2.jpg" alt="" />
                    <div className="xs-entry-date">
                      <span className="entry-date-day">15</span>
                      <span className="entry-date-month">aug</span>
                    </div>
                    <div className="xs-black-overlay"></div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="xs-event-content">
                    <a href="#">Arsenal, the intelligent.</a>
                    <p>In a time of overwhelming emotions, sadness, and pain, obligations.</p>
                    <div className="xs-countdown-timer" data-countdown="2020/08/24"></div>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 row xs-single-event">
                <div className="col-md-5">
                  <div className="xs-event-image">
                    <img src="assets/images/event/event_3.jpg" alt="" />
                    <div className="xs-entry-date">
                      <span className="entry-date-day">24</span>
                      <span className="entry-date-month">jan</span>
                    </div>
                    <div className="xs-black-overlay"></div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="xs-event-content">
                    <a href="#">Waterproof drone that</a>
                    <p>In a time of overwhelming emotions, sadness, and pain, obligations.</p>
                    <div className="xs-countdown-timer" data-countdown="2019/05/24"></div>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 row xs-single-event">
                <div className="col-md-5">
                  <div className="xs-event-image">
                    <img src="assets/images/event/event_4.jpg" alt="" />
                    <div className="xs-entry-date">
                      <span className="entry-date-day">23</span>
                      <span className="entry-date-month">jun</span>
                    </div>
                    <div className="xs-black-overlay"></div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="xs-event-content">
                    <a href="#">Braille Literacy Tool for.</a>
                    <p>In a time of overwhelming emotions, sadness, and pain, obligations.</p>
                    <div className="xs-countdown-timer" data-countdown="2020/02/24"></div>
                    <a href="#" className="btn btn-primary">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray xs-partner-section" style={{ backgroundImage: "url('assets/images/map.png')" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="xs-partner-content">
                  <div className="xs-heading xs-mb-40">
                    <h2 className="xs-mb-0 xs-title">Trusted by the biggest <span>brand.</span></h2>
                  </div>
                  <p>In-kind donations from our donors and partners allow charity: water to pass 100% of public donations straight to water projects. We are deeply grateful for those who have surprised us with their generosity. A big thanks to the following companies and people who have helped make charity: water’s work possible.</p>
                  <a href="#" className="btn btn-primary">
                    join us now
                  </a>
                </div>
              </div>
              <div className="col-lg-7">
                <ul className="fundpress-partners">
                  <li><a href="#"><img src="assets/images/partner/client_1.png" alt="" /></a></li>
                  <li><a href="#"><img src="assets/images/partner/client_2.png" alt="" /></a></li>
                  <li><a href="#"><img src="assets/images/partner/client_3.png" alt="" /></a></li>
                  <li><a href="#"><img src="assets/images/partner/client_4.png" alt="" /></a></li>
                  <li><a href="#"><img src="assets/images/partner/client_5.png" alt="" /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="xs-section-padding">
          <div className="container">
            <div className="xs-heading row xs-mb-60">
              <div className="col-md-9 col-xl-9">
                <h2 className="xs-title">From the Journal</h2>
                <span className="xs-separetor dashed"></span>
                <p>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
              </div>
              <div className="col-xl-3 col-md-3 xs-btn-wraper">
                <a href="#" className="btn btn-primary">all Causes</a>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-6">
                <div className="xs-box-shadow xs-single-journal">
                  <div className="entry-thumbnail ">
                    <img src="assets/images/blog/blog_1.jpg" alt="" />
                    <div className="post-author">
                      <span className="xs-round-avatar">
                        <img className="img-responsive" src="assets/images/avatar/avatar_1.jpg" alt="" />
                      </span>
                      <span className="author-name">
                        <a href="#">By Simona</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry-header">
                    <div className="entry-meta">
                      <span className="date">
                        <a href="#" rel="bookmark" className="entry-date">
                          27th August 2017
                        </a>
                      </span>
                    </div>
                    <h4 className="entry-title">
                      <a href="#">Brilliant After All, A New Album by Rebecca: Help poor people</a>
                    </h4>
                  </div>
                  <span className="xs-separetor"></span>
                  <div className="post-meta">
                    <span className="comments-link">
                      <i className="fa fa-comments-o"></i>
                      <a href="#">300 Comments</a>
                    </span>
                    <span className="view-link">
                      <i className="fa fa-eye"></i>
                      <a href="#">1000 Views</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xs-box-shadow xs-single-journal">
                  <div className="entry-thumbnail ">
                    <img src="assets/images/blog/blog_2.jpg" alt="" />
                    <div className="post-author">
                      <span className="xs-round-avatar">
                        <img className="img-responsive" src="assets/images/avatar/avatar_2.jpg" alt="" />
                      </span>
                      <span className="author-name">
                        <a href="#">By Julian</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry-header">
                    <div className="entry-meta">
                      <span className="date">
                        <a href="#" rel="bookmark" className="entry-date">
                          02 May 2017
                        </a>
                      </span>
                    </div>
                    <h4 className="entry-title">
                      <a href="#">South african pre primary school build for children</a>
                    </h4>
                  </div>
                  <span className="xs-separetor"></span>
                  <div className="post-meta">
                    <span className="comments-link">
                      <i className="fa fa-comments-o"></i>
                      <a href="#">300 Comments</a>
                    </span>
                    <span className="view-link">
                      <i className="fa fa-eye"></i>
                      <a href="#">1000 Views</a>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="xs-box-shadow xs-single-journal">
                  <div className="entry-thumbnail ">
                    <img src="assets/images/blog/blog_3.jpg" alt="" />
                    <div className="post-author">
                      <span className="xs-round-avatar">
                        <img className="img-responsive" src="assets/images/avatar/avatar_3.jpg" alt="" />
                      </span>
                      <span className="author-name">
                        <a href="#">By David Willy</a>
                      </span>
                    </div>
                  </div>
                  <div className="entry-header">
                    <div className="entry-meta">
                      <span className="date">
                        <a href="#" rel="bookmark" className="entry-date">
                          13 January 2017
                        </a>
                      </span>
                    </div>
                    <h4 className="entry-title">
                      <a href="#">Provide pure water for syrian poor people</a>
                    </h4>
                  </div>
                  <span className="xs-separetor"></span>
                  <div className="post-meta">
                    <span className="comments-link">
                      <i className="fa fa-comments-o"></i>
                      <a href="#">300 Comments</a>
                    </span>
                    <span className="view-link">
                      <i className="fa fa-eye"></i>
                      <a href="#">1000 Views</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </>
    )
  }
}