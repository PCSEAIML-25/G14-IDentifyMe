import React from 'react'
import "./Header.css"
export default function Contact() {
  return (
    <div ba>
          <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">

        <div class="section-title" style={{color:"#37517e"}}>
          <h1>Contact</h1>
          <p style={{color:"black"}}>For any query and questions please feel free to contact us.</p>   </div>

        <div class="row">

          <div class="col-lg-5 d-flex align-items-stretch">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt" style={{color:"#44444"}}></i>
                <h4>Location:</h4>
                <p>Kiet group of institutions ghaziabad</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>7451879278</p>
              </div>

            
          </div>

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="name" style={{color:"black"}}>Your Name</label>
                  <input type="text" name="name" class="form-control" id="name" required/>
                </div>
                <div class="form-group col-md-6">
                  <label for="name" style={{color:"black"}}>Your Email</label>
                  <input type="email" class="form-control" name="email" id="email" required/>
                </div>
              </div>
              <div class="form-group">
                <label for="name" style={{color:"black"}}>Subject</label>
                <input type="text" class="form-control" name="subject" id="subject" required/>
              </div>
              <div class="form-group">
                <label for="name" style={{color:"black"}}>Message</label>
                <textarea class="form-control" name="message" rows="10" required></textarea>
              </div>
              <div class="my-3">
                <div class="loading" style={{color:"black"}}>Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center" style={{color:"black"}}><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
      </div>
    </section>
    </div>
  )
}
