import "./button.style.scss";
const Button = ({ children, buttonType, ...otherProps }) => {
  const BUTTON_TYPE = {
    google: "google-sign-in",
    inverted: "inverted ",
  };
  return (
    <div>
      <button
        className={`button-container ${BUTTON_TYPE[buttonType]}`}
        {...otherProps}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
