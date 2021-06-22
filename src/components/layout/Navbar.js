import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import LogOutBtn from "../auth/LogOutBtn";

function Navbar() {
  const { loggedIn } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            {loggedIn === false && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/login">Log in</Link></li>

              </>
            )}
            {loggedIn === true && (
              <>
                <li className="nav-item"><Link className="nav-link" to="/customer">Customers</Link></li>
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
