import { useState } from "react";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Authentication = () => {
  const onChangeHandler = (event) => {};
  return (
    <div>
      <label>Display Name</label>
      <input
        type="text"
        required
        onChange={onChangeHandler}
        name="displyName"
        value={displayName}
      />
    </div>
  );
};
