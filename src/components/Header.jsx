import { useState } from "react";
import { Link } from "react-router-dom";
const Title = () => (
  <Link to={"/"}>
    <img
      className="logoimg"
      alt="logo"
      src="https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/swiggypng-1586771832047.png?fm=png&auto=format"
    />
  </Link>
);

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>
            <Link to={"/"}>Home </Link>
          </li>

          <li>
            <Link to="/about">About </Link>
          </li>
          <li>
            <Link to="/contact">Contact Us </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLogged ? (
        <button onClick={() => setIsLogged(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogged(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
