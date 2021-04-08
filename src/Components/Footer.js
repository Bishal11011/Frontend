import React from 'react'

function Footer() {
    return (
<footer className="footer">
  <div className="container">
    <div className="row footer_br">
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
        <div className="single-footer">
          <div className="footer_logo">        
            <a href="index.html"><img src="assets/img/logo.png" alt="logo" /></a>
          </div>		
          <p>	
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum posuere ante ut gravida pellentesque.
          </p>
          <div className="footer_social">
            <ul>
              <li><a href="#" className="ti-facebook f_facebook" /></li>
              <li><a href="#" className="ti-twitter f_twitter" /></li>
              <li><a href="#" className="ti-dribbble f_dribbble" /></li>
              <li><a href="#" className="ti-youtube f_youtube" /></li>
            </ul>					
          </div> 	
        </div>
      </div>
      <div className="col-lg-8 col-md-6 col-sm-12 col-xs-12">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="single-footer">
              <h3 className="foot-title">Compnay</h3>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">About Us</a></li>										
                  <li><a href="#">Contact Us</a></li>														
                  <li><a href="#">Products</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">FAQS</a></li>
                </ul>					
              </div> 
            </div>
          </div>			
          <div className="col-lg-3 col-md-6 col-sm-12 col-xs-12">
            <div className="single-footer">
              <h3 className="foot-title">Resources</h3>
              <div className="footer_menu">
                <ul>
                  <li><a href="#">Help Center</a></li>	
                  <li><a href="#">Download</a></li>
                  <li><a href="#">Events</a></li>														
                  <li><a href="#">Partner</a></li>
                  <li><a href="#">Guides</a></li>
                </ul>					
              </div>
            </div>								
          </div>			
          <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="single-footer">
              <h3 className="foot-title">Newsletter</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
              <form id="mailchimp-form" className="mc4wp-form" method="post">
                <div className="form-group">
                  <input name="EMAIL" className="form-control" id="mce-email" placeholder="Enter Email" type="email" required />
                  <button type="submit" name="subscribe"><i className="fas fa-paper-plane" /></button>
                </div>
              </form>
            </div>
          </div>									
        </div>
      </div>
    </div>	
    <div className="row">
      <div className="col-sm-12 text-center wow zoomIn">
        <div className="footer_content">
          <p>Copyright © 2021. All Rights Reserved.</p>
        </div>												
      </div>{/*- END COL */}
    </div>{/*- END ROW */}
  </div>{/*- END CONTAINER */}	
</footer>

    )
}

export default Footer
