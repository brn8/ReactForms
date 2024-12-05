import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const SignUpForm = ({ token, setToken, setActive, setMessage, message }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleUserName = (e) => {
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: userName, password: password }),
        }
      );
      const result = await response.json();
      setToken(result);
    } catch (err) {
      console.log(error);
    }
    setUserName("");
    setPassword("");
    setMessage(true);
    setActive(false);
  };
  return (
    <>
      <h2>Sign Up</h2>
      <br />
      {message && <p style={{ color: "green" }}>{token.message}</p>}
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label class="form-label">Username: </label>
          <input
            type="text"
            class="form-control"
            onChange={handleUserName}
            value={userName}
            minLength={2}
            required
          />
        </div>
        <br />
        <div class="mb-3">
          <label class="form-label">Password: </label>
          <input
            type="text"
            class="form-control"
            onChange={handlePassword}
            value={password}
            minLength={5}
            required
          />
        </div>

        <br />
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};

export default SignUpForm;
