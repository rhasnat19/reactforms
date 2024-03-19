import { useForm } from "react-hook-form";
import ErrorNotifier from "./ErrorNotifier.jsx";
import { useEffect } from "react";

export default function Login({ handleFormSwitcher }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    // formState,
    // formState: { isSubmitSuccessful },
  } = useForm();

  // useEffect(() => {
  //   if (formState.isSubmitSuccessful) {
  //     reset({ email: "", password: "" });
  //   }
  // }, [formState, reset]);

  function onSubmit(data) {
    console.log(data);
  }

  function handleReset() {
    reset(
      {
        email: "",
        password: "",
      },
      {
        keepErrors: false,
        keepDirty: false,
        keepIsValid: true,
        shouldValidate: false,
      }
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            autoComplete="username"
            {...register("email", { required: true, maxLength: 20 })}
          />
          {errors.email && (
            <ErrorNotifier text={"Please enter a valid email address"} />
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="current-password"
            {...register("password", { required: true, minLength: 6 })}
          />
          {errors.password && (
            <ErrorNotifier text="Please enter a valid password" />
          )}
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat" onClick={handleReset}>
          Reset
        </button>
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
