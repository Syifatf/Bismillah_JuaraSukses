import React, { Component } from "react";
import Slider from "react-slick";


class Header extends Component {

    componentDidMount(){

      const script = document.createElement("script");

      script.src = "./main.js";

      script.async = true;

      document.body.appendChild(script);

    }
    
  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
    return (
      <div id="tt-pageContent">
        <div className="container-indent nomargin">
          <div className="container-fluid">
            <div className="row">
              <div className="slider-revolution revolution-default">
                <div className="tp-banner-container">
                  <div className="tp-banner revolution">
                    <ul>
                      <li data-thumb="images/slides/01/slide-01.jpg" data-transition="fade" data-slotamount={1} data-masterspeed={1000} data-saveperformance="off" data-title="Slide">
                        <img src="images/slides/01/slide-01.jpg" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />
                        <div className="tp-caption tp-caption1 lft stb" data-x="center" data-y="center" data-hoffset={0} data-voffset={0} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn">
                          <div className="tp-caption1-wd-1 tt-base-color">Chiili Mall</div>
                          <div className="tp-caption1-wd-2 tt-white-color">One Step Solution<br />For Your Chilli Needs</div>
                          <div className="tp-caption1-wd-3 tt-white-color">Klik di Bawah Ini</div>
                          <div className="tp-caption1-wd-4 tt-white-color"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">Click Here</a></div>
                        </div>
                      </li>
                      <li data-thumb="images/slides/01/slide-02.jpg" data-transition="fade" data-slotamount={1} data-masterspeed={1000} data-saveperformance="off" data-title="Slide">
                        <img src="images/slides/01/slide-02.jpg" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />
                        <div className="tp-caption tp-caption1 lft stb" data-x="center" data-y="center" data-hoffset={0} data-voffset={0} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn">
                          <div className="tp-caption1-wd-1 tt-white-color">Chilli Mall</div>
                          <div className="tp-caption1-wd-2 tt-white-color">Peluang Menjadi<br />Petani Cabe</div>
                          <div className="tp-caption1-wd-3 tt-white-color">Feel Free To Look Around</div>
                          <div className="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">Click Here</a></div>
                        </div>
                      </li>
                      <li data-thumb="video/video_img.jpg" data-transition="fade" data-slotamount={1} data-masterspeed={1000} data-saveperformance="off" data-title="Slide">
                        <img src="video/blank.png" alt="slide1" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" />
                        <div className="tp-caption tp-fade fadeout fullscreenvideo" data-x={0} data-y={0} data-speed={600} data-start={0} data-easing="Power4.easeOut" data-endspeed={1500} data-endeasing="Power4.easeIn" data-autoplay="true" data-autoplayonlyfirsttime="false" data-nextslideatend="true" data-forcecover={1} data-dottedoverlay="twoxtwo" data-aspectratio="16:9">
                          <video className="video-js vjs-default-skin" preload="none" poster="video/video_img.jpg" data-setup="{}">
                            <source src="video/video.mp4" type="video/mp4" />
                          </video>
                        </div>
                        <div className="tp-caption  tp-fade" data-x="right" data-y="bottom" data-voffset={-60} data-hoffset={-90} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn">
                          <div className="video-play">
                            <a className="icon-f-29 btn-play" href="#" />
                            <a className="icon-f-28 btn-pause" href="#" />
                          </div>
                        </div>
                        <div className="tp-caption lfb lft text-center" data-x="center" data-y="center" data-voffset={-20} data-hoffset={0} data-speed={600} data-start={900} data-easing="Power4.easeOut" data-endeasing="Power4.easeIn">
                          <div className="tp-caption1-wd-1 tt-base-color">Oberlo</div>
                          <div className="tp-caption1-wd-2 tt-white-color">Find Products for<br />Shop Store</div>
                          <div className="tp-caption1-wd-3 tt-white-color">Oberlo allows you to easily import dropshipped products directly into your ecommerce store</div>
                          <div className="tp-caption1-wd-4"><a href="listing-left-column.html" target="_blank" className="btn btn-xl" data-text="SHOP NOW!">SHOP NOW!</a></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      // <div>
      //   <Slider {...settings}>
      //   <div><img src={require('./images/chilli/bg-chili.jpg')} alt="Credit to Alisa Anton on Unsplash"/></div>
      //   <div><img src={require('./images/chilli/bg-masthead.jpg')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
      //   <div><img src={require('./images/chilli/bg-chili.jpg')} alt="Credit to Alisa Anton on Unsplash"/></div>
      //   <div><img src={require('./images/chilli/bg-masthead.jpg')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
      //   <div><img src={require('./images/chilli/bg-chili.jpg')} alt="Credit to Alisa Anton on Unsplash"/></div>
      //   <div><img src={require('./images/chilli/bg-masthead.jpg')} alt="Credit to Igor Ovsyannykov on Unsplash"/></div>
      //   </Slider>
      // </div>
    );
  }
}


export default Header;