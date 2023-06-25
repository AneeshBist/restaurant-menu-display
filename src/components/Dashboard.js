import React, { useState } from "react";
import Card from "./Card";
import Menu from "../data/menu";

const Dashboard = () => {
  const [selector, setSelector] = useState("all");
  const menuItems = Menu;

  const filterMenu = (e) => {
    e.preventDefault();
    setSelector(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row text-center justify-content-center mb-5">
        <div>
          <h1 className="mt-2 pg-title">Yumm Yumm Menu</h1>
          <div className="col-6 offset-3 ">
            <div className="filters d-flex justify-content-around mt-3">
              <button
                className={`btn ${
                  selector === "all" ? "btn-select" : "btn-warning"
                }`}
                value="all"
                onClick={filterMenu}
              >
                All
              </button>
              <button
                className={`btn ${
                  selector === "breakfast" ? "btn-select" : "btn-warning"
                }`}
                value="breakfast"
                onClick={filterMenu}
              >
                Breakfast
              </button>
              <button
                className={`btn ${
                  selector === "lunch" ? "btn-select" : "btn-warning"
                }`}
                value="lunch"
                onClick={filterMenu}
              >
                Lunch
              </button>
              <button
                className={`btn ${
                  selector === "evening" ? "btn-select" : "btn-warning"
                }`}
                value="evening"
                onClick={filterMenu}
              >
                Evening
              </button>
              <button
                className={`btn ${
                  selector === "dinner" ? "btn-select" : "btn-warning"
                }`}
                value="dinner"
                onClick={filterMenu}
              >
                Dinner
              </button>
            </div>
          </div>
        </div>

        {menuItems
          .filter((item) =>
            selector === "all" ? item : item.category === selector
          )
          .map((item) => {
            return <Card item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default Dashboard;
