import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Preloader from "./Preloadper";
export default function Menu() {
 
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
  return (
    <>
     
      {/* <div class='colors'>
        <a href="#" className="btn btn-primary panel_opener"><i className="fa fa-gear"></i></a>
        <div className="colors_panel">
          <h5>Colors</h5>
          <a class='color-1' data-val='color-1' href='#'></a>
          <a class='color-2' data-val='color-2' href='#'></a>
          <a class='color-3' data-val='color-3' href='#'></a>
          <a class='color-4' data-val='color-4' href='#'></a>
          <a class='color-5' data-val='color-5' href='#'></a>
          <a class='color-6' data-val='color-6' href='#'></a>
          <a class='color-7' data-val='color-7' href='#'></a>
        </div>
      </div> */}

      <header className="xs-header header-transparent " >
        <div className="container">
          <nav className="xs-menus">
            <div className="nav-header">
              <div className="nav-toggle"></div>
              <a className="nav-logo">
                {/* <Link to="/"><img src="assets/images/logo.png" alt="" /></Link> */}
              </a>
            </div>
            <div className="nav-menus-wrapper row">
              <div className="xs-logo-wraper col-lg-2 xs-padding-0">
                <a className="nav-brand" >
                  <Link to="/"><img src={"http://127.0.0.1:8000/photo/"+ general.data.logo } alt="" /></Link>
                </a>
              </div>
              <div className="col-lg-7">
                <ul className="nav-menu" >
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/causes">Causes</Link></li>
                  <li><Link to="/events">Events</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><a href="#">Pages</a>
                    <ul className="nav-dropdown">
                      <li><a href="donate-now.html">donate now</a></li>
                      <li><a href="faq.html">FAQ</a></li>
                      <li><a href="mission.html">mission</a></li>
                      <li><a href="service.html">service</a></li>
                      <li><a href="team.html">team</a></li>
                      <li><a href="volunteer.html">volunteer</a></li>
                    </ul>
                  </li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>
              <div className="xs-navs-button d-flex-center-end col-lg-3">
              <Link to="/donation" className="btn btn-primary">
              <span className="badge"><i className="fa fa-heart">  Donate Now</i></span> 
              </Link>
                
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
    }
}