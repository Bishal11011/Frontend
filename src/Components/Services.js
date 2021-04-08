import React from 'react'

function Services() {
    return (
<section id="service" className="our_service section-padding gray-section">
  <div className="container">					
    <div className="section-title text-left wow zoomIn">
      <div className="row">
        <div className="col-lg-6">
          <span>Our Services</span>	
          <h2>We Provide Many Kind <br />Of Services</h2>
        </div>
      </div>
    </div>
    <div className="row text-center">	
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-paint-bucket color-1" />
          <div className="ser_content">
            <h4>Design &amp; Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-bar-chart color-2" />
          <div className="ser_content">
            <h4>Digital Marketing</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-apple color-3" />
          <div className="ser_content">
            <h4>ISO App Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-paint-roller color-4" />
          <div className="ser_content">
            <h4>User Interface Design</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-shopping-cart-full color-5" />
          <div className="ser_content">
            <h4>eCommerce Solution</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_service">
          <i className="ser_icon ti-video-camera color-6" />
          <div className="ser_content">
            <h4>Your company Branding</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit orci </p>
          </div>
        </div>
      </div>{/*END COL */}
    </div>{/*END  ROW */}
  </div>{/* END CONTAINER */}
</section>

    )
}

export default Services
