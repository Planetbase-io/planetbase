import React, { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPass: "",
  });
  const { password, confirmPass } = passwords;
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [togglePass, setTogglePass] = useState(false);
  const navigate = useNavigate();
  const { resetToken } = useParams();
  const handlePassword = (e) => {
    setPasswords((prevValue) => {
      return { ...prevValue, [e.target.name]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const resetUrl = `https://planetbase-api.onrender.com/api/auth/resetPassword/${resetToken}`;
    setIsLoading(true);
    if (password !== confirmPass) {
      console.log("Passwords do not match");
      setError("Passwords do not match");
    } else {
      Axios.put(resetUrl, { password })
        .then((res) => {
          console.log(res);
          setIsLoading(false);
          setMessage(
            "Password has been successfully changed. Redirecting to login"
          );
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .catch((err) => {
          console.error(err);
          setIsLoading(false);
          setError(err.message);
        });
    }
  };
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "1rem" }}>
        <h1>Reset Password</h1>
        <p>Type in a new password below to reset your forgotten password</p>
        <small
          className="password-notification"
          style={{
            textAlign: "center",
          }}
        >
          Passwords must contain at least 8 characters, <br />
          and must have at least one capital, one lower-case letter (Aa-Zz),{" "}
          <br />
          one special symbol (#, &, % etc), and one number (0-9)
        </small>
      </div>
      <form
        style={{ padding: "2rem", textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <p>{message}</p>
        {error && <p>{error}</p>}
        <input
          type={togglePass ? "text" : "password"}
          name="password"
          placeholder="New Password"
          onChange={handlePassword}
          required
          style={{ marginBottom: "10px", width: "100%" }}
          value={password}
        />
        <br />
        <input
          type={togglePass ? "text" : "password"}
          name="confirmPass"
          placeholder="Confirm Password"
          onChange={handlePassword}
          required
          value={confirmPass}
          style={{ width: "100%" }}
        />
        <p
          onClick={() => setTogglePass(!togglePass)}
          style={{ textDecoration: "underline", cursor: "pointer" }}
        >
          {togglePass ? "Hide Password" : "Show Password"}
        </p>
        <button
          style={{
            color: "white",
            padding: "0.8rem 2rem 0.8rem 2rem",
            backgroundColor: "#0F255F",
            borderRadius: "10px",
            marginTop: "1rem",
            fontSize: "0.8rem",
          }}
          type="submit"
        >
          {isLoading ? "Resetting Password" : "Reset Password"}
        </button>
      </form>
      <p style={{ textAlign: "center" }}>{confirm}</p>
    </div>
  );
};

export default ResetPassword;
