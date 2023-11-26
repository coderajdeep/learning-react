import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            countryCode : "+91",
            phoneNo : "8945938718"
        }
    }
    render() {
        const { name, company, location } = this.props
        const { countryCode, phoneNo } = this.state
        return (
            <div className="user-container">
                <p>Name : {name} (class component)</p>
                <p>Company : {company} (class component)</p>
                <p>Location : {location} (class component)</p>
                <p>Phone No : {countryCode + "-" + phoneNo} (class component)</p>

                <button onClick={() => {
                    const code = Number.parseInt(Math.random()*89 + 10)
                    this.setState({
                        countryCode : `+${code}`
                    })
                }}>
                    Update CountryCode
                </button>

                <button onClick={() => {
                    const phoneNo = Number.parseInt(Math.random()*9999 + 10000)
                    this.setState({
                        phoneNo : `89459${phoneNo}`
                    })
                }}>
                    Update PhoneNo
                </button>

                <button onClick={()=>{
                    const code = Number.parseInt(Math.random()*89 + 10)
                    const phoneNo = Number.parseInt(Math.random()*9999 + 10000)
                    this.setState({
                        countryCode : `+${code}`,
                        phoneNo : `89459${phoneNo}`
                    })
                }}>Update Both</button>
            </div>
        )
    }
}

export default UserClass