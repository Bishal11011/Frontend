import React from 'react'

function Testimonial() {
    return (
<section className="testimonial-area section-padding">
  <div className="container">												
    <div className="section-title text-left wow zoomIn">
      <span>People Opinions</span>	
      <h2>What Client Says</h2>
    </div>						
    <div className="row">								
      <div className="col-lg-12 col-sm-12 col-xs-12">
        <div id="testimonial-slider" className="owl-carousel">
          <div className="single_testimonial">
            <div className="testi_img">
              <i className="ti-quote-left" />
              <img src="assets/img/testimonial/1.jpg" className="img-fluid" alt />			
            </div>
            <div className="test_content">	
              <p>Nice view, very profesional and easy to implement in my website</p>							
              <h3>Donald Grower</h3>
              <span>Ceo</span>
            </div>
          </div>{/* END SINGEL TESTIMONIALS */}
          <div className="single_testimonial">
            <div className="testi_img">
              <i className="ti-quote-left" />
              <img src="assets/img/testimonial/2.jpg" className="img-fluid" alt />			
            </div>
            <div className="test_content">	
              <p>Excellent template and intuitive to configure. Perfect for a markting agency.</p>
              <h3>Susan Sarandom</h3>
              <span>Ceo</span>
            </div>
          </div>{/* END SINGEL TESTIMONIALS */}
          <div className="single_testimonial">
            <div className="testi_img">
              <i className="ti-quote-left" />
              <img src="assets/img/testimonial/3.jpg" className="img-fluid" alt />
            </div>	
            <div className="test_content">
              <p>Nice view, very profesional and easy to implement in my website</p>
              <h3>Brian Whiterspoon</h3>
              <span>Ceo</span>
            </div>								
          </div>{/* END SINGEL TESTIMONIALS */}
          <div className="single_testimonial">
            <div className="testi_img">
              <i className="ti-quote-left" />
              <img src="assets/img/testimonial/1.jpg" className="img-fluid" alt />
            </div>	
            <div className="test_content">	
              <p>Excellent template and intuitive to configure. Perfect for a markting agency</p>
              <h3>Stefanie Highbrow</h3>
              <span>Ceo</span>
            </div>
          </div>{/* END SINGEL TESTIMONIALS */}	
          <div className="single_testimonial">
            <div className="testi_img">
              <i className="ti-quote-left" />
              <img src="assets/img/testimonial/2.jpg" className="img-fluid" alt />									
            </div>	
            <div className="test_content">	
              <p>Nice view, very profesional and easy to implement in my website</p>
              <h3>Susan Sarandom</h3>
              <span>Ceo</span>
            </div>								
          </div>{/* END SINGEL TESTIMONIALS */}							
        </div>  
      </div>{/* END COL */}		  
    </div>{/*- END ROW */}
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default Testimonial
