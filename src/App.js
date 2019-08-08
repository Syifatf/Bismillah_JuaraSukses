import React from 'react';
import Navbar from './component/navbar';
import KProduk from './component/produk/kategoriProduk';
import BestSeller from './component/produk/bestSeller';
import TrendProduk from './component/produk/trendProduk';
import Artikel from './component/artikel/artikel';
import AboutHome from './component/About/about_home';
import Footer from './component/footer';
import Slidebar from './component/slidebar';
import Kategori from './component/produk/kategori';
import Produk from './component/produk/produk';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutHome />
      <KProduk />
      <Slidebar />
    
      <BestSeller/> 
      <TrendProduk/>
      <Kategori />
      <Artikel/>
      <Footer />
      {/* <Produk /> */}
    </div>
  );
}

export default App;
