import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from "./components1/Homepage";
import AboutUs from "./components1/About";
import Services from "./components1/Services";
import Product from "./product/Product";
import Blog from "./BlogSection/Blog";
import CartPage from "./product/CartPage";
import OrderSuccess from "./product/OrderSuccess";
import BigCartButton from "./BigCartButton";
import Contact from "./components1/Contact";
import Book from "./components1/BookPage"








function App() {

  return (  

            <Router>        
                <Routes>
                  <Route exact path="/" element={<Homepage/>}/>
                  <Route path="/about" element={<AboutUs/>}/> 
                  <Route path="/service" element={<Services/>}/>
                  <Route path='/bookpage' element={<Book/>}/>
                  <Route path="product" element={<Product/>}/>
                  <Route path="/product/cartPage" element={<CartPage />}></Route>
                  <Route path="/cartPage" element={<BigCartButton />}></Route>
                  <Route path="/orderSuccess" element={<OrderSuccess />}></Route>
                  <Route path="/blog" element={<Blog/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                </Routes>     
            </Router>

  )
}

export default App


