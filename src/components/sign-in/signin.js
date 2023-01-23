import React, { useState, Fragment } from "react";
import {
  signInWithGooglePopup,
  signInAuthUser,
} from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_STYLES_CLASSES } from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";
const INITIAL_VALUE = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [formInputs, setFormInputs] = useState(INITIAL_VALUE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formInputs.email === "" || formInputs.password === "") {
      return;
    }
    try {
      await signInAuthUser(formInputs.email, formInputs.password);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password");
          break;
        case "auth/user-not-found":
          alert("this email not exist");
          break;
        default:
          console.log(error);
      }
    }
  };
  const logGoogleUser = async () => {
    await signInWithGooglePopup();
  };
  return (
    <Fragment>
      <div>
        <h2>Have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="email"
            type="text"
            name="email"
            required
            value={formInputs.email}
            onChange={handleChange}
          />
          <FormInput
            label="password"
            type="password"
            name="password"
            required
            value={formInputs.password}
            onChange={handleChange}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "5px",
            }}
          >
            <Button type="submit">Sign in</Button>
            <Button
              type="button"
              buttonType={BUTTON_STYLES_CLASSES.google}
              onClick={logGoogleUser}
            >
              Sign in with Google
            </Button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default SignIn;
