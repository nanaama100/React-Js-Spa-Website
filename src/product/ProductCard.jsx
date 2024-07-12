import React from "react";
import { useCart } from "react-use-cart";
import { BsCart3 } from "react-icons/bs";
import './ProductCard.css'



function ProductCard(props) {
  const { addItem } = useCart();

  return (
    <>
    <dl className="product-page">
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        data-bs-backdrop="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-body">Added to cart!</div>
          </div>
        </div>
      </div>

      <div className="ProductSeparate">
      <div className="productCard">
        <img className="cardImage" src={props.img} alt={props.alt} />
        <div className="productCardContent">
          <dt>
            <span className="cardTitle">{props.productName}</span>
          </dt>
          <dd>
            <span className="product-descript">{props.productDesc}</span>
          </dd>

          <span className="productCardPrice">${props.price}</span>
        </div>

        <a
          className="cardButton"
          onClick={() => [addItem(props)]}
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          <span className="CartIconcard"><BsCart3 /></span>
          {props.button}
        </a>
      </div>
      </div>
    </dl>   
    </>
  );
}

export default ProductCard;
