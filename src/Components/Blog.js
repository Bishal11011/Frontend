import React from 'react'

function Blog() {
    return (
<section id="blog" className="fresh-news section-padding">
  <div className="container">
    <div className="section-title text-center wow zoomIn">
      <span>Latest News</span>	
      <h2>Check out the company <br /> latest News </h2>
    </div>				
    <div className="row">					
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" data-wow-offset={0}>
        <div className="single_blog">
          <div className="blog_img">
            <a href="blog.html"><img src="assets/img/blog/1.jpg" className="img-fluid" alt="image" /></a>
          </div>
          <div className="blog_content">
            <span className="blog_cat">
              <a href="#">Design</a>
              <a href="#">Marketing</a>
            </span>
            <h3><a href="blog.html">Team you want to work with mistake runners</a></h3>								
            <div className="blog-meta">
              <span className="blog-author">
                <img src="assets/img/blog/author.jpg" alt="author icon" /> 
                <a href="#">Masum Billah</a>
              </span> 
              <span className="blog-date">Feb 5, 2021</span>								
            </div>
            <a href="#" className="blog_btn"><i className="ti-arrow-right" /></a>
          </div>
        </div>
      </div>{/* END COL*/}	
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.2s" data-wow-offset={0}>
        <div className="single_blog">
          <div className="blog_img">
            <a href="blog.html"><img src="assets/img/blog/2.jpg" className="img-fluid" alt="image" /></a>
          </div>
          <div className="blog_content">
            <span className="blog_cat">
              <a href="#">Design</a>
              <a href="#">Marketing</a>
            </span>
            <h3><a href="blog.html">An Adult Man Catching fish at evening</a></h3>						
            <div className="blog-meta">
              <span className="blog-author">
                <img src="assets/img/blog/author.jpg" alt="author icon" /> 
                <a href="#">Masum Billah</a>
              </span> 
              <span className="blog-date">Feb 1, 2021</span>								
            </div>
            <a href="#" className="blog_btn"><i className="ti-arrow-right" /></a>
          </div>
        </div>
      </div>{/* END COL*/}	
      <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.3s" data-wow-offset={0}>
        <div className="single_blog">
          <div className="blog_img">
            <a href="blog.html"><img src="assets/img/blog/3.jpg" className="img-fluid" alt="image" /></a>
          </div>
          <div className="blog_content">
            <span className="blog_cat">
              <a href="#">Design</a>
              <a href="#">Marketing</a>
            </span>
            <h3><a href="blog.html">Photography of Man Doing A Skateboard Trick</a></h3>				
            <div className="blog-meta">
              <span className="blog-author">
                <img src="assets/img/blog/author.jpg" alt="author icon" /> 
                <a href="#">Masum Billah</a>
              </span> 
              <span className="blog-date">Feb 13, 2021</span>
            </div>
            <a href="#" className="blog_btn"><i className="ti-arrow-right" /></a>								
          </div>
        </div>
      </div>{/* END COL*/}
    </div>{/* END ROW */}
  </div>{/* END CONTAINER */}	
</section>

    )
}

export default Blog
