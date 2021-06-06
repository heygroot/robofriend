import React from 'react';
import './App.css';
import Card from './components/Card';
//import {robots} from './robots';
import SearchBox from './components/SearchBox';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            roboList: [],
            robots: [],
            searchField: ""
        }
    }

    onSearchChange = (e) => {
        let text = e.target.value;
        let robotArray = this.state.roboList.filter((robot) => {
            return robot.name.toLowerCase().includes(text.toLowerCase())
        })
        this.setState({
            robots: robotArray,
            searchField: text
        })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ roboList: users, robots: users}));
    }

    render() {
        return (
            <div className="App">
                <div>
                    <h1>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange={this.onSearchChange}/>
                    <hr/>
                </div>
                <div className='container-fluid mx-auto'>
                    <div className='d-flex flex-row flex-wrap bd-highlight mb-3'>
                        {
                            this.state.robots.map(user => {
                                return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }


}

export default App;
