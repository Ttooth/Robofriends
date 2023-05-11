import React, { Component } from 'react';
import CardsArray from '../Components/CardsArray';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import { robots } from '../Components/robots';
import './App.css';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchPath: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => this.setState({ robots: user  }));
}

    inSearchChange = (event) => this.setState({ searchPath: event.target.value });

    render(){
        const { robots, searchPath } = this.state;
        const filteredBox = robots.filter(robot => 
            robot.name.toLowerCase().includes(searchPath.toLowerCase()));
        if(robots.length === 0){
            return <h1>Loading...</h1>;
        } else {
            return (
                <div className='tc'> 
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.inSearchChange}/>
                    <Scroll>
                        <CardsArray robots={ filteredBox } />
                    </Scroll>
                </div>
            );
        }
    }    
}

export default App;