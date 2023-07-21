import './App.css'
import Header from './components/header/Header';
// import About from './components/pages/about/About';
// import Index from './components/pages/index/Index'
// import { Route, Routes } from 'react-router-dom';
// import Services from './components/pages/services/Services';
// import Liked from './components/pages/liked/Liked';
// import Booked from './components/pages/booked/Booked';

import Product from './components/pages/product_details/Product';

function App() {

  return (
    <>
      <Header/>
      {/* <Routes>
        <Route path='/' element={<Index/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/liked' element={<Liked/>}/>
        <Route path='/booked' element={<Booked/>}/>
        <Route path='/login' element={''}/>
        <Route path='/' element={<Index/>}/>
      </Routes> */}

      <Product/>
    </>
  )
}

export default App
