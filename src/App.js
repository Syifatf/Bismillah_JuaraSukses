import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// app.js menampilkan slider atau carausel aja dan about home 
class App extends Component{
  render() {
    return (
      <div>
        <Router>
          <div>
            <h2> selamat datang di halaman pertama </h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
              <li><Link to={"/"} className="nav-link">Home</Link></li>
              <li><Link to={"/about"} className="nav-link">About</Link></li>
              <li><Link to={"/produk"} className="nav-link">Produk</Link></li>
              <li><Link to={"/artikel"} className="nav-link">Artikel</Link></li>            
              <li><Link to={"/berita"} className="nav-link">Berita</Link></li>
            </ul>
            </nav>
            <hr />

            <Switch>
              <Route exact path='/' Component={Home} />
              <Route exact path='/about' Component={About} />
              <Route exact path='/produk' Component={Produk} />
              <Route exact path='/artikel' Component={Artikel} />
              <Route exact path='/berita' Component={Berita} />
            </Switch>
          </div>
        </Router>
      </div>
  );
}
}

export default App;
