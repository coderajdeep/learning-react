import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {
    console.log('Body')
    let [restaurants, setRestaurants] = useState([])

    const fetechData = async () => {
        const swiggyData = await fetch(API_URL);
        const json = await swiggyData.json(swiggyData);
        const swigyRestaurantsResp = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        // fetchData is being called two times
        // Why ?
        console.log("fetchSwiggyRestaurants");
        setRestaurants(swigyRestaurantsResp);
    }

    useEffect(() => {
        fetechData();
    }, [])

    // Conditional Rendering
    if (restaurants.length === 0) {
        return (
            <div className="shimmer-body">
                <div className="shimmer-res-container">{
                        (() => {
                            const shimmer = []
                            for (let count = 0; count < 12; ++count) {
                                shimmer.push(<Shimmer key={count} />)
                            }
                            return shimmer
                        })()
                    }
                </div>
            </div>
        )
    }

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
                        fetechData();
                        console.log(restaurants.map(restaurant => restaurant.info.avgRating))
                    }
                }
                >Reset Restaurant</button>
            </div>
            <div className="res-container">
                {
                    restaurants.map(restaurant => <RestaurantCard resObj={restaurant.info} key={restaurant.info.id} />)
                }
            </div>
        </div>
    )
};

export default Body;