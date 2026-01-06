import { useState } from "react";
import { restaurantData } from "../Utility/Constant.jsx";
import { Restaurant } from "./Restaurant.jsx";

export var Body = () => {
  //state variable to hold the data
  const [listOfRestaurants, setListOfRestaurants] = useState(restaurantData);
  return (
    <div className="body">
      <div className="search">
        <input type="text" placeholder="Search here"></input>
        <button>Search</button>
      </div>
      <div className="filter">
        <button
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4.5
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-list">
        {listOfRestaurants.map((rest) => (
          <Restaurant key={rest.card.card.info.id} restObj={rest} />
        ))}
      </div>
    </div>
  );
}