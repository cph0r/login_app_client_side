import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {loggedIn === false && (
              <>
                <li class="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                <li class="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>

              </>
            )}
            {loggedIn === true && (
              <>
                <li class="nav-item"><Link className="nav-link" to="/customer">Customers</Link></li>
                <LogOutBtn />
              </>
            )}      
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
