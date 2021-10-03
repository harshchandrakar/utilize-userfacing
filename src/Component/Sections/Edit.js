import React from "react";
import Modal from "../UI/Modal";
function Edit(props) {
  return (
    <Modal>
      <input
        type="text"
        defaultValue={props.username}
        placeholder="Username"
        onChange={props.onUsername}
      />
      <br />
      <input
        type="email"
        defaultValue={props.email}
        placeholder="Email"
        onChange={props.onEmail}
      />
      <br />
      <input
        type="text"
        defaultValue={props.product}
        placeholder="Products"
        onChange={props.onProduct}
      />
      <br />
      <input
        type="number"
        defaultValue={props.quantity}
        onChange={props.onQuantity}
      />
      <br />
      <button onClick={props.save}> Save </button>
      <button onClick={props.cancel}> Cancel </button>
    </Modal>
  );
}

export default Edit;
