import Navbar from "../../components/NavBar/Navbar";
import { useState } from "react";
import Axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [confirm, setConfirmation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const url = "https://planetbase-api.onrender.com/api/auth/forgotPassword";
  const handleSubmit = (e) => {
    setIsLoading(true);
    e.preventDefault();
    Axios.post(url, { email })
      .then((res) => {
        console.log(res);
        setConfirmation("A password reset link has been sent to your email.");
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err?.message);
        setTimeout(() => {
          setError(null);
        }, 10000);
        console.error(err);
        setIsLoading(false);
      });
  };
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>Forgot Your Password?</h1>
        <p>Don't worry, just enter your email to reset it.</p>
      </div>
      <form
        style={{ margin: "5rem", textAlign: "center" }}
        onSubmit={handleSubmit}
      >
        {error && <p>{error}</p>}
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
            backgroundColor: "#0F255F",
            borderRadius: "10px",
            marginTop: "1rem",
            fontSize: "0.8rem",
          }}
          type="submit"
        >
          {isLoading ? "Sending Recovery Link..." : "Send Recovery Link"}
        </button>
      </form>
      <p style={{ textAlign: "center" }}>{confirm}</p>
    </div>
  );
};

export default ForgotPassword;
