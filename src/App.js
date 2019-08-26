import React, { Component } from 'react';
// import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import KProduk from './component/produk/kategoriProduk';
import BestSeller from './component/produk/bestSeller';
import TrendProduk from './component/produk/trendProduk';
import Artikel from './Artikel';
import AboutHome from './component/About/about_home';
import Footer from './component/footer';
import Slidebar from './component/slidebar';
import Kategori from './component/produk/kategori';
import Ba from './component/navbar';
import Navbarr from './component/nav';
import colour from './images/colour.png';

import About from './About';
import Produk from './Produk';
import Agenda from './component/agenda';
// import Produk from './component/produk/Produk';
// import Carausel from './component/carausel';
// import Navv from './component/nav';
// import Batik from './component/produk/kategori/batik';        
// import Sepatu from './component/produk/kategori/sepatu';
// import Fasion from './component/produk/kategori/fasion';
// import { Navbar } from 'react-bootstrap';
// import Ba from './component/navbar';

// app.js menampilkan slider atau carausel aja dan about home 
function App() {
  return (
    <Router>
      <div className="App" style={{backgroundImage: 'url('+ colour +')'}}>
        <Navbarr />
        <AboutHome />
        <KProduk />
        <BestSeller/>
        <TrendProduk/>
        <Kategori />
        <Artikel/>
        {/* <Ba /> */}
        {/* <Switch>
        
          <Route path="/" exact Component={Home} />
          <Route path="/about" Component={About} />
          <Route path="/produk" Component={Produk} />
        </Switch> */}
        {/* <Agenda /> */}
        <Footer />

        {/* <About /> */}
          
      </div>
    </Router>
 

// <Navbarr />
//  <Ba />
//  <Ba />
// <Carausel />
// <AboutHome />
// <KProduk />
// <Slidebar />

//  <BestSeller/> 
// <TrendProduk/>
// <Kategori />
// <Artikel/>
// <Footer />

// <Produk />

//  <Batik /> 
//  <Sepatu />
// <Fasion />

   

  );
}

const Home = () => (
  <div>
    <h1>home</h1>h
  </div>
);

export default App;




