// Importing the necessary modules 
import React from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom'; 
import Counter from './components/counter.jsx'; 


// Render the imported "Counter" component
ReactDom.render(<Counter />,  document.getElementById('root')); 
