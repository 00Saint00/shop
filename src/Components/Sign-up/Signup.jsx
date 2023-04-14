import React from "react";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  UserDocumentFromAuth,
} from "../../Utils/Firebase/Firebase";
import FormInput from "../Form-input/FormInput";
import "./Signup.scss";
import Button from "../Button/Button";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Signup = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await UserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-a;ready-in-use") {
        alert("Email already in use");
      }
      console.log("Theres an error ".error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          label="Display Name"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <FormInput
          type="email"
          required
          label="Email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          type="password"
          required
          label="Password"
          onChange={handleChange}
          name="password"
          minLength={5}
          value={password}
        />

        <FormInput
          type="password"
          required
          label="Change Password"
          onChange={handleChange}
          name="confirmPassword"
          minLength={5}
          value={confirmPassword}
        />
        <Button type="submit"> Sign Up</Button>
      </form>
    </div>
  );
};

export default Signup;
