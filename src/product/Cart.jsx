import React, { useState } from "react";
import { useCart } from "react-use-cart";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import './Cart.css'

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_0ghkmn1",
      "template_4zxyuy7",
      e.target,
      "user_XoOWD72t4E9WiscAjqJaE"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputDelivery, setInputDelivery] = useState("");

  if (isEmpty)
    return (
      <div className="cart-container">
        <h2>Your Cart is Empty</h2>
      </div>
    );

  return (
    <>
    <div>
    <h2 id='SpaHeading'>OUR SHOP</h2>
    <img src='/public/Images/BackgroundNew1.jpg' alt='' className='AboutBackgroundImage'/>
    </div>

    <h3 id="ListInCart" style={{textAlign: 'center', marginTop: '80px', textDecoration: 'underline'}}>List of Items in Cart</h3>
    <div className="cart-container" style={{marginTop: '-70px'}}>
      <div className="cart-list">
        {items.map((item, index) => {
          return (
            <div className="cart-table">
              <div>
                <img src={item.img} className="cart-img" alt="" />
              </div>
              <div className="cart-product">
                <h2 className="cart-product-name">{item.productName}</h2>
              </div>
              <div className="updateCart cart-product">
                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>

                {item.quantity}

                <button
                  type="button"
                  className="btn btn-light"
                  onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <div className="delete-item cart-product">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => removeItem(item.id)}
                >
                  Delete
                </button>
              </div>
              <div className="cart-product">
                <td>
                  ${item.price * item.quantity} ({item.quantity})
                </td>
              </div>
            </div>
          );
        })}
      </div>

      <div className="check-out">
        <h1>Subtotal ({totalItems} items)</h1>
        <h3>${cartTotal}</h3>

        <a
          className="btn btn-primary cart-button"
          data-bs-toggle="modal"
          href="#exampleModalToggle"
          role="button"
        >
          Place an Order
        </a>
        <div
          className="modal fade"
          id="exampleModalToggle"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel">
                  Your info
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form
                  className="row g-3 needs-validation"
                  onSubmit={sendEmail}
                  id="order-form"
                >
                  <div className="col-md-4">
                    <label for="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={inputName}
                      onChange={(e) => setInputName(e.target.value)}
                      required
                    />
                    <div className="valid-feedback">Looks good!</div>
                  </div>

                  <div className="col-md-4">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={inputEmail}
                      onChange={(e) => setInputEmail(e.target.value)}
                      required
                    />
                    <div className="invalid-feedback">
                      Please provide an email.
                    </div>
                  </div>
                  <div className="col-md-4">
                    <label for="delivery" className="form-label">
                      Delivery methods
                    </label>
                    <select
                      className="form-select"
                      id="delivery"
                      name="delivery"
                      required
                      value={inputDelivery}
                      onChange={(e) => setInputDelivery(e.target.value)}
                    >
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>Pick up</option>
                      <option>Drop off</option>
                      <option>Delivery</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label for="city" className="form-label">
                      City (*Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="city"
                      name="city"
                    />
                  </div>
                  <div className="col-md-8">
                    <label for="address" className="form-label">
                      Address (*Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      name="address"
                    />
                  </div>

                  <div className="col-md-4">
                    <label for="state" className="form-label">
                      State (*Optional)
                    </label>
                    <select className="form-select" id="state" name="state">
                      <option selected disabled value="">
                        Choose...
                      </option>
                      <option>Alabama </option>
                      <option>Alaska </option>
                      <option>Arizona </option>
                      <option>Arkansas </option>
                      <option>California </option>
                      <option>Colorado </option>
                      <option>Connecticut </option>
                      <option>Delaware </option>
                      <option>Florida </option>
                      <option>Georgia </option>
                      <option>Hawaii </option>
                      <option>Idaho </option>
                      <option>Illinois </option>
                      <option>Indiana </option>
                      <option>Iowa </option>
                      <option>Kansas </option>
                      <option>Kentucky </option>
                      <option>Louisiana </option>
                      <option>Maine </option>
                      <option>Maryland </option>
                      <option>Massachusetts </option>
                      <option>Michigan </option>
                      <option>Minnesota </option>
                      <option>Mississippi </option>
                      <option>Missouri </option>
                      <option>Montana </option>
                      <option>Nebraska </option>
                      <option>Nevada </option>
                      <option>New Hampshire </option>
                      <option>New Jersey </option>
                      <option>New Mexico </option>
                      <option>New York </option>
                      <option>North Carolina </option>
                      <option>North Dakota </option>
                      <option>Ohio </option>
                      <option>Oklahoma </option>
                      <option>Oregon </option>
                      <option>Pennsylvania </option>
                      <option>Rhode Island </option>
                      <option>South Carolina </option>
                      <option>South Dakota </option>
                      <option>Tennessee </option>
                      <option>Texas </option>
                      <option>Utah </option>
                      <option>Vermont </option>
                      <option>Virginia </option>
                      <option>Washington </option>
                      <option>West Virginia </option>
                      <option>Wisconsin </option>
                      <option>Wyoming</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label for="zip" className="form-label">
                      Zip (*Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="zip"
                      name="zip"
                    />
                  </div>
                  <div className="col-md-4">
                    <label for="phone-number" className="form-label">
                      Phone number (*Optional)
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone-number"
                      name="phone-number"
                    />
                  </div>
                  <div className="mb-3">
                    <label for="custom-message" className="form-label">
                      Message (*Optional)
                    </label>
                    <textarea
                      className="form-control"
                      id="custom-message"
                      placeholder="Let me know if you have any questions or requests!"
                      name="custom-message"
                    ></textarea>
                  </div>
                  <div className="order-sum">
                    <input
                      type="text"
                      name="order"
                      value={items.map((item, index) => {
                        return item.productName;
                      })}
                    />
                    <input type="text" name="order-total" value={cartTotal} />
                  </div>
                  <div className="modal-footer col-12">
                    <button
                      className="btn btn-primary"
                      data-bs-target="#exampleModalToggle2"
                      data-bs-toggle="modal"
                      disabled={!inputName || !inputEmail || !inputDelivery}
                    >
                      Confirm
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="exampleModalToggle2"
          aria-hidden="true"
          aria-labelledby="exampleModalToggleLabel2"
          tabindex="-1"
        >
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalToggleLabel2">
                  Summary
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {items.map((item, index) => {
                  return (
                    <table className="cart-table">
                      <tr key={index}>
                        <td rowspan="2">
                          <img
                            src={item.img}
                            className="cart-img"
                            alt={item.alt}
                          />
                        </td>
                        <td className="cart-product-name">
                          {item.productName}
                        </td>

                        <td>
                          ${item.price} ({item.quantity})
                        </td>
                      </tr>
                    </table>
                  );
                })}
                <h2>
                  Total : ${cartTotal} ({totalUniqueItems} items)
                </h2>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  data-bs-dismiss="modal"
                  form="order-form"
                >
                  <Link
                    className="order-success"
                    to="/orderSuccess"
                    onClick={emptyCart}
                  >
                    Submit Order
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Cart;
