export default RestorentCard = ({ info }) => (
  <div className="card">
    <img
      src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
        info?.cloudinaryImageId
      }
    ></img>
    <h2>{info?.name}</h2>
    <h3>{info?.cuisines.join(", ")}</h3>
    <h4>{info?.locality}</h4>
  </div>
);
