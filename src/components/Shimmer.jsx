const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center my-6">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="bg-pink-100 w-72 h-80 m-3 px-5 rounded-3xl flex flex-col justify-center items-center shadow-xl"
          >
            <div className="bg-slate-50 w-56 h-44 my-4 rounded-3xl justify-center"></div>
            <div className="w-60 h-8 bg-slate-50 rounded-full my-2 text-center"></div>
            <div className="w-60 h-8 bg-slate-50 rounded-full my-2 align-middle"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
