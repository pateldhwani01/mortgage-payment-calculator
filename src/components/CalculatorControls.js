import React from 'react';

export class CalculatorControls extends React.Component {
	render() {
		return (
			<div className="calculator-controls__container">
				<div>
					<label htmlFor="depositAmount">Deposit: £</label>
					<input id="depositAmount" type="number" defaultValue="72000" />
				</div>

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
					<button 
						onClick={() => this.props.handleClick(
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