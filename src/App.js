import React, {useEffect} from 'react';
import {Calculator} from './components/Calculator';
import './App.css';
import ReactGA from 'react-ga';

export const initGA = () => {       
    ReactGA.initialize('UA-179516420-1'); 
} 


function App() {
	useEffect(() => { initGA(); }, []);
	return (
    	<div className="App">
      		<header>
        		<h1>Mortgage Payment Calculator</h1>
      		</header>
      		<Calculator />
    	</div>
  	);
}

export default App;
