import "./nav.style.scss";
import { Outlet, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/user.context";
import { Fragment } from "react";
import { ReactComponent as CrwnLogo } from "../../assests/crown.svg";
import { signOutUser } from "../../utils/util";
import { async } from "@firebase/util";
import CardIcon from "../../component/card-icon/card-icon.component";
import CardDropdown from "../../component/card-dropdown/card-dropdown.component";
import { CartContext } from "../../contexts/cart.context";
import { ReactComponent as Icone } from "../../assests/menu.svg";
import { ReactComponent as Icone2 } from "../../assests/close.svg";

const Navigation = () => {
  const { curentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  console.log(curentUser);
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  // className={`app ${isActive ? "danger" : ""}`}
  // };
  return (
    <Fragment>
      <div className={`navigation ${!isActive ? "nav-open" : ""}`}>
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
        {/* <div className="celular"> */}
        <button className="btn-nav" onClick={handleToggle}>
          <Icone className="icone1 nav-link" name="menu" />
          <Icone2 className="icone2 nav-link" name="close" />
        </button>
        {/* </div> */}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
//
