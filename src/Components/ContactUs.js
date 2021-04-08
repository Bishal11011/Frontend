import React from 'react'

function ContactUs() {
    return (
<section id="contact" className="contact-us section-padding">
  <div className="container">				
    <div className="row align-items-center">					
      <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
        <div className="section-title text-left wow zoomIn">
          <span>Get A Qoute</span>	
          <h2>Project Discussion</h2>
        </div>	
        <form className="contact-form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
          <div className="row">
            <div className="form-group col-md-6">
              <input type="text" name="name" className="form-control" placeholder="Name" required="required" />
            </div>
            <div className="form-group col-md-6">
              <input type="email" name="email" className="form-control" placeholder="Email" required="required" />
            </div>
            <div className="form-group col-md-12">
              <input type="text" name="subject" className="form-control" placeholder="Subject" required="required" />
            </div>
            <div className="form-group col-md-12">
              <textarea rows={6} name="message" className="form-control" placeholder="Your Message" required="required" defaultValue={""} />
            </div>
            <div className="col-md-12 text-left">
              <button type="submit" value="Send message" name="submit" className="btn-home-border" title="Submit Your Message!">Send Message</button>
            </div>
          </div>
        </form>							
      </div>{/* END COL*/}
      <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
        <div className="single-contact">
          <i className="ti-location-pin" />
          <div className="contact-content">
            546 Huntz Lane Worcester,<br />
            Massachusetts 01608 USA 
          </div>
        </div>{/* END single-contact */}	
        <div className="single-contact">
          <i className="ti-email" />
          <div className="contact-content">
            email@yoursite.com <br />
            email@yoursite.com 
          </div>
        </div>{/* END single-contact */}		
        <div className="single-contact">
          <i className="ti-link" />
          <div className="contact-content">
            <a href="#">http://example.com</a><br />
            <a href="#">http://example.com</a>
          </div>
        </div>{/* END single-contact */}									
      </div>{/* END Col */}
    </div>{/* END ROW */}
  </div>{/* END CONTAINER */}	
</section>

    )
}

export default ContactUs
