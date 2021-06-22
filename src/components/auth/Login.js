import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      // await axios.post("http://localhost:5000/auth/login", loginData);
      await axios.post(
        "https://hreokuloginapp.herokuapp.com/auth/login",loginData);
      await getLoggedIn();
      history.push("/");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Log in to your account</h1>
      <form  onSubmit={login} className="mb-3 p-3">
        <div className="mb-3 p-3">
          <label className="form-label">Email address</label>
          <input
            className="form-control"
            type="email"
            aria-describedby="emailHelp"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 p-3">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button className="btn btn-primary" type="submit">Log in</button>
      </form>
    </div>
  );
}

export default Login;