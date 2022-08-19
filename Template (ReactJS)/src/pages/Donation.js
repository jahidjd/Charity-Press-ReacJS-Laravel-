import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "./Footer";
import Menu from "./Menu";
import Preloader from "./Preloadper";

export default function Donation() {
    const [category, setCategory] = useState([])
    const [busy, setBusy] = useState(true)
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [amount, setAmount] = useState('')
    const [charityAddress, setCharityAddress] = useState('')
    const [projectCategory, setProjectCategory] = useState('')
  
    const handleSubmit=event=>{
        event.preventDefault();
    }
    const submit=()=>{
        axios.post('http://127.0.0.1:8000/api/addDonation', {
            name: name,
            address: address,
            amount: amount,
            charity_address: charityAddress,
            project_category: projectCategory,
            date: new Date().toLocaleString()
          })
          .then(function (response) {
            setName('')
            setAddress('')
            setAmount('')
            setCharityAddress('')
            setProjectCategory('')
          })
          .catch(function (error) {
            console.log(error);
          });
    }
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/causesCategory')
            .then(response => response.json())
            .then(data => setCategory(data.data))
            .then(() => setBusy(false))
    }, [])
    if (busy) {
        return <Preloader />
    } else {

        return (
            <>
                <header className="section-header">
                    <Menu />


                </header>
                <section class="xs-banner-inner-section parallax-window"
                    style={{ backgroundImage: "url('assets/images/backgrounds/about_bg.jpg')" }}>
                    <div class="xs-black-overlay"></div>
                    <div class="container">
                        <div class="color-white xs-inner-banner-content">
                            <h2>Donate Now</h2>
                            <p>Give a helping hand for poor people</p>
                            <ul class="xs-breadcumb">
                                <li class="badge badge-pill badge-primary"><a href="index.html" class="color-white"> Home /</a>
                                    Donate</li>
                            </ul>
                        </div>
                    </div>
                </section>
                <main class="xs-main">

                    <section class="xs-what-we-do-box">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 col-lg-3">
                                    <div class="xs-service-promo box-color bg-light-red">
                                        <span class="icon-water"></span>
                                        <h5>Pure Water <br />For Poor People</h5>
                                        <p>663 million people drink dirty water. Learn how access to clean water.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="xs-service-promo box-color bg-green">
                                        <span class="icon-groceries"></span>
                                        <h5>Healty Food <br />For Poor People</h5>
                                        <p>663 million people drink dirty water. Learn how access to clean water.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="xs-service-promo box-color bg-blue">
                                        <span class="icon-heartbeat"></span>
                                        <h5>Medical <br />Facilities for People</h5>
                                        <p>663 million people drink dirty water. Learn how access to clean water.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3">
                                    <div class="xs-service-promo box-color bg-purple">
                                        <span class="icon-open-book"></span>
                                        <h5>Pure Education <br />For Every Children</h5>
                                        <p>663 million people drink dirty water. Learn how access to clean water.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                 

                    <section class="xs-section-padding bg-gray">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="xs-donation-form-images">
                                        <img src="assets/images/family.jpg" class="img-responsive" alt="Family Images" />
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="xs-donation-form-wraper">
                                        <div class="xs-heading xs-mb-30">
                                            <h2 class="xs-title">Make a donation</h2>
                                            <p class="small">To learn more about make donate charity with us visit our "<span
                                                class="color-green">Contact us</span>" site. By calling <span
                                                    class="color-green">+88(0) 1627809808</span>.</p>
                                            <span class="xs-separetor v2"></span>
                                        </div>
                                        <form action="#" method="POST" id="xs-donation-form" class="xs-donation-form" onSubmit={handleSubmit}>
                                            <div class="xs-input-group">
                                                <label for="xs-donate-name">Name <span
                                                    class="color-light-red">**</span></label>
                                                <input type="text" name="name" id="xs-donate-name" class="form-control"
                                                    placeholder="Your Name" onChange={(e)=>setName(e.target.value)} value={name}/>
                                            </div>
                                            <div class="xs-input-group">
                                                <label for="xs-donate-name">Address <span
                                                    class="color-light-red">**</span></label>
                                                <input type="text" name="address" id="xs-donate-name" class="form-control"
                                                    placeholder="Your Address" onChange={(e)=>setAddress(e.target.value)} value={address}/>
                                            </div>
                                            <div class="xs-input-group">
                                                <label for="xs-donate-name">Donation Amount <span
                                                    class="color-light-red">**</span></label>
                                                <input type="text" name="amount" id="xs-donate-name" class="form-control"
                                                    placeholder="Minimum of $5" onChange={(e)=>setAmount(e.target.value)} value={amount}/>
                                            </div>
                                            <div class="xs-input-group">
                                                <label for="xs-donate-charity">List of Evaluated Charities <span
                                                    class="color-light-red">**</span></label>
                                                <select name="charity-name" id="xs-donate-charity" class="form-control" onChange={(e)=>setCharityAddress(e.target.value)}>
                                                    <option value="">Select</option>
                                                    <option value="bangladesh">Bangladesh</option>
                                                    <option value="worldwide">world Wide</option>
                                                </select>
                                            </div>
                                            <div class="xs-input-group">
                                                <label for="xs-donate-charity">Category</label>
                                                <select name="charity-name" id="xs-donate-charity" class="form-control" onChange={(e)=>setProjectCategory(e.target.value)}>
                                                    <option value="">Select</option>
                                                    {
                                                        category.map((d, i) => {
                                                            return (
                                                                <option value={d.id}>{d.name}</option>
                                                            )
                                                        })
                                                    }


                                                </select>
                                            </div>
                                            <button onClick={submit} class="btn btn-warning"><span class="badge"><i
                                                class="fa fa-heart"></i></span> Donate now</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </>
        )
    }
}