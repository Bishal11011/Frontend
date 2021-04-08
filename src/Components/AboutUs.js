import React from 'react'

function AboutUs() {
    return (
<section className="about_us section-padding">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="about_img">
          <img src="assets/img/about-img.jpg" alt="about image" />		
        </div>					
      </div>{/*- END COL */}
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="about-content">						
          <div className="section-title text-left">	
            <span>About Us</span>								
            <h2>Welcome To our <br />Digtal Agency </h2>	
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit, orci a euismod feugiat, orci odio semper justo, at varius lectus enim et est. Fusce tempor ex id est lobortis.</p>								
          <ul>
            <li><i className="ti-check" /> Lorem ipsum dolor </li>
            <li><i className="ti-check" /> Lorem ipsum dolor </li>
            <li><i className="ti-check" /> Lorem ipsum dolor </li>
            <li><i className="ti-check" /> Lorem ipsum dolor </li>
            <li><i className="ti-check" /> Lorem ipsum dolor </li>
          </ul>
          <a href="#" className="btn-home-border">Read More</a>									
        </div>
      </div>{/*- END COL */}										
    </div>{/*- END ROW */}		
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default AboutUs
