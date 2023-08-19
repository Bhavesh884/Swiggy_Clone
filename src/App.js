import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import Footer from "./components/Footer";
import RestDetail from "./components/RestDetail";
import Profile from "./components/Profile.jsx";
import Shimmer from "./components/Shimmer";

const InstaMart = lazy(() => import("./components/InstaMart"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const AppLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: (
          <Suspense>
            <Body />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <About />
          </Suspense>
        ),
        errorElement: <Error />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            errorElement: <Error />,
          },
        ],
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Contact />
          </Suspense>
        ),
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:id",
        element: <RestDetail />,
        errorElement: <Error />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <InstaMart />
          </Suspense>
        ),
        errorElement: <Error />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Error />);
root.render(<RouterProvider router={appRouter} />);
