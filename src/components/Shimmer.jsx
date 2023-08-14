const Shimmer = () => {
  return (
    <div className="shimmer-list">
      {Array(15)
        .fill("")
        .map((e, index) => (
          <div key={index} className="shimmer-card">
            <div className="shimmer-img"></div>
            <div className="shimmer-h2"></div>
            <div className="shimmer-h3"></div>
          </div>
        ))}
    </div>
  );
};
export default Shimmer;
