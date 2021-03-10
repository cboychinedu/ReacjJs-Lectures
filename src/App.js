import React, { Component} from 'react'; 
import Ninjas from './Ninjas.js'; 

class App extends Component {
  // Create a state 
  state = [
      { name: "Ryu", age: 30, belt: "black", id: 1 }, 
      { name: "Yoshi", age: 20, belt: "green", id: 2 }, 
      { name: "Crystal", age: 25, belt: "pink", id: 3 }, 

    ]; 

  render() {
    return (
      <div className="App">
        <h1> My First React Application </h1> 
        <p> Welcome :) </p>

        {/* Passing a "prop" called "state" into the Ninjas Component */}
        <Ninjas ninjas={this.state} /> 

        {/* Adding the Ninja Module as a nested components and add arguments*/}
        {/* <Ninjas name="Ryu" age="25" belt="Black"/>  */}

        {/* Passing a list  */}

      </div>
    );

  }
}

export default App;
