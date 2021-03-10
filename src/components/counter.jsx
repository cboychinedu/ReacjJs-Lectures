// Importing the necessary modules 
import React, { Component } from 'react'; 


// Create a class called "Counter" 
class Counter extends Component {
    // Setting the state 
    state = { 
        count: 0, 
     }; 

    // Creating a method "formatCount()" 
    formatCount = () => {
        const { count } = this.state; 
        // Creating an if/else statement to check if the value for count is zero 
        if (count === 0) { return 'Zero' }
        else { return count }

    }

    // Rendering the "Counter" component 
    render() { 
        return (  
            <React.Fragment>
                <h3> Hello World From Counter. </h3>
                <span> { this.formatCount() } </span>
            </React.Fragment>
            
        ); 
    }
}

// Exporing the "Counter" class component 
export default Counter;
