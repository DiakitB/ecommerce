import "./singn-in-form.style.scss";
import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import {
  createAutUserWithEmailAndPassword,
  getUsertDocument,
} from "../../utils/util";
import { async } from "@firebase/util";
import FormIput from "../formInput/form-input.component";
import Button from "../button/button.component";
const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SingInForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;
  // const { setCurenUser } = useContext(UserContext);
  const clearFormField = () => {
    setFormField(defaultFormField);
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAutUserWithEmailAndPassword(email, password);
      // setCurenUser(user);
      await getUsertDocument(user, { displayName });

      clearFormField();
    } catch (err) {
      console.log(err);
    }
  };
  const onChangHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="singn-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign up with your email and password.</span>
      <form onSubmit={submitHandler}>
        <FormIput
          label="Display Name"
          type="text"
          required
          onChange={onChangHandler}
          name="displayName"
          value={displayName}
        />

        <FormIput
          label="Email"
          type="email"
          required
          onChange={onChangHandler}
          name="email"
          value={email}
        />

        <FormIput
          label="Password"
          type="password"
          required
          onChange={onChangHandler}
          name="password"
          value={password}
        />

        <FormIput
          label="Confirm Password"
          type="password"
          required
          onChange={onChangHandler}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button buttonType="google" type="submit">
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default SingInForm;
