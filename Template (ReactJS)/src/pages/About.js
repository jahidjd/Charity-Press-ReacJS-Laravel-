import Footer from "./Footer";
import Menu from "./Menu";

export default function About() {
    return (
        <>
            <Menu/>


            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage:"url('assets/images/backgrounds/about_bg.jpg')"}}>
                <div className="xs-black-overlay"></div>
                <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2>About Us</h2>
                        <p>Give a helping hand for poor people</p>
                        <ul className="xs-breadcumb">
                            <li className="badge badge-pill badge-primary"><a href="index.html" className="color-white"> Home /</a> About</li>
                        </ul>
                    </div>
                </div>
            </section>

            <main className="xs-main">

                <div className="xs-video-popup-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 content-center">
                                <div className="xs-video-popup-wraper">
                                    <img src="assets/images/video_img.jpg" alt=""/>
                                        <div className="xs-video-popup-content">
                                            <a href="https://www.youtube.com/watch?v=Tb1HsAGy-ls" className="xs-video-popup xs-round-btn">
                                                <i className="fa fa-play"></i>
                                            </a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="xs-content-section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-11 content-center">
                                <div className="xs-heading xs-mb-100 text-center">
                                    <h2 className="xs-mb-0 xs-title">We are an Globian non-profit organization that <span className="color-green">supports</span> good causes and positive change all over the world.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="xs-about-feature">
                                    <h3>Our Mission</h3>
                                    <p className="lead">The CharityPress community was named a “Top 25 Best Global Philanthropist” by Barron’s. We beat Oprah. And, Mashable named CharityPress something like that.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="xs-about-feature">
                                    <h3>Our Vission</h3>
                                    <p className="lead">The Globian Fund for Charities seeks positive change around the world through support of non-profit organizations dedicated to social, cultural.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="xs-about-feature">
                                    <h3>Our Values</h3>
                                    <ul className="xs-unorder-list play green-icon">
                                        <li>Accountability</li>
                                        <li>Reliability</li>
                                        <li>Cost-effectiveness</li>
                                        <li>Personal service</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="xs-funfact-section xs-content-section-padding waypoint-tigger parallax-window" style={{backgroundImage: "url('assets/images/backgrounds/parallax_1.jpg')"}}>
                    <div className="container">
                        <div className="row col-lg-10 xs-heading mx-auto">
                            <h2 className="xs-title color-white small">Our agency has been present for over 30 years. We make the best for all our children.</h2>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="xs-single-funFact color-white">
                                    <i className="icon-donation_2"></i>
                                    <span className="number-percentage-count number-percentage" data-value="10" data-animation-duration="3500">0</span><span>M</span>
                                    <small>Causes</small>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xs-single-funFact color-white">
                                    <i className="icon-group"></i>
                                    <span className="number-percentage-count number-percentage" data-value="25" data-animation-duration="3500">0</span><span>k</span>
                                    <small>Valunteer</small>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xs-single-funFact color-white">
                                    <i className="icon-children"></i>
                                    <span className="number-percentage-count number-percentage" data-value="30" data-animation-duration="3500">0</span><span>k</span>
                                    <small>Childrens</small>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="xs-single-funFact color-white">
                                    <i className="icon-planet-earth"></i>
                                    <span className="number-percentage-count number-percentage" data-value="14" data-animation-duration="3500">0</span><span>k</span>
                                    <small>Countrys</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xs-black-overlay"></div>
                </div>

                <section className="xs-section-padding">
                    <div className="container">
                        <div className="xs-heading row xs-mb-60">
                            <div className="col-md-9 col-xl-9">
                                <h2 className="xs-title">What We Do</h2>
                                <span className="xs-separetor dashed"></span>
                                <p>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-service-promo">
                                    <span className="icon-water color-orange"></span>
                                    <h5>Pure Water <br/>For Poor People</h5>
                                    <p>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-service-promo">
                                    <span className="icon-groceries color-red"></span>
                                    <h5>Healty Food <br/>For Poor People</h5>
                                    <p>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-service-promo">
                                    <span className="icon-heartbeat color-purple"></span>
                                    <h5>Medical <br/>Facilities for People</h5>
                                    <p>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-service-promo">
                                    <span className="icon-open-book color-green"></span>
                                    <h5>Pure Education <br/>For Every Children</h5>
                                    <p>663 million people drink dirty water. Learn how access to clean water can improve health, boost local economies.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="xs-section-padding bg-gray">
                    <div className="container">
                        <div className="xs-heading row xs-mb-60">
                            <div className="col-md-9 col-xl-9">
                                <h2 className="xs-title">Our Team</h2>
                                <span className="xs-separetor dashed"></span>
                                <p>It allows you to gather monthly subscriptions from fans to help fund your creative projects. They also encourage their users to offer rewards to fans as a way to repay them for their support.</p>
                            </div>
                        </div>
                        <div className="row xs-mb-60">
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-single-team">
                                    <img src="assets/images/team/team_1.png" alt=""/>
                                        <div className="xs-team-content">
                                            <h4>William Khanna</h4>
                                            <small>CEO & Founder</small>
                                            <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                                <path className="fill-red" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)" />
                                            </svg>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-single-team">
                                    <img src="assets/images/team/team_2.png" alt=""/>
                                        <div className="xs-team-content">
                                            <h4>Mr. Aladin</h4>
                                            <small>General Manager</small>
                                            <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                                <path className="fill-purple" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)" />
                                            </svg>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-single-team">
                                    <img src="assets/images/team/team_3.png" alt=""/>
                                        <div className="xs-team-content">
                                            <h4>Zummon Khan</h4>
                                            <small>Volunteer</small>
                                            <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                                <path className="fill-blue" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)" />
                                            </svg>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3">
                                <div className="xs-single-team">
                                    <img src="assets/images/team/team_4.png" alt=""/>
                                        <div className="xs-team-content">
                                            <h4>Harista Pro</h4>
                                            <small>Volunteer</small>
                                            <svg className="xs-svgs" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 270 138">
                                                <path className="fill-orange" d="M375,3294H645v128a10,10,0,0,1-10,10l-250-20a10,10,0,0,1-10-10V3294Z" transform="translate(-375 -3294)" />
                                            </svg>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <a href="#" className="btn btn-success">
                                join with us
                            </a>
                        </div>
                    </div>
                </section>

                <section className="xs-partner-section" style={{backgroundImage: "url('assets/images/map.png')"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="xs-partner-content">
                                    <div className="xs-heading xs-mb-40">
                                        <h2 className="xs-mb-0 xs-title">Trusted by the biggest <span className="color-green">brand.</span></h2>
                                    </div>
                                    <p>In-kind donations from our donors and partners allow charity: water to pass 100% of public donations straight to water projects. We are deeply grateful for those who have surprised us with their generosity. A big thanks to the following companies and people who have helped make charity: water’s work possible.</p>
                                    <a href="#" className="btn btn-primary bg-orange">
                                        join us now
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <ul className="fundpress-partners">
                                    <li><a href="#"><img src="assets/images/partner/client_1.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/images/partner/client_2.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/images/partner/client_3.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/images/partner/client_4.png" alt=""/></a></li>
                                    <li><a href="#"><img src="assets/images/partner/client_5.png" alt=""/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer/>
        </>
    )
}