import ReactDOM from "react-dom/client"

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://etimg.etb2bimg.com/photo/63298781.cms" alt="logo" className="logo"/>
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

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)