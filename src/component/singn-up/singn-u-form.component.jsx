import "./singn-up-form.style.scss";
import { useState } from "react";
// import { UserContext } from "../../contexts/user.context";
import {
  userSingnIn,
  getUsertDocument,
  singWithGoogle,
} from "../../utils/util";
import { async } from "@firebase/util";
import FormIput from "../formInput/form-input.component";
import Button from "../button/button.component";
// import { useContext } from "react";
// import { UserContext } from "../../contexts/user.context";
const defaultFormField = {
  email: "",
  password: "",
};
const SingnUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;
  // const { setCurenUser } = useContext(UserContext);

  const clearFormField = () => {
    setFormField(defaultFormField);
  };
  const singEmailPassword = async () => {
    await singWithGoogle();
  };

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const { user } = await userSingnIn(email, password);
      // setCurenUser(user);

      clearFormField();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("wrong password");
          break;
        case "auth/user-not-found":
          alert("no account associated with this emaail");
          break;
        default:
          console.log(error);
      }
    }
  };
  const onChangHandler = (event) => {
    const { name, value } = event.target;
    setFormField({ ...formField, [name]: value });
  };
  return (
    <div className="singn-up-container">
      <h2>Already have an account ?</h2>
      <span>Sign in with your email and password.</span>
      <form onSubmit={submitHandler}>
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
        {/* <div className="button-container"> */}
        <Button buttonType="google" type="submit">
          Sign in
        </Button>
        {/* </div> */}
        <div className="button-container-2">
          <Button type="button" buttonType="google" onClick={singEmailPassword}>
            Sign in with google
          </Button>
        </div>
      </form>
    </div>
  );
};
export default SingnUpForm;
