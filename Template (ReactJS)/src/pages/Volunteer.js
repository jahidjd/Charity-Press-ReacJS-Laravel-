import axios from "axios";
import { useEffect, useState } from "react";
export default function Volunteer(){
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [branch,setBranch] = useState('')
    const [cv,setCv] = useState('')
    const [message,setMessage] = useState('')
    const [student,setStudent] = useState()
  //  console.log(cv)
    const handleSubmit = event => {
      // 👇️ prevent page refresh
      event.preventDefault();
  
    };
    const test=()=>{
  

      axios.post('http://127.0.0.1:8000/api/submitVolunteer', 
      {
        headers: { "Content-Type": "multipart/form-data" },
              name: name,
              email: email,
              branch: branch,
              cv: cv,
              message: message
          })
         
          .then(function (response) {
             setName('')
            setEmail('') 
           setMessage('')
           setCv('')
           setBranch('') 
            console.log(response)
            
          })
          .catch(function (error) {
            console.log(error);
          });
   
    }
    return(
        <>
            <section className="parallax-window xs-become-a-volunteer xs-section-padding" style={{ backgroundImage: "url('assets/images/backgrounds/volunteer-bg.jpg')" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-lg-7">
                <div className="xs-volunteer-form-wraper bg-aqua">
                  <h2>Become a Volunteer</h2>
    
                  <p>It only takes a minute to set up a campaign. Decide what to do. Pick a name. Pick a photo. And just like that, you’ll be ready to start raising money.</p>
                  <form method="post" id="volunteer-form" className="xs-volunteer-form" enctype="multipart/form-data" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" id="volunteer_name" onChange={(e)=>setName(e.target.value)} value={name} className="form-control" placeholder="Your Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" id="volunteer_email" onChange={(e)=>setEmail(e.target.value)} value={email} className="form-control" placeholder="Your Email" />
                      </div>
                      <div className="col-lg-6">
                        <select name="branch" className="form-control" id="volunteer_brach" onChange={(e)=>setBranch(e.target.value)}>
                          <option value="">Select</option>
                          <option value="bangladesh">Bangladesh</option>
                          <option value="Worldwide">Worldwide</option>
                        </select>
                      </div>
                      <div className="col-lg-6 xs-mb-20">
                        <div className="xs-fileContainer">
                          <input type="file" id="volunteer_cv" className="form-control" onChange={(e)=>setCv(e.target.files[0].name)} name="file" />
                          <label for="volunteer_cv">Upload Your CV</label>
                        </div>
                      </div>
                    </div>
                    <textarea name="massage" id="massage" placeholder="Enter your massage" onChange={(e)=>setMessage(e.target.value)} cols="30" className="form-control" rows="10" value={message}></textarea>
                    <button  onClick={test} className="btn btn-secondary btn-color-alt">apply now</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}