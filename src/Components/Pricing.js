import React from 'react'

function Pricing() {
    return (
<section id="pricing" className="our_pricing section-padding">
  <div className="container">
    <div className="section-title text-center wow zoomIn">
      <span>Pricing</span>	
      <h2>Check out our pricing <br />plan</h2>
    </div>					
    <div className="row">			
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="pricingTable">
          <div className="pricingTable-title">
            <h3 className="title">Standard</h3>							
          </div>
          <ul className="pricing-content">
            <li><i className="ti-check" /> 15 website</li>
            <li><i className="ti-check" /> 15 Subdomains</li>
            <li><i className="ti-check" /> 20 Domains</li>
            <li><i className="ti-check" /> Unlimited Support</li>
            <li><i className="ti-check" /> <del>DNS Cluster Powered</del></li>
            <li><i className="ti-check" /> <del>SolusVM Control Panel Powered</del></li>
          </ul>
          <div className="pricingTable-value">
            <h1 className="price-value">$30.00</h1>	
            <span className="price-month">Per Month</span>	
          </div>							
          <a href="#" className="btn-home-border">Get your plan</a>							
        </div>
      </div>{/* END COL  */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
        <div className="pricingTable">
          <div className="pricingTable-title">
            <h3 className="title">Business</h3>
          </div>
          <ul className="pricing-content">
            <li><i className="ti-check" /> 20 website</li>
            <li><i className="ti-check" /> 20 Subdomains</li>
            <li><i className="ti-check" /> 35 Domains</li>
            <li><i className="ti-check" /> Unlimited Support</li>
            <li><i className="ti-check" /> DNS Cluster Powered</li>
            <li><i className="ti-check" /> <del>SolusVM Control Panel Powered</del></li>								
          </ul>
          <div className="pricingTable-value">
            <h1 className="price-value">$60.00</h1>
            <span className="price-month">Per Month</span>		
          </div>								
          <a href="#" className="btn-home-border">Get your plan</a>
        </div>
      </div>{/* END COL  */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
        <div className="pricingTable">
          <div className="pricingTable-title">
            <h3 className="title">Premium</h3>
          </div>
          <ul className="pricing-content">
            <li><i className="ti-check" /> 25 website</li>
            <li><i className="ti-check" /> 30 Subdomains</li>
            <li><i className="ti-check" /> 45 Domains</li>
            <li><i className="ti-check" /> Unlimited Support</li>
            <li><i className="ti-check" /> DNS Cluster Powered</li>
            <li><i className="ti-check" /> SolusVM Control Panel Powered</li>								
          </ul>
          <div className="pricingTable-value">
            <h1 className="price-value">$90.00</h1>
            <span className="price-month">Per Month</span>								
          </div>								
          <a href="#" className="btn-home-border">Get your plan</a>
        </div>
      </div>{/* END COL  */}
    </div>{/*END  ROW  */}
  </div>{/* END CONTAINER  */}
</section>

    )
}

export default Pricing
