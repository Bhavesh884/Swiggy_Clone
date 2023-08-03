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

const restaurantlist = [
  {
    data: {
      id: 1,
      name: "Burger Singh",
      cuisine: ["Burgers, Snacks"],
      rating: 3.7,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b",
    },
  },
  {
    data: {
      id: 2,
      name: "Manohar Dairy & Restaurant",
      cuisine: ["Sweets", "Deserts", "Snacks"],
      rating: 4.3,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yhnrql8wxgu8sgqjczos",
    },
  },
  {
    data: {
      id: 3,
      name: "Mahadev Bhojnalaya",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.8,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aipwx1svepzdvsreuszq",
    },
  },
  {
    data: {
      id: 4,
      name: "Rajhans Restaurant",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.7,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b",
    },
  },
  {
    data: {
      id: 5,
      name: "Rotiwala-Bhopal",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.9,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/brteodziq28wckphkg4f",
    },
  },
  {
    data: {
      id: 6,
      name: "Burger Singh",
      cuisine: ["Burgers, Snacks"],
      rating: 3.7,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b",
    },
  },
  {
    data: {
      id: 7,
      name: "Manohar Dairy & Restaurant",
      cuisine: ["Sweets", "Deserts", "Snacks"],
      rating: 4.3,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yhnrql8wxgu8sgqjczos",
    },
  },
  {
    data: {
      id: 8,
      name: "Mahadev Bhojnalaya",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.8,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/aipwx1svepzdvsreuszq",
    },
  },
  {
    data: {
      id: 9,
      name: "Rajhans Restaurant",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.7,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/hmyktxkas3auvpsl728b",
    },
  },
  {
    data: {
      id: 10,
      name: "Rotiwala-Bhopal",
      cuisine: ["North Indian", "South Indian", "Chinese", "Fast Food"],
      rating: 3.9,
      image:
        "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/brteodziq28wckphkg4f",
    },
  },
];
const RestorentCard = ({ name, image, rating, cuisine }) => (
  <div className="card">
    <img src={image}></img>
    <h2>{name}</h2>
    <h3>{cuisine.join(",")}</h3>
    <h4>{rating + "stars"}</h4>
  </div>
);
const Body = () => (
  <div className="restorant-list">
    {restaurantlist.map((res, index) => {
      return <RestorentCard {...res.data} key={res.data.id} />;
    })}
  </div>
);
const AppLayout = () => (
  <>
    <Header></Header>
    <Body />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
