import { useState } from "react";
import Navbar from "../../components/NavBar/Navbar";
import Axios from "axios";

const ResetPassword = ({ match }) => {
  const [passwords, setPasswords] = useState({
    password1: "",
    confirmPass: "",
  });
  const { password1, confirmPass } = passwords;
  const handlePassword = (e) => {
    setPasswords((prevValue) => {
      return { ...prevValue, [e.target.value]: e.target.value };
    });
  };
  const handleSubmit = (e) => {
    const resetUrl = `https://planetbase-api.onrender.com/api/auth/resetPassword/${match.params.resetToken}`;
    e.preventDefault();
    if (password1 !== confirmPass) {
      console.log("Passwords do not match");
    }
    Axios.put(resetUrl, password1)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div>
      <Navbar />
      <form style={{ margin: "5rem", textAlign: "center" }}>
        <input
          type="password"
          placeholder="New Password"
          onChange={handlePassword}
          required
          style={{ marginBottom: "10px" }}
        />
        <br />
        <input
          type="password"
          placeholder="Confirm Password"
          onChange={handlePassword}
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
          Change Password
        </button>
      </form>
      <p style={{ textAlign: "center" }}>{confirm}</p>
    </div>
  );
};

export default ResetPassword;
