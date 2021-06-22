import React from "react";

function CustomerList({ customers }) {
  function renderCustomers() {
    return customers.map((customer, i) => {
      return <li className="list-group-item" key={i}>{customer.name}</li>
    });
  }

  return (
    <div>
      <ul className="list-group">{renderCustomers()}</ul>
    </div>
  );
}

export default CustomerList;