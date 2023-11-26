import User from "./User"
import UserClass from "./UserClass"

const About = () => {
    return (
        <div className="about-container">
            <h1>About Page</h1>
            <User name="Rajdeep Mallick" company="Samsung" location="Delhi"/>
            <UserClass name="Rajdeep Mallick" company="Samsung" location="Delhi"/>
        </div>
    )
}

export default About