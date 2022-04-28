import "./nav.style.scss";
import { Outlet, Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { signOutUser } from "../../utils/util";
import { async } from "@firebase/util";
import CardIcon from "../../component/card-icon/card-icon.component";
import CardDropdown from "../../component/card-dropdown/card-dropdown.component";
import { CartContext } from "../../contexts/cart.context";

const Navigation = () => {
  const { curentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(curentUser);
  // const SignOutHandler = async () => {
  //   await signOutUser();
  //   setCurenUser(null);
  // };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/contact">
            Contact us
          </Link>

          {curentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/a">
              SIGN IN
            </Link>
          )}
          <CardIcon />
        </div>
        {isCartOpen && <CardDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
