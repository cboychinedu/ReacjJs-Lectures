// Importing the necessary modules 
import React from 'react'; 
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ReactDom from 'react-dom'; 
import './index.css'; 
import Counter from './components/counter.jsx'; 
import SetAttribute from './components/setAttribute.jsx'; 


// Render the imported "Counter" component on div id="root" 
ReactDom.render(<Counter />,  document.getElementById('root')); 

// Render the imported "setAttribute" component on div id="second_div"
ReactDom.render(<SetAttribute />, document.getElementById('second_div')); 
