import React, { useState } from "react";
import "./Products.scss";
import List from "../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../components/hooks/useFetch";
const Products = () => {
  const id = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  const {data,loading,error}=useFetch(`/sub-categories?[filters][categories][id][$eq]=${id}`)

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          {data?.map(item=>(<div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">{item.attributes.title}</label>
          </div>))}
          
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input type="radio" value="asc" id="asc" name="price" onChange={()=>setSort('asc')} />
            <label htmlFor="asc">Price (lowest first)</label>
          </div>
          <div className="inputItem">
            <input type="radio" value="desc" id="desc" name="price" onChange={()=>setSort('desc')} />
            <label htmlFor="desc">Price (highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src="https://images.unsplash.com/photo-1506038328654-9c13034fcb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <List catId={id} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  );
};

export default Products;
