import React, { Component } from 'react';
import image from './../images/bg_1.jpg';

class Slider extends Component {
  render() {
    return (
      <div >
        <section className="home-slider owl-carousel ftco-degree-bg">
      <div className="slider-item" style={{backgroundImage: "url(" + image + ")"}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center justify-content-center">
            <div className="col-md-10 ftco-animate text-center">
              <h1 className="mb-4">We love to 
                <strong className="typewrite" data-period="4000" data-type='[ "Develop.", "Design.", "Explore.", "Capture." ]'>
                  <span className="wrap"></span>
                </strong>
              </h1>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><a href="https://vimeo.com/45830194" className="btn btn-primary btn-outline-white px-4 py-3 popup-vimeo"><span className="ion-ios-play mr-2"></span> Watch Video</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    )
  }
}

export default Slider;