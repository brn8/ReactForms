import { useState } from "react";

const Authenticate = ({ token, active, setActive, setMessage }) => {
  const [authenticate, setAuthenticate] = useState(null);
  const handleAuthenticate = async () => {
    try {
      if (token) {
        const response = await fetch(
          "https://fsa-jwt-practice.herokuapp.com/authenticate",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token.token}`,
            },
          }
        );
        const result = await response.json();
        setAuthenticate(result);
        console.log(result);
      }
    } catch (err) {
      console.log(err);
    }
    setActive(!active);
    setMessage(false);
  };
  return (
    <>
      <h2>Authentication</h2>
      {active ? (
        authenticate ? (
          <>
            {" "}
            <p style={{ color: "green" }}>{authenticate.message}</p>
            <p>Welcome {authenticate.data.username}!</p>
          </>
        ) : (
          <p style={{ color: "red" }}> Not Authenticated</p>
        )
      ) : (
        ""
      )}
      <button onClick={handleAuthenticate} class="btn btn-primary">
        Authenticate
      </button>
    </>
  );
};

export default Authenticate;
