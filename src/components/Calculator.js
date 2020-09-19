import React from 'react';
import {CalculatorControls} from './CalculatorControls';

export class Calculator extends React.Component {
	constructor(props) {
		super(props);

		this.updateValues = this.updateValues.bind(this);

		this.state = {
			depositAmount: 72000,
			purchasingHousePrice: 285000,
			amountToBorrow: 213000,
			mortgageTerm: 25,
			interestRate: 1.8,
			monthlyPayment: 882,
			totalRepaid: 264663,
			totalInterestPaid: 51663,
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
				<div className="grid__container">
					<div className="grid__item">
						<span className="grid__item--header">
							£{this.numberWithCommas(parseInt(this.state.amountToBorrow))}
						</span>
						<div className="grid__item--label">Amount To Borrow</div>
					</div>
					<div className="grid__item">
						<span className="grid__item--header">
							£{this.numberWithCommas(parseInt(this.state.monthlyPayment))}
						</span>
						<div className="grid__item--label">Monthly Payment</div>
					</div>
					<div className="grid__item">
						<span className="grid__item--header">
							£{this.numberWithCommas(parseInt(this.state.totalRepaid))}
						</span>
						<div className="grid__item--label">Total Repaid</div>
					</div>
					<div className="grid__item">
						<span className="grid__item--header">
							£{this.numberWithCommas(parseInt(this.state.totalInterestPaid))}
						</span>
						<div className="grid__item--label">Total Interest Paid</div>
					</div>
				</div>
				<CalculatorControls 
					updateValues={this.updateValues} 
					numberWithCommas={this.numberWithCommas}
					depositAmount={this.state.depositAmount}
					purchasingHousePrice={this.state.purchasingHousePrice}
					mortgageTerm={this.state.mortgageTerm}
					interestRate={this.state.interestRate}
				/>	
			</div>
		);
	}
}