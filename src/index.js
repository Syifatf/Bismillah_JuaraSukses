import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Artikel from './component/artikel/Artikel';
import Produk from './component/produk/Produk';
import About from './component/About/About';

ReactDOM.render(<App />, document.getElementById('root'));   

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// https://www.dumetschool.com/blog/Membuat-Halaman-Dinamis-Dengan-React-JS
// https://rasupe.com/contoh-penggunaan-react-router-di-react-js/
// 
