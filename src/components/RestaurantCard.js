import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    console.log('RestaurantCard')
    const { cloudinaryImageId, name, avgRating, cuisines } = props.resObj
    const imageUrl = `${CDN_URL}${cloudinaryImageId}`
    return (
        <div className="restaurant-card">
            <div className="image-container">
                <img alt="res-image" className="res-image" src={imageUrl} />
            </div>
            <p className="name">{name}</p>
            <p className="rating">{avgRating} Stars</p>
            <p className="cuisine">{cuisines.join(', ')}</p>
            

        </div>
    )
};

export default RestaurantCard;