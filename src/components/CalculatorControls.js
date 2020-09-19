import React from 'react';

export class CalculatorControls extends React.Component {
	render() {
		return (
			<div className="grid__container">			

				<div className="grid__item">
					<span className="grid__item--header">£{this.props.numberWithCommas(this.props.purchasingHousePrice)}</span>
					<input 
						type="range"
						className="grid__item--range-slider"
						id="purchasingHousePrice"  
						min="50000" 
						max="500000" 
						step="1000" 
						defaultValue="285000" 
						onChange={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} />
					<label className="grid__item--label" htmlFor="purchasingHousePrice">Purchasing House Price</label>
				</div>

				

				<div className="grid__item">
					<span className="grid__item--header">{this.props.numberWithCommas(this.props.mortgageTerm)} Years</span>
					<input 
						type="range"
						className="grid__item--range-slider"
						id="mortgageTerm"  
						min="15" 
						max="35" 
						step="1" 
						defaultValue="25" 
						onChange={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} />
					<label className="grid__item--label" htmlFor="mortgageTerm">Mortgage Term</label>
				</div>

				<div className="grid__item">
					<span className="grid__item--header">{this.props.numberWithCommas(this.props.interestRate)}%</span>
					<input 
						type="range"
						className="grid__item--range-slider"
						id="interestRate"  
						min="0.1" 
						max="8" 
						step="0.1" 
						defaultValue="1.8" 
						onChange={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} />
					<label className="grid__item--label" htmlFor="interestRate">Interest Rate</label>
				</div>

				<div className="grid__item">
					<span className="grid__item--header">£{this.props.numberWithCommas(this.props.depositAmount)}</span>
					<input 
						type="range"
						className="grid__item--range-slider"
						id="depositAmount" 
						min="1000" 
						max="100000" 
						step="1000" 
						defaultValue="72000" 
						onChange={() => this.props.updateValues(
							document.getElementById('depositAmount').value, 
							document.getElementById('purchasingHousePrice').value, 
							document.getElementById('mortgageTerm').value, 
							document.getElementById('interestRate').value)} />
					<label className="grid__item--label" htmlFor="points">Deposit</label>
				</div>		

			</div>
		);
	}
}