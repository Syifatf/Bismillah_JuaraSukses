import React, { Component } from "react";
// import './style.css';  
import { Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap';

class Navbarr extends Component {

  constructor() {
    super();

    this.state = {
        showMenu: false,
    };

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
}

showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
        document.addEventListener('click', this.closeMenu);
    });
}

closeMenu(event) {

    if (!this.dropdownMenu.contains(event.target)) {

        this.setState({ showMenu: false }, () => {
            document.removeEventListener('click', this.closeMenu);
        });

    }
}
  render() {
    return (
      <header>
          {/* tt-desktop-header */}
        <div className="tt-desktop-header">
          <div className="container">
            <div className="tt-header-holder">
              <div className="tt-col-obj tt-obj-logo">
                {/* logo */}
                <a className="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt /></a>
                {/* /logo */}
              </div>
              <div className="tt-col-obj tt-obj-menu">
                {/* tt-menu */}
                <div className="tt-desctop-parent-menu tt-parent-box">
                  <div className="tt-desctop-menu">
                    <nav>
                      <Nav defaultActiveKey="index.html" as="ul">
                        {/* <Nav.Item className={props.classname} as="li">
                            <Nav.Link href={props.link}>{props.title}</Nav.Link>
                          </Nav.Item> */}
                        <Nav.Item className="dropdown tt-megamenu-col-02 selected" as="li">
                          <Nav.Link href="index.html">HOME</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="dropdown megamenu" as="li">
                          <Nav.Link href="index.html">PRODUK</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="dropdown megamenu" as="li">
                          <Nav.Link href="produk.html">ARTIKEL</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="dropdown tt-megamenu" as="li">
                          <Nav.Link href="artikel.html">EVENT</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="dropdown tt-megamenu" as="li">
                          <Nav.Link href="berita.html">BERITA</Nav.Link>
                        </Nav.Item>
                        <NavItem>

                        {/* <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/produk">Produk</NavLink>
                        <NavLink to="/produk">Artikel</NavLink> */}

                                {/* tt-account */}
                  <div className="tt-desctop-parent-account tt-parent-box">
                    <div className="tt-account">
                        <button className="tt-dropdown-toggle" data-tooltip="My Account" data-tposition="bottom" onClick={this.showMenu}><i className="icon-f-94" /></button>

                        {
                            this.state.showMenu
                                ? (
                                    <div
                                        className="menu"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        <ul>
                                            <li><a className="active" href="#Create Page">Create Page</a></li>
                                            <li><a href="#Manage Pages">Manage Pages</a></li>
                                            <li><a href="#Create Ads">Create Ads</a></li>
                                            <li><a href="#Manage Ads">Manage Ads</a></li>
                                            <li><a href="#Activity Logs">Activity Logs</a></li>
                                            <li><a href="#Setting">Setting</a></li>
                                            <li><a href="#Log Out">Log Out</a></li>
                                        </ul>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }


                    </div>
                </div>
                {/* /tt-account */}
                        </NavItem>
                      </Nav>
                    </nav>
                  </div>
                </div>
                  {/* /tt-menu */}
                </div>
                <div className="tt-col-obj tt-obj-options obj-move-right">
                                  {/* tt-search */}
                                  <div className="tt-desctop-parent-search tt-parent-box">
                    <div className="tt-search tt-dropdown-obj">
                      <button className="tt-dropdown-toggle" data-tooltip="Search" data-tposition="bottom">
                        <i className="icon-f-85" />
                      </button>
                      <div className="tt-dropdown-menu">
                        <div className="container">
                          <form>
                            <div className="tt-col">
                              <input type="text" className="tt-search-input" placeholder="Search Products..." />
                              <button className="tt-btn-search" type="submit" />
                            </div>
                            <div className="tt-col">
                              <button className="tt-btn-close icon-g-80" />
                            </div>
                            <div className="tt-info-text">
                              What are you Looking for?
                            </div>
                            <div className="search-results">
                              <ul>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-03.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        <span className="new-price">$14</span>
                                        <span className="old-price">$24</span>
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-02.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $24
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-01.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $14
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-04.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $24
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-05.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $17
                                      </div>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="product.html">
                                    <div className="thumbnail"><img src="images/loader.svg" data-src="images/product/product-06.jpg" alt /></div>
                                    <div className="tt-description">
                                      <div className="tt-title">Flared Shift Bag</div>
                                      <div className="tt-price">
                                        $20
                                      </div>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                              <button type="button" className="tt-view-all">View all products</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /tt-search */}
                  {/* tt-cart */}
                  <div className="tt-desctop-parent-cart tt-parent-box">
                    <div className="tt-cart tt-dropdown-obj" data-tooltip="Cart" data-tposition="bottom">
                      <button className="tt-dropdown-toggle" onClick={this.handleButtonClick}>
                        <i className="icon-f-39" />
                      </button>
                      {this.state.open && (
                        <div className="tt-dropdown-menu">
                        <div className="tt-mobile-add">
                          <h6 className="tt-title">SHOPPING CART</h6>
                          <button className="tt-close">Close</button>
                        </div>
                        <div className="tt-dropdown-inner">
                          <div className="tt-cart-layout">
                            {/* layout emty cart */}
                            {/* <a href="empty-cart.html" class="tt-cart-empty">
                        <i class="icon-f-39"></i>
                        <p>No Products in the Cart</p>
                      </a> */}
                            <div className="tt-cart-content">
                              <div className="tt-cart-list">
                                <div className="tt-item">
                                  <a href="product.html">
                                    <div className="tt-item-img">
                                      <img src="images/loader.svg" data-src="images/product/product-01.jpg" alt />
                                    </div>
                                    <div className="tt-item-descriptions">
                                      <h2 className="tt-title">Flared Shift Dress</h2>
                                      <ul className="tt-add-info">
                                        <li>Yellow, Material 2, Size 58,</li>
                                        <li>Vendor: Addidas</li>
                                      </ul>
                                      <div className="tt-quantity">1 X</div> <div className="tt-price">$12</div>
                                    </div>
                                  </a>
                                  <div className="tt-item-close">
                                    <a href="#" className="tt-btn-close" />
                                  </div>
                                </div>
                                <div className="tt-item">
                                  <a href="product.html">
                                    <div className="tt-item-img">
                                      <img src="images/loader.svg" data-src="images/product/product-02.jpg" alt />
                                    </div>
                                    <div className="tt-item-descriptions">
                                      <h2 className="tt-title">Flared Shift Dress</h2>
                                      <ul className="tt-add-info">
                                        <li>Yellow, Material 2, Size 58,</li>
                                        <li>Vendor: Addidas</li>
                                      </ul>
                                      <div className="tt-quantity">1 X</div> <div className="tt-price">$18</div>
                                    </div>
                                  </a>
                                  <div className="tt-item-close">
                                    <a href="#" className="tt-btn-close" />
                                  </div>
                                </div>
                              </div>
                              <div className="tt-cart-total-row">
                                <div className="tt-cart-total-title">SUBTOTAL:</div>
                                <div className="tt-cart-total-price">$324</div>
                              </div>
                              <div className="tt-cart-btn">
                                <div className="tt-item">
                                  <a href="#" className="btn">PROCEED TO CHECKOUT</a>
                                </div>
                                <div className="tt-item">
                                  <a href="shopping_cart_02.html" className="btn-link-02 tt-hidden-mobile">View Cart</a>
                                  <a href="shopping_cart_02.html" className="btn btn-border tt-hidden-desctope">VIEW CART</a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      )}
                    </div>
                  </div>
                  {/* /tt-cart */}
                                  {/* tt-account */}
                  <div className="tt-desctop-parent-account tt-parent-box">
                    <div className="tt-account">
                        <button className="tt-dropdown-toggle" data-tooltip="My Account" data-tposition="bottom" onClick={this.showMenu}><i className="icon-f-94" /></button>

                        {
                            this.state.showMenu
                                ? (
                                    <div
                                        className="menu"
                                        ref={(element) => {
                                            this.dropdownMenu = element;
                                        }}
                                    >
                                        <ul>
                                            <li><a className="active" href="#Create Page">Create Page</a></li>
                                            <li><a href="#Manage Pages">Manage Pages</a></li>
                                            <li><a href="#Create Ads">Create Ads</a></li>
                                            <li><a href="#Manage Ads">Manage Ads</a></li>
                                            <li><a href="#Activity Logs">Activity Logs</a></li>
                                            <li><a href="#Setting">Setting</a></li>
                                            <li><a href="#Log Out">Log Out</a></li>
                                        </ul>
                                    </div>
                                )
                                : (
                                    null
                                )
                        }


                    </div>
                </div>
                {/* /tt-account */}
                  {/* tt-langue and tt-currency */}
                  <div className="tt-desctop-parent-multi tt-parent-box">
                    <div className="tt-multi-obj tt-dropdown-obj">
                      <button className="tt-dropdown-toggle" data-tooltip="Settings" data-tposition="bottom"><i className="icon-f-79" /></button>
                      <div className="tt-dropdown-menu">
                        <div className="tt-mobile-add">
                          <button className="tt-close">Close</button>
                        </div>
                        <div className="tt-dropdown-inner">
                          <ul>
                            <li className="active"><a href="#">English</a></li>
                            <li><a href="#">Deutsch</a></li>
                            <li><a href="#">Español</a></li>
                            <li><a href="#">Français</a></li>
                          </ul>
                          <ul>
                            <li className="active"><a href="#"><i className="icon-h-59" />USD - US Dollar</a></li>
                            <li><a href="#"><i className="icon-h-60" />EUR - Euro</a></li>
                            <li><a href="#"><i className="icon-h-61" />GBP - British Pound Sterling</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* /tt-langue and tt-currency */}
                </div>
              </div>
            </div>
          </div>
          {/* stuck nav */}
          <div className="tt-stuck-nav">
            <div className="container">
              <div className="tt-header-row ">
                <div className="tt-stuck-parent-menu" />
                <div className="tt-stuck-parent-search tt-parent-box" />
                <div className="tt-stuck-parent-cart tt-parent-box" />
                <div className="tt-stuck-parent-account tt-parent-box" />
                <div className="tt-stuck-parent-multi tt-parent-box" />
              </div>
            </div>
          </div>
        </header>
    );
  }
  
}

export default Navbarr;