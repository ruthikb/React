import { restaurantData } from "../Utility/Constant.jsx";
import { Restaurant } from "./Restaurant.jsx";

export var Body = () => {
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search here"></input>
        <button>Search</button>
      </div>
      <div className="restaurant-list">
        {restaurantData.map((rest) => (
          <Restaurant key={rest.card.card.info.id} restObj={rest} />
        ))}
      </div>
    </div>
  );
}