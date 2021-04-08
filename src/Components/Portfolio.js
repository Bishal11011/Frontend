import React from 'react'

function Portfolio() {
    return (
<section id="portfolio" className="our_portfolio section-padding">
  <div className="container">
    <div className="section-title text-center wow zoomIn">
      <span>Portfolios</span>	
      <h2>Check out latest project  <br />done by us</h2>
    </div>								
    <div className="col-lg-12 text-center">
      <div className="portfolio_filter">
        <ul>
          <li className="active filter" data-filter="all">All</li>
          <li className="filter" data-filter=".branding">Branding</li>
          <li className="filter" data-filter=".webtemplate">Web Template</li>
          <li className="filter" data-filter=".seo">SEO</li>
          <li className="filter" data-filter=".digital">Digital Marketing</li>
        </ul>
      </div>
    </div>				
    <div className="row portfolio_item">			
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix webtemplate seo">						
        <div className="box">
          <img src="assets/img/portfolio/1.jpg" alt />
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">App Landing</a></h3>
            <span className="port-cat">Branding , Design</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>							
        </div>
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix branding">				
        <div className="box">
          <img src="assets/img/portfolio/2.jpg" alt />
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">Medical Concept</a></h3>
            <span className="port-cat">Design , Development</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>
        </div>
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix webtemplate digital">						
        <div className="box">
          <img src="assets/img/portfolio/3.jpg" alt />
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">Increase Sale</a></h3>
            <span className="port-cat">Marketing</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>				
        </div>
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix digital seo">						
        <div className="box">
          <img src="assets/img/portfolio/4.jpg" alt />
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">Marketing Page</a></h3>
            <span className="port-cat">Marketing</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>	
        </div>
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix branding digital">						
        <div className="box">
          <img src="assets/img/portfolio/5.jpg" alt />								
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">Restaurant Design</a></h3>
            <span className="port-cat">Product</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>								
        </div>
      </div>{/*- END COL */}
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mix webtemplate seo">				
        <div className="box">
          <img src="assets/img/portfolio/6.jpg" alt />	
          <div className="box-content">
            <h3 className="title"><a href="portfolio-details.html">App Concept</a></h3>
            <span className="port-cat">Product</span>								
            <a href="assets/img/portfolio/2.jpg" className="port-icon lightbox" data-gall="gall-work"><i className="ti-arrow-right" /></a>							
          </div>	
        </div>
      </div>{/*- END COL */}	
      <div className="col-lg-12 col-sm-12 col-xs-12 text-center">							
        <a className="btn-home-border" href="#">View More</a>						
      </div>{/*- END COL */}																	
    </div>{/*- END ROW */}
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default Portfolio
