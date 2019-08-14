import React, { Component } from "react";

class Kategori extends Component {
  render() {
  return (
      <div>
          <div className="container-indent">
          <div className="container-fluid-custom">
            <div className="row tt-layout-promo-box">
              <div className="col-sm-6 col-md-4">
                <a href="listing-left-column.html" className="tt-promo-box">
                  <img src="images/loader.svg" data-src="images/promo/index-promo-img-07.jpg" alt="" />
                  <div className="tt-description">
                    <div className="tt-description-wrapper">
                      <div className="tt-background" />
                      <div className="tt-title-small">FALL-WINTER CLEARANCE SALES</div>
                      <div className="tt-title-large">GET UP TO <span className="tt-base-color">50% OFF</span></div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4">
                <a href="listing-left-column.html" className="tt-promo-box">
                  <img src="images/loader.svg" data-src="images/promo/index-promo-img-08.jpg" alt="" />
                  <div className="tt-description">
                    <div className="tt-description-wrapper">
                      <div className="tt-background" />
                      <div className="tt-title-small">SUMMER <span className="tt-base-color">2018</span></div>
                      <div className="tt-title-large">NEW ARRIVALS</div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-sm-6 col-md-4">
                <a href="listing-left-column.html" className="tt-promo-box">
                  <img src="images/loader.svg" data-src="images/promo/index-promo-img-09.jpg" alt="" />
                  <div className="tt-description">
                    <div className="tt-background" />
                    <div className="tt-description-wrapper">
                      <div className="tt-background" />
                      <div className="tt-title-small">NEW COLLECTION</div>
                      <div className="tt-title-large"><span className="tt-base-color">HANDBAGS</span></div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Kategori;
