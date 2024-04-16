import React from 'react';
import test from './assets/testimonial.png';
import testlogo from './assets/testlogo.png';
import { IoChevronForwardCircleOutline } from "react-icons/io5";

export default function Testimonial() {
  return (
    <div className='container-fluid testmain'>
      <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-4">
                <img src={test} alt='testimonial' className='img-responsive testimg'/>
              </div>
              <div className="col-md-8 testcontt">
                <div>
                  <p><img src={testlogo} alt="testlogo"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.</p>
                  <p>Title</p>
                  <p>Name</p>
                </div>
                <div><h6>Read my story <IoChevronForwardCircleOutline/></h6></div>
              </div>
            </div>
          </div>



          <div className="carousel-item">
            <div className="row">
              <div className="col-md-4">
                <img src={test} alt='testimonial' className='img-responsive testimg'/>
              </div>
              <div className="col-md-8 testcontt" >
                <div>
                  <p><img src={testlogo} alt="testlogo"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales turpis et lacinia fermentum. Curabitur vestibulum at arcu sed blandit. In consequat euismod purus nec imperdiet.</p>
                  <p>Title</p>
                  <p>Name</p>
                </div>
                <div><h6>Read my story <IoChevronForwardCircleOutline/></h6></div>
              </div>
            </div>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
