import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { API_URL } from "../utils/constants";

const Body = () => {
    // console.log('Body')
    const [restaurants, setRestaurants] = useState([])
    const [allRestaurants, setAllRestaurants] = useState([])
    const [searchedValue, setSearchedValue] = useState('')

    const fetechData = async () => {
        const swiggyData = await fetch(API_URL);
        const json = await swiggyData.json(swiggyData);
        const swigyRestaurantsResp = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        // fetchData is being called two times
        // Why ?
        console.log("fetchSwiggyRestaurants");
        setAllRestaurants(swigyRestaurantsResp);
        setRestaurants(swigyRestaurantsResp);
    }

    const searchRestaurants = (value) => {
        const filteredRestaurant = allRestaurants.filter(restaurant=> {
            return (JSON.stringify(restaurant).search(value)!==-1)
        })
        setRestaurants(filteredRestaurant)
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
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search-text" value={searchedValue} onChange={(e) => {
                        console.log(searchedValue)
                        setSearchedValue(e.target.value)
                    }}></input>
                    <button className="search-button" onClick={() => {
                        console.log(searchedValue);
                        searchRestaurants(searchedValue);
                    }}>Search Restaurant</button>
                </div>
                <div className="filterRestaurant">
                    <button className="filterBtn" onClick={
                        () => {
                            const filteredRestaurant = restaurants.filter(restaurant => {
                                return restaurant.info.avgRating >= 4.3
                            })
                            // console.log(filteredRestaurant.map(restaurant => restaurant.info.avgRating))
                            setRestaurants(filteredRestaurant)
                        }
                    }>
                        Filter Top Restaurant
                    </button>

                    <button className="resetBtn" onClick={
                        () => {
                            fetechData();
                            // console.log(restaurants.map(restaurant => restaurant.info.avgRating))
                        }
                    }
                    >Reset Restaurant</button>
                </div>
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