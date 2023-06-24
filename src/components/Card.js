import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card p-2">
      <div className="d-flex align-item-center ">
        <div className="">
          <span className="image">
            <img src={item.img} alt="" style={{ width: 50 }} />
          </span>
        </div>
        <div className="d-flex flex-column">
          <span className="name"> item: {item.name}</span>
          <span className="price"> price: {item.price}</span>
          <span className="description">details: {item.description}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
