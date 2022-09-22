import React, { useState } from "react";
import Layout from "../../layouts/login-registration";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import useAnalyticsEventTracker from "../../useAnalytics";
import { Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [togglePass, setTogglePass] = useState(false);
  const navigate = useNavigate();
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const gaEventTracker = useAnalyticsEventTracker("Login");

  function onSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const body = {
      email,
      password,
    };

    Axios.post("https://planetbase-api.onrender.com/api/auth/login", body)
      .then((res) => {
        console.log(res.data);
        navigate("/organizer");
        localStorage.setItem("token", res.data.token);
        const { firstname, lastname } = res.data.organizer;
        localStorage.setItem("firstname", firstname);
        localStorage.setItem("lastname", lastname);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error.message);
        if (error.response.data) {
          const { message } = error?.response.data;
          setError(message);
        }
        localStorage.clear();
        if (error.message.includes("Network Error")) {
          setError(
            "Network Error. Check your internet connection and retry again."
          );
        }
        console.log(error);
        setTimeout(() => {
          setError(null);
        }, 10000);
      });
  }

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <small>{error}</small>
      </div>
      <form className="input-container" onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmail}
          required
        />
        <input
          type={togglePass ? "text" : "password"}
          name="password"
          id="password"
          placeholder="Password"
          onChange={handlePassword}
          required
        />
        <small
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={() => setTogglePass(!togglePass)}
          className=""
        >
          {togglePass ? "Hide" : "Show"} Password
        </small>
        {/* <p>Forgot Password ?</p> */}
        <p style={{ paddingTop: "1rem" }}>
          Forgot Password?{" "}
          <Link
            to="/forgotpassword"
            style={{ textDecoration: "underline", color: "#0F255F" }}
          >
            Reset it
          </Link>
        </p>
        <button
          type="submit"
          className="input-button"
          disabled={isLoading ? true : false}
          onClick={() => gaEventTracker("signup")}
          style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
        >
          {isLoading ? "Signing In..." : "Sign In"}
        </button>
      </form>
    </Layout>
  );
}

export default Login;
