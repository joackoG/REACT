import logo from './assets/img/Logo.png';
import './App.css';
import CompShowUsers from './components/users/ShowUsers';
import CompShowProducts from './components/products/ShowProducts';
import CompUserDetail from './components/users/ShowDetail';
import CompProductDetail from './components/products/showProdDetail';
import ProductsByGenre from './components/genres/listBygenre';
import ProductList from './components/genres/listGenre';
import LatestProduct from './components/products/LastProduct';


import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        usuarios
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CompShowUsers />} />
            <Route path='/Users/detail/:id' element={<CompUserDetail />} />
          </Routes>
        </BrowserRouter>
        productos
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<CompShowProducts />} />
            <Route path='/Produts/detail/:id' element={<CompProductDetail/>} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ProductsByGenre  />} />
            <Route path='/Genres/:id' element={<ProductList/>} />
          </Routes>
        </BrowserRouter>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LatestProduct />} />
            <Route path='/Produts/detail/:id' element={<CompProductDetail/>} />
          </Routes>
        </BrowserRouter>
        




      </body>
    </div>
  );
}

export default App;
