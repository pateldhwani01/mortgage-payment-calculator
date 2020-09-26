import React from 'react';

export class HeaderFigures extends React.Component {
	render() {
		return(
			<div className="grid__container">
				<div className="grid__item">
					<span className="grid__item--header">
						£{this.props.numberWithCommas(parseInt(this.props.amountToBorrow))}
					</span>
					<div className="grid__item--label">Amount To Borrow</div>
				</div>
				<div className="grid__item">
					<span className="grid__item--header">
						£{this.props.numberWithCommas(parseInt(this.props.monthlyPayment))}
					</span>
					<div className="grid__item--label">Monthly Payment</div>
				</div>
				<div className="grid__item">
					<span className="grid__item--header">
						£{this.props.numberWithCommas(parseInt(this.props.totalRepaid))}
					</span>
					<div className="grid__item--label">Total Repaid</div>
				</div>
				<div className="grid__item">
					<span className="grid__item--header">
						£{this.props.numberWithCommas(parseInt(this.props.totalInterestPaid))}
					</span>
					<div className="grid__item--label">Total Interest Paid</div>
				</div>
			</div>
		)
	}
}