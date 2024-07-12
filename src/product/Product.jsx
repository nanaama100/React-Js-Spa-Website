import React, { useState } from "react";
import ProductCard from "./ProductCard";
import productData from "./ProductData";
import { CartProvider } from "react-use-cart";
import BigCartButton from "../BigCartButton";
import Navbar1 from "../components1/Navbar";
import Footer from "../components1/footer";
import "./Product.css"

function createProduct(contents) {
  return (
    <ProductCard
      id={contents.id}
      img={contents.img}
      key={contents.id}
      alt={contents.alt}
      productName={contents.name}
      productDesc={contents.desc}
      price={contents.price}
      type={contents.type}
      button={contents.button}
    />
  );
}

function Product() {
  const [productList, setProductList] = useState(
    productData.map(createProduct)
  );

  function showAll() {
    return setProductList(productData.map(createProduct));
  }

  function showCakes() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "soap";
        })
        .map(createProduct)
    );
  }

  function showCookies() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "spices";
        })
        .map(createProduct)
    );
  }

  function showPastries() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "oil";
        })
        .map(createProduct)
    );
  }

  function showPies() {
    return setProductList(
      productData
        .filter((item) => {
          return item.type === "packages";
        })
        .map(createProduct)
    );
  }

  return (
    <>
    <Navbar1/>
      <div>
        <h2 id='SpaHeading'>OUR SHOP</h2>
        <img src='/public/Images/BackgroundNew1.jpg' alt='' className='AboutBackgroundImage'/>
      </div>
    <div className="product-container">
      <h2 style={{textAlign:'center'}}>CATEGORIES</h2>
      <div className="product-buttons">
        <button className="product-category-button" onClick={() => showAll()}>
          All
        </button>
        <button className="product-category-button" onClick={() => showCakes()}>
          SOAPS
        </button>
        <button
          className="product-category-button"
          onClick={() => showCookies()}
        >
          SPICES
        </button>
        <button
          className="product-category-button"
          onClick={() => showPastries()}
        >
          OIL
        </button>
        <button className="product-category-button" onClick={() => showPies()}>
          PACKAGES
        </button>
      </div>
      <CartProvider>
        <dl className="featureProducts">{productList}</dl>
      </CartProvider>
      <BigCartButton/>
    </div>
    <Footer/>
    </>
  );
}

export default Product;

// {}
