import React from 'react';

export default function Contact() {
    return(
        <section id="contact">
        <div className="container p-5 mx-auto text-center">
  
          <div class="section-title">
            <h2>Contact Me!</h2>
            <hr></hr>
            <p> If you'd like to reach out to me, You can contact me below</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-4 col-md-4">
              <div class="contact-about">
                <h3>Socials</h3>
    
                <div class="social-links">
                  <a href="https://github.com/ahuffma2">Github<i className=""></i></a><br/>
                  <a href="https://www.linkedin.com/in/ahuffma2/">LinkedIn<i className="bi bi-linkedin"></i></a><br/>
                  <a href="https://twitter.com/AustinHuffman01">Twitter<i class="bi bi-twitter"></i></a><br/>
                  <a href="/resume/Austin Huffman Software Engineer.pdf">Resume</a>
                </div>
              </div>
            </div>
  
            <div class="col-lg-3 col-md-4">
              <div class="info">
                <div class="d-flex align-items-center">
                  <i class="bi bi-geo-alt"></i>
                  <p>Sugar Hill, Ga 30518</p>
                </div>
  
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-envelope"></i>
                  <p>austinhuffman0@gmail.com</p>
                </div>
  
                <div class="d-flex align-items-center mt-4">
                  <i class="bi bi-phone"></i>
                  <p>+1 678-200-0340</p>
                </div>
  
              </div>
            </div>
  
            <div class="col-lg-5 col-md-8">
  
              <form action = "mailto: austinhuffman0@gmail.com" method ="GET">
  
                <div class="form-group mt-3 mb-3">
                    Subject <br/>
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required/>
                </div>
              
                <div class="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
  
          </div>
  
        </div>
      </section>
    )
}