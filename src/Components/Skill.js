import React from 'react'

function Skill() {
    return (
<section className="skill">
  <div className="container">
    <div className="section-title text-left wow zoomIn">
      <div className="row">
        <div className="col-lg-6">
          <span>Skills</span>	
          <h2>What is our Design <br /> Skill Included</h2>
        </div>
      </div>
    </div>
    <div className="row">	
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="skill-img">
          <img src="assets/img/skill-img.jpg" alt="skill image" />
        </div>				
      </div>{/*- END Col */}		
      <div className="col-lg-6 col-sm-12 col-xs-12">
        <div className="progress-bar-linear">
          <p className="progress-bar-text">Development</p>
          <div className="progress-bar">
            <span data-percent={85} />
          </div>
        </div>{/*end progress bar*/}	
        <div className="progress-bar-linear">
          <p className="progress-bar-text">Cordignator</p>
          <div className="progress-bar">
            <span data-percent={95} />
          </div>
        </div>{/*end progress bar*/}
        <div className="progress-bar-linear">
          <p className="progress-bar-text">Web Design</p>
          <div className="progress-bar">
            <span data-percent={80} />
          </div>
        </div>{/*end progress bar*/}	
        <div className="progress-bar-linear">
          <p className="progress-bar-text">Laravel</p>
          <div className="progress-bar">
            <span data-percent={70} />
          </div>
        </div>{/*end progress bar*/}						
        <div className="progress-bar-linear">
          <p className="progress-bar-text">WordPress</p>
          <div className="progress-bar">
            <span data-percent={90} />
          </div>
        </div>{/*end progress bar*/}													
      </div>{/*- END Col */}
    </div>{/*- END ROW */}		
  </div>{/*- END CONTAINER */}
</section>

    )
}

export default Skill
