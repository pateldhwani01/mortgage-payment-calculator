import React from 'react';
import {CalculatorControls} from './CalculatorControls';

export class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.updateValues = this.updateValues.bind(this);

		this.state = {
			depositAmount: 72000,
			purchasingHousePrice: 0,
			amountToBorrow: 0,
			mortgageTerm: 0,
			interestRate: 0,
			monthlyPayment: 0,
			totalRepaid: 0,
			totalInterestPaid: 0,
		}
	}

	updateValues(depositAmount, purchasingHousePrice, mortgageTerm, interestRate) {
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

	numberWithCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	render() {
		return (
			<div>
				<h3>Amount to borrow: £{this.numberWithCommas(parseInt(this.state.amountToBorrow))}</h3>
				<h1>Monthly Payment: £{this.numberWithCommas(parseInt(this.state.monthlyPayment))}</h1>
				<h3>Total repaid: £{this.numberWithCommas(parseInt(this.state.totalRepaid))}</h3>
				<h3>Total interest paid: £{this.numberWithCommas(parseInt(this.state.totalInterestPaid))}</h3>
				<CalculatorControls 
					updateValues={this.updateValues} 
					depositAmount={this.state.depositAmount}
					numberWithCommas={this.numberWithCommas}
				/>
			</div>
		);
	}
}