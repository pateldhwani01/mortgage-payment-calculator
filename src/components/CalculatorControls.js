import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'GBP',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const CalculatorControls = props => {
	return(
		<div className="grid__container">			
			<div className="grid__item">
				<span className="grid__item--header">{props.purchasingHousePrice.toLocaleString('en-GB', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="purchasingHousePrice"  
					min="50000" 
					max="750000" 
					step="1000" 
					defaultValue="285000" 
					onChange={() => props.handleMortgageDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('mortgageTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="purchasingHousePrice">Purchasing House Price</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.depositAmount.toLocaleString('en-GB', localeOptions)}</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="depositAmount" 
					min="1000" 
					max="150000" 
					step="1000" 
					defaultValue="72000" 
					onChange={() => props.handleMortgageDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('mortgageTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="points">Deposit</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.mortgageTerm} Years</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="mortgageTerm"  
					min="5" 
					max="35" 
					step="1" 
					defaultValue="25" 
					onChange={() => props.handleMortgageDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('mortgageTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="mortgageTerm">Mortgage Term</label>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">{props.interestRate}%</span>
				<input 
					type="range"
					className="grid__item--range-slider"
					id="interestRate"  
					min="0.1" 
					max="8" 
					step="0.1" 
					defaultValue="1.8" 
					onChange={() => props.handleMortgageDataChange(
						parseFloat(document.getElementById('depositAmount').value), 
						parseFloat(document.getElementById('purchasingHousePrice').value), 
						parseFloat(document.getElementById('mortgageTerm').value), 
						parseFloat(document.getElementById('interestRate').value))} />
				<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
			</div>
		</div>
	);
}