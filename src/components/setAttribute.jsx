// Importing the necessary modules 
import React, { Component } from 'react'; 

// Creating a class called "setAttribute" 
class SetAttribute extends Component {
    // Setting the state 
    state = {
        count: 0, 
        imageUrl: 'https://picsum.photos/200'
    }; 

    // Rendering the "setAttribute" component 
    render() {
        // Using destructing to get the actual imageUrl variable 
        const { imageUrl } = this.state; 

        // Return the Jsx object
        return (
            <React.Fragment>
                <p> First Image </p>
                <img class="img_display" id="" src={imageUrl} alt="random_image" /> 
            </React.Fragment>
        ); 
    }
}

// Exporting the "setAttribute" class component 
export default SetAttribute; 