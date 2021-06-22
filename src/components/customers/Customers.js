import axios from "axios";
import React, { useEffect, useState } from "react";
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";

function Customers() {
  const [customers, setCustomers] = useState([]);

  async function getCustomers() {
    // const customersRes = await axios.get("http://localhost:5000/dashboard/");
    const customersRes = await axios.get(
      "https://hreokuloginapp.herokuapp.com/dashboard/"
    );
    setCustomers(customersRes.data);
  }

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <div>
      <CustomerForm getCustomers={getCustomers} />
      <CustomerList customers={customers} />
    </div>
  );
}

export default Customers;