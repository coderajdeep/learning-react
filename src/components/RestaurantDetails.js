import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { RESTAURANT_DETAIL_URL } from "../utils/constants";

const RestaurantDetails = () => {
    const [restaurantDetails, setRestaurantDetails] = useState({});
    const { restaurantId } = useParams()
    const getRestaurantDetails = async () => {
        const url = `${RESTAURANT_DETAIL_URL}${restaurantId}`;
        const swiggyAPIresponse = await fetch(url);
        const restaurantDetails = await swiggyAPIresponse.json();
        const filteredData = restaurantDetails?.data?.cards?.[0]?.card?.card?.info
        console.log(filteredData)
        setRestaurantDetails(filteredData)
    }
    useEffect(() => {
        getRestaurantDetails()
    }, [])
    if(JSON.stringify(restaurantDetails)==='{}') {
        return <RestaurantDetailsShimmer/>
    }
    return (
        <div>
            <h1>Name : {restaurantDetails.name}</h1>
            <p>Rating : {restaurantDetails.avgRatingString}</p>
            <p>Total Rating : {restaurantDetails.totalRatingsString}</p>
            <p>Price : {restaurantDetails.costForTwoMessage}</p>
            <p>Cuisines : {restaurantDetails.cuisines?.join(', ')}</p>
            <p>Delivery : {restaurantDetails.feeDetails.message}</p>
            <p>Discount : {restaurantDetails.aggregatedDiscountInfo.header}</p>
        </div>
    )
}

const RestaurantDetailsShimmer = () => {
    return (
        <div>
            <h1>Name</h1>
            <p>Rating</p>
            <p>Total Rating</p>
            <p>Price</p>
            <p>Cusine</p>
            <p>Delivery</p>
            <p>Discount</p>
        </div>
    )
}

export default RestaurantDetails