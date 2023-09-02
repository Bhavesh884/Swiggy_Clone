import "../../index.css";
// import { useRouteError } from "react-router-dom";

const Error = () => {
  // const err = useRouteError();
  // console.log(err);
  return (
    <>
      <img
        className="w-screen h-screen"
        src="https://th.bing.com/th/id/R.db892ba855192943b0fb9b6d6f2bf6cd?rik=l4WrJ7QpC8niOQ&riu=http%3a%2f%2flh5.ggpht.com%2f_9F9_RUESS2E%2fSpV5Yi8Vv5I%2fAAAAAAAAA4E%2fW9-J8eMLokM%2fs800%2f50-Cool-and-Creative-404-Error-Pages-25.jpg&ehk=P95z%2fPDi3gV%2bfq01nXsPHy7z1uQdodPyAG9%2fpkhKIm8%3d&risl=&pid=ImgRaw&r=0"
        alt="404, Page Broke!"
      />
      {/* <h1>{err.status + ", " + err.statusText}</h1> */}
    </>
  );
};
export default Error;
