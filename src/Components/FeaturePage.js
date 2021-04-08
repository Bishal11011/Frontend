import React from 'react'

function FeaturePage() {
    return (
<section id="features" className="features">
  <div className="container">				
    <div className="section-title text-left wow zoomIn">
      <div className="row">
        <div className="col-lg-6">
          <span>Our Features</span>	
          <h2>Awesome Features in <br /> our Template </h2>
        </div>
      </div>
    </div>
    <div className="row text-left">
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_about">
          <i className="ti-check-box about_icon" />
          <h4>W3C Validation</h4>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page looking .</p>
        </div>				
      </div>{/*- END COL */}	
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_about active_feature">
          <i className="ti-rocket about_icon" />
          <h4>Super Fast</h4>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page looking.</p>
        </div>				
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_about">
          <i className="ti-light-bulb about_icon" />
          <h4>Latest Bootstrap</h4>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page looking.</p>
        </div>				
      </div>{/*- END COL */}	
    </div>{/*- END ROW */}								
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default FeaturePage
