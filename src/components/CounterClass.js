import { Component } from 'react'

class CounterClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.name = props.name
        console.log(`CounterClass constructor : ${this.name}`)
    }

    componentDidMount() {
        console.log(`CounterClass did mount : ${this.name}`)
    }

    render() {
        console.log(`CounterClass render : ${this.name}`)
        const { counter } = this.state
        return (
            <button onClick={() => {
                this.setState({
                    counter : this.state.counter + 1
                })
            }}>
                Count : {counter}
            </button>
        )
    }
}

export default CounterClass