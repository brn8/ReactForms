import "./App.css";
import SignUpForm from "./Components/SignUpForm";
import Authenticate from "./Components/Authenticate";
import { useState } from "react";
function App() {
  const [token, setToken] = useState(null);
  const [active, setActive] = useState(false);
  const [message, setMessage] = useState(false);

  return (
    <>
      <SignUpForm
        token={token}
        setToken={setToken}
        setActive={setActive}
        message={message}
        setMessage={setMessage}
      />
      <br />
      <Authenticate
        token={token}
        active={active}
        setActive={setActive}
        setMessage={setMessage}
      />
    </>
  );
}

export default App;
