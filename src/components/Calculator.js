import React from 'react';
import {HeaderFigures} from './HeaderFigures';
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

		//Set initial values for the whole mortgage term
		const amountToBorrow = purchasingHousePrice - depositAmount;
		const monthlyPayment = ((interestRate / 100 / 12)*amountToBorrow) / (1 - (Math.pow(( 1+ (interestRate / 100 / 12)),((0 - mortgageTerm) * 12))));
		const totalRepaid = monthlyPayment * 12 * mortgageTerm;
		const totalInterestPaid = totalRepaid - amountToBorrow;

		//Set initial values for loop to calculate yearly figures
		let yearDataObject = [];
		let outstandingBalance = amountToBorrow;

		//Loop each year of the mortgage term
		for(let i = 1; i <= mortgageTerm; i++) {

			let monthInterestPaid = 0;
			let interestPaidMonthlyToYearlyIncrementer = 0;
			let monthCapitalPaid = 0;
			let monthlyCapitalRepaidToYearlyIncrementer = 0;
			

			//loop each month of the year as interest is calculated monthly
			for (let j = 0; j < 12; j++) {
				monthInterestPaid = outstandingBalance * interestRate / 100 / 12;
				interestPaidMonthlyToYearlyIncrementer = interestPaidMonthlyToYearlyIncrementer + monthInterestPaid;
				monthCapitalPaid = monthlyPayment - monthInterestPaid;
				monthlyCapitalRepaidToYearlyIncrementer = monthlyCapitalRepaidToYearlyIncrementer + monthCapitalPaid;
				outstandingBalance = outstandingBalance - monthCapitalPaid;
			}

			//There's always around £10 left at the end which forces the fraph to go into minus. This just rounds the last figure off at £0.00.
			if (i === mortgageTerm) {
				outstandingBalance = 0;
			}

			yearDataObject.push({
				year: i,
				outstandingBalance: outstandingBalance,
				interestPaid: interestPaidMonthlyToYearlyIncrementer,
				capitalRepaid: monthlyCapitalRepaidToYearlyIncrementer
			});	
		}


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
				<HeaderFigures 
					amountToBorrow={this.state.amountToBorrow}
					monthlyPayment={this.state.monthlyPayment}
					totalRepaid={this.state.totalRepaid}
					totalInterestPaid={this.state.totalInterestPaid}
					numberWithCommas={this.numberWithCommas}
				/>
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
					amountToBorrow={this.state.amountToBorrow}
					numberWithCommas={this.numberWithCommas}
					yearlyPayments={this.state.yearlyPayments}
				/>
			</div>
		);
	}
}