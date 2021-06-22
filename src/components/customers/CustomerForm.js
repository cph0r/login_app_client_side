import axios from "axios";
import React, { useState } from "react";

function CustomerForm({ getCustomers }) {
  const [customerName, setCustomerName] = useState("");

  async function saveCustomer(e) {
    e.preventDefault();

    try {
      const customerData = {
        name: customerName,
      };
      // await axios.post("http://localhost:5000/dashboard/", customerData);
      await axios.post(
        "https://hreokuloginapp.herokuapp.com/dashboard/",
        customerData
      );
      getCustomers();
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Create Customer</h1>
      <form onSubmit={saveCustomer} className="mb-3 p-3">
        <div className="mb-3 p-3">
          <input
            type="text"
            className="form-control"
            placeholder="Customer name"
            onChange={(e) => {
              setCustomerName(e.target.value);
            }}
            value={customerName}
          />
        </div>
        <button className="btn btn-primary" type="submit">Save new customer</button>
      </form>
    </div>
  );
}

export default CustomerForm;