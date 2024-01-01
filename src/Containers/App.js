import { render } from '@testing-library/react';
import React, { Component } from 'react';
import CardList from '../Component/CardList';
import { robots } from '../robots';
import SearchBox from '../Component/SearchBox';
import './App.css';
import Scroll from "../Component/Scroll";



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        };
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users => {
                this.setState({ robots: users });
})
    }
    onSearchChange = (event) => { // the additional values make sure where they were created]
        this.setState({ searchfield: event.target.value });
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        console.log(filteredRobots);
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })

        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        }
        else {
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChange}></SearchBox>
                    <Scroll> 
                    <CardList robots={filteredRobots} />
                    </Scroll>
                        
                </div>
            );
        }
    }
}

export default App;