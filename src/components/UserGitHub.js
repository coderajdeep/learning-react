import { Component } from "react"
import { GITHUB_USER_API } from "../utils/constants"

class UserGithub extends Component {
    constructor() {
        console.log('UserGithub constructor')
        super()
        this.state = {
            name: 'name',
            username: 'username',
            location: 'location'
        }
    }

    async componentDidMount() {
        console.log('UserGithub mount completed')
        const userInfo = await fetch(GITHUB_USER_API)
        const userData = await userInfo.json()
        console.log(userData)
        const {name, login, location} = userData
        this.setState({
            name,
            location,
            username: login
        })
    }

    componentDidUpdate() {
        console.log('UserGithub update')
    }

    render() {
        console.log('UserGithub render')
        const {name, username, location} = this.state
        return (
            <div className="user-container">
                <p>Name : {name}</p>
                <p>Username : {username}</p>
                <p>Location : {location}</p>
            </div>
        )
    }
}

export default UserGithub