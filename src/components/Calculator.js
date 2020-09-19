import React from 'react';
import {CalculatorControls} from './CalculatorControls';

export class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);

		this.state = {
			depositAmount: 0,
			purchasingHousePrice: 0,
			amountToBorrow: 0,
			mortgageTerm: 0,
			interestRate: 0,
			monthlyPayment: 0,
			totalRepaid: 0,
			totalInterestPaid: 0,
		}
	}

	handleClick(depositAmount, purchasingHousePrice, mortgageTerm, interestRate) {
		let amountToBorrow = purchasingHousePrice - depositAmount;
		let monthlyPayment = ((interestRate/100/12)*amountToBorrow)/(1-(Math.pow((1+(interestRate/100/12)),((0-mortgageTerm)*12))));
		monthlyPayment = monthlyPayment.toFixed(2);
		let totalRepaid = monthlyPayment * 12 * mortgageTerm;
		let totalInterestPaid = totalRepaid - amountToBorrow;

		this.setState({
			depositAmount: depositAmount,
			purchasingHousePrice: purchasingHousePrice,
			amountToBorrow: amountToBorrow,
			mortgageTerm: mortgageTerm,
			interestRate: interestRate,
			monthlyPayment: monthlyPayment,
			totalRepaid: totalRepaid,
			totalInterestPaid: totalInterestPaid
		});
	}

	render() {
		return (
			<div>
				<h3>Amount to borrow: £{this.state.amountToBorrow}</h3>
				<h1>Monthly Payment: £{this.state.monthlyPayment}</h1>
				<h3>Total repaid: £{this.state.totalRepaid}</h3>
				<h3>Total interest paid: £{this.state.totalInterestPaid}</h3>
				<CalculatorControls 
					handleClick={this.handleClick} 
				/>
			</div>
		);
	}
}