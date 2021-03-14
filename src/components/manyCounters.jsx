import React, { Component } from 'react'; 
import { Counter } from './counter.jsx'; 
import { Navbar } from './navbar.jsx'; 



// Create a class called "manyCounters" 
class ManyCounters extends Component {
    state = { 
        counters: [
            { id: 1, value: 0 }, 
            { id: 2, value: 4 }, 
            { id: 3, value: 0 }, 
            { id: 4, value: 0 }
        ]
     }

    // 
    handleDelete = (counterId) => {
        console.log('Event handler called.', counterId); 
        
        // 
        const counters = this.state.counters.filter(c => c.id !== counterId ); 
        this.setState({ counters }); 

    }; 

    // Rendering the jsx file 
    render() { 
        return (  
            <React.Fragment>
                <Navbar /> 
                { this.state.counters.map(counter => <Counter keyValue={counter.id} value={counter.value} onDelete={this.handleDelete} selected={true}/>)}
            </React.Fragment>
        );
    }
}
 
// Exporting the created "manyCounters" class 
export {  ManyCounters };