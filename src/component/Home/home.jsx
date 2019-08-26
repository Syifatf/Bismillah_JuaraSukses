import React from 'react';
import KProduk from './component/produk/kategoriProduk';
import BestSeller from './component/produk/bestSeller';
import TrendProduk from './component/produk/trendProduk';
import Artikel from './component/artikel/Artikel';
import AboutHome from './component/About/about_home';
import Footer from './component/footer';
import Slidebar from './component/slidebar';
import Kategori from './component/produk/kategori';
import Produk from './component/produk/Produk';
import Carausel from './component/carausel';
import Navv from './component/nav';
import Batik from './component/produk/kategori/batik';        
import Sepatu from './component/produk/kategori/sepatu';
import Fasion from './component/produk/kategori/fasion';
import { Navbar } from 'react-bootstrap';


class Home extends Component{
  render() {
  return (
    <div className="App-home">
      <Navbar />
      <Carausel />
      <AboutHome />
      <KProduk />
      <Slidebar />
     
      <BestSeller /> 
      <TrendProduk />
      <Kategori />
      <Artikel />
      <Footer /> 

{/* halaman Produk */}

      {/* <Produk />*/} 

 {/*halaman kategori produk (fasion, batik, sepatu)  */}
      {/* <Batik /> */}
      {/* <Sepatu /> */}
      {/* <Fasion /> */}
    </div>
  );
}
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>

);
export default Home;
