import React, { useState } from "react";
import "./List.scss";
import Card from '../Card/Card'

const List = () => {

    

  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1625698311031-f0dd15be5144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long Sleeve T-shirt",
      isNew: true,
      oldPrice: 19,
      newPrice: 15,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=327&q=80",
      title: "Polo shirt",
      isNew: true,
      oldPrice: 12,
      newPrice: 10,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1523205565295-f8e91625443b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=465&q=80",
      title: "Denim Jacket",
      isNew: true,
      oldPrice: 12,
      newPrice: 10,
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Casual Coat",
      isNew: false,
      oldPrice: 12,
      newPrice: 10,
    },
  ];
  return <div className="list">
    {data.map(item=>(
        <Card item={item} key={item.id}/>
    ))}
  </div>;
};

export default List;