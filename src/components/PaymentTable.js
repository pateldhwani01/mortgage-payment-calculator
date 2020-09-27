import React from 'react';
const localeOptions = {
	style:'currency',
	currency:'GBP',
	minimumFractionDigits: 2,
    maximumFractionDigits: 2
}

export class PaymentTable extends React.Component {
	render() {

		let paymentMonthsArr = [];

		for(let i = 0; i < this.props.yearlyPayments.length; i++) {
			paymentMonthsArr.push(
				<tr key={this.props.yearlyPayments[i].year}>
					<td>{this.props.yearlyPayments[i].year}</td>
					<td>{this.props.yearlyPayments[i].interestPaid.toLocaleString('en-GB', localeOptions)}</td>
					<td className="to-date-yearly-payment">{this.props.yearlyPayments[i].interestPaidToDate.toLocaleString('en-GB', localeOptions)}</td>
					<td>{this.props.yearlyPayments[i].capitalRepaid.toLocaleString('en-GB', localeOptions)}</td>
					<td className="to-date-yearly-payment">{this.props.yearlyPayments[i].capitalRepaidToDate.toLocaleString('en-GB', localeOptions)}</td>
					<td>{this.props.yearlyPayments[i].outstandingBalance.toLocaleString('en-GB', localeOptions)}</td>
				</tr>
			);
		}

		return(
			<table className="paymentsCalculatorTable">
				<thead>
					<tr>
						<th>Year</th>
						<th>Year Interest Paid</th>
						<th className="to-date-yearly-payment">Total Interest Paid</th>
						<th>Year Capital Repaid</th>
						<th className="to-date-yearly-payment">Total Capital Repaid</th>
						<th>Mortgage Balance</th>
					</tr>
				</thead>
				<tbody>
					{paymentMonthsArr}	
				</tbody>
			</table>
		);
	}
}