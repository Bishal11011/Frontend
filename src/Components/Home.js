import React from 'react'

function Home() {
    return (
<section id="home" className="welcome-area">
  <div className="welcome-slider-area">
    <div id="welcome-slide-carousel" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="single-slide-item" style={{backgroundImage: 'url(assets/img/slider/1.jpg)'}}>
            <div className="single-slide-item-table">
              <div className="single-slide-item-tablecell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <span>Welcome To</span>
                      <h2>Jabal Digital Agency Template </h2>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio nisi, rhoncus non lacus quis, bibendum fringilla risus. Elementum justo viverra sodales</p>
                      <a className="btn-home-border" href="#"><i className="ti-plus" /> Get Started</a>								
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="single-slide-item" style={{backgroundImage: 'url(assets/img/slider/2.jpg)'}}>
            <div className="single-slide-item-table">
              <div className="single-slide-item-tablecell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <span>Welcome To</span>
                      <h2>We Are Digital Creative Agency </h2>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio nisi, rhoncus non lacus quis, bibendum fringilla risus. Elementum justo viverra sodales</p>													
                      <a className="btn-home-border" href="#"><i className="ti-plus" /> Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="single-slide-item" style={{backgroundImage: 'url(assets/img/slider/3.jpg)'}}>
            <div className="single-slide-item-table">
              <div className="single-slide-item-tablecell">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-lg-12">
                      <span>Welcome To</span>
                      <h2>We Provide Online Business Solution </h2>
                      <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam odio nisi, rhoncus non lacus quis, bibendum fringilla risus. Elementum justo viverra sodales</p>
                      <a className="btn-home-border" href="#"><i className="ti-plus" /> Get Started</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Controls */}
      <a className="carousel-control-prev" href="#welcome-slide-carousel" role="button" data-slide="prev">
        <i className="fas fa-long-arrow-alt-left" aria-hidden="true" />
      </a>
      <a className="carousel-control-next" href="#welcome-slide-carousel" role="button" data-slide="next">
        <i className="fas fa-long-arrow-alt-right" aria-hidden="true" />
      </a>					
    </div>
  </div>
</section>

    )
}

export default Home
