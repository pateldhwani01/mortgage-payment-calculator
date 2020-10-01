import React from 'react';

const localeOptions = {
	style:'currency',
	currency:'GBP',
	minimumFractionDigits: 0,
    maximumFractionDigits: 0
}

export const HeaderFigures = props => {
	return(
		<div className="grid__container">
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.amountToBorrow).toLocaleString('en-GB', localeOptions)}
				</span>
				<div className="grid__item--label">Amount To Borrow</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.monthlyPayment).toLocaleString('en-GB', localeOptions)}
				</span>
				<div className="grid__item--label">Monthly Payment</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.totalRepaid).toLocaleString('en-GB', localeOptions)}
				</span>
				<div className="grid__item--label">Total Repaid</div>
			</div>
			<div className="grid__item">
				<span className="grid__item--header">
					{parseInt(props.totalInterestPaid).toLocaleString('en-GB', localeOptions)}
				</span>
				<div className="grid__item--label">Total Interest Paid</div>
			</div>
		</div>
	)
}