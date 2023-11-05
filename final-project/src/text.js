import React from 'react'
import {BrowserRouter , Routes,Route} from 'react-router-dom'
import ProductList from './components/productList';
import Filter from './components/filter';
import CategoryList from './components/categoryList';
import productsData from './data.json';
import Header from './components/header';
import Modal from './components/modal';
import Footer from './components/footer';
import Form from './components/form'

export const text = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={ProductPage} />
            <Route path='/cart' element={<Form/>}/>
            <Route path='/detail' element={<Modal/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}
