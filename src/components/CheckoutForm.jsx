import { useRef } from "react";
import { insertOrder } from "../modules/db";
import React from "react";

function CheckoutForm(props) {
  const theForm = useRef(null);

  function submit(e) {
    e.preventDefault();

    insertOrder({
      name: theForm.current.elements.name.value,
      email: theForm.current.elements.email.value,
      adress: theForm.current.elements.adress.value,
      basket: props.cart,
    });
  }
  return (
    <form onSubmit={submit} ref={theForm}>
      <div className="form-control">
        <label htmlFor="form-name">Name</label>
        <input required type="text" name="name" id="form-name" />
      </div>
      <div className="form-control">
        <label htmlFor="form-email">Email</label>
        <input required type="email" name="email" id="form-email" />
      </div>
      <div className="form-control">
        <label htmlFor="form-adress">Adress</label>
        <textarea required name="adress" id="form-adress" />
      </div>
      <button>Pay</button>
    </form>
  );
}

export default CheckoutForm;
