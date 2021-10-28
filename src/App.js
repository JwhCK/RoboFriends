import React from "react";
import CardList from './CardList';
import SearchBox from './SearchBox';
import { Component } from "react";
import './App.css'
import Scroll from './Scroll'



class App extends Component{
    constructor(){
        super()
        this.state={
            robots: [],
            searchfield: ''

        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}))}
        

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    
        console.log(event.target.value);
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLocaleLowerCase().includes(this.state.searchfield.toLocaleLowerCase())
        })
        return(
            <div className='tc'>
            <h1 className='f1zz'>RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <Scroll>
            <CardList robots = {filteredRobots}/>
            </Scroll>
            </div>
           
        );
    }
   
    
}

export default App