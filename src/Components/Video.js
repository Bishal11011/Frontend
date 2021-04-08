import React from 'react'

function Video() {
    return (
<section className="view_our_video" style={{backgroundImage: 'url(assets/img/bg/video-bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'}}>			
  <div className="container">
    <div className="row text-center">
      <div className="col-lg-12">
        <div className="our_video">
          <h1>Lets Check our Business Overview</h1>
          <p>Lorem Ipsum is simply dummy text of the printing </p>
          <a className="video-play" href="https://vimeo.com/414300920"><i className="fa fa-play" /></a>
        </div>
      </div>{/* END COL */}	
    </div>{/* END ROW */}
  </div>{/* END CONTAINER */}			
</section>

    )
}

export default Video
