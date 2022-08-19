import Footer from "./Footer"
import Menu from "./Menu"

export default function Contact(){
    return (
        <>
            <Menu />

            <section className="xs-banner-inner-section parallax-window" style={{backgroundImage:"url('assets/images/backgrounds/contact_bg.jpg')"}}>
                <div className="xs-black-overlay"></div>
                <div className="container">
                    <div className="color-white xs-inner-banner-content">
                        <h2>Contact Us</h2>
                        <p>Give a helping hand for poor people</p>
                        <ul className="xs-breadcumb">
                            <li className="badge badge-pill badge-primary"><a href="index.html" className="color-white"> Home /</a> Contact</li>
                        </ul>
                    </div>
                </div>
            </section>

            <main className="xs-main">

                <section className="xs-contact-section-v2">
                    <div className="container">
                        <div className="xs-contact-container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="xs-contact-form-wraper">
                                        <h4>Drop us a line</h4>
                                        <form action="#" method="POST" id="xs-contact-form" className="xs-contact-form contact-form-v2">
                                            <div className="input-group">
                                                <input type="text" name="name" id="xs-name" className="form-control" placeholder="Enter Your Name....."/>
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="fa fa-user"></i></div>
                                                    </div>
                                            </div>
                                            <div className="input-group">
                                                <input type="email" name="email" id="xs-email" className="form-control" placeholder="Enter Your Email....."/>
                                                    <div className="input-group-append">
                                                        <div className="input-group-text"><i className="fa fa-envelope-o"></i></div>
                                                    </div>
                                            </div>
                                            <div className="input-group massage-group">
                                                <textarea name="massage" placeholder="Enter Your Message....." id="xs-massage" className="form-control" cols="30" rows="10"></textarea>
                                                <div className="input-group-append">
                                                    <div className="input-group-text"><i className="fa fa-pencil"></i></div>
                                                </div>
                                            </div>
                                            <button className="btn btn-success" type="submit" id="xs-submit">submit</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="xs-maps-wraper map-wraper-v2">
                                        <div id="xs-map" className="xs-box-shadow-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <section className="xs-contact-details">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 col-lg-4">
                                    <div className="xs-contact-details">
                                        <div className="xs-widnow-wraper">
                                            <div className="xs-window-top">
                                                <img src="assets/images/contact/contact-info-img-1.png" alt=""/>
                                            </div>
                                            <div className="xs-window-back">
                                                <div id="xs-multiple-map-1" className="xs-map"></div>
                                            </div>
                                            <div className="xs-window-nav">
                                                <a href="#" className="xs-window-opener">
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <ul className="xs-unorder-list">
                                            <li><i className="fa fa-phone color-green"></i>+88 00 11 22 33</li>
                                            <li><i className="fa fa-envelope-o color-green"></i><a href="https://demo.xpeedstudio.com/cdn-cgi/l/email-protection" className="__cf_email__" dataCfemail="086669656d4871677d7a6c6765696166266b6765">[email&#160;protected]</a></li>
                                            <li><i className="fa fa-map-marker color-green"></i>Welington City, Beside Pull, Australia</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="xs-contact-details">
                                        <div className="xs-widnow-wraper">
                                            <div className="xs-window-top">
                                                <img src="assets/images/contact/contact-info-img-2.png" alt=""/>
                                            </div>
                                            <div className="xs-window-back">
                                                <div id="xs-multiple-map-2" className="xs-map"></div>
                                            </div>
                                            <div className="xs-window-nav">
                                                <a href="#" className="xs-window-opener">
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <ul className="xs-unorder-list">
                                            <li><i className="fa fa-phone color-green"></i>+09 56 43 768</li>
                                            <li><i className="fa fa-envelope-o color-green"></i><a href="https://demo.xpeedstudio.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="096768646c4970667c7b6d6664686067276a6664">[email&#160;protected]</a></li>
                                            <li><i className="fa fa-map-marker color-green"></i>10/A, Hesting City, USA</li>
                                        </ul>
                                    </div>

                                </div>
                                <div className="col-md-6 col-lg-4">
                                    <div className="xs-contact-details">
                                        <div className="xs-widnow-wraper">
                                            <div className="xs-window-top">
                                                <img src="assets/images/contact/contact-info-img-3.png" alt=""/>
                                            </div>
                                            <div className="xs-window-back">
                                                <div id="xs-multiple-map-3" className="xs-map"></div>
                                            </div>
                                            <div className="xs-window-nav">
                                                <a href="#" className="xs-window-opener">
                                                    <i className="fa fa-angle-right"></i>
                                                </a>
                                            </div>
                                        </div>

                                        <ul className="xs-unorder-list">
                                            <li><i className="fa fa-phone color-green"></i>+00 876 54 34</li>
                                            <li><i className="fa fa-envelope-o color-green"></i><a href="https://demo.xpeedstudio.com/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="ff919e929abf86908a8d9b90929e9691d19c9092">[email&#160;protected]</a></li>
                                            <li><i className="fa fa-map-marker color-green"></i>Protus Thom, Prekunak, Africa</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </section>
            </main>

            <Footer />
        </>
    )
}