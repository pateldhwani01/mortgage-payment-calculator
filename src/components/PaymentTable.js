import React from 'react';

export class PaymentTable extends React.Component {
	render() {

		let paymentMonthsArr = [];

		for(let i = 0; i < this.props.yearlyPayments.length; i++) {
			paymentMonthsArr.push(
				<tr key={this.props.yearlyPayments[i].year}>
					<td>{this.props.yearlyPayments[i].year}</td>
					<td>£{this.props.numberWithCommas(this.props.yearlyPayments[i].interestPaid.toFixed(2))}</td>
					<td>£{this.props.numberWithCommas(this.props.yearlyPayments[i].capitalRepaid.toFixed(2))}</td>
					<td>£{this.props.numberWithCommas(this.props.yearlyPayments[i].outstandingBalance.toFixed(2))}</td>
				</tr>
			);
		}

		return(
			<table className="paymentsCalculatorTable">
				<thead>
					<tr>
						<th>Year</th>
						<th>Interest Paid</th>
						<th>Capital Repaid</th>
						<th>Mortgage Balance</th>
					</tr>
				</thead>
				<tbody>
					<tr key="0">
						<td>Start Of Term</td>
						<td>£{this.props.numberWithCommas('0.00')}</td>
						<td>£{this.props.numberWithCommas('0.00')}</td>
						<td>£{this.props.numberWithCommas(this.props.amountToBorrow)}</td>
					</tr>
					{paymentMonthsArr}	
				</tbody>
			</table>
		);
	}
}