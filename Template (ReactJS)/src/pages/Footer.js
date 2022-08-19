import { useEffect, useState } from "react";
import Preloader from "./Preloadper";
export default function Footer(){
  const [general, setGeneral] = useState([])
  const [isBusy, setBusy] = useState(true)
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/generalList')
      .then(response => response.json())
      .then(data => setGeneral(data))
      .then(() => setBusy(false))
  },[])
 
  if (isBusy) {
    return <Preloader />
  } else {
 
    return(
        <>
            <footer className="xs-footer-section">
        <div className="container">
          <div className="xs-footer-top-layer">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-widget xs-pr-20">
                <a href="index.html" className="xs-footer-logo">
                  <img src="assets/images/footer_logo.png" alt=""/>
                </a>
                <p>{general.data.footer_text}</p>
                <ul className="xs-social-list-v2">
                  <li><a href="#" className="color-facebook"><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className="color-twitter"><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className="color-dribbble"><i className="fa fa-dribbble"></i></a></li>
                  <li><a href="#" className="color-pinterest"><i className="fa fa-pinterest"></i></a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer-widget">
                <h3 className="widget-title">About Us</h3>
                <ul className="xs-footer-list">
                  <li><a href="index.html">About employee</a></li>
                  <li><a href="#">How it works</a></li>
                  <li><a href="#">Careers</a></li>
                  <li><a href="#">Press</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-widget">
                <div className="widget recent-posts">
                  <h3 className="widget-title">Trending Post</h3>
                  <ul className="xs-recent-post-widget">
                    <li>
                      <div className="posts-thumb float-left">
                        <a href="#">
                          <img alt="img" className="img-responsive" src="assets/images/news_feeds_1.jpg"/>
                            <div className="xs-entry-date">
                              <span className="entry-date d-block">21</span>
                              <span className="entry-month d-block">dec</span>
                            </div>
                            <div className="xs-black-overlay bg-aqua"></div>
                        </a>
                      </div>
                      <div className="post-info">
                        <h4 className="entry-title">
                          <a href="#">Child Care Centers</a>
                        </h4>
                        <div className="post-meta">
                          <span className="comments-link">
                            <i className="fa fa-comments-o"></i>
                            <a href="#">300 Comments</a>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </li>
                    <li>
                      <div className="posts-thumb float-left">
                        <a href="#">
                          <img alt="img" className="img-responsive" src="assets/images/news_feeds_2.jpg"/>
                            <div className="xs-entry-date">
                              <span className="entry-date d-block">23</span>
                              <span className="entry-month d-block">sep</span>
                            </div>
                            <div className="xs-black-overlay bg-aqua"></div>
                        </a>
                      </div>
                      <div className="post-info">
                        <h4 className="entry-title">
                          <a href="#">Disaster Relief</a>
                        </h4>
                        <div className="post-meta">
                          <span className="comments-link">
                            <i className="fa fa-comments-o"></i>
                            <a href="#">35 Comments</a>
                          </span>
                        </div>
                      </div>
                      <div className="clearfix"></div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-widget">
                <h3 className="widget-title">Contact Us</h3>
                <ul className="xs-info-list">
                  <li><i className="fa fa-home"></i>Sector # 48, 123 Street, miosya road VIC 28, Australia.</li>
                  <li><i className="fa fa-phone"></i>(800) 123.456.7890 (800) 123.456.7890 +00 99 88 5647</li>
                  <li><i className="fa fa-envelope-o"></i><a href="https://demo.xpeedstudio.com/cdn-cgi/l/email-protection#176e78626579767a725773787a767e793974787a"><span className="__cf_email__" data-cfemail="037a6c76716d626e6643676c6e626a6d2d606c6e">[email&#160;protected]</span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="xs-copyright">
            <div className="row">
              <div className="col-md-6">
                <div className="xs-copyright-text">
                  <p>&copy; Copyright 2018 <a href="https://themeforest.net/user/xpeedstudio/portfolio">XpeedStudio.</a> - All Right's Reserved</p>
                </div>
              </div>
              <div className="col-md-6">
                <nav className="xs-footer-menu">
                  <ul>
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Help Desk</a></li>
                    <li><a href="#">Support</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="xs-back-to-top-wraper">
          <a href="#" className="xs-back-to-top"><i className="fa fa-angle-up"></i></a>
        </div>
      </footer>
        </>

    )
  }
}