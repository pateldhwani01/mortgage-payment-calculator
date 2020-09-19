import React from 'react';

export class CalculatorControls extends React.Component {
	render() {
		return (
			<div className="calculator-controls__container">
				

				<div>
					<label htmlFor="purchasingHousePrice">Purchasing House Price: £</label>
					<input id="purchasingHousePrice" type="number" defaultValue="285000" />
				</div>

				<div>
					<label htmlFor="mortgageTerm">Mortgage Term: </label>
					<input id="mortgageTerm" type="number" defaultValue="25" />
					<span> Years</span>
				</div>

				<div>
					<label htmlFor="interestRate">Interest Rate: </label>
					<input id="interestRate" type="number" defaultValue="1.8" />
					<span>%</span>
				</div>

				<div>
					<label htmlFor="points">Deposit:</label>
					<input 
						type="range" 
						id="depositAmount" 
						name="points" 
						min="1000" 
						max="100000" 
						step="1000" 
						defaultValue="72000" 
						onChange={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} />
					<span>£{this.props.numberWithCommas(this.props.depositAmount)}</span>

				</div>		

				<div>
					<button 
						onClick={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} >
						Calculate
					</button>
				</div>
			</div>
		);
	}
}