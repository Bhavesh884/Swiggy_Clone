import { useState } from "react";

const Section = ({ title, detail, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black m-2 p-2">
      <div className="flex justify-between flex-col">
        <h3 className="font-bold text-lg">{title}</h3>
        {isVisible ? (
          <div className="my-3">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 my-2"
              onClick={() => {
                setIsVisible();
              }}
            >
              Read Less
            </button>
            <p>{detail}</p>
          </div>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-32 my-2"
            onClick={() => {
              setIsVisible();
            }}
          >
            Read More
          </button>
        )}
      </div>
    </div>
  );
};

const InstaMart = () => {
  const [visibleSection, setVisibleSection] = useState("about");
  return (
    <div>
      <h1 className="font-bold text-3xl my-3 text-center">InstaMart</h1>
      <Section
        title={"About InstaMart"}
        detail={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni inventore placeat incidunt quia ipsam exercitationem quisquam, iure eligendi. At quam deleniti dolorem amet atque cum quasi provident harum ut laudantium et, nesciunt accusamus? Aspernatur laboriosam quas vel. Quia consectetur id aspernatur voluptate dignissimos ut neque sequi, dolor hic, quidem beatae. Quia a quis molestias officiis aut alias architecto quasi iusto, fugit neque, necessitatibus consequatur eaque ullam omnis, libero animi exercitationem! Cupiditate praesentium quod doloribus officiis laborum voluptatibus, itaque voluptatem corrupti dolor nulla nemo magni reiciendis similique magnam quo temporibus ratione ex expedita sapiente animi cum, modi voluptates. Cumque, incidunt."
        }
        isVisible={visibleSection === "about"}
        setIsVisible={() => {
          if (visibleSection === "about") {
            setVisibleSection("");
          } else {
            setVisibleSection("about");
          }
        }}
      />
      <Section
        title={"Team InstaMart"}
        detail={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni inventore placeat incidunt quia ipsam exercitationem quisquam, iure eligendi. At quam deleniti dolorem amet atque cum quasi provident harum ut laudantium et, nesciunt accusamus? Aspernatur laboriosam quas vel. Quia consectetur id aspernatur voluptate dignissimos ut neque sequi, dolor hic, quidem beatae. Quia a quis molestias officiis aut alias architecto quasi iusto, fugit neque, necessitatibus consequatur eaque ullam omnis, libero animi exercitationem! Cupiditate praesentium quod doloribus officiis laborum voluptatibus, itaque voluptatem corrupti dolor nulla nemo magni reiciendis similique magnam quo temporibus ratione ex expedita sapiente animi cum, modi voluptates. Cumque, incidunt."
        }
        isVisible={visibleSection === "team"}
        setIsVisible={() => {
          if (visibleSection === "team") {
            setVisibleSection("");
          } else {
            setVisibleSection("team");
          }
        }}
      />
      <Section
        title={"Careers at InstaMart"}
        detail={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo magni inventore placeat incidunt quia ipsam exercitationem quisquam, iure eligendi. At quam deleniti dolorem amet atque cum quasi provident harum ut laudantium et, nesciunt accusamus? Aspernatur laboriosam quas vel. Quia consectetur id aspernatur voluptate dignissimos ut neque sequi, dolor hic, quidem beatae. Quia a quis molestias officiis aut alias architecto quasi iusto, fugit neque, necessitatibus consequatur eaque ullam omnis, libero animi exercitationem! Cupiditate praesentium quod doloribus officiis laborum voluptatibus, itaque voluptatem corrupti dolor nulla nemo magni reiciendis similique magnam quo temporibus ratione ex expedita sapiente animi cum, modi voluptates. Cumque, incidunt."
        }
        isVisible={visibleSection === "career"}
        setIsVisible={() => {
          if (visibleSection === "career") {
            setVisibleSection("");
          } else {
            setVisibleSection("career");
          }
        }}
      />
    </div>
  );
};

export default InstaMart;
