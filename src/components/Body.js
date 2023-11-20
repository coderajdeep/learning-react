import RestaurantCard from "./RestaurantCard";
import { resObj } from "../mock/restaurant";
const Body = () => {
    const restaurants = resObj.restaurants
    return (
        <div className="body">
            <div className="search-container">
                <form className="form" id="form">
                    <input type="text" className="search-text" id="search-text"></input>
                    <button className="search-button">Search Restaurant</button>
                </form>
            </div>
            <div className="res-container">
                {
                    restaurants.map(restaurant => <RestaurantCard resObj = {restaurant.info} key={restaurant.info.id}/>)
                }
            </div>
        </div>
    )
};

export default Body;