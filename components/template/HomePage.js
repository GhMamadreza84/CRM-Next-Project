import React from "react";
import Card from "./Card";

const HomePage = ({ customers }) => {
  console.log(customers);
  return (
    <div>
      {customers.map((customer) => (
        <Card key={customer._id} customer={customer} />
      ))}
    </div>
  );
};

export default HomePage;
