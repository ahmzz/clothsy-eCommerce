import React, { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "./Product.scss";
const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [quantity,setQuantity]=useState(1)
  const images = [
    "https://images.unsplash.com/photo-1535530705774-695729778c55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    "https://images.unsplash.com/photo-1536588718194-4b38b74a8f54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={images[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={images[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className="price">$100</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde illo
          officiis, omnis inventore quod suscipit consequuntur, perspiciatis
          dolorem doloremque beatae voluptates quia veniam ex doloribus,
          mollitia esse distinctio reprehenderit voluptatum!
        </p>
        <div className="quantity">
          <button onClick={()=>setQuantity(prev=>prev==0?0:prev-1)}>-</button>
          {quantity}
          <button onClick={()=>setQuantity(prev=>prev+1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Product;
