import Navbar from "../../components/NavBar/Navbar";
import { useState } from "react";
import Axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [confirm, setConfirmation] = useState("");
  const url = "https://planetbase-api.onrender.com/api/auth/forgotPassword";
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(url, { email })
      .then((res) => {
        console.log(res);
        setConfirmation("A password reset link has been sent to your email.");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <form
        style={{ margin: "5rem", textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email address"
          required
        />
        <br />
        <button
          style={{
            color: "white",
            padding: "0.8rem 2rem 0.8rem 2rem",
            backgroundColor: "#0F6CC9",
            borderRadius: "10px",
            marginTop: "1rem",
            fontSize: "0.8rem",
          }}
          type="submit"
        >
          Send recovery link
        </button>
      </form>
      <p style={{ textAlign: "center" }}>{confirm}</p>
    </div>
  );
};

export default ForgotPassword;
