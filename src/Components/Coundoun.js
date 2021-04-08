import React from 'react'

function Coundoun() {
    return (
<section className="counter_feature">
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
        <div className="counter">				
          <i className="ti-bag" />				
          <div className="counter_content pull-left">
            <h2 className="timer">2500</h2>  
            <span>Projects Finished</span>
          </div>
        </div>
      </div> {/*- END COL */}   
      <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
        <div className="counter">				
          <i className="ti-write" />				
          <div className="counter_content pull-left">
            <h2 className="timer">28253</h2>  
            <span>Line Of Coding</span>
          </div>
        </div>
      </div>{/*- END COL */}   
      <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.4s" data-wow-offset={0}>
        <div className="counter">				
          <i className="ti-cup" />				
          <div className="counter_content pull-left">
            <h2 className="timer">1296</h2>  
            <span>Award Won</span>
          </div>
        </div>
      </div> {/*- END COL */} 
      <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s" data-wow-offset={0}>
        <div className="counter">				
          <i className=" ti-user " />				
          <div className="counter_content pull-left">
            <h2 className="timer">2000</h2>  
            <span>Satisfied Clients</span>
          </div>
        </div>
      </div> {/*- END COL */}                
    </div>{/*- END ROW */}
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default Coundoun
