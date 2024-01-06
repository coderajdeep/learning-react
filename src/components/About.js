import User from "./User"
import UserClass from "./UserClass"
import { Component } from "react"
import UserGithub from "./UserGitHub"

const About = () => {
    console.log('About')
    return (
        <div className="about-container">
            <h1>About Page</h1>
            {/* <User name="Rajdeep Mallick" company="Samsung" location="Delhi"/> */}
            <UserClass name="first" company="Samsung" location="Delhi"/>
            <UserClass name="second" company="Samsung II" location="Delhi II"/>
        </div>
    )
}

class AboutClass extends Component {
    constructor() {
        console.log(`AboutClass constructor`)
        super()
    }
    componentDidMount() {
        console.log(`AboutClass is mounted`)
    }
    componentDidUpdate() {
        console.log('AboutClass update')
    }
    render() {
        console.log(`AboutClass render`)
        return (
            <div className="about-container">
            <h1>About Page</h1>
            {/* <User name="Rajdeep Mallick" company="Samsung" location="Delhi"/> */}
            {/* <UserClass name="first" company="Samsung" location="Delhi"/> */}
            <UserGithub/>
            {/* <UserClass name="second" company="Samsung II" location="Delhi II"/> */}
            {/* <UserClass name="third" company="Samsung III" location="Delhi III"/> */}
        </div>
        )
    }
}

export default AboutClass