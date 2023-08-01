import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Title = () => (
  <a href="/">
    <img
      className="logoimg"
      alt="logo"
      src="https://images.yourstory.com/cs/2/220356402d6d11e9aa979329348d4c3e/swiggypng-1586771832047.png?fm=png&auto=format"
    />
  </a>
);

const Heading1 = () => {
  return (
    <div className="header">
      <Title />
      <div className="navitems">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading1 />);
