import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <div className="Abouth1">About Us</div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        dolorem laudantium hic nisi asperiores iste! Quas unde assumenda
        veritatis officia minus dolorum natus mollitia omnis, placeat dolor
        corrupti? Perspiciatis natus ut eligendi deserunt saepe itaque alias
        autem quasi! Quaerat, enim adipisci. Dolor ipsum vel quod, veniam
        reprehenderit necessitatibus explicabo odit!
      </p>
      <Outlet />
    </>
  );
};
export default About;
