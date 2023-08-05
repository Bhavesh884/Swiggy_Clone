export default RestorentCard = ({ name, image, rating, cuisine }) => (
    <div className="card">
      <img src={image}></img>
      <h2>{name}</h2>
      <h3>{cuisine.join(",")}</h3>
      <h4>{rating + "stars"}</h4>
    </div>
  );