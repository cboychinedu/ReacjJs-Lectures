// Importing the necessary modules 
import React, { Component } from 'react'; 

// Setting the initial value for count 
let countValue = 0; 

// Creting a class called "PassingArguments" 
class PassingArguments extends Component {
    // Setting the state 
    state = {
        count: countValue, 
        name: "Sarah", 
        age: 31, 
        location: "Milan", 
        occupation: "Student",
    }; 

    // Adding the event listener function to increment the value 
    // Of count 
    incrementCount = () => {
        alert('Incrementing the count value'); 

        // Increment the value for count in the state array 
        this.setState({ count: this.state.count + 1 }); 

    }

    // Clear the output and assign the value for count to the initial value 
    clearOutput = () => {
        // Displaying the message 
        alert('Cleared Output'); 

        // Clearing the output value for count f
        this.setState({ count: countValue }); 
    }

    // Display the countValue 
    displayCount = () => {
        // Returning the count value 
        let { count } = this.state; 

        // Returning the value for count 
        return count; 

    }

    /* Rendering the "PassingArguments" components */ 
    render() {
        // Return the jsx template 
        return (
            <React.Fragment>
                <p className="para"> Count: { this.displayCount() }</p>
                
                {/* Adding event listener for the button below */}
                <input type="button" onClick={ this.incrementCount } value="Increment" className="submitBtn" id="submitBtn" /> 
                <input type="button" onClick={ this.clearOutput } value="Clear Output" className="submitBtn" id="submitBtn" /> 
                <br /> <br /> 

            </React.Fragment>

        ); 
    }
}

// Exporting the "PassingArguments" class component 
export default PassingArguments; 
