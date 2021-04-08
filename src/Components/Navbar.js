import React from 'react'

function Navbar() {
    return (
<div id="navigation" className="hsp_opt fixed-top navbar-light bg-faded site-navigation">
  <div className="container">
    <div className="row">
      <div className="col-lg-2 col-md-3 col-sm-4">			
        <div className="navbar-header">        
          <a href="index.html" className="navbar-brand"><img src="assets/img/logo.png" alt="logo" /></a>
        </div>	
      </div>{/*- END Col */}
      <div className="col-lg-10 col-md-9 col-sm-8">
        <nav id="main-menu" className="ml-auto">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#service">Service</a></li>
            <li className="menu-item-has-children"><a href="#portfolio">Portfolio</a>
              <ul className="sub-menu">
                <li><a href="portfolio-details.html">Portfolio Details</a></li>
              </ul>
            </li>
            <li><a href="#team">Team</a></li>	
            <li><a href="#blog">Blog</a></li>
            <li><a className="block-menu" href="#contact">Contact us</a></li>		
          </ul>
        </nav>
        <div id="mobile_menu" />					
      </div> {/*- END Col */}
    </div>				
  </div>{/*- END CONTAINER */}
</div>
    )
}

export default Navbar
