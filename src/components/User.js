import { useState } from "react"

const User = (props) => {
    const {name, company, location} = props
    const [countryCode, setCountryCode] = useState('+91')
    const [phoneNo, setPhoneNo] = useState('8945938718')
    return (
        <div className="user-container">
            <p>Name : {name} (functional component)</p>
            <p>Company : {company} (functional component)</p>
            <p>Location : {location} (functional component)</p>
            <p>Phone No : {countryCode + "-" + phoneNo} (functional component)</p>
            <button onClick={() => {
                    const code = Number.parseInt(Math.random()*89 + 10)
                    setCountryCode(`+${code}`)
                }}>
                    Update CountryCode
                </button>

                <button onClick={() => {
                    const phoneNo = Number.parseInt(Math.random()*9999 + 10000)
                    setPhoneNo(`89459${phoneNo}`)
                }}>
                    Update PhoneNo
                </button>

                <button onClick={()=>{
                    const code = Number.parseInt(Math.random()*89 + 10)
                    const phoneNo = Number.parseInt(Math.random()*9999 + 10000)
                    setCountryCode(`+${code}`)
                    setPhoneNo(`89459${phoneNo}`)
                }}>Update Both</button>
        </div>
    )
}

export default User