import HomePage from "./HomeWork/HomePage";
import {Route, Routes } from 'react-router-dom'
import ProductAdd from "./HomeWork/ProductAdd";
import ProductList from "./HomeWork/ProductList";
function App() {
  return (
    <>
      

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ProductAdd' element={<ProductAdd/>} />
        <Route path='/ProductsList' element={<ProductList/>} />
      </Routes>
    </>
  )


}

export default App;
