import React from 'react'
import "./Header.css"
// import "./Back"
// import Index from './Index'
export default function Header() {
  return (<div>
    <div className="header" style={{color:"white", height:"32rem",opacity:"1"}}>
        <div className="d-flex" style={{display:"flex"}}>
            <div style={{marginTop:"4rem",marginLeft:"2rem",opacity:"1"}}>
            <h1 style={{fontSize:"7rem",width:"50%",margin:"1rem 0rem 2rem 0rem",opacity:"1",color:"cornflowerblue"}}>IdentifyME </h1>
            <h2 style={{width:"70%",opacity:"1",color:"cyan"}}>this is the new way of identification of your identity</h2>
    </div>

        </div>
    </div>






    <div style={{backgroundColor:"black"}}>
    <section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">

        <div class="section-title" >
          <h2>Services</h2>
          <p>we provide the assistents to ur transactions with ur cards and make sure it is valid and authetic</p> </div>

        <div class="row">
          <div class=" col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4><a href="/">fraud checking</a></h4>
              <p>ensures that ur transaction is fraud free</p>
            </div>
          </div>

          <div class=" col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4><a href="/">transaction detection</a></h4>
              <p>the transaction is initiated by u</p>
            </div>
          </div> 

         

        </div>

      </div>
    </section>
    </div>
    <div>
        
    <section id="pricing" class="pricing">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Pricing</h2>
          </div>

        <div class="row">

          <div class="col-lg-4" data-aos="fade-up" data-aos-delay="100">
            <div class="box">
              <h3>Free Plan</h3>
              <h4><sup>$</sup>0<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i></li>
                <li class="na"><i class="bx bx-x"></i> <span></span></li>
                <li class="na"><i class="bx bx-x"></i> <span></span></li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="200">
            <div class="box featured">
              <h3>Business Plan</h3>
              <h4><sup>$</sup>29<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i></li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

          <div class="col-lg-4 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay="300">
            <div class="box">
              <h3>Developer Plan</h3>
              <h4><sup>$</sup>49<span>per month</span></h4>
              <ul>
                <li><i class="bx bx-check"></i></li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
                <li><i class="bx bx-check"></i> </li>
              </ul>
              <a href="/" class="buy-btn">Get Started</a>
            </div>
          </div>

        </div>

      </div>
    </section>
    </div>
    </div>
  )
}
