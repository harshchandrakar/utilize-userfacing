import React, { useState, useEffect } from "react";
import Edit from "./Edit";
import "./Orders.css";
import Data from "../../static/DummyData.json";
import { v1 as uuidv1 } from "uuid";

function Orders(props) {
  const [edit, setEdit] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [product, setProduct] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [added, setAdded] = useState(false);
  const [id, setId] = useState(null);
  // State
  const [datas, setData] = useState(Data);

  const [updateUsername, setUpdateUsername] = useState();
  const [updateEmail, setUpdateEmail] = useState();
  const [updateProduct, setUpdateProduct] = useState();
  const [updateQty, setUpdateQty] = useState();

  // Effect

  useEffect(() => {
    //consolelog
    setUsername("");
    setEmail("");
    setProduct("");
    setQuantity(0);
  }, [datas]);

  //Add post
  const addPost = () => {
    let newpost = {
      id: uuidv1(),
      customer_name: username,
      customer_email: email,
      product: product,
      quantity: quantity,
    };
    let posts = [newpost, ...datas];
    setData(posts);
    setAdded(false);
  };
  //delete Post
  const deletePost = (key) => {
    let filteredPost = [...datas].filter((obj) => obj.id !== key);
    setData(filteredPost);
  };

  // Update post
  const updatePost = (key) => {
    let updatedpost = {
      id: key,
      customer_name: updateUsername,
      customer_email: updateEmail,
      product: updateProduct,
      quantity: updateQty,
    };

    let unUpdated = [...datas].filter((obj) => obj.id !== key);
    let posts = [updatedpost, ...unUpdated];
    setData(posts);
    setEdit(false);
  };

  const editOpenHandler = (data) => {
    setEdit(true);
    setId(data.id);
    setUpdateUsername(data.customer_name);
    setUpdateEmail(data.customer_email);
    setUpdateProduct(data.product);
    setUpdateQty(data.quantity);
  };
  const editClosehandler = () => {
    setEdit(false);
  };
  const addedopenhandler = () => {
    setAdded(true);
  };
  const addedclosehandler = () => {
    setAdded(false);
  };
  return (
    <div className="orders">
      {edit && (
        <Edit
          username={updateUsername}
          email={updateEmail}
          product={updateProduct}
          quantity={updateQty}
          cancel={editClosehandler}
          save={() => updatePost(id)}
          onUsername={(e) => setUpdateUsername(e.target.value)}
          onEmail={(e) => setUpdateEmail(e.target.value)}
          onProduct={(e) => setUpdateProduct(e.target.value)}
          onQuantity={(e) => setUpdateQty(e.target.value)}
        />
      )}
      {added && (
        <Edit
          username={username}
          email={email}
          product={product}
          quantity={quantity}
          cancel={addedclosehandler}
          save={addPost}
          onUsername={(e) => setUsername(e.target.value)}
          onEmail={(e) => setEmail(e.target.value)}
          onProduct={(e) => setProduct(e.target.value)}
          onQuantity={(e) => setQuantity(e.target.value)}
        />
      )}
      <div>
        <button className="createbutton" onClick={addedopenhandler}>
          Create New
        </button>
      </div>
      <div className="heading">
        <h3>Orders</h3>
      </div>
      <div className="scroller">
        {datas.map((data) => {
          return (
            <div key={data.id} id={data.id} className="cart_card">
              <div className="detail">
                <p>
                  <span>Order ID: </span> {data.id}
                </p>
                <p>
                  <span>Name: </span>
                  {data.customer_name}
                </p>
                <p>
                  <span>Email: </span>
                  {data.customer_email}
                </p>
              </div>
              <div className="product">
                <p>
                  <span>Product: </span>
                  {data.product}
                </p>
                <p>
                  <span>Quantity: </span>
                  {data.quantity}
                </p>
                <button>
                  <i
                    className="fas fa-trash-alt"
                    onClick={() => deletePost(data.id)}
                  ></i>
                </button>
                <button
                  onClick={() => {
                    editOpenHandler(data);
                  }}
                >
                  <i className="fas fa-pen"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Orders;
