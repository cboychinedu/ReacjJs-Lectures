// Importing the necessary modules 
import React, { Component } from 'react'; 

// Create a class called "Counter" 
class Counter extends Component {
    // Setting the state 
    state = { 
        count: 0, 
        listsItems: ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'], 
     }; 

    // Creating a method "formatCount()" 
    formatCount = () => {
        const { count } = this.state; 
        // Creating an if/else statement to check if the value for count is zero 
        if (count === 0) { return 'Zero' }
        else { return count }

    }

    // Creating a method "getBadgeClasses" 
    getClasses = () => {
        const { count } = this.state; 
        
        // Making some changes to the button if the count value changes 
        let classes; 
        if (count !== 0) { classes = "counter_btn_blue"; return classes; }
        else if (count === 0) { classes = "counter_btn"; return classes; }
    }

    // Rendering the "Counter" component 
    /* */  
    render() { 
        // Getting the listItems using destructuring 
        let { listsItems } = this.state; 

        // Render the jsx template 
        return (  
            <React.Fragment>
                <h3> Hello World From Counter. </h3>
                <span> { this.formatCount() } </span>

                {/* Adding a button to the root division */}
                <input type="button" value="Counter" className={this.getClasses()} />

                {/* Rendering a list of items in react */} 
                <ul>
                    { listsItems.map(tag => <li key={20} className="first-list"> { tag } </li>) }
                </ul>

                <ul>
                    <li style={{backgroundColor: "red", fontSize: "30px"}}> Other Lists </li>
                    <li> Other second Lists </li>
                </ul>

            </React.Fragment>
            
        ); 
    }
}

// Exporting the "Counter" class component 
export default Counter;
