import { useRef, useState } from "react";

export default function Login({ handleFormSwitcher }) {
  const [formIsInvalid, setFormIsInvalid] = useState({
    IsEmailValid: false,
    isPasswordValid: false,
  });
  const emailRef = useRef();
  const passwordRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log(enteredEmail, enteredPassword);

    const isEmailValid = enteredEmail.includes("@");
    const isPassisValid = enteredPassword.length > 8;
    console.log(enteredPassword.length);

    if (!isEmailValid) {
      setFormIsInvalid((prev) => ({
        ...prev,
        IsEmailValid: true,
      }));
      console.log("formIsInvalid", formIsInvalid);
    } else {
      setFormIsInvalid((prev) => ({
        ...prev,
        IsEmailValid: false,
      }));
    }

    console.log(isPassisValid);

    if (!isPassisValid) {
      setFormIsInvalid((prev) => ({
        ...prev,
        isPasswordValid: true,
      }));
      console.log("formIsInvalid", formIsInvalid);
      return;
    }

    setFormIsInvalid((prev) => ({
      IsEmailValid: false,
      isPasswordValid: false,
    }));

    console.log("Http hitted");
    // emailRef.current.value = "";
    // passwordRef.current.value = "";
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="username"
            ref={emailRef}
          />
          {formIsInvalid.IsEmailValid && (
            <div className="control-error">
              <p>Please enter a valid email address</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            ref={passwordRef}
          />
          {formIsInvalid.isPasswordValid && (
            <div className="control-error">
              <p>Please enter a valid password</p>
            </div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
      <p>
        <button
          type="button"
          className="button button-flat"
          onClick={() => handleFormSwitcher("sigmup")}
        >
          Don't have an account?
        </button>
      </p>
    </form>
  );
}
