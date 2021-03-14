// Importing the necessary modules 
import './index.css'; 
import React from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom'; 
import { Counter } from './components/counter.jsx'; 
import { Navbar } from './components/navbar.jsx'; 
import SetAttribute from './components/setAttribute.jsx'; 
import { ManyCounters } from './components/manyCounters.jsx'; 
import PassingArguments from './components/passingEventArgs';


// Render the imported "Counter" component on div id="root" 
// ReactDom.render(<Counter />,  document.getElementById('root')); 
ReactDom.render(<ManyCounters />, document.getElementById('root')); 

// Render the imported "setAttribute" component on div id="second_div"
ReactDom.render(<SetAttribute />, document.getElementById('second_div'));

// Render the imported "passingEventArgs" component on the section tag with 
// id value of "first_section" 
ReactDom.render(<PassingArguments />, document.getElementById('first_section')); 

