import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes, Route} from "react-router-dom";
import ProductPage from './pages/productPage';
import HomePage from './pages/homePage';
import ScrollToTop from './components/scrollToTop';
function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <div className="App">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;