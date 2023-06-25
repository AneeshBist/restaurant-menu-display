import React from "react";

const Card = ({ item }) => {
  return (
    <div className="col-md-4 mt-5">
      <div className="">
        <div className="card p-2">
          <div className="d-flex align-item-center ">
            <div className="image align-self-center">
              <img
                src={item.img}
                alt={item.name}
                className="rounded"
                style={{ width: "5rem" }}
              />
            </div>

            <div className="d-flex flex-column align-items-end p-2">
              <span className="name">{item.name}</span>
              <span className="price">{item.price}</span>
              <span className="description">**{item.description}** </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
