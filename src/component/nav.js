import React, { Component } from "react";
import { Nav } from 'react-bootstrap';
import Produk from './produk/Produk';

class Navbar extends Component {
  render() {
      return (
          <header>
      {/* tt-mobile menu */}
      <nav className="panel-menu mobile-main-menu">
        <ul>
          <li>
            <a href="index.html">HOME</a>
            <ul>
              <li>
                <a href="index.html">HOME STYLES</a>
                <ul>
                  <li><a href="index.html">Home — Example 1 <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-02.html">Home — Example 2</a></li>
                  <li><a href="index-03.html">Home — Example 3</a></li>
                  <li><a href="index-04.html">Home — Example 4 <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-05.html">Home — Example 5</a></li>
                  <li><a href="index-06.html">Home — Example 6</a></li>
                  <li><a href="index-07.html">Home — Example 7</a></li>
                  <li><a href="index-08.html">Home — Example 8</a></li>
                  <li><a href="index-09.html">Home — Example 9</a></li>
                </ul>
              </li>
              <li>
                <a href="index.html">HOME STYLES</a>
                <ul>
                  <li><a href="index-10.html">Home — Example 10</a></li>
                  <li><a href="index-11.html">Home — Example 11</a></li>
                  <li><a href="index-12.html">Home — Example 12</a></li>
                  <li><a href="index-13.html">Home — Example 13</a></li>
                  <li><a href="index-14.html">Home — Example 14</a></li>
                  <li><a href="index-15.html">Home — Example 15</a></li>
                  <li><a href="index-16.html">Home — Example 16 <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-17.html">Home — Example 17</a></li>
                  <li><a href="index-18.html">Home — Example 18</a></li>
                </ul>
              </li>
              <li>
                <a href="index.html">HOME SKINS <span className="tt-badge tt-sale">HOT</span></a>
                <ul>
                  <li><a href="index-skin-snowboards.html">Snowboards Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-skin-phones.html">Phones Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-skin-bikes.html">Bikes Shop <span className="tt-badge tt-fatured">Popular</span></a></li>
                  <li><a href="index-skin-lingerie.html">Lingerie Shop</a></li>
                  <li><a href="index-skin-furniture.html">Furniture Shop</a></li>
                  <li><a href="index-skin-books.html">Books Shop <span className="tt-badge tt-new">New</span></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="listing-left-column.html">SHOP</a>
            <ul>
              <li>
                <a href="listing-left-column.html">LISTING STYLES</a>
                <ul>
                  <li><a href="listing-left-column.html">Listing With Left Sidebar</a></li>
                  <li><a href="listing-right-column.html">Listing With Right Sidebar</a></li>
                  <li><a href="listing-not-sidebar.html">Listing Not Sidebar</a></li>
                  <li><a href="listing-not-sidebar-full-width.html">Listing Not Sidebar Full Width</a></li>
                  <li><a href="listing-metro.html">Listing Metro</a></li>
                  <li><a href="listing-left-column-with-block.html">Listing With Custom HTML Block</a></li>
                  <li><a href="listing-collection.html">Listing Collection</a></li>
                  <li><a href="lookbook.html">Look Book</a></li>
                </ul>
              </li>
              <li>
                <a href="product.html">PRODUCT PAGE STYLES</a>
                <ul>
                  <li><a href="product.html">Product Example 1</a></li>
                  <li><a href="product-02.html">Product Example 2</a></li>
                  <li><a href="product-03.html">Product Example 3</a></li>
                  <li><a href="product-04.html">Product Example 4</a></li>
                  <li><a href="product-variable.html">Product Layout</a></li>
                  <li><a href="product-three-columns.html">Three Columns</a></li>
                </ul>
              </li>
              <li>
                <a href="product-variable.html">PRODUCT PAGE TYPES</a>
                <ul>
                  <li><a href="product.html">Standard Product</a></li>
                  <li><a href="product-variable.html">Variable Product</a></li>
                  <li><a href="product-04.html">Grouped Product</a></li>
                  <li><a href="product-label-new.html">New Product</a></li>
                  <li><a href="product-label-sale.html">Sale Product</a></li>
                  <li><a href="product-label-out-of-stock.html">Out Of Stock Product</a></li>
                </ul>
              </li>
              <li>
                <a href="shopping_cart_02.html">OTHER PAGES</a>
                <ul>
                  <li><a href="shopping_cart_02.html">Cart</a></li>
                  <li><a href="shopping_cart_01.html">Cart With Right Col</a></li>
                  <li><a href="account.html">Account</a></li>
                  <li><a href="account_address.html">Account Address</a></li>
                  <li><a href="account_address_fields.html">Account Address Fields</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="blog-listing-without-col.html">BLOG</a>
            <ul>
              <li>
                <a href="blog-listing-without-col.html">BLOG STYLE</a>
                <ul>
                  <li><a href="blog-listing-without-col.html">Standard Without Sidebar</a></li>
                  <li><a href="blog-listing-col-left.html">Standard With Left Sidebar</a></li>
                  <li><a href="blog-listing-col-right.html">Standard With Right Sidebar</a></li>
                  <li><a href="blog-masonry-col-2.html">Two Colums</a></li>
                  <li><a href="blog-masonry-col-3.html">Three Colums</a></li>
                  <li><a href="blog-masonry-col-3-filter.html">Three Colums With Filter</a></li>
                </ul>
              </li>
              <li>
                <a href="blog-single-post.html">POST TYPE</a>
                <ul>
                  <li><a href="blog-single-post.html">Standard</a></li>
                  <li><a href="blog-single-post-gallery.html">Gallery</a></li>
                  <li><a href="blog-single-post-link.html">Link</a></li>
                  <li><a href="blog-single-post-quote.html">Quote</a></li>
                  <li><a href="blog-single-post-video.html">Video</a></li>
                  <li><a href="blog-single-post-audio.html">Audio</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="portfolio-col-grid-four.html">PORTFOLIO</a>
            <ul>
              <li>
                <a href="portfolio-col-grid-four.html">BOXED GRID</a>
                <ul>
                  <li><a href="portfolio-col-grid-two.html">Two Colums</a></li>
                  <li><a href="portfolio-col-grid-three.html">Three Colums</a></li>
                  <li><a href="portfolio-col-grid-four.html">Four Colums</a></li>
                  <li><a href="portfolio-col-grid-four-without-filter.html">Four Colums Without Filter</a></li>
                </ul>
              </li>
              <li>
                <a href="portfolio-col-wide-three.html">BOXED STYLES</a>
                <ul>
                  <li><a href="portfolio-col-wide-two.html">Two Colums</a></li>
                  <li><a href="portfolio-col-wide-three.html">Three Colums</a></li>
                  <li><a href="portfolio-col-wide-four.html">Four Colums</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="about.html">PAGES</a>
            <ul>
              <li><a href="about.html">About Example 1</a>
                <ul>
                  <li><a href="about.html">Link Level 1</a></li>
                  <li>
                    <a href="about.html">Link Level 1</a>
                    <ul>
                      <li><a href="about.html">Link Level 2</a></li>
                      <li>
                        <a href="about.html">Link Level 2</a>
                        <ul>
                          <li><a href="about.html">Link Level 3</a></li>
                          <li><a href="about.html">Link Level 3</a></li>
                          <li><a href="about.html">Link Level 3</a></li>
                          <li>
                            <a href="about.html">Link Level 3</a>
                            <ul>
                              <li>
                                <a href="about.html">Link Level 4</a>
                                <ul>
                                  <li><a href="about.html">Link Level 5</a></li>
                                  <li><a href="about.html">Link Level 5</a></li>
                                  <li><a href="about.html">Link Level 5</a></li>
                                  <li><a href="about.html">Link Level 5</a></li>
                                  <li><a href="about.html">Link Level 5</a></li>
                                </ul>
                              </li>
                              <li><a href="about.html">Link Level 4</a></li>
                            </ul>
                          </li>
                          <li><a href="about.html">Link Level 3</a></li>
                        </ul>
                      </li>
                      <li><a href="about.html">Link Level 2</a></li>
                      <li><a href="about.html">Link Level 2</a></li>
                    </ul>
                  </li>
                  <li><a href="about.html">Link Level 1</a></li>
                  <li><a href="about.html">Link Level 1</a></li>
                  <li><a href="about.html">Link Level 1</a></li>
                </ul>
              </li>
              <li><a href="about-02.html">About Example 2</a></li>
              <li><a href="contact.html">Contacts Example 1</a></li>
              <li><a href="contact-02.html">Contacts Example 2</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="faq.html">FAQ</a></li>
              <li><a href="coming-soon.html">Coming Soon</a></li>
              <li><a href="page404.html">Page 404</a></li>
              <li><a href="typography.html">Typography</a></li>
              <li><a href="gift-cart.html">Gift Cart</a></li>
              <li>
                <a href="compare.html">Compare</a>
                <ul>
                  <li><a href="compare.html">Compare 01</a></li>
                  <li><a href="compare-02.html">Compare 02</a></li>
                </ul>
              </li>
              <li><a href="wishlist.html">Wishlist</a></li>
              <li>
                <a href="empty-search.html">Empty</a>
                <ul>
                  <li><a href="empty-cart.html">Empty Cart</a></li>
                  <li><a href="empty-search.html">Empty Search</a></li>
                  <li><a href="empty-wishlist.html">Empty Wishlist</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="listing-left-column.html">WOMEN</a>
            <ul>
              <li>
                <a href="listing-left-column.html">TOPS</a>
                <ul>
                  <li><a href="listing-left-column.html">Blouses &amp; Shirts</a></li>
                  <li><a href="listing-left-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                  <li>
                    <a href="listing-left-column.html">Tops &amp; T-shirts</a>
                    <ul>
                      <li><a href="listing-left-column.html">Link Level 1</a></li>
                      <li>
                        <a href="listing-left-column.html">Link Level 1</a>
                        <ul>
                          <li><a href="listing-left-column.html">Link Level 2</a></li>
                          <li>
                            <a href="listing-left-column.html">Link Level 2</a>
                            <ul>
                              <li><a href="listing-left-column.html">Link Level 3</a></li>
                              <li><a href="listing-left-column.html">Link Level 3</a></li>
                              <li><a href="listing-left-column.html">Link Level 3</a></li>
                              <li>
                                <a href="listing-left-column.html">Link Level 3</a>
                                <ul>
                                  <li>
                                    <a href="listing-left-column.html">Link Level 4</a>
                                    <ul>
                                      <li><a href="listing-left-column.html">Link Level 5</a></li>
                                      <li><a href="listing-left-column.html">Link Level 5</a></li>
                                      <li><a href="listing-left-column.html">Link Level 5</a></li>
                                      <li><a href="listing-left-column.html">Link Level 5</a></li>
                                      <li><a href="listing-left-column.html">Link Level 5</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="listing-left-column.html">Link Level 4</a></li>
                                  <li><a href="listing-left-column.html">Link Level 4</a></li>
                                  <li><a href="listing-left-column.html">Link Level 4</a></li>
                                  <li><a href="listing-left-column.html">Link Level 4</a></li>
                                </ul>
                              </li>
                              <li><a href="listing-left-column.html">Link Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="listing-left-column.html">Link Level 2</a></li>
                          <li><a href="listing-left-column.html">Link Level 2</a></li>
                          <li><a href="listing-left-column.html">Link Level 2</a></li>
                        </ul>
                      </li>
                      <li><a href="listing-left-column.html">Link Level 1</a></li>
                      <li><a href="listing-left-column.html">Link Level 1</a></li>
                      <li><a href="listing-left-column.html">Link Level 1</a></li>
                    </ul>
                  </li>
                  <li><a href="listing-left-column.html">Sleeveless Tops</a></li>
                  <li><a href="listing-left-column.html">Sweaters</a></li>
                  <li><a href="listing-left-column.html">Jackets</a></li>
                  <li><a href="listing-left-column.html">Outerwear</a></li>
                </ul>
              </li>
              <li>
                <a href="listing-left-column.html">BOTTOMS</a>
                <ul>
                  <li><a href="listing-left-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                  <li><a href="listing-left-column.html">Jeans</a></li>
                  <li><a href="listing-left-column.html">Leggings</a></li>
                  <li><a href="listing-left-column.html">Jumpsuit &amp; Shorts</a></li>
                  <li><a href="listing-left-column.html">Skirts</a></li>
                  <li><a href="listing-left-column.html">Tights</a></li>
                </ul>
              </li>
              <li>
                <a href="listing-left-column.html">ACCESSORIES</a>
                <ul>
                  <li><a href="listing-left-column.html">Jewellery</a></li>
                  <li><a href="listing-left-column.html">Hats</a></li>
                  <li><a href="listing-left-column.html">Scarves &amp; Snoods</a></li>
                  <li><a href="listing-left-column.html">Belts</a></li>
                  <li><a href="listing-left-column.html">Bags</a></li>
                  <li><a href="listing-left-column.html">Shoes</a></li>
                  <li><a href="listing-left-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                </ul>
              </li>
              <li>
                <a href="listing-left-column.html">SPECIALS</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="listing-right-column.html">MEN</a>
            <ul>
              <li>
                <a href="listing-right-column.html">TOPS</a>
                <ul>
                  <li><a href="listing-right-column.html">Blouses &amp; Shirts</a></li>
                  <li><a href="listing-right-column.html">Dresses <span className="tt-badge tt-new">New</span></a></li>
                  <li>
                    <a href="listing-right-column.html">Tops &amp; T-shirts</a>
                    <ul>
                      <li><a href="listing-right-column.html">Link Level 1</a></li>
                      <li>
                        <a href="listing-right-column.html">Link Level 1</a>
                        <ul>
                          <li><a href="listing-right-column.html">Link Level 2</a></li>
                          <li>
                            <a href="listing-right-column.html">Link Level 2</a>
                            <ul>
                              <li><a href="listing-right-column.html">Link Level 3</a></li>
                              <li><a href="listing-right-column.html">Link Level 3</a></li>
                              <li><a href="listing-right-column.html">Link Level 3</a></li>
                              <li>
                                <a href="listing-right-column.html">Link Level 3</a>
                                <ul>
                                  <li>
                                    <a href="listing-right-column.html">Link Level 4</a>
                                    <ul>
                                      <li><a href="listing-right-column.html">Link Level 5</a></li>
                                      <li><a href="listing-right-column.html">Link Level 5</a></li>
                                      <li><a href="listing-right-column.html">Link Level 5</a></li>
                                      <li><a href="listing-right-column.html">Link Level 5</a></li>
                                      <li><a href="listing-right-column.html">Link Level 5</a></li>
                                    </ul>
                                  </li>
                                  <li><a href="listing-right-column.html">Link Level 4</a></li>
                                  <li><a href="listing-right-column.html">Link Level 4</a></li>
                                  <li><a href="listing-right-column.html">Link Level 4</a></li>
                                  <li><a href="listing-right-column.html">Link Level 4</a></li>
                                </ul>
                              </li>
                              <li><a href="listing-right-column.html">Link Level 3</a></li>
                            </ul>
                          </li>
                          <li><a href="listing-right-column.html">Link Level 2</a></li>
                          <li><a href="listing-right-column.html">Link Level 2</a></li>
                          <li><a href="listing-right-column.html">Link Level 2</a></li>
                        </ul>
                      </li>
                      <li><a href="listing-right-column.html">Link Level 1</a></li>
                      <li><a href="listing-right-column.html">Link Level 1</a></li>
                      <li><a href="listing-right-column.html">Link Level 1</a></li>
                    </ul>
                  </li>
                  <li><a href="listing-right-column.html">Sleeveless Tops</a></li>
                  <li><a href="listing-right-column.html">Sweaters</a></li>
                  <li><a href="listing-right-column.html">Jackets</a></li>
                  <li><a href="listing-right-column.html">Outerwear</a></li>
                </ul>
              </li>
              <li>
                <a href="listing-right-column.html">BOTTOMS</a>
                <ul>
                  <li><a href="listing-right-column.html">Trousers <span className="tt-badge tt-fatured">Fatured</span></a></li>
                  <li><a href="listing-right-column.html">Jeans</a></li>
                  <li><a href="listing-right-column.html">Leggings</a></li>
                  <li><a href="listing-right-column.html">Jumpsuit &amp; shorts</a></li>
                  <li><a href="listing-right-column.html">Skirts</a></li>
                  <li><a href="listing-right-column.html">Tights</a></li>
                </ul>
              </li>
              <li>
                <a href="listing-right-column.html">ACCESSORIES</a>
                <ul>
                  <li><a href="listing-right-column.html">Jewellery</a></li>
                  <li><a href="listing-right-column.html">Hats</a></li>
                  <li><a href="listing-right-column.html">Scarves &amp; Snoods</a></li>
                  <li><a href="listing-right-column.html">Belts</a></li>
                  <li><a href="listing-right-column.html">Bags</a></li>
                  <li><a href="listing-right-column.html">Shoes</a></li>
                  <li><a href="listing-right-column.html">Sunglasses <span className="tt-badge tt-sale">Sale 15%</span></a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="index-rtl.html">RTL</a></li>
        </ul>
        <div className="mm-navbtn-names">
          <div className="mm-closebtn">Close</div>
          <div className="mm-backbtn">Back</div>
        </div>
      </nav>
      {/* tt-mobile-header */}
      <div className="tt-mobile-header">
        <div className="container-fluid">
          <div className="tt-header-row">
            <div className="tt-mobile-parent-menu">
              <div className="tt-menu-toggle">
                <i className="icon-03" />
              </div>
            </div>
            {/* search */}
            <div className="tt-mobile-parent-search tt-parent-box" />
            {/* /search */}
            {/* cart */}
            <div className="tt-mobile-parent-cart tt-parent-box" />
            {/* /cart */}
            {/* account */}
            <div className="tt-mobile-parent-account tt-parent-box" />
            {/* /account */}
            {/* currency */}
            <div className="tt-mobile-parent-multi tt-parent-box" />
            {/* /currency */}
          </div>
        </div>
        <div className="container-fluid tt-top-line">
          <div className="row">
            <div className="tt-logo-container">
              {/* mobile logo */}
              <a className="tt-logo tt-logo-alignment" href="index.html"><img src="images/custom/logo.png" alt /></a>
              {/* /mobile logo */}
            </div>
          </div>
        </div>
      </div>
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
                    <nav className="navbar navbar-default">
                    <div className="Container-fluid">
                    <div className="navbar-header">
                      <link className="nav navbar-nav" to="/">Home</link>
                    </div>
                    <ul className="nav bavbar-nav">
                      <li><link to="/">Home</link></li>
                      <li><link to="/produk">Produk</link></li>
                      <li><link to="/About">About</link></li>
                      <li><link to="/produk">Artikel</link></li>
                      <li><link to="/produk">Event</link></li>
                      <li><link to="/produk">Berita</link></li>
                    </ul>
                    </div>
                      {/* <Nav defaultActiveKey="index.html" as="ul"> */}
                        {/* <Nav.Item className={props.classname} as="li">
                            <Nav.Link href={props.link}>{props.title}</Nav.Link>
                          </Nav.Item> */}
                        {/* <Nav.Item className="dropdown tt-megamenu-col-02 selected" as="li">
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
                      </Nav> */}
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
                  <button className="tt-dropdown-toggle">
                    <i className="icon-f-39" />
                    <span className="tt-badge-cart">3</span>
                  </button>
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
                </div>
              </div>
              {/* /tt-cart */}
              {/* tt-account */}
              <div className="tt-desctop-parent-account tt-parent-box">
                <div className="tt-account tt-dropdown-obj">
                  <button className="tt-dropdown-toggle" data-tooltip="My Account" data-tposition="bottom"><i className="icon-f-94" /></button>
                  <div className="tt-dropdown-menu">
                    <div className="tt-mobile-add">
                      <button className="tt-close">Close</button>
                    </div>
                    <div className="tt-dropdown-inner">
                      <ul>
                        <li><a href="login.html"><i className="icon-f-94" />Account</a></li>
                        <li><a href="wishlist.html"><i className="icon-n-072" />Wishlist</a></li>
                        <li><a href="compare.html"><i className="icon-n-08" />Compare</a></li>
                        <li><a href="page404.html"><i className="icon-f-68" />Check Out</a></li>
                        <li><a href="login.html"><i className="icon-f-76" />Sign In</a></li>
                        <li><a href="page404.html"><i className="icon-f-77" />Sign Out</a></li>
                        <li><a href="create-account.html"><i className="icon-f-94" />Register</a></li>
                      </ul>
                    </div>
                  </div>
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

export default Navbar;