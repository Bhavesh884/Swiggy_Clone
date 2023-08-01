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

const Header = () => {
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
const RestorentCard = () => (
  <div className="card">
    <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b" />
    <h2>Burger Singh</h2>
    <h3>Burgers, Snacks</h3>
    <h4>3.7 stars</h4>
  </div>
);
const Body = () => (
  <div className="restorantlist">
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
    <RestorentCard />
  </div>
);
const AppLayout = () => (
  <>
    <>
      <Header></Header>
      <Body />
    </>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
