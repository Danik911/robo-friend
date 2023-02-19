import CardList from "./CardList"
import SearchBox from "./SearchBox"
import React, { Component } from "react"
import "./App.css"
import Scroll from "./Scroll"


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchField: ""
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLocaleLowerCase().includes(this.state.searchField.toLocaleLowerCase())
        })
        return (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <CardList robots={filteredRobots} />
                </Scroll>
            </div>
        )
    }
}

export default App
