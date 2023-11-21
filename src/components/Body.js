import RestaurantCard from "./RestaurantCard";
import { resObj } from "../mock/restaurant";
import { useState } from "react";
const Body = () => {
    let [ restaurants, setRestaurants ] = useState(resObj.restaurants)
    return (
        <div className="body">
            <div className="search-container">
                <form className="form" id="form">
                    <input type="text" className="search-text" id="search-text"></input>
                    <button className="search-button">Search Restaurant</button>
                </form>
            </div>
            <div className="filterRestaurant">
                <button className="filterBtn" onClick={
                    () => {
                        const filteredRestaurant = restaurants.filter(restaurant => {
                            return restaurant.info.avgRating >= 4.3
                        })
                        console.log(filteredRestaurant.map(restaurant => restaurant.info.avgRating))
                        setRestaurants(filteredRestaurant)
                    }
                }
                >Filter Top Restaurant</button>

                <button className="resetBtn" onClick={
                    () => {
                        setRestaurants(resObj.restaurants)
                        console.log(resObj.restaurants.map(restaurant => restaurant.info.avgRating))
                    }
                }
                >Reset Restaurant</button>
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