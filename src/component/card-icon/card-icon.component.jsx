import "./card-icon.style.scss";
import { ReactComponent as Icon } from "../../assests/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CardIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const toggleCartOnpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleCartOnpen}>
      <Icon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};
export default CardIcon;
