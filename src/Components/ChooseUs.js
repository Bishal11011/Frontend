import React from 'react'

function ChooseUs() {
    return (
<section className="why_choose_us section-padding">
  <div className="container">
    <div className="section-title text-center wow zoomIn">
      <div className="row">
        <div className="col-lg-12">
          <span>Why Choose Us</span>	
          <h2>Best Agency Choose<br /> Clients Wise</h2>
        </div>
      </div>
    </div>
    <div className="row">				
      <div className="col-lg-7 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single_feature active_feature">
              <div className="feat_icon"><i className="ti-mobile" /></div>
              <div className="single_f_content">
                <h4>Responsive Design</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>	
              </div>
            </div>
          </div>{/* End Feature */}	
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single_feature">
              <div className="feat_icon"><i className="ti-settings" /></div>
              <div className="single_f_content">
                <h4>Easy Customizable </h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>		
              </div>
            </div>
          </div>{/* End Feature */}	
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single_feature">
              <div className="feat_icon"><i className="ti-headphone-alt " /></div>
              <div className="single_f_content">
                <h4>Awesome Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>		
              </div>
            </div>
          </div>{/* End Feature */}	
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single_feature">
              <div className="feat_icon"><i className="ti-headphone-alt " /></div>
              <div className="single_f_content">
                <h4>Awesome Support</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>	
              </div>
            </div>
          </div>{/* End Feature */}	
        </div>{/* End row */}	
      </div>{/*- END COL */}
      <div className="col-lg-5 col-sm-12 col-xs-12"> 
        <div className="feature_img">
          <img src="assets/img/why-choose.jpg" className="img-responsive" alt="why choose image" />
        </div>
      </div>{/*- END COL */}
    </div>{/*- END ROW */}			
  </div>{/*- END CONTAINER */}		
</section>

    )
}

export default ChooseUs
