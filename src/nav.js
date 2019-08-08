import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, } from 'react-router-dom';
import Artikel from './component/artikel/artikel';
import App from './App';

function Nav() {
  return (
      <Router>
            <div>
                <Route exact path="/" component={App} />
                {/* <Route path="/about" component={About} /> */}
                {/* <Route path="/produk" component={Produk} /> */}
                <Route path="/artikel" component={Artikel} />
                {/* <Route path="/event" component={Events} /> */}
                {/* <Route path="/berita" component={Berita} /> */}
            </div>
        </Router>
  );
}

export default Nav;
