import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Title = () => (
  <Link to={"/"}>
    <img
      className="w-32 h-18 p-2 mr-3"
      alt="logo"
      src="https://cdn2.f-cdn.com/contestentries/23918/7428030/51ad866a54271_thumb420.jpg"
    />
  </Link>
);

const Header = () => {
  const [isLogged, setIsLogged] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((Store) => Store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-pink-50 shadow-xl">
      <Title />
      <div>
        <ul className="flex py-8">
          <li className="px-3">
            <Link to={"/"}>Home </Link>
          </li>

          <li className="px-3">
            <Link to="/about">About </Link>
          </li>
          <li className="px-3">
            <Link to="/contact">Contact Us </Link>
          </li>
          <li className="px-3">
            <Link to="/instamart">InstaMart</Link>
          </li>
          <li className="px-3">
            <Link to="/cart">Cart-{cartItems.length}-Items</Link>
          </li>
        </ul>
      </div>
      <div className="flex">
        <h2 className="my-9 mx-8">
          {" "}
          <span className="font-semibold text-lg text-red-400">User : </span>
          {user.name}
        </h2>
        <span className="my-9 mx-8">{isOnline ? "✅" : "🛑"}</span>
        {isLogged ? (
          <button className="pr-5" onClick={() => setIsLogged(false)}>
            Logout
          </button>
        ) : (
          <button className="pr-5" onClick={() => setIsLogged(true)}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
