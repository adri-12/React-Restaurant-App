import { faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="items-container">
        <a href="/">
          <h2>FoodDelivery</h2>
        </a>
        <div className="account-container">
          <div className="account">
            <FontAwesomeIcon icon={faUser} />
            <span>Contul Meu</span>
          </div>
          <FontAwesomeIcon icon={faBagShopping} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
