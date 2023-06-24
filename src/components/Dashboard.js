import React from "react";
import Card from "./Card";

const Dashboard = () => {
  const item = {
    id: 5,
    img: "./img/aloo-masala.jpg",
    name: "aloo masala",
    category: "dinner",
    price: "₹ 115/-",
    description: "Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum Loerm Ipsum ",
  };

  return (
    <div className="container-fluid">
      Welcome to the dashbord
      <Card item={item} />
    </div>
  );
};

export default Dashboard;
