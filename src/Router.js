import React, { useContext } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Customers from "./components/customers/Customers";
import Navbar from "./components/layout/Navbar";
import AuthContext from "./context/AuthContext";

function Router() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div><h1 className='text-center'>DASHBOARD</h1></div>
        </Route>
        {loggedIn === false && (
          <>
            <Route path="/register"><Register /></Route>
            <Route path="/login"><Login /></Route>
          </>
        )}
        {loggedIn === true && (
          <>
            <Route path="/dashoard"><Customers /></Route>
          </>
        )}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;  