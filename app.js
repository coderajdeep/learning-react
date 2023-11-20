import ReactDOM from "react-dom/client"
import { resObj } from "./restaurant"

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://etimg.etb2bimg.com/photo/63298781.cms" alt="logo" className="logo" />
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {
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

const Body = () => {
    const restaurants = resObj.restaurants
    let index = 0
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
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)