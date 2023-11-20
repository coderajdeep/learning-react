export const RestaurantCard = (props) => {
    const { cloudinaryImageId, name, avgRating, cuisines } = props.resObj
    const imageUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`
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
}