import { useState } from "react";
import Header from "./components/Header.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/SignUp.jsx";

function App() {
  const [isSignUp, setIsSignUp] = useState(false);

  function handleFormSwitcher(identifier) {
    if (identifier === "signin") {
      setIsSignUp(false);
    } else {
      setIsSignUp(true);
    }
  }
  return (
    <>
      <Header />
      <main>
        {isSignUp && <Signup handleFormSwitcher={handleFormSwitcher} />}
        {!isSignUp && <Login handleFormSwitcher={handleFormSwitcher} />}
      </main>
    </>
  );
}

export default App;
