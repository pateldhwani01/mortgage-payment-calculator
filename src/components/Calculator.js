import React from 'react';
import {CalculatorControls} from './CalculatorControls';
import {PaymentGraph} from './PaymentGraph';
import {PaymentTable} from './PaymentTable';

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
			yearlyPayments: []
		}
	}

	updateValues(depositAmount, purchasingHousePrice, mortgageTerm, interestRate) {
		let amountToBorrow = purchasingHousePrice - depositAmount;
		let monthlyPayment = ((interestRate/100/12)*amountToBorrow)/(1-(Math.pow((1+(interestRate/100/12)),((0-mortgageTerm)*12))));
		let totalRepaid = monthlyPayment * 12 * mortgageTerm;
		let totalInterestPaid = totalRepaid - amountToBorrow;

		//before^

		let interestPaid = 0;
		let capitalRepaid = 0;
		let year = 0;
		let yearInterestPaid = 0;
		let yearDataObject = [];
		let outstandingBalance = this.state.amountToBorrow;
		console.log('amountToBorrow: ' + amountToBorrow);

		for(let i = 1; i <= mortgageTerm * 12; i++) {

			interestPaid = outstandingBalance * this.state.interestRate / 100 / 12;
			outstandingBalance = outstandingBalance - (monthlyPayment - interestPaid);
			capitalRepaid = capitalRepaid + (monthlyPayment - interestPaid);

			yearInterestPaid = yearInterestPaid + interestPaid;

			if (i % 12 === 0) {
				year++;
				yearDataObject.push({
					year: year,
					outstandingBalance: outstandingBalance,
					interestPaid: interestPaid,
					capitalRepaid: capitalRepaid
				});
				yearInterestPaid = 0;
				console.log('Year ' + year + ' Outstanding balance: ' + outstandingBalance)
			}	
		}



		//after

		this.setState({
			depositAmount: depositAmount,
			purchasingHousePrice: purchasingHousePrice,
			amountToBorrow: amountToBorrow,
			mortgageTerm: mortgageTerm,
			interestRate: interestRate,
			monthlyPayment: monthlyPayment,
			totalRepaid: totalRepaid,
			totalInterestPaid: totalInterestPaid,
			yearlyPayments: yearDataObject
		});
	}

	numberWithCommas(x) {
    	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	UNSAFE_componentWillMount() {
		this.updateValues(this.state.depositAmount, this.state.purchasingHousePrice, this.state.mortgageTerm, this.state.interestRate);
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
				<PaymentGraph
					mortgageTerm={this.state.mortgageTerm}
					yearlyPayments={this.state.yearlyPayments}
				/>
				<PaymentTable
					mortgageTerm={this.state.mortgageTerm}
					amountToBorrow={this.state.amountToBorrow}
					interestRate={this.state.interestRate}
					monthlyPayment={this.state.monthlyPayment}
					numberWithCommas={this.numberWithCommas}
				/>

			</div>
		);
	}
}