// Importing the necessary modules 
import React, { Component } from 'react'; 

// Create a class called "NavBar" 
class Navbar extends Component {
    // Creating a state 
    state = {}; 

    // Render the jsx template 
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand" href="#" > Navbar </a>
                </nav>
            </React.Fragment>

        ); 

    }

}; 

// Export the navigation bar 
export {Navbar}; 
