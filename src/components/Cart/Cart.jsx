import React from "react";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import './Cart.scss'
const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1625698311031-f0dd15be5144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
  ];
  return (
    <div className="cart">
      <h1>Your cart</h1>
      {
        data?.map(item=>(
            <div className="item" key={item.id}>

            <img src={item.img} alt="" />

            <div className="details">
                <h3>{item.title}</h3>
                <p>{item.title?.substring(0,70)}</p>
                <div className="price">
                    ${item.newPrice}
                </div>
            </div>
            <DeleteOutlineIcon className="delete"/>
            </div>
        ))
      }

      <div className="total">
        <span>SUBTOTAL</span>
        <span>$100</span>

      </div>
      <button>CHECKOUT</button>
      <span className="reset">Reset</span>
      
    </div>
  );
};

export default Cart;
