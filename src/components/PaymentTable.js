import React from 'react';



export class PaymentTable extends React.Component {
	render() {

		let paymentMonthsArr = [];
		let outstandingBalance = this.props.amountToBorrow;
		let interestPaid = 0;
		let capitalRepaid = 0;
		let year = 0;
		let yearInterestPaid = 0;

		for(let i = 1; i <= this.props.mortgageTerm * 12; i++) {

			interestPaid = outstandingBalance * this.props.interestRate / 100 / 12;
			outstandingBalance = outstandingBalance - (this.props.monthlyPayment - interestPaid);
			capitalRepaid = capitalRepaid + (this.props.monthlyPayment - interestPaid);

			yearInterestPaid = yearInterestPaid + interestPaid;

			if (i % 12 === 0) {
				year++;
				paymentMonthsArr.push(
					<tr key={year}>
						<td>{year}</td>
						<td>£{this.props.numberWithCommas(outstandingBalance.toFixed(2))}</td>
						<td>£{this.props.numberWithCommas(yearInterestPaid.toFixed(2))}</td>
						<td>£{this.props.numberWithCommas(capitalRepaid.toFixed(2))}</td>
					</tr>
				);
				yearInterestPaid = 0;
			}	
		}

		return (
			<table className="paymentsCalculatorTable">
				<thead>
					<tr>
						<th>Year</th>
						<th>Mortgage Balance</th>
						<th>Interest Paid</th>
						<th>Capital Repaid</th>
					</tr>
				</thead>
				<tbody>
					<tr key="0">
						<td>0</td>
						<td>£{this.props.numberWithCommas(this.props.amountToBorrow)}</td>
						<td>£{this.props.numberWithCommas('0.00')}</td>
						<td>£{this.props.numberWithCommas('0.00')}</td>
					</tr>
					{paymentMonthsArr}	
				</tbody>
				
			</table>
		);
	}
}