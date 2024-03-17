import { useState } from "react";

export default function Login() {
  const [enetredValues, setEnterenValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({ email: false, password: false });

  const isEmailIsInvalid = didEdit.email && !enetredValues.email.includes("@");

  const isPasswordIsIvalid =
    didEdit.password && enetredValues.password.length < 8;

  function handleSubmit(event) {
    event.preventDefault();
    setEnterenValues({
      email: "",
      password: "",
    });
  }

  function handleInputChange(identifier, event) {
    setEnterenValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: false,
    }));
  }

  function handleInputBlue(identifier) {
    setDidEdit((prev) => ({
      ...prev,
      [identifier]: true,
    }));
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
            onBlur={() => handleInputBlue("email")}
            onChange={(event) => handleInputChange("email", event)}
            value={enetredValues.email}
          />
          {isEmailIsInvalid && (
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
            onBlur={() => handleInputBlue("password")}
            autoComplete="current-password"
            onChange={(event) => handleInputChange("password", event)}
            value={enetredValues.password}
          />
          {isPasswordIsIvalid && (
            <div className="control-error">
              <p>Pass must be of 8 characters</p>
            </div>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
