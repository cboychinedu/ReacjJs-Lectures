// Importing the necessary modules 
import React, { Component } from 'react'; 

// Creating a class called "setAttribute" 
class SetAttribute extends Component {
    // Setting the state 
    state = {
        count: 0, 
        imageUrl: 'https://picsum.photos/200'
    }; 

    // Creating a method for handling the click event on 
    // The submit button 
    handleSubmit = () => {
        console.log('Submit Button Clicked!'); 

        // Setting the state OR Changing the state 
        this.setState({ count: this.state.count + 1 })
        console.log(this.state.count); 

    }

    // Rendering the "setAttribute" component 
    render() {
        // Using destructing to get the actual imageUrl variable 
        const { imageUrl } = this.state; 

        // Return the Jsx object
        return (
            <React.Fragment>
                <p> First Image </p>
                <img className="img_display" id="" src={imageUrl} alt="random_image" /> 

                {/* Working with events handlers */}
                <input type="button" onClick={this.handleSubmit}
                    className="submit" value="Submit" 
                /> 

            </React.Fragment>
        ); 
    }
}

// Exporting the "setAttribute" class component 
export default SetAttribute; 