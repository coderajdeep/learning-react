import { useRouteError } from "react-router-dom"

const Error = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            <h1>Oops</h1>
            <h3>{error.status}</h3>
            <h3>{error.data}</h3>
        </div>
    )
}

export default Error